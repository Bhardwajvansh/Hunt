import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ExternalLink, Calendar, Clock, MapPin, Users, MessageCircle, Plus, Trash2 } from 'lucide-react';

export default function Checkout() {
    const location = useLocation();
    const navigate = useNavigate();
    const { shortlistedLeads } = location.state || { shortlistedLeads: [] };

    const [activeTab, setActiveTab] = useState('Review Shortlist');

    const [eventDetails, setEventDetails] = useState({
        eventDescription: '',
    });

    const sampleQuestions = [
        "Can you briefly describe your area of expertise and how it aligns with our event theme?",
        "Have you spoken at corporate or industry events before? If so, please provide examples or links.",
        "What value or insights would you aim to deliver to our audience?",
        "Are you comfortable engaging with both technical and non-technical audiences?",
        "What topics are you most passionate about speaking on currently?"
    ];

    const [screeningQuestions, setScreeningQuestions] = useState([
        { id: 1, text: "Can you briefly describe your area of expertise and how it aligns with our event theme?" },
        { id: 2, text: "Have you spoken at corporate or industry events before? If so, please provide examples or links." },
        { id: 3, text: "What value or insights would you aim to deliver to our audience?" }
    ]);

    const handleEventDetailsChange = (e) => {
        const { name, value } = e.target;
        setEventDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const tabs = ['Review Shortlist', 'Event Details', 'Screening Questions', 'Reachout'];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleNext = () => {
        if (activeTab === 'Review Shortlist') {
            setActiveTab('Event Details');
            return;
        }

        if (activeTab === 'Event Details') {
            setActiveTab('Screening Questions');
            return;
        }

        if (activeTab === 'Screening Questions') {
            setActiveTab('Reachout');
            return;
        }

        if (activeTab === 'Reachout') {
            navigate('/');
        }
    };

    const handleQuestionChange = (id, newText) => {
        setScreeningQuestions(prevQuestions =>
            prevQuestions.map(q => q.id === id ? { ...q, text: newText } : q)
        );
    };

    const handleAddQuestion = () => {
        const newId = screeningQuestions.length > 0
            ? Math.max(...screeningQuestions.map(q => q.id)) + 1
            : 1;

        setScreeningQuestions([...screeningQuestions, { id: newId, text: "" }]);
    };

    const handleRemoveQuestion = (id) => {
        setScreeningQuestions(prevQuestions =>
            prevQuestions.filter(q => q.id !== id)
        );
    };

    const getRelevanceMessage = (lead) => {
        if (!lead) return '';

        let message = '';

        if (lead.experience_years) {
            message += `${lead.experience_years} years of experience`;
        }

        if (lead.company_name) {
            message += message ? ` at ${lead.company_name}` : `${lead.company_name}`;
        }

        if (lead.job_title) {
            message += message ? `, as ${lead.job_title}` : `${lead.job_title}`;
        }

        if (lead.skills && Array.isArray(lead.skills) && lead.skills.length > 0) {
            message += message ? `, with skills in ${lead.skills.join(', ')}` : `Skills: ${lead.skills.join(', ')}`;
        }

        if (lead.relevance_reason) {
            return lead.relevance_reason;
        }

        return message || 'Professional with relevant experience';
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Review Shortlist':
                return (
                    <>
                        <h1 className="text-2xl font-bold mb-2">Your shortlist of {shortlistedLeads.length} candidates</h1>
                        <p className="text-gray-400 mb-8">We will reach out to your shortlist and notify you when any of them are available.</p>

                        <div className="w-full border border-gray-800 rounded-lg overflow-hidden mb-8">
                            <table className="w-full">
                                <thead className="bg-gray-900">
                                    <tr>
                                        <th className="py-4 px-6 text-left text-sm font-medium">Company</th>
                                        <th className="py-4 px-6 text-left text-sm font-medium">Job Title</th>
                                        <th className="py-4 px-6 text-center text-sm font-medium"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shortlistedLeads.length > 0 ? (
                                        shortlistedLeads.map((lead, index) => (
                                            <tr key={index} className="border-t border-gray-800">
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
                                                    <div className="flex flex-col items-center space-y-2">
                                                        <button className="bg-green-700 border border-green-600 text-white px-4 py-1 rounded text-xs flex items-center">
                                                            Shortlisted ✓
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
                    </>
                );
            case 'Event Details':
                return (
                    <>
                        <h1 className="text-2xl font-bold mb-2">Event Details</h1>
                        <p className="text-gray-400 mb-8">Tell us more about your event</p>

                        <div className="mb-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Event Description</label>
                                    <textarea
                                        name="eventDescription"
                                        value={eventDetails.eventDescription}
                                        onChange={handleEventDetailsChange}
                                        placeholder="Describe the purpose of this event and what participants can expect..."
                                        rows="6"
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'Screening Questions':
                return (
                    <>
                        <h1 className="text-2xl font-bold mb-2">Add screening questions</h1>
                        <p className="text-gray-400 mb-8">To expedite the screening process, please phrase these as yes/no questions.</p>

                        <div className="space-y-4 mb-8">
                            {screeningQuestions.map(question => (
                                <div key={question.id} className="relative">
                                    <input
                                        type="text"
                                        value={question.text}
                                        onChange={(e) => handleQuestionChange(question.id, e.target.value)}
                                        placeholder="Type a yes/no question"
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        onClick={() => handleRemoveQuestion(question.id)}
                                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-200"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            ))}

                            <button
                                onClick={handleAddQuestion}
                                className="flex items-center space-x-2 text-gray-300 border border-gray-700 rounded-lg py-3 px-6 hover:bg-gray-900 transition-colors"
                            >
                                <Plus size={18} />
                                <span>Add another question</span>
                            </button>
                        </div>

                        {screeningQuestions.length === 0 && (
                            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
                                <p className="text-gray-400">You haven't added any screening questions yet.</p>
                                <p className="text-gray-500 text-sm mt-2">Questions help you find the best match for your event.</p>
                            </div>
                        )}

                        {screeningQuestions.length < 5 && (
                            <div className="my-8">
                                <h3 className="text-lg font-medium mb-4">Sample questions you might want to ask</h3>
                                <div className="space-y-3">
                                    {sampleQuestions
                                        .filter(q => !screeningQuestions.some(sq => sq.text === q))
                                        .slice(0, 3)
                                        .map((question, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-900 border border-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-800 transition-colors"
                                                onClick={() => {
                                                    const newId = screeningQuestions.length > 0
                                                        ? Math.max(...screeningQuestions.map(q => q.id)) + 1
                                                        : 1;
                                                    setScreeningQuestions([...screeningQuestions, { id: newId, text: question }]);
                                                }}
                                            >
                                                <p className="text-gray-300">{question}</p>
                                                <div className="flex justify-end mt-2">
                                                    <button className="text-blue-400 text-sm hover:text-blue-300">
                                                        Add question
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}
                    </>
                );
            case 'Reachout':
                return (
                    <div className="text-center py-12">
                        <h2 className="text-2xl font-bold mb-4">Reachout Configuration</h2>
                        <p className="text-gray-400">This tab will allow you to configure how to reach out to candidates.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-8">
            {/* Navigation tabs */}
            <div className="flex mb-8 bg-gray-900 rounded-lg p-1 max-w-xl mx-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === tab
                            ? 'bg-black text-white'
                            : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="max-w-6xl mx-auto">
                {renderTabContent()}

                <div className="flex justify-end">
                    <button
                        onClick={handleNext}
                        className="bg-white text-black px-8 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                        {activeTab === 'Reachout' ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
}