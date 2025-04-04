import React, { useState } from 'react';
import { Search, Check } from 'lucide-react';

export default function Hunt() {
    const [searchText, setSearchText] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [chatMessage, setChatMessage] = useState('');

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

    const roleOptions = [
        "Vice President of Sales",
        "Senior Vice President of Sales",
        "Chief Revenue Officer",
        "Head of Enterprise Sales",
        "Global Sales Director"
    ];

    const companyOptions = [
        "Salesforce", "Oracle", "SAP", "Microsoft", "Adobe", "ServiceNow", "Workday", "Splunk"
    ];

    const handleSearch = () => {
        if (searchText.trim()) {
            setShowResults(true);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSearch();
        }
    };

    const handleChatKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            // Process chat message
            setChatMessage('');
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
                        className="absolute right-4 bottom-4 bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors"
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
                    <p className="text-sm">Find former VP Sales at public enterprise software companies</p>
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
                        <button className="absolute right-3 bottom-3 bg-white text-black rounded-full p-1 hover:bg-gray-200 transition-colors">
                            <Search size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content area */}
            <div className="w-2/3 p-6 overflow-y-auto">
                <h1 className="text-2xl font-medium mb-6">
                    Searching for Former Vice Presidents of Sales at public enterprise software companies with experience scaling revenue and leading global sales teams.
                </h1>

                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <h2 className="text-xl font-medium">Determining relevant roles</h2>
                        <Check className="ml-2 text-green-500" size={20} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {roleOptions.map((role, index) => (
                            <div key={index} className="bg-gray-800 rounded-full py-2 px-4 text-sm">
                                {role}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <h2 className="text-xl font-medium">Researching relevant companies</h2>
                        <Check className="ml-2 text-green-500" size={20} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {companyOptions.map((company, index) => (
                            <div key={index} className="bg-gray-800 rounded-full py-2 px-4 text-sm">
                                {company}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <h2 className="text-xl font-medium">Finding relevant candidates</h2>
                        <Check className="ml-2 text-green-500" size={20} />
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-medium mb-4">Ranking found candidates</h2>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-1/4"></div>
                    </div>
                </div>
            </div>
        </div>
    );

    return showResults ? renderSearchResults() : renderInitialSearch();
}