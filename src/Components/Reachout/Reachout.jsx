import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Linkedin, Phone, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Reachout() {
    const navigate = useNavigate();
    const location = useLocation();
    const { shortlistedLeads, eventDetails, screeningQuestions } = location.state || {
        shortlistedLeads: [],
        eventDetails: { eventDescription: '' },
        screeningQuestions: []
    };

    const [selectedLead, setSelectedLead] = useState(null);
    const [emailContent, setEmailContent] = useState('');
    const [isGeneratingEmail, setIsGeneratingEmail] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);

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
                            {shortlistedLeads.length > 0 ? (
                                shortlistedLeads.map((lead, index) => (
                                    <tr key={index} className="border-t border-gray-800">
                                        <td className="py-4 px-6">
                                            <div className="font-medium text-white">{lead.full_name}</div>
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
                                                        const messageUrl = `${lead.linkedin_url.replace(/\/$/, '')}/overlay/message/`;
                                                        window.open(messageUrl, '_blank');
                                                    }}
                                                >
                                                    <Linkedin size={20} />
                                                </button>
                                                <button
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
                                className={`bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors inline-block text-center ${isGeneratingEmail ? 'opacity-50 pointer-events-none' : ''}`}
                            >
                                Open in Mail Client
                            </a>

                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}