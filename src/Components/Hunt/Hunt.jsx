import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Check, Loader } from 'lucide-react';
import { ExternalLink, X, MapPin, Briefcase, Award, BookOpen, Code } from 'lucide-react';
import { Users, Star, UserPlus } from "lucide-react";
import { LinkupClient } from 'linkup-sdk';
import axios from 'axios';

export default function Hunt() {
    const [searchText, setSearchText] = useState('');
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();
    const [personas, setPersonas] = useState([
        ["Marketing", ["Marketing"], [], []],
        ["Sales", ["Sales"], [], []]
    ]);
    const [chatMessage, setChatMessage] = useState('');
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedLead, setSelectedLead] = useState(null);
    const [shortlistedLeads, setShortlistedLeads] = useState([]);
    const [leadResults, setLeadResults] = useState([]);
    const [isLeadsLoading, setIsLeadsLoading] = useState(false);

    const [companies, setCompanies] = useState([
        "Microsoft", "Apple", "Tesla", "Google", "Adobe", "ServiceNow", "Workday", "Splunk"
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
            description: "Find senior cybersecurity leaders from Fortune 500 companies for keynote sessions.",
            icon: <Briefcase className="text-indigo-400" size={24} />
        },
        {
            id: 2,
            title: "Search by Experience",
            description: "Find product managers with 8+ years in AI/ML from top startups or FAANG companies.",
            icon: <Star className="text-amber-400" size={24} />
        },
        {
            id: 3,
            title: "Search by Expertise",
            description: "Find thought leaders in sustainability for workshops on green business transformation.",
            icon: <Users className="text-emerald-400" size={24} />
        },
        {
            id: 4,
            title: "Search for Similar People",
            description: "Find speakers similar to specific experts for insights on digital transformation.",
            icon: <UserPlus className="text-blue-400" size={24} />
        }
    ];

    const fetchCompanies = async (query) => {
        setIsCompaniesLoading(true);
        try {
            const response = await client.search({
                query: `give 10 big and common company names as an array related to ${query}`,
                depth: "standard",
                outputType: "sourcedAnswer",
            });

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

    const updatePersonasFromRoles = (rolesArray) => {
        if (!rolesArray || !Array.isArray(rolesArray) || rolesArray.length === 0) {
            return;
        }
        const newPersonas = rolesArray.map(role => {
            const roleName = typeof role === 'string' ? role.trim() : String(role).trim();
            return [roleName, [roleName], [], []];
        });
        setPersonas(newPersonas);
    };

    const fetchRoles = async (query) => {
        setIsRolesLoading(true);
        try {
            const response = await client.search({
                query: `give common and relevant company roles as array related to ${query}`,
                depth: "standard",
                outputType: "sourcedAnswer",
            });

            if (response && response.answer) {
                const jsonMatch = response.answer.match(/```json\s*(.*?)\s*```/s);
                let rolesArray = [];

                if (jsonMatch && jsonMatch[1]) {
                    try {
                        rolesArray = JSON.parse(jsonMatch[1]);
                        setRoles(rolesArray);
                        updatePersonasFromRoles(rolesArray);
                    } catch (parseError) {
                        console.error("Error parsing roles JSON:", parseError);
                    }
                } else {
                    const rolesList = response.answer.match(/\d+\.\s+(.*?)(?=\s+\d+\.|$)/gs);
                    if (rolesList && rolesList.length > 0) {
                        rolesArray = rolesList.map(role => {
                            return role.replace(/^\d+\.\s+/, '').trim();
                        });
                        setRoles(rolesArray);
                        updatePersonasFromRoles(rolesArray);
                    } else {
                        const textRoles = response.answer
                            .split(/[,\n]/)
                            .map(role => role.replace(/^\d+\.\s+/, '').trim())
                            .filter(role => role.length > 0);

                        if (textRoles.length > 0) {
                            setRoles(textRoles);
                            updatePersonasFromRoles(textRoles);
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

    const fetchLeadsByCompany = async (company) => {
        setIsLeadsLoading(true);
        try {
            const response = await axios({
                method: 'POST',
                url: '/api/linkedin/leads/by_icp/',
                headers: {
                    Authorization: `Token ${import.meta.env.VITE_GENERECT_KEY}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    company_link: `https://www.linkedin.com/company/${encodeURIComponent(company)}`,
                    limit_by: 10,
                    personas: personas
                }
            });
            if (response.data && response.data.leads) {
                setLeadResults(response.data.leads);
            }
        } catch (error) {
            console.error("Error fetching leads:", error);
        } finally {
            setIsLeadsLoading(false);
        }
    };

    const handleShortlist = (lead) => {
        if (shortlistedLeads.some(shortlistedLead => shortlistedLead.linkedin_url === lead.linkedin_url)) {
            setShortlistedLeads(shortlistedLeads.filter(
                shortlistedLead => shortlistedLead.linkedin_url !== lead.linkedin_url
            ));
        } else {
            setShortlistedLeads([...shortlistedLeads, lead]);
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

    const handleCompanyClick = (company) => {
        setSelectedCompany(company);
        fetchLeadsByCompany(company);
    };

    const getRelevanceMessage = (lead) => {
        if (lead.job_title && lead.job_title.toLowerCase().includes('sustainab')) {
            return `${lead.job_still_working ? "Current" : "Former"} ${lead.job_title} with expertise in sustainability at ${lead.company_name}`;
        }

        if (lead.skills && lead.skills.some(skill => skill.toLowerCase().includes('sustainab'))) {
            return `Has skills in sustainability with ${lead.job_still_working ? "current" : "former"} role as ${lead.job_title}`;
        }

        const experienceYears = lead.job_still_working && lead.started_at_position ?
            new Date().getFullYear() - new Date(lead.started_at_position).getFullYear() :
            5;

        return `${experienceYears}+ years of experience in ${lead.company_industry || "relevant industry"} at ${lead.company_name}`;
    };

    const renderInitialSearch = () => (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <div className="max-w-4xl w-full space-y-8">
                <div className="space-y-2 text-center mb-8">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transition-all duration-500 hover:bg-gradient-to-r hover:from-white hover:to-blue-400">
                        Welcome to DELIGHT LOOP.
                    </h1>
                    <h2 className="text-lg font-medium text-gray-300">Let's find the perfect experts for you.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {searchCategories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-gray-900 rounded-xl p-6 cursor-pointer hover:bg-gray-800 transition-all duration-300 border border-gray-800 shadow-lg hover:shadow-xl hover:border-indigo-900 transform hover:-translate-y-1 group"
                            onClick={() => handleCategoryClick(category)}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-all duration-300">
                                    {category.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors duration-300">{category.title}</h2>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{category.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500 animate-pulse group-hover:animate-none"></div>
                    <div className="relative">
                        <textarea
                            className="w-full p-5 pr-14 bg-gray-900 rounded-xl border border-gray-800 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-gray-500 resize-none h-28 shadow-lg transition-all duration-300"
                            placeholder="Describe the experts you are looking for..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <button
                            className="absolute right-4 bottom-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full p-3 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110"
                            onClick={handleSearch}
                        >
                            <Search size={20} />
                        </button>
                    </div>
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
                    <p className="text-sm">Welcome to Delight Loop. Let's get started and find you experts. Tell me what you're looking for.</p>
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
                    <p className="text-sm">Great, let's begin the search for experts in {selectedCompany ? selectedCompany : "relevant companies"}.</p>
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

            {sidebarOpen && selectedLead && (
                <div className="flex min-h-screen bg-gray-900">
                    {sidebarOpen && selectedLead && (
                        <div className="fixed inset-0 z-50 overflow-hidden">
                            <div
                                className="absolute inset-0 backdrop-blur-sm"
                                onClick={() => setSidebarOpen(false)}
                            ></div>

                            <div className="absolute inset-y-0 right-0 max-w-md w-full bg-gray-900 shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out transform border-l border-gray-700">
                                <div className="p-6 relative">
                                    <button
                                        onClick={() => setSidebarOpen(false)}
                                        className="absolute top-4 left-4 text-gray-400 hover:text-white bg-gray-800 rounded-full p-2"
                                    >
                                        <X size={20} />
                                    </button>

                                    <div className="flex items-center mb-6 mt-4 justify-center">
                                        <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-2xl font-bold text-blue-300">{selectedLead.full_name.charAt(0)}</span>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">{selectedLead.full_name}</h2>
                                            <p className="text-blue-400 font-medium">{selectedLead.headline.substring(0, 60)}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center text-gray-400 mb-6 justify-center">
                                        <MapPin size={18} className="mr-2 text-gray-500" />
                                        <span>{selectedLead.location}</span>
                                    </div>

                                    <div className="mb-6 bg-gray-800 p-4 rounded-lg border border-gray-700">
                                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                                            <Briefcase size={18} className="mr-2 text-blue-400" />
                                            Current Position
                                        </h3>
                                        <div>
                                            <p className="font-medium text-gray-200">{selectedLead.job_title}</p>
                                            <p className="text-gray-400">{selectedLead.company_name}</p>
                                            <p className="text-sm text-gray-500">
                                                {selectedLead.started_at_position} - {selectedLead.job_still_working ? 'Present' : selectedLead.job_ended_on || 'N/A'}
                                            </p>
                                            {selectedLead.job_description && (
                                                <div className="mt-3 text-sm text-gray-400 border-t border-gray-700 pt-3">
                                                    <p className="whitespace-pre-line">{selectedLead.job_description.substring(0, 300)}...</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                                            <BookOpen size={18} className="mr-2 text-blue-400" />
                                            Education
                                        </h3>
                                        {selectedLead.educations.map((edu, index) => (
                                            <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-2">
                                                <p className="font-medium text-gray-200">{edu.degree}</p>
                                                <p className="text-gray-400">{edu.university_name}</p>
                                                <p className="text-sm text-gray-500">
                                                    {edu.started_on?.year ? `${edu.started_on.year} - ${edu.ended_on?.year || 'Present'}` : 'Dates not specified'}
                                                </p>
                                                {edu.fields_of_study && edu.fields_of_study.length > 0 && (
                                                    <p className="text-sm text-gray-400 mt-1">{edu.fields_of_study.join(', ')}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                                            <Code size={18} className="mr-2 text-blue-400" />
                                            Skills
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedLead.skills.map((skill, index) => (
                                                <span key={index} className="bg-gray-800 text-blue-300 border border-blue-900 px-3 py-1 rounded-full text-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                                            <Award size={18} className="mr-2 text-blue-400" />
                                            Certifications
                                        </h3>
                                        {selectedLead.certifications.length === 0 ? (
                                            <p className="text-gray-400 text-sm">Certifications not added.</p>
                                        ) : (
                                            selectedLead.certifications.map((cert, index) => (
                                                <div key={index} className="bg-gray-800 p-3 rounded-lg border border-gray-700 mb-2">
                                                    <p className="font-medium text-gray-200">{cert.name}</p>
                                                    <p className="text-gray-400 text-sm">{cert.authority}</p>
                                                    {cert.licenseNumber && <p className="text-sm text-gray-500">{cert.licenseNumber}</p>}
                                                </div>
                                            ))
                                        )}
                                    </div>

                                    {/* LinkedIn */}
                                    <div className="mt-6 bg-gray-800 p-4 rounded-lg border border-blue-900">
                                        <a
                                            href={selectedLead.linkedin_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 font-medium flex items-center justify-center"
                                        >
                                            View LinkedIn Profile <ExternalLink size={16} className="ml-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Main content area */}
            <div className="w-2/3 p-6 overflow-y-auto">
                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <h2 className="text-xl font-medium">Determining relevant roles</h2>
                        {isRolesLoading ? (
                            <div className="ml-2 flex items-center">
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
                                <div
                                    key={index}
                                    className={`bg-gray-800 rounded-full py-2 px-4 text-sm cursor-pointer hover:bg-gray-700 transition-colors ${selectedCompany === company ? 'bg-blue-800' : ''}`}
                                    onClick={() => handleCompanyClick(company)}
                                >
                                    {company}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Leads Results Table */}
                {selectedCompany && (
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-4">
                            <div className='flex items-center py-2'>
                                <h2 className="text-xl font-medium">Potential experts at {selectedCompany}</h2>
                                {isLeadsLoading ? (
                                    <div className="ml-2 flex items-center"></div>
                                ) : (
                                    <Check className="ml-2 text-green-500" size={20} />
                                )}
                            </div>
                            <div className="flex items-center">
                                {shortlistedLeads.length > 0 && (
                                    <button
                                        onClick={() => navigate('/checkout', { state: { shortlistedLeads } })}
                                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
                                    >
                                        Go to checkout ({shortlistedLeads.length})
                                    </button>
                                )}
                            </div>
                        </div>

                        {isLeadsLoading ? (
                            <div className="flex justify-center items-center h-16">
                                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <div className="overflow-x-auto max-h-96 border border-gray-800 rounded-lg">
                                <table className="min-w-full bg-black">
                                    <thead className="sticky top-0 bg-gray-900 z-10">
                                        <tr>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-800">
                                                Company
                                            </th>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-800">
                                                Job Title
                                            </th>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-800">
                                                Why Relevant
                                            </th>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-800">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {leadResults.length > 0 ? (
                                            leadResults.map((lead, index) => (lead.company_name === selectedCompany && (
                                                <tr key={index} className={index % 2 === 0 ? "bg-gray-900" : "bg-black"}>
                                                    <td className="py-4 px-4 text-sm border-b border-gray-800">
                                                        <div className="flex items-center">
                                                            {lead.company_image && (
                                                                <img
                                                                    src={lead.company_image}
                                                                    alt={lead.company_name}
                                                                    className="w-8 h-8 mr-3"
                                                                />
                                                            )}
                                                            <div>
                                                                <div className="font-medium">{lead.company_name}</div>
                                                                <div className="text-gray-400 text-xs">
                                                                    {lead.company_location || "Location not specified"}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-4 text-sm border-b border-gray-800">
                                                        <div className="font-medium">{lead.job_title}</div>
                                                        <div className="text-gray-400 text-xs">
                                                            {lead.started_at_position ?
                                                                `${lead.started_at_position} - ${lead.job_still_working ? 'Present' : lead.job_ended_on || 'N/A'}` :
                                                                'Date not specified'}
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-4 text-sm border-b border-gray-800">
                                                        {getRelevanceMessage(lead)}
                                                    </td>
                                                    <td className="py-4 px-4 text-sm border-b border-gray-800">
                                                        <div className="flex flex-col space-y-2">
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedLead(lead);
                                                                    setSidebarOpen(true);
                                                                }}
                                                                className="bg-blue-600 text-white px-4 py-1 rounded text-center text-xs flex items-center justify-center"
                                                            >
                                                                <span>View Profile</span>
                                                                <ExternalLink size={12} className="ml-1" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleShortlist(lead)}
                                                                className={`border px-4 py-1 rounded text-center text-xs ${shortlistedLeads.some(shortlistedLead => shortlistedLead.linkedin_url === lead.linkedin_url)
                                                                    ? "bg-green-700 border-green-600 text-white"
                                                                    : "border-gray-600 text-gray-300"
                                                                    }`}
                                                            >
                                                                {shortlistedLeads.some(shortlistedLead => shortlistedLead.linkedin_url === lead.linkedin_url)
                                                                    ? "Shortlisted"
                                                                    : "Add to Shortlist"}
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="py-4 px-4 text-center text-gray-400 border-b border-gray-800">
                                                    No leads found for this company.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );

    return showResults ? renderSearchResults() : renderInitialSearch();
}