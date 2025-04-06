import React, { useState, useEffect } from 'react';
import { Search, Check, Loader } from 'lucide-react';
import { LinkupClient } from 'linkup-sdk';

export default function Hunt() {
    const [searchText, setSearchText] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [chatMessage, setChatMessage] = useState('');

    const [companies, setCompanies] = useState([
        "Salesforce", "Oracle", "SAP", "Microsoft", "Adobe", "ServiceNow", "Workday", "Splunk"
    ]);
    const [roles, setRoles] = useState([
        "Vice President of Sales",
        "Senior Vice President of Sales",
        "Chief Revenue Officer",
        "Head of Enterprise Sales",
        "Global Sales Director"
    ]);

    const [isCompaniesLoading, setIsCompaniesLoading] = useState(false);
    const [isRolesLoading, setIsRolesLoading] = useState(false);

    const client = new LinkupClient({ apiKey: import.meta.env.VITE_LINKUP_KEY });

    const searchCategories = [
        {
            id: 1,
            title: "Search by Role",
            description: "Find former VP Sales at public enterprise software companies"
        },
        {
            id: 2,
            title: "Search by Experience",
            description: "Find traders with more than 5 years experience at large prop trading firms in the US"
        },
        {
            id: 3,
            title: "Search by Expertise",
            description: "Find people who focus on sustainable supply chains for large retailers"
        },
        {
            id: 4,
            title: "Search for Similar People",
            description: "Find AI product leaders like https://www.linkedin.com/in/mghissasi/"
        }
    ];

    const fetchCompanies = async (query) => {
        setIsCompaniesLoading(true);
        try {
            const response = await client.search({
                query: `give 10 company names as an array related to ${query}`,
                depth: "standard",
                outputType: "sourcedAnswer",
            });
            console.log("Companies response:", response);

            if (response && response.answer) {
                const jsonMatch = response.answer.match(/```json\s*(.*?)\s*```/s);
                if (jsonMatch && jsonMatch[1]) {
                    const companyArray = JSON.parse(jsonMatch[1]);
                    setCompanies(companyArray);
                }
            }
        } catch (error) {
            console.error("Error fetching companies:", error);
        } finally {
            setIsCompaniesLoading(false);
        }
    };

    const fetchRoles = async (query) => {
        setIsRolesLoading(true);
        try {
            const response = await client.search({
                query: `give relevant company roles as array related to ${query}`,
                depth: "standard",
                outputType: "sourcedAnswer",
            });

            console.log("Response from roles API:", response);

            if (response && response.answer) {
                const jsonMatch = response.answer.match(/```json\s*(.*?)\s*```/s);
                if (jsonMatch && jsonMatch[1]) {
                    try {
                        const rolesArray = JSON.parse(jsonMatch[1]);
                        setRoles(rolesArray);
                    } catch (parseError) {
                        console.error("Error parsing roles JSON:", parseError);
                    }
                } else {
                    const rolesList = response.answer.match(/\d+\.\s+(.*?)(?=\s+\d+\.|$)/gs);
                    if (rolesList && rolesList.length > 0) {
                        const extractedRoles = rolesList.map(role => {
                            return role.replace(/^\d+\.\s+/, '').trim();
                        });
                        setRoles(extractedRoles);
                    } else {
                        const textRoles = response.answer
                            .split(/[,\n]/)
                            .map(role => role.replace(/^\d+\.\s+/, '').trim())
                            .filter(role => role.length > 0);

                        if (textRoles.length > 0) {
                            setRoles(textRoles);
                        }
                    }
                }
            }
        } catch (error) {
            console.error("Error fetching roles:", error);
        } finally {
            setIsRolesLoading(false);
        }
    };

    const handleSearch = async () => {
        if (searchText.trim()) {
            setTimeout(() => {
                setShowResults(true);
            }, 300);

            fetchCompanies(searchText);
            fetchRoles(searchText);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSearch();
        }
    };

    const handleChatSubmit = async () => {
        if (chatMessage.trim()) {
            fetchCompanies(chatMessage);
            fetchRoles(chatMessage);
            setChatMessage('');
        }
    };

    const handleChatKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleChatSubmit();
        }
    };

    const handleCategoryClick = (category) => {
        setSearchText(category.description);
    };

    const renderInitialSearch = () => (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <div className="max-w-4xl w-full">
                <h1 className="text-6xl">Welcome to Hunt.</h1>
                <br />
                <h1 className="text-md font-medium">Let's get started and find you experts. Tell me what you're looking for.</h1>
                <br />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {searchCategories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-gray-900 rounded-lg p-4 cursor-pointer hover:bg-gray-800 transition-colors"
                            onClick={() => handleCategoryClick(category)}
                        >
                            <h2 className="text-xl font-medium mb-2">{category.title}</h2>
                            <p className="text-gray-400">{category.description}</p>
                        </div>
                    ))}
                </div>

                <div className="relative">
                    <textarea
                        className="w-full p-4 pr-12 bg-gray-900 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-gray-700 text-white placeholder-gray-500 resize-none h-24"
                        placeholder="Describe the experts you are looking for..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <button
                        className="absolute right-4 bottom-4 bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors flex items-center justify-center"
                        onClick={handleSearch}
                    >
                        <Search size={20} />
                    </button>
                </div>
            </div>
        </div>
    );

    const renderSearchResults = () => (
        <div className="flex h-screen bg-black text-white">
            {/* Left sidebar - Chat history */}
            <div className="w-1/3 border-r border-gray-800 p-4 flex flex-col">
                <div className="flex items-center mb-6">
                    <div className="mr-4">
                        <div className="w-6 h-0.5 bg-white mb-1"></div>
                        <div className="w-6 h-0.5 bg-white mb-1"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </div>
                    <p className="text-sm">Welcome to Hunt. Let's get started and find you experts. Tell me what you're looking for.</p>
                </div>

                <div className="flex mb-6">
                    <div className="mr-4">
                        <div className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center">
                            <span className="text-xs">U</span>
                        </div>
                    </div>
                    <p className="text-sm">{searchText}</p>
                </div>

                <div className="flex mb-6">
                    <div className="mr-4">
                        <div className="w-6 h-0.5 bg-white mb-1"></div>
                        <div className="w-6 h-0.5 bg-white mb-1"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </div>
                    <p className="text-sm">Great, let's begin the search for former Vice Presidents of Sales at public enterprise software companies.</p>
                </div>

                <div className="mt-auto">
                    <div className="relative">
                        <textarea
                            className="w-full p-3 pr-10 bg-gray-900 rounded-lg border-none focus:outline-none focus:ring-1 focus:ring-gray-700 text-white placeholder-gray-500 resize-none h-20 text-sm"
                            placeholder="How would you like to refine the results?"
                            value={chatMessage}
                            onChange={(e) => setChatMessage(e.target.value)}
                            onKeyDown={handleChatKeyPress}
                        />
                        <button
                            className="absolute right-3 bottom-3 bg-white text-black rounded-full p-1 hover:bg-gray-200 transition-colors flex items-center justify-center"
                            onClick={handleChatSubmit}
                            disabled={isCompaniesLoading || isRolesLoading}
                        >
                            {isCompaniesLoading || isRolesLoading ?
                                <Loader size={16} className="animate-spin" /> :
                                <Search size={16} />
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content area */}
            <div className="w-2/3 p-6 overflow-y-auto">
                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <h2 className="text-xl font-medium">Determining relevant roles</h2>
                        {isRolesLoading ? (
                            <div className="ml-2 flex items-center">
                                <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin ml-2"></div>
                                <span className="ml-2 text-blue-500 text-sm">Loading roles...</span>
                            </div>
                        ) : (
                            <Check className="ml-2 text-green-500" size={20} />
                        )}
                    </div>
                    {isRolesLoading ? (
                        <div className="flex justify-center items-center h-16">
                            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            {roles.map((role, index) => (
                                <div key={index} className="bg-gray-800 rounded-full py-2 px-4 text-sm">
                                    {role}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <h2 className="text-xl font-medium">Researching relevant companies</h2>
                        {isCompaniesLoading ? (
                            <div className="ml-2 flex items-center">
                                <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin ml-2"></div>
                                <span className="ml-2 text-blue-500 text-sm">Loading companies...</span>
                            </div>
                        ) : (
                            <Check className="ml-2 text-green-500" size={20} />
                        )}
                    </div>
                    {isCompaniesLoading ? (
                        <div className="flex justify-center items-center h-16">
                            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            {companies.map((company, index) => (
                                <div key={index} className="bg-gray-800 rounded-full py-2 px-4 text-sm">
                                    {company}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return showResults ? renderSearchResults() : renderInitialSearch();
}