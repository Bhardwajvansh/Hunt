import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Hunt() {
    const [searchText, setSearchText] = useState('');

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

    const handleSearch = () => {
        if (searchText.trim()) {
            alert(`Searching for: ${searchText}`);
            // Here you would implement actual search functionality
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSearch();
        }
    };

    const handleCategoryClick = (category) => {
        setSearchText(category.description);
    };

    return (
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
}