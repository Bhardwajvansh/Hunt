import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Linkedin, Phone, X, Search, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Reachout() {
    const navigate = useNavigate();
    const location = useLocation();
    const { shortlistedLeads, eventDetails, screeningQuestions } = location.state || {
        shortlistedLeads: [],
        eventDetails: { eventDescription: '' },
        screeningQuestions: []
    };

    const [leads, setLeads] = useState(shortlistedLeads);
    const [selectedLead, setSelectedLead] = useState(null);
    const [emailContent, setEmailContent] = useState('');
    const [isGeneratingEmail, setIsGeneratingEmail] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [isFindingEmail, setIsFindingEmail] = useState({});
    const [showCallModal, setShowCallModal] = useState(false);
    const [callNumber, setCallNumber] = useState('');
    const [callStatus, setCallStatus] = useState('initializing');
    const [callTimer, setCallTimer] = useState(0);

    useEffect(() => {
        // Initialize email finding state for each lead
        const initialFindingState = {};
        shortlistedLeads.forEach(lead => {
            initialFindingState[lead.id || lead.full_name] = false;
        });
        setIsFindingEmail(initialFindingState);

        // Set leads with the shortlisted ones
        setLeads(shortlistedLeads);
    }, [shortlistedLeads]);

    // Timer for call connection
    useEffect(() => {
        let interval;
        if (showCallModal && callStatus !== 'connected' && callStatus !== 'failed') {
            interval = setInterval(() => {
                setCallTimer(prev => {
                    const newTime = prev + 1;
                    if (newTime === 2) setCallStatus('connecting');
                    if (newTime === 5) setCallStatus('ringing');
                    if (newTime === 8) setCallStatus('connected');
                    return newTime;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [showCallModal, callStatus]);

    const generateRandomUSPhoneNumber = () => {
        const areaCode = Math.floor(Math.random() * 800) + 200;
        const firstPart = Math.floor(Math.random() * 900) + 100;
        const secondPart = Math.floor(Math.random() * 9000) + 1000;
        return `+1 (${areaCode}) ${firstPart}-${secondPart}`;
    };

    const handleCallClick = (lead) => {
        setSelectedLead(lead);
        setCallNumber(generateRandomUSPhoneNumber());
        setCallStatus('initializing');
        setCallTimer(0);
        setShowCallModal(true);
    };

    const closeCallModal = () => {
        setShowCallModal(false);
        setCallTimer(0);
        setCallStatus('initializing');
    };

    const findEmail = async (lead) => {
        const leadId = lead.id || lead.full_name;

        // Set loading state for this specific lead
        setIsFindingEmail(prev => ({ ...prev, [leadId]: true }));

        try {
            // Parse name and get domain from company
            const nameParts = lead.full_name.split(' ');
            const firstName = nameParts[0];
            const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

            // Extract domain from company website or use company name
            let domain = lead.company_website;
            if (!domain) {
                // Create a simple domain from company name if not available
                domain = lead.company_name.toLowerCase().replace(/[^a-z0-9]/g, '') + '.com';
            }

            const options = {
                method: 'POST',
                headers: {
                    Authorization: `Token ${import.meta.env.VITE_GENERECT_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([{
                    first_name: firstName,
                    last_name: lastName,
                }])

            };
            console.log('Finding email for:', firstName, lastName, 'at', domain);

            const response = await fetch('/api/linkedin/email_finder/', options);
            const data = await response.json();
            console.log('Email data:', data);

            if (data && data.length > 0 && data[0].email) {
                const updatedLeads = leads.map(l => {
                    if ((l.id && l.id === lead.id) || (!l.id && l.full_name === lead.full_name)) {
                        return { ...l, email: data[0].email };
                    }
                    return l;
                });

                setLeads(updatedLeads);
            } else {
                console.log('No email found for', lead.full_name);
            }
        } catch (error) {
            console.error('Error finding email:', error);
        } finally {
            // Reset loading state
            setIsFindingEmail(prev => ({ ...prev, [leadId]: false }));
        }
    };

    const generateEmailContent = async (lead) => {
        setIsGeneratingEmail(true);
        setSelectedLead(lead);
        setShowEmailModal(true);

        try {
            const query = `
                Generate a professional email to reach out to ${lead.full_name} who works as a ${lead.job_title} at ${lead.company_name}.
                
                Event Description: ${eventDetails.eventDescription}
                
                Screening Questions to include in the email:
                ${screeningQuestions.map(q => `- ${q.text}`).join('\n')}
                
                Use a professional but friendly tone, introduce the event briefly, and ask if they would be interested in speaking or participating.
                Keep the email concise but personalized to their experience and current role.
            `;

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: query }]
                        }]
                    })
                }
            );

            const data = await response.json();
            const generatedContent = data.candidates[0].content.parts[0].text;
            setEmailContent(generatedContent);
        } catch (error) {
            console.error('Error generating email content:', error);
            setEmailContent('Failed to generate email content. Please try again.');
        } finally {
            setIsGeneratingEmail(false);
        }
    };

    const closeEmailModal = () => {
        setShowEmailModal(false);
        setSelectedLead(null);
        setEmailContent('');
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(emailContent);
        alert('Email content copied to clipboard!');
    };

    // Status indicator for call modal
    const renderCallStatus = () => {
        switch (callStatus) {
            case 'initializing':
                return (
                    <div className="flex items-center justify-center space-x-2 text-blue-400">
                        <div className="animate-spin h-5 w-5 border-2 border-blue-400 rounded-full border-t-transparent"></div>
                        <span>Initializing call...</span>
                    </div>
                );
            case 'connecting':
                return (
                    <div className="flex items-center justify-center space-x-2 text-blue-400">
                        <div className="animate-spin h-5 w-5 border-2 border-blue-400 rounded-full border-t-transparent"></div>
                        <span>Connecting...</span>
                    </div>
                );
            case 'ringing':
                return (
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <span className="text-green-400">Ringing...</span>
                    </div>
                );
            case 'connected':
                return (
                    <div className="flex items-center justify-center space-x-2 text-green-400">
                        <span className="inline-block h-3 w-3 bg-green-500 rounded-full pulse"></span>
                        <span>Connected</span>
                    </div>
                );
            case 'failed':
                return (
                    <div className="flex items-center justify-center space-x-2 text-red-500">
                        <X size={16} />
                        <span>Connection failed</span>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-2">Reach Out to Your Shortlisted Candidates</h1>
                <p className="text-gray-400 mb-8">Choose your preferred method to contact each candidate.</p>

                <div className="w-full border border-gray-800 rounded-lg overflow-hidden mb-8">
                    <table className="w-full">
                        <thead className="bg-gray-900">
                            <tr>
                                <th className="py-4 px-6 text-left text-sm font-medium">Person</th>
                                <th className="py-4 px-6 text-left text-sm font-medium">Company</th>
                                <th className="py-4 px-6 text-left text-sm font-medium">Job Title</th>
                                <th className="py-4 px-6 text-center text-sm font-medium">Contact Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.length > 0 ? (
                                leads.map((lead, index) => (
                                    <tr key={index} className="border-t border-gray-800">
                                        <td className="py-4 px-6">
                                            <div className="font-medium text-white">{lead.full_name}</div>
                                            <div className="text-gray-400 text-sm">
                                                {lead.email || (
                                                    <button
                                                        onClick={() => findEmail(lead)}
                                                        className="flex items-center text-blue-400 hover:text-blue-300 text-xs"
                                                        disabled={isFindingEmail[lead.id || lead.full_name]}
                                                    >
                                                        {isFindingEmail[lead.id || lead.full_name] ? (
                                                            <>
                                                                <div className="animate-spin h-3 w-3 border-b border-white rounded-full mr-1"></div>
                                                                Finding email...
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Search size={12} className="mr-1" />
                                                                Find email
                                                            </>
                                                        )}
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                                                    {lead.company_image ? (
                                                        <img src={lead.company_image} alt={lead.company_name} className="w-10 h-10" />
                                                    ) : (
                                                        <span className="text-lg font-bold text-blue-300">
                                                            {lead.company_name?.charAt(0) || 'C'}
                                                        </span>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-medium">{lead.company_name}</div>
                                                    <div className="text-gray-400 text-xs">
                                                        {lead.company_location || lead.location || ""}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="font-medium">{lead.job_title}</div>
                                            <div className="text-gray-400 text-xs">
                                                {lead.started_at_position && `${lead.started_at_position} - `}
                                                {lead.job_still_working ? 'Present' : lead.job_ended_on}
                                                {lead.duration && <br />}{lead.duration}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex justify-center space-x-4">
                                                <button
                                                    onClick={() => generateEmailContent(lead)}
                                                    className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
                                                    title="Email"
                                                >
                                                    <Mail size={20} />
                                                </button>
                                                <button
                                                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                                                    title="Message on LinkedIn"
                                                    onClick={() => {
                                                        const messageUrl = `${lead.linkedin_url?.replace(/\/$/, '') || '#'}/overlay/message/`;
                                                        window.open(messageUrl, '_blank');
                                                    }}
                                                >
                                                    <Linkedin size={20} />
                                                </button>
                                                <button
                                                    onClick={() => handleCallClick(lead)}
                                                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors"
                                                    title="Call"
                                                >
                                                    <Phone size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="py-8 px-6 text-center text-gray-400">
                                        No candidates have been shortlisted yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between">
                    <button
                        onClick={() => window.history.back()}
                        className="border border-gray-600 text-gray-300 px-8 py-2 rounded-lg font-medium hover:bg-gray-900 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-white text-black px-8 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                        Complete
                    </button>
                </div>
            </div>

            {/* Email Modal */}
            {showEmailModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="bg-gray-900 rounded-lg w-3/4 max-w-3xl max-h-[80vh] overflow-hidden">
                        <div className="flex justify-between items-center p-4 border-b border-gray-800">
                            <h3 className="text-lg font-medium">
                                Email to {selectedLead?.full_name}
                            </h3>
                            <button
                                onClick={closeEmailModal}
                                className="text-gray-400 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto max-h-[60vh]">
                            {isGeneratingEmail ? (
                                <div className="flex justify-center py-12">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                                </div>
                            ) : (
                                <div className="bg-gray-800 p-4 rounded whitespace-pre-wrap">
                                    {emailContent}
                                </div>
                            )}
                        </div>
                        <div className="flex justify-end space-x-4 p-4 border-t border-gray-800">
                            <button
                                onClick={copyToClipboard}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                                disabled={isGeneratingEmail}
                            >
                                Copy to Clipboard
                            </button>
                            <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${selectedLead?.email || 'vansh.bhardwaj@kareai.io'}&su=${encodeURIComponent('Speaking Opportunity')}&body=${encodeURIComponent(emailContent)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors inline-block text-center`}
                                title={!selectedLead?.email ? "Find email address first" : ""}
                            >
                                Open in Mail Client
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Call Modal */}
            {showCallModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="bg-gray-900 rounded-2xl w-96 overflow-hidden shadow-2xl">
                        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-8 flex flex-col items-center">
                            {/* User avatar */}
                            <div className="w-24 h-24 rounded-full bg-blue-600 mb-4 flex items-center justify-center text-white text-3xl font-bold">
                                {selectedLead?.full_name?.charAt(0) || 'U'}
                            </div>

                            <h3 className="text-xl font-medium text-white mb-1">
                                {selectedLead?.full_name || 'User'}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6">
                                {selectedLead?.job_title || 'Professional'} at {selectedLead?.company_name || 'Company'}
                            </p>

                            {/* Phone number with subtle animation */}
                            <div className="flex items-center justify-center bg-gray-800 px-4 py-2 rounded-lg mb-6 animate-pulse">
                                <span className="text-lg font-mono text-green-400">{callNumber}</span>
                            </div>

                            {/* Call status indicator */}
                            <div className="h-10 mb-6">
                                {renderCallStatus()}
                            </div>

                            {/* Timer */}
                            {callStatus === 'connected' && (
                                <div className="text-gray-400 mb-4">
                                    00:{callTimer < 10 ? `0${callTimer - 7}` : callTimer - 7}
                                </div>
                            )}

                            {/* Call controls */}
                            <div className="flex space-x-8 mt-2">
                                {/* Microphone button */}
                                <button className="bg-gray-800 text-gray-300 p-4 rounded-full hover:bg-gray-700 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </button>

                                {/* End call button */}
                                <button
                                    onClick={closeCallModal}
                                    className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors"
                                >
                                    <PhoneCall className="h-6 w-6 transform rotate-135" />
                                </button>

                                {/* Speaker button */}
                                <button className="bg-gray-800 text-gray-300 p-4 rounded-full hover:bg-gray-700 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <style jsx>{`
                            @keyframes pulse {
                                0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
                                70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
                                100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
                            }
                            .pulse {
                                animation: pulse 2s infinite;
                            }
                        `}</style>
                    </div>
                </div>
            )}
        </div>
    );
}