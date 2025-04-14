import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Check, Loader } from 'lucide-react';
import { ExternalLink, X, MapPin, Briefcase, Award, BookOpen, Code } from 'lucide-react';
import { LinkupClient } from 'linkup-sdk';
import axios from 'axios';

export default function Hunt() {
    const [searchText, setSearchText] = useState('');
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();
    const [chatMessage, setChatMessage] = useState('');
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedLead, setSelectedLead] = useState(null);
    const [shortlistedLeads, setShortlistedLeads] = useState([]);
    const [leadResults, setLeadResults] = useState([
        {
            "is_full_data": true,
            "linkedin_id": "596596",
            "industry": "Technology, Information and Internet",
            "location": "United States",
            "location_county": null,
            "location_city": null,
            "location_state": null,
            "location_country": "United States",
            "skills": [
                "Organizational Development",
                "Employee Relations",
                "Human Resources",
                "Personnel Management",
                "Organizational Design",
                "Change Management",
                "Leadership Development",
                "Training",
                "Employment Law",
                "Management",
                "Internal Communications",
                "Restructuring",
                "Six Sigma",
                "Policy",
                "Supply Chain",
                "Coaching",
                "Deferred Compensation",
                "Employee Benefits",
                "Employee Engagement",
                "HR Consulting",
                "Mergers ",
                "Performance Management",
                "Strategy",
                "Succession Planning",
                "Talent Management",
                "Change management",
                "Mergers & Acquisitions"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "International Business Studies"
                    ],
                    "degree": "Diploma",
                    "university_id": "16715",
                    "university_name": "Leeds Beckett University"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Fiona Clare Cicconi",
            "full_name": "Fiona Clare Cicconi",
            "first_name": "Fiona",
            "middle_name": "Clare",
            "last_name": "Cicconi",
            "summary": null,
            "sales_id": "ACwAAAAJGnQBPSIPCJK_lxI2DBSTTWWy6i9QLDE",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAAJGnQBPSIPCJK_lxI2DBSTTWWy6i9QLDE,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/fiona-clare-cicconi-304249",
            "headline": "Chief People Officer at Google/Alphabet",
            "raw_headline": "Chief People Officer at Google/Alphabet",
            "num_of_connections": 3021,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQGQCGL5QAARVQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701409042777?e=1748476800&v=beta&t=Up2a5pwFpXFBeaN2Fr-hII70GVExgus2B1MGEacEoBk",
            "is_premium": true,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "English",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "Italian",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "French",
                    "proficiency": "FULL_PROFESSIONAL"
                },
                {
                    "name": "German (basic)"
                }
            ],
            "certifications": [],
            "company_id": "1441",
            "raw_company_name": "Google",
            "company_name": "Google",
            "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
            "company_url": null,
            "company_website": "https://goo.gle/3DLEokh",
            "company_location": "Mountain View, CA, United States",
            "company_city": "Mountain View",
            "company_state": "CA",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=1749081600&v=beta&t=NGmpIs-BhwHCIoXtxbK5hH_oKvx39ivWIbvhMlxr8hg",
            "company_industry": "Software Development",
            "job_description": null,
            "raw_job_title": "Chief People Officer",
            "job_title": "Chief People Officer",
            "job_started_on": "Jan 2021",
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1441",
                    "raw_company_name": "Google",
                    "company_name": "Google",
                    "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
                    "company_url": "https://www.linkedin.com/company/google/",
                    "company_website": "https://goo.gle/3DLEokh",
                    "company_location": "Mountain View, California, United States",
                    "company_city": "Mountain View",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1748476800&v=beta&t=9lsGDIQ8Pq-29pe5xRl3G4trohCpd9LHXc93vjDNX4A",
                    "company_industry": "Software Development",
                    "job_description": null,
                    "raw_job_title": "Chief People Officer",
                    "job_title": "Chief People Officer",
                    "job_started_on": "Jan 2021",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "66256333",
                    "raw_company_name": "Stellantis",
                    "company_name": "Stellantis",
                    "company_description": "Our storied and iconic brands embody the passion of their visionary founders and today's customers in their innovative products and services: they include Abarth, Alfa Romeo, Chrysler, Citroen, Dodge, DS Automobiles, Fiat, Jeep(r), Lancia, Maserati, Opel, Peugeot, Ram, Vauxhall and mobility brands Free2move and Leasys. Powered by our diversity, we lead the way the world moves - aspiring to become the greatest sustainable mobility tech company, not the biggest, while creating added value for all stakeholders as well as the communities in which we operate. ",
                    "company_url": "https://www.linkedin.com/company/stellantis/",
                    "company_website": "https://www.stellantis.com",
                    "company_location": "Amsterdam, North Holland, Netherlands",
                    "company_city": "Amsterdam",
                    "company_state": "North Holland",
                    "company_country": "Netherlands",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHURyWugU5A4g/company-logo_400_400/company-logo_400_400/0/1630577492034/stellantis_logo?e=1748476800&v=beta&t=Gz9gpCacOsRDy_S4ubqsND7oCC4PTiLUe4N8l5Ardgc",
                    "company_industry": "Motor Vehicle Manufacturing",
                    "job_description": null,
                    "raw_job_title": "Non Executive Board Member",
                    "job_title": "Non Executive Board Member",
                    "job_started_on": "Jan 2021",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1441",
            "started_at_company": "Jan 2021",
            "started_at_position": "Jan 2021",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "12274",
            "industry": "Technology, Information and Internet",
            "location": "Menlo Park, California, United States",
            "location_county": null,
            "location_city": "Menlo Park",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "CMO management",
                "Product Marketing",
                "Global Marketing",
                "Go-to-market Strategy",
                "Strategy",
                "P&L Management",
                "Retail Marketing",
                "Retail",
                "Digital Strategy",
                "Omni-Channel Marketing",
                "KOF Marketing",
                "Consumer Products",
                "Venture Capital",
                "Business Strategy",
                "Product Launch",
                "Digital Marketing",
                "Brand Management",
                "Product Management",
                "Mobile Applications",
                "Display Advertising",
                "Mergers & Acquisitions",
                "Mobile Marketing",
                "Online Advertising",
                "Social Media",
                "Entrepreneurship",
                "Acquisition Integration",
                "Analytics",
                "Mobile Devices",
                "SEM",
                "Marketing",
                "Start-ups",
                "E-commerce",
                "Google Adwords",
                "Android",
                "iOS",
                "Strategic Partnerships",
                "Search",
                "Management",
                "Monetization",
                "Small Business Marketing",
                "Growth Hacking"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Marketing and Finance"
                    ],
                    "degree": "MBA",
                    "university_id": "5290",
                    "university_name": "The Wharton School"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Electrical Engineering"
                    ],
                    "degree": "B.S.",
                    "university_id": "3165",
                    "university_name": "University of Pennsylvania"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Economics"
                    ],
                    "degree": "B.S.",
                    "university_id": "5290",
                    "university_name": "The Wharton School"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": null,
                    "degree": null,
                    "university_id": "1043127",
                    "university_name": "Flintridge Preparatory School"
                }
            ],
            "twitter_link": "https://www.twitter.com/albertycheng",
            "private_website": "https://plus.google.com/114896892290324391860/about",
            "unformatted_full_name": "Albert Y. Cheng",
            "full_name": "Albert Y Cheng",
            "first_name": "Albert",
            "middle_name": "Y",
            "last_name": "Cheng",
            "summary": null,
            "sales_id": "ACwAAAAAL_IBtF5iqDzVsA4PPvE2Y_GT471v6Qg",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAAAL_IBtF5iqDzVsA4PPvE2Y_GT471v6Qg,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/albertycheng",
            "headline": "Head of Global Marketing, Google Play | Angel Investor | Wharton MBA, UPenn M&T",
            "raw_headline": "Head of Global Marketing, Google Play | Angel Investor | Wharton MBA, UPenn M&T",
            "num_of_connections": 2368,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQEGQpT2MeMTmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678727662224?e=1748476800&v=beta&t=z0rWj5Ly1qj1tPnqygS8xhrkTvueNsummMW3-JlJwNQ",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "English",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "Chinese",
                    "proficiency": "PROFESSIONAL_WORKING"
                }
            ],
            "certifications": [],
            "company_id": "1441",
            "raw_company_name": "Google",
            "company_name": "Google",
            "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
            "company_url": null,
            "company_website": "https://goo.gle/3DLEokh",
            "company_location": "Mountain View, CA, United States",
            "company_city": "Mountain View",
            "company_state": "CA",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=1749081600&v=beta&t=NGmpIs-BhwHCIoXtxbK5hH_oKvx39ivWIbvhMlxr8hg",
            "company_industry": "Software Development",
            "job_description": "Helping over 2.5 billion people around the world get more out of their apps and games.",
            "raw_job_title": "Head of Global Marketing, Google Play",
            "job_title": "Head of Global Marketing, Google Play",
            "job_started_on": "Oct 2013",
            "job_ended_on": null,
            "job_location": "Mountain View, CA",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1441",
                    "raw_company_name": "Google",
                    "company_name": "Google",
                    "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
                    "company_url": "https://www.linkedin.com/company/google/",
                    "company_website": "https://goo.gle/3DLEokh",
                    "company_location": "Mountain View, California, United States",
                    "company_city": "Mountain View",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1748476800&v=beta&t=9lsGDIQ8Pq-29pe5xRl3G4trohCpd9LHXc93vjDNX4A",
                    "company_industry": "Software Development",
                    "job_description": "Helping over 2.5 billion people around the world get more out of their apps and games.",
                    "raw_job_title": "Head of Global Marketing, Google Play",
                    "job_title": "Head of Global Marketing, Google Play",
                    "job_started_on": "Oct 2013",
                    "job_ended_on": null,
                    "job_location": "Mountain View, CA",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1441",
            "started_at_company": "Oct 2013",
            "started_at_position": "Oct 2013",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "35066840",
            "industry": "Telecommunications",
            "location": "Bellevue, Washington, United States",
            "location_county": null,
            "location_city": "Bellevue",
            "location_state": "Washington",
            "location_country": "United States",
            "skills": [
                "Unified Communications",
                "Product Management",
                "Messaging",
                "Leadership",
                "Business Development",
                "Strategic Partnerships",
                "Wireless",
                "GTM Strategy",
                "Telecommunications",
                "Product Marketing",
                "Business Intelligence",
                "Strategy",
                "Go-to-market Strategy",
                "Business Alliances",
                "Management",
                "Pre-sales",
                "VoIP",
                "Cloud Computing",
                "SaaS",
                "Business Strategy",
                "Competitive Analysis"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1997
                    },
                    "ended_on": {
                        "year": 1998
                    },
                    "fields_of_study": [
                        "Business Administration"
                    ],
                    "degree": "MBA",
                    "university_id": "15104776",
                    "university_name": "IAE FRANCE - Ecoles Universitaires de Management"
                },
                {
                    "started_on": {
                        "year": 1992
                    },
                    "ended_on": {
                        "year": 1997
                    },
                    "fields_of_study": [
                        "Engineering"
                    ],
                    "degree": "MS",
                    "university_id": "28135",
                    "university_name": "INSA Lyon - Institut National des Sciences Appliquees de Lyon"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Hayete Gallot",
            "full_name": "Hayete Gallot",
            "first_name": "Hayete",
            "middle_name": "",
            "last_name": "Gallot",
            "summary": null,
            "sales_id": "ACwAAAIXE9gBVaF_BY1rkC8J-T6oU4PjSH7H-sI",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAIXE9gBVaF_BY1rkC8J-T6oU4PjSH7H-sI,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/hayetegallot",
            "headline": "President, Customer Experience | Google Cloud",
            "raw_headline": "President, Customer Experience | Google Cloud",
            "num_of_connections": 7870,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQHuhiYoFa451A/profile-displayphoto-shrink_100_100/B56ZTwakJ5GQAU-/0/1739200283714?e=1748476800&v=beta&t=XPuywcomgOR2uRjfqdmyfoixGKZoZ8K0CeBfd1oU0n0",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "French",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "English",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                }
            ],
            "certifications": [],
            "company_id": "1441",
            "raw_company_name": "Google",
            "company_name": "Google",
            "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
            "company_url": null,
            "company_website": "https://goo.gle/3DLEokh",
            "company_location": "Mountain View, CA, United States",
            "company_city": "Mountain View",
            "company_state": "CA",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=1749081600&v=beta&t=NGmpIs-BhwHCIoXtxbK5hH_oKvx39ivWIbvhMlxr8hg",
            "company_industry": "Software Development",
            "job_description": null,
            "raw_job_title": "President, Customer Experience | Google Cloud ",
            "job_title": "President, Customer Experience, Google Cloud",
            "job_started_on": "Feb 2025",
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1441",
                    "raw_company_name": "Google",
                    "company_name": "Google",
                    "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
                    "company_url": "https://www.linkedin.com/company/google/",
                    "company_website": "https://goo.gle/3DLEokh",
                    "company_location": "Mountain View, California, United States",
                    "company_city": "Mountain View",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1748476800&v=beta&t=9lsGDIQ8Pq-29pe5xRl3G4trohCpd9LHXc93vjDNX4A",
                    "company_industry": "Software Development",
                    "job_description": null,
                    "raw_job_title": "President, Customer Experience | Google Cloud ",
                    "job_title": "President, Customer Experience, Google Cloud",
                    "job_started_on": "Feb 2025",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1441",
            "started_at_company": "Feb 2025",
            "started_at_position": "Feb 2025",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "531611",
            "industry": "Biotechnology Research",
            "location": "Palo Alto, California, United States",
            "location_county": null,
            "location_city": "Palo Alto",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Business Transformation",
                "Strategy",
                "Business Process",
                "IT Strategy",
                "Analytics",
                "Six Sigma",
                "Leadership",
                "Analysis",
                "Consulting",
                "Project Management",
                "ERP",
                "Project Planning",
                "Business Analysis",
                "Business Process Improvement",
                "Business Intelligence",
                "Program Management",
                "PMO",
                "Enterprise Resource Planning (ERP)",
                "Business Intelligence (BI)"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1993
                    },
                    "ended_on": {
                        "year": 1997
                    },
                    "fields_of_study": [
                        "Finance & International Business"
                    ],
                    "degree": "B.S.",
                    "university_id": "3657",
                    "university_name": "Penn State University"
                },
                {
                    "started_on": {
                        "year": 1998
                    },
                    "ended_on": {
                        "year": 2000
                    },
                    "fields_of_study": [
                        "Project Management"
                    ],
                    "degree": "Masters",
                    "university_id": "4644",
                    "university_name": "The George Washington University"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Marc Berson",
            "full_name": "Marc Berson",
            "first_name": "Marc",
            "middle_name": "",
            "last_name": "Berson",
            "summary": "Head of Google Internal Systems (CIO) with deep Process Transformation and Technology Enablement experience including ERP, Digital Innovation, Cloud, Financial Systems and Consulting.  Finance and Accounting work experience and Finance academic background with a focus on Business Analytics, Data Management and Planning and a proven track record for initiative delivery and operational excellence.\n\nSpecialties: Enterprise Transformation, ERP, Solution Delivery and Operations, Architecture and Strategy, Project Management, Resource Management, Six Sigma Analysis, Financial Planning & Analysis",
            "sales_id": "ACwAAAAIHJsBxt1zmk9w-WHXBf2S9B_YGIWr0jU",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAAIHJsBxt1zmk9w-WHXBf2S9B_YGIWr0jU,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/marcberson",
            "headline": "Vice President, Head of Google Internal Systems / Corporate Engineering (CIO)",
            "raw_headline": "Vice President, Head of Google Internal Systems / Corporate Engineering (CIO)",
            "num_of_connections": 9538,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQHQ8Evn1_o5jw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696523937956?e=1748476800&v=beta&t=L5wcNlM9tyPk8JtAEGNtZE2rE0zBiK8K0bOHOed4Iig",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "English",
                    "proficiency": "FULL_PROFESSIONAL"
                },
                {
                    "name": "Spanish",
                    "proficiency": "PROFESSIONAL_WORKING"
                }
            ],
            "certifications": [],
            "company_id": "1441",
            "raw_company_name": "Google",
            "company_name": "Google",
            "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
            "company_url": null,
            "company_website": "https://goo.gle/3DLEokh",
            "company_location": "Mountain View, CA, United States",
            "company_city": "Mountain View",
            "company_state": "CA",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=1749081600&v=beta&t=NGmpIs-BhwHCIoXtxbK5hH_oKvx39ivWIbvhMlxr8hg",
            "company_industry": "Software Development",
            "job_description": null,
            "raw_job_title": "Vice President, Head of Google Internal Systems / Corporate Engineering (CIO)",
            "job_title": "Vice President, Head of Google Internal Systems and Corporate Engineering (CIO)",
            "job_started_on": "Feb 2025",
            "job_ended_on": null,
            "job_location": "Sunnyvale, California, United States",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1441",
                    "raw_company_name": "Google",
                    "company_name": "Google",
                    "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
                    "company_url": "https://www.linkedin.com/company/google/",
                    "company_website": "https://goo.gle/3DLEokh",
                    "company_location": "Mountain View, California, United States",
                    "company_city": "Mountain View",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1748476800&v=beta&t=9lsGDIQ8Pq-29pe5xRl3G4trohCpd9LHXc93vjDNX4A",
                    "company_industry": "Software Development",
                    "job_description": null,
                    "raw_job_title": "Vice President, Head of Google Internal Systems / Corporate Engineering (CIO)",
                    "job_title": "Vice President, Head of Google Internal Systems and Corporate Engineering (CIO)",
                    "job_started_on": "Feb 2025",
                    "job_ended_on": null,
                    "job_location": "Sunnyvale, California, United States",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1441",
            "started_at_company": "Feb 2025",
            "started_at_position": "Feb 2025",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "65571345",
            "industry": "IT Services and IT Consulting",
            "location": "Atherton, California, United States",
            "location_county": null,
            "location_city": "Atherton",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Leadership",
                "Building Strong Cross Functional Teams",
                "Creating and Executing Multi-Year Technology Vision",
                "Identifying and Driving Corporate Acquisitions",
                "Recruiting World Class Talent to build New Organizations",
                "Business Strategy",
                "Strategic Planning",
                "Team Building",
                "Executive Management"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1992
                    },
                    "ended_on": {
                        "year": 1994
                    },
                    "fields_of_study": [
                        "Business Administration and Management, General"
                    ],
                    "degree": "Master of Business Administration - MBA",
                    "university_id": "1791",
                    "university_name": "Stanford University Graduate School of Business"
                },
                {
                    "started_on": {
                        "year": 1986
                    },
                    "ended_on": {
                        "year": 1990
                    },
                    "fields_of_study": [
                        "Electrical Engineering and Computer Science"
                    ],
                    "degree": "BSEE",
                    "university_id": "157313",
                    "university_name": "Princeton University"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Thomas Kurian",
            "full_name": "Thomas Kurian",
            "first_name": "Thomas",
            "middle_name": "",
            "last_name": "Kurian",
            "summary": null,
            "sales_id": "ACwAAAPoihEBeQbvJU5SXpfHzqQIuq4XhzIXSYg",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAPoihEBeQbvJU5SXpfHzqQIuq4XhzIXSYg,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/thomas-kurian-469b6219",
            "headline": "CEO at Google Cloud",
            "raw_headline": "CEO at Google Cloud",
            "num_of_connections": 11785,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C5603AQFVUnMUpouSPw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1623968467177?e=1748476800&v=beta&t=GnAiIWDh19yb_5JqaKo3OdN1lMOZivT1tH2Sz7HZ-Ag",
            "is_premium": true,
            "is_openlink": true,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "1441",
            "raw_company_name": "Google",
            "company_name": "Google",
            "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
            "company_url": null,
            "company_website": "https://goo.gle/3DLEokh",
            "company_location": "Mountain View, CA, United States",
            "company_city": "Mountain View",
            "company_state": "CA",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=1749081600&v=beta&t=NGmpIs-BhwHCIoXtxbK5hH_oKvx39ivWIbvhMlxr8hg",
            "company_industry": "Software Development",
            "job_description": "Lead the Google Cloud team. Our mission is to accelerate organizations' ability to digitally transform their business with the best infrastructure, platform, industry solutions and expertise.",
            "raw_job_title": "CEO - Google Cloud",
            "job_title": "CEO - Google Cloud",
            "job_started_on": "Jan 2019",
            "job_ended_on": null,
            "job_location": "Mountain View, United States",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1441",
                    "raw_company_name": "Google",
                    "company_name": "Google",
                    "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
                    "company_url": "https://www.linkedin.com/company/google/",
                    "company_website": "https://goo.gle/3DLEokh",
                    "company_location": "Mountain View, California, United States",
                    "company_city": "Mountain View",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1748476800&v=beta&t=9lsGDIQ8Pq-29pe5xRl3G4trohCpd9LHXc93vjDNX4A",
                    "company_industry": "Software Development",
                    "job_description": "Lead the Google Cloud team. Our mission is to accelerate organizations' ability to digitally transform their business with the best infrastructure, platform, industry solutions and expertise.",
                    "raw_job_title": "CEO - Google Cloud",
                    "job_title": "CEO - Google Cloud",
                    "job_started_on": "Jan 2019",
                    "job_ended_on": null,
                    "job_location": "Mountain View, United States",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1441",
            "started_at_company": "Jan 2019",
            "started_at_position": "Jan 2019",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "14718982",
            "industry": "Entertainment Providers",
            "location": "Los Angeles Metropolitan Area",
            "location_county": null,
            "location_city": null,
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "SEO",
                "Advertising",
                "Market Research",
                "Social Media Marketing",
                "Social Media",
                "Online Marketing",
                "Copywriting",
                "Writing",
                "HTML",
                "Blogging",
                "Wordpress",
                "Microsoft Office",
                "Word",
                "Lead Generation",
                "Editing",
                "Outlook",
                "Excel",
                "Web Analytics",
                "Photography",
                "Product Development",
                "Social Networking",
                "Online Advertising",
                "Google Analytics",
                "Optimization",
                "Microsoft Word",
                "Microsoft Excel",
                "SEM",
                "Optimizations",
                "Facebook",
                "Direct Marketing",
                "Digital Strategy",
                "Account Management",
                "Business Development",
                "Marketing",
                "Digital Media",
                "WordPress",
                "Management",
                "Digital Marketing",
                "Analytics",
                "Leadership",
                "Email Marketing",
                "Public Relations",
                "Search Engine Marketing (SEM)",
                "Search Engine Optimization (SEO)"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 2004
                    },
                    "ended_on": {
                        "year": 2006
                    },
                    "fields_of_study": null,
                    "degree": "Bachelor's Degree",
                    "university_id": "2477",
                    "university_name": "UCLA"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Phi Vo",
            "full_name": "Phi Vo",
            "first_name": "Phi",
            "middle_name": "",
            "last_name": "Vo",
            "summary": "Entrepreneurial startup professional with progressive experience managing cross-functional teams. ",
            "sales_id": "ACwAAADgmAYB2n4P3XMjXez_B6LnY7Wa3H84CTs",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAADgmAYB2n4P3XMjXez_B6LnY7Wa3H84CTs,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/phivo",
            "headline": "Principal Strategic Agency Manager at Google | Startup Operator | Marketer",
            "raw_headline": "Principal Strategic Agency Manager at Google | Startup Operator | Marketer",
            "num_of_connections": 3222,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQEPsUtzCpUCCg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732239950103?e=1748476800&v=beta&t=9Bh9zEo8kwG2haQppqHEGKrccZgG9EbNUeW9LBXZ56A",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "Vietnamese"
                }
            ],
            "certifications": [
                {
                    "endedOn": {
                        "month": 7,
                        "year": 2019
                    },
                    "url": "https://academy.exceedlms.com/student/award/17001619",
                    "authority": "Google",
                    "name": "Google Adwords Certification",
                    "licenseNumber": "17001619",
                    "startedOn": {
                        "month": 7,
                        "year": 2018
                    },
                    "company_id": "1441"
                }
            ],
            "company_id": "1441",
            "raw_company_name": "Google",
            "company_name": "Google",
            "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
            "company_url": null,
            "company_website": "https://goo.gle/3DLEokh",
            "company_location": "Mountain View, CA, United States",
            "company_city": "Mountain View",
            "company_state": "CA",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=1749081600&v=beta&t=NGmpIs-BhwHCIoXtxbK5hH_oKvx39ivWIbvhMlxr8hg",
            "company_industry": "Software Development",
            "job_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.",
            "raw_job_title": "Principal Strategic Agency Manager",
            "job_title": "Principal Strategic Agency Manager",
            "job_started_on": "Feb 2025",
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1441",
                    "raw_company_name": "Google",
                    "company_name": "Google",
                    "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
                    "company_url": "https://www.linkedin.com/company/google/",
                    "company_website": "https://goo.gle/3DLEokh",
                    "company_location": "Mountain View, California, United States",
                    "company_city": "Mountain View",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1748476800&v=beta&t=9lsGDIQ8Pq-29pe5xRl3G4trohCpd9LHXc93vjDNX4A",
                    "company_industry": "Software Development",
                    "job_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.",
                    "raw_job_title": "Principal Strategic Agency Manager",
                    "job_title": "Principal Strategic Agency Manager",
                    "job_started_on": "Feb 2025",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1441",
            "started_at_company": "Feb 2025",
            "started_at_position": "Feb 2025",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "18074198",
            "industry": "Technology, Information and Internet",
            "location": "Westport, Connecticut, United States",
            "location_county": null,
            "location_city": "Westport",
            "location_state": "Connecticut",
            "location_country": "United States",
            "skills": [
                "Human Capital Management",
                "Workday Human Capital Management",
                "Strategy",
                "Management Consulting",
                "HR Transformation",
                "Human Resources",
                "SAP",
                "SAP HR",
                "Enterprise Software",
                "HR Policies",
                "Consulting",
                "Service Delivery",
                "HRIS",
                "Employee Relations",
                "Business Process",
                "Program Management",
                "IT Strategy",
                "Business Analysis",
                "Business Transformation",
                "Outsourcing",
                "Talent Management",
                "Business Process Improvement",
                "Resource Management",
                "Shared Services",
                "Change Management",
                "Project Portfolio Management",
                "Vendor Management",
                "Integration",
                "Organizational Design",
                "Project Delivery",
                "Business Process Design",
                "Project Management",
                "Employee Engagement"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 2001
                    },
                    "ended_on": {
                        "year": 2003
                    },
                    "fields_of_study": [
                        "Business and Technology"
                    ],
                    "degree": "Masters",
                    "university_id": "6096",
                    "university_name": "UNSW"
                }
            ],
            "twitter_link": "https://www.twitter.com/richardmccoll",
            "private_website": null,
            "unformatted_full_name": "Richard McColl",
            "full_name": "Richard Mccoll",
            "first_name": "Richard",
            "middle_name": "",
            "last_name": "Mccoll",
            "summary": "With over 30 years of experience in human resources, strategy, consulting, and technology, Richard is a visionary and influential leader in the field of people product and technology. \n\nRichard is passionate about applying human-centric design, design thinking, AI, and technology to create people experiences that support associate growth, inclusion, and well-being. He is also an innovation activist and champion of experimental methodology, fostering a culture of rapid iteration and continuous improvement.",
            "sales_id": "ACwAAAETylYBcNTo9I0eBTScPOX-W9M6cYj1xc4",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAETylYBcNTo9I0eBTScPOX-W9M6cYj1xc4,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/richardmccoll",
            "headline": "Vice President @ Google",
            "raw_headline": "Vice President @ Google",
            "num_of_connections": 8236,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQFPQ6DcJhlbWQ/profile-displayphoto-shrink_800_800/B56ZS988SNGoAg-/0/1738353657396?e=1748476800&v=beta&t=WQ1aPXnZlBp0LBlEeayh1fa4fCMxNEosK-yVn0cwnIM",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [
                {
                    "authority": "IBM",
                    "name": "Disruptive HR in a Cognitive Era",
                    "startedOn": {
                        "month": 11,
                        "year": 2017
                    },
                    "url": "https://www.youracclaim.com/badges/cedce710-fc0c-4a4f-a935-5b4ab4667238/linked_in_profile",
                    "company_id": "1009"
                }
            ],
            "company_id": "1441",
            "raw_company_name": "Google",
            "company_name": "Google",
            "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
            "company_url": null,
            "company_website": "https://goo.gle/3DLEokh",
            "company_location": "Mountain View, CA, United States",
            "company_city": "Mountain View",
            "company_state": "CA",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=1749081600&v=beta&t=NGmpIs-BhwHCIoXtxbK5hH_oKvx39ivWIbvhMlxr8hg",
            "company_industry": "Software Development",
            "job_description": null,
            "raw_job_title": "Vice President",
            "job_title": "Vice President",
            "job_started_on": "Jan 2025",
            "job_ended_on": null,
            "job_location": "New York, New York, United States",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1441",
                    "raw_company_name": "Google",
                    "company_name": "Google",
                    "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
                    "company_url": "https://www.linkedin.com/company/google/",
                    "company_website": "https://goo.gle/3DLEokh",
                    "company_location": "Mountain View, California, United States",
                    "company_city": "Mountain View",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1748476800&v=beta&t=9lsGDIQ8Pq-29pe5xRl3G4trohCpd9LHXc93vjDNX4A",
                    "company_industry": "Software Development",
                    "job_description": null,
                    "raw_job_title": "Vice President",
                    "job_title": "Vice President",
                    "job_started_on": "Jan 2025",
                    "job_ended_on": null,
                    "job_location": "New York, New York, United States",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1441",
            "started_at_company": "Jan 2025",
            "started_at_position": "Jan 2025",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "21281",
            "industry": "IT Services and IT Consulting",
            "location": "Los Altos, California, United States",
            "location_county": null,
            "location_city": "Los Altos",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Virtual Teams",
                "Product Development",
                "Program Management",
                "CRM",
                "Business Strategy",
                "Process Improvement",
                "Team Management",
                "Mobile Devices",
                "IT Operations",
                "IT Management",
                "Business Development",
                "Change Management",
                "R&D",
                "Manufacturing",
                "Infrastructure",
                "Management",
                "Strategic Planning",
                "Start-ups",
                "Operations Management",
                "Strategy",
                "Team Building",
                "Forecasting",
                "Contract Negotiation",
                "Six Sigma",
                "Negotiation",
                "P&L Management",
                "Product Management",
                "Cross-functional Team Leadership",
                "Data Center",
                "Account Management",
                "Outsourcing",
                "Engineering",
                "Project Management",
                "Vendor Management",
                "Professional Services",
                "Engineering Management",
                "Team Leadership",
                "Leadership",
                "Product Lifecycle Management",
                "New Business Development",
                "Competitive Analysis",
                "Product Marketing",
                "Telecommunications",
                "Strategic Partnerships",
                "Project Planning",
                "Cloud Computing",
                "Enterprise Software",
                "SaaS",
                "Solution Selling",
                "Integration"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1986
                    },
                    "ended_on": {
                        "year": 1991
                    },
                    "fields_of_study": [
                        "Engineering"
                    ],
                    "degree": "Bachelor of Science",
                    "university_id": "15251132",
                    "university_name": "California Polytechnic State University-San Luis Obispo"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Joseph Kava",
            "full_name": "Joseph Kava",
            "first_name": "Joseph",
            "middle_name": "",
            "last_name": "Kava",
            "summary": "Seasoned operations executive in the high-technology industry for a Fortune 500 multinational company, with strong focus on innovation, operational excellence, business management, customer relationship management, and information technology.  Proven track record of success in streamlining operations, and maximizing productivity, resulting in record business results.  Exceptionally strong negotiating and deal-making qualifications.  Resourceful and effective decision maker who combines strong leadership and organizational skills with excellent communications.  Additional strengths include:\n\tStrategic / tactical planning, forecasting, capital / operational budgeting and financial cost controls.\n\tLong-term strategy development and leadership of complex projects.\n\tMarket planning, pricing strategies, and new product development and introduction.\n\nSpecialties: Business Operations, P&L management, Business Development, New Product Introduction, Customer Relationship Managment, Product Lifecycle Management, Global Operations Managment.",
            "sales_id": "ACwAAAAAUyEBeZgtX-2gvrWdui79doMfh8OxVyA",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAAAUyEBeZgtX-2gvrWdui79doMfh8OxVyA,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/josephkava",
            "headline": "Data Center Engineering & Operations Executive",
            "raw_headline": "Data Center Engineering & Operations Executive",
            "num_of_connections": 15135,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C4E03AQHE1dfXt5lkOA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516158041044?e=1748476800&v=beta&t=h_ZcuuHqf6QHQjbZ5T_PMV9EJy89m6j2peFv2d_wCVs",
            "is_premium": true,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "1441",
            "raw_company_name": "Google",
            "company_name": "Google",
            "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
            "company_url": null,
            "company_website": "https://goo.gle/3DLEokh",
            "company_location": "Mountain View, CA, United States",
            "company_city": "Mountain View",
            "company_state": "CA",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=1749081600&v=beta&t=NGmpIs-BhwHCIoXtxbK5hH_oKvx39ivWIbvhMlxr8hg",
            "company_industry": "Software Development",
            "job_description": "Responsible for design, engineering, construction, operations and sustainability for Google's global data centers.",
            "raw_job_title": "Vice President - Data Centers",
            "job_title": "Vice President - Data Centers",
            "job_started_on": "Apr 2008",
            "job_ended_on": null,
            "job_location": "Mountain View, California",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1441",
                    "raw_company_name": "Google",
                    "company_name": "Google",
                    "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
                    "company_url": "https://www.linkedin.com/company/google/",
                    "company_website": "https://goo.gle/3DLEokh",
                    "company_location": "Mountain View, California, United States",
                    "company_city": "Mountain View",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1748476800&v=beta&t=9lsGDIQ8Pq-29pe5xRl3G4trohCpd9LHXc93vjDNX4A",
                    "company_industry": "Software Development",
                    "job_description": "Responsible for design, engineering, construction, operations and sustainability for Google's global data centers.",
                    "raw_job_title": "Vice President - Data Centers",
                    "job_title": "Vice President - Data Centers",
                    "job_started_on": "Apr 2008",
                    "job_ended_on": null,
                    "job_location": "Mountain View, California",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1441",
            "started_at_company": "Apr 2008",
            "started_at_position": "Apr 2008",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "49194762",
            "industry": "Technology, Information and Internet",
            "location": "Kirkland, Washington, United States",
            "location_county": null,
            "location_city": "Kirkland",
            "location_state": "Washington",
            "location_country": "United States",
            "skills": [
                "Supply Chain Management",
                "Procurement",
                "Project Management",
                "Process Improvement",
                "Six Sigma",
                "Business Strategy",
                "Manufactura",
                "Lean Manufacturing",
                "Strategic Planning",
                "Manufacturing",
                "Sales Management",
                "Continuous Improvement",
                "Change Management",
                "MRP",
                "Marketing Strategy",
                "Inventory Control",
                "Program Management",
                "Cost Optimization",
                "Logistics",
                "Strategy",
                "Pricing Strategy",
                "Inventory Management",
                "Forecasting",
                "Microsoft Office",
                "SAP",
                "Team Leadership",
                "Negotiation",
                "Cross-functional Team Leadership",
                "Management",
                "Supplier Management",
                "Planning and Forecasting",
                "RFP & RFQ",
                "Distribution",
                "Leadership",
                "Demand Supply Planning",
                "Data Analysis",
                "Data Center",
                "Oracle Agile",
                "Tableau",
                "Visio"
            ],
            "educations": [
                {
                    "started_on": {
                        "month": 8,
                        "year": 2008
                    },
                    "ended_on": {
                        "month": 7,
                        "year": 2011
                    },
                    "fields_of_study": [
                        "Global Business Strategy"
                    ],
                    "degree": "Master of Business Administration - MBA",
                    "university_id": "166586",
                    "university_name": "University of North Carolina at Charlotte"
                },
                {
                    "started_on": {
                        "year": 2008
                    },
                    "ended_on": {
                        "year": 2011
                    },
                    "fields_of_study": [
                        "Global Business Strategy"
                    ],
                    "degree": "Master of Business Administration - MBA",
                    "university_id": null,
                    "university_name": "EGADE Business School del Tecnologico de Monterrey"
                },
                {
                    "started_on": {
                        "year": 1999
                    },
                    "ended_on": {
                        "year": 2004
                    },
                    "fields_of_study": [
                        "Bachelor Degree"
                    ],
                    "degree": "International Business",
                    "university_id": "5669",
                    "university_name": "Tecnologico de Monterrey"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Angie Garza",
            "full_name": "Angie Garza",
            "first_name": "Angie",
            "middle_name": "",
            "last_name": "Garza",
            "summary": "Technology Sourcing and Supply Chain Executive with 20+ years of progressive career experience managing complex supply chains in the Hardware, Infrastructure, Commodities, Public Cloud, and Data Center spaces.  I'm passionate about mentorship and believe in creating opportunities for individuals from all backgrounds to thrive in technology.",
            "sales_id": "ACwAAALupwoB5goeBFpHySeREdgsjkxo2Sju1as",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAALupwoB5goeBFpHySeREdgsjkxo2Sju1as,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/angiegarza",
            "headline": "Results-oriented Data Center Executive with 20+ years driving triple-digit cost savings, building high-performing teams and leading complex sourcing & supply chain organizations in tech. (Lenovo, AWS, X, Google)",
            "raw_headline": "Results-oriented Data Center Executive with 20+ years driving triple-digit cost savings, building high-performing teams and leading complex sourcing & supply chain organizations in tech. (Lenovo, AWS, X, Google)",
            "num_of_connections": 2161,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C4E03AQE7w50fXQ2h-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1646961519552?e=1748476800&v=beta&t=1x10eqRT81LQFLdFeAMPgpaq63JwjwzXw47e2wjX4qM",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "English",
                    "proficiency": "FULL_PROFESSIONAL"
                },
                {
                    "name": "Spanish",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "French",
                    "proficiency": "LIMITED_WORKING"
                },
                {
                    "name": "Italian",
                    "proficiency": "ELEMENTARY"
                }
            ],
            "certifications": [
                {
                    "endedOn": {
                        "month": 3,
                        "year": 2027
                    },
                    "authority": "APICS",
                    "name": "CPIM",
                    "licenseNumber": "144050",
                    "startedOn": {
                        "month": 3,
                        "year": 2017
                    },
                    "company_id": "162476"
                },
                {
                    "authority": "APICS",
                    "name": "S&OP Education Certificate",
                    "licenseNumber": "N/A",
                    "startedOn": {
                        "month": 6,
                        "year": 2019
                    },
                    "url": "http://www.apics.org/credentials-education/education-programs/certificates/sop",
                    "company_id": "162476"
                },
                {
                    "authority": "IDCA - International Data Center Authority",
                    "name": "Data Center Infrastructure Specialist (DCIS)(r)",
                    "licenseNumber": "35208999",
                    "startedOn": {
                        "month": 7,
                        "year": 2020
                    },
                    "url": "https://certificates.idc-a.org/c986e8e3-59fe-4b61-8a6e-bd245dbd93c8",
                    "company_id": "5049742"
                },
                {
                    "authority": "HACR - Hispanic Association on Corporate Responsibility",
                    "name": "Young Achievers Corporate Responsibility Award 2020",
                    "startedOn": {
                        "month": 7,
                        "year": 2021
                    },
                    "url": "https://www.csrwire.com/press_releases/724261-hacr-announces-2021-cohort-young-hispanic-corporate-achievers",
                    "company_id": "1017201"
                },
                {
                    "authority": "Infrastructure Masons",
                    "name": "IM100 Award -Outstanding Contributions to the Data Center and Digital Infrastructure Space",
                    "startedOn": {
                        "month": 10,
                        "year": 2023
                    },
                    "url": "https://drive.google.com/file/d/1HG78tHq7kSi6WTqWiil6BaDQKy9Pju2u/view",
                    "company_id": "10575049"
                },
                {
                    "authority": "The HITEC Foundation",
                    "name": "2024 HITEC Foundation Committee Member",
                    "licenseNumber": "e8f2e324-9851-41b7-8c60-8bae58d19b24",
                    "startedOn": {
                        "month": 8,
                        "year": 2024
                    },
                    "url": "https://www.acreditta.com/credential/e8f2e324-9851-41b7-8c60-8bae58d19b24?utm_source=linkedin_profile&resource_type=badge&resource=e8f2e324-9851-41b7-8c60-8bae58d19b24",
                    "company_id": "27107708"
                },
                {
                    "authority": "HITEC",
                    "name": "2025 HITEC 100 Award",
                    "licenseNumber": "2a3afb5a-293c-45a1-8f28-695696307fc8",
                    "startedOn": {
                        "month": 9,
                        "year": 2024
                    },
                    "url": "https://www.acreditta.com/credential/2a3afb5a-293c-45a1-8f28-695696307fc8?utm_source=linkedin_profile&resource_type=badge&resource=2a3afb5a-293c-45a1-8f28-695696307fc8",
                    "company_id": "795762"
                },
                {
                    "authority": "Women of Color in Technology STEM Conference",
                    "name": "2024 Women of Color Outstanding Achievement in Technology",
                    "startedOn": {
                        "month": 7,
                        "year": 2024
                    },
                    "company_id": "93430652"
                },
                {
                    "authority": "The HITEC Foundation",
                    "name": "2023 HITEC Foundation Mentor",
                    "licenseNumber": "https://www.acreditta.com/credential/9a6f4f65-de84-40d0-8851-b38544e41e96",
                    "startedOn": {
                        "month": 8,
                        "year": 2024
                    },
                    "url": "https://www.acreditta.com/credential/9a6f4f65-de84-40d0-8851-b38544e41e96",
                    "company_id": "27107708"
                }
            ],
            "company_id": "1441",
            "raw_company_name": "Google",
            "company_name": "Google",
            "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
            "company_url": null,
            "company_website": "https://goo.gle/3DLEokh",
            "company_location": "Mountain View, CA, United States",
            "company_city": "Mountain View",
            "company_state": "CA",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=1749081600&v=beta&t=NGmpIs-BhwHCIoXtxbK5hH_oKvx39ivWIbvhMlxr8hg",
            "company_industry": "Software Development",
            "job_description": "Responsible for Sourcing and Supply Chain for all Data Center Infrastructure including Power Generation, Power Distribution, Cooling and Modular Equipment for Data Center Construction. Responsible for $XB Spend.",
            "raw_job_title": "Director, Data Center Infrastructure and Advanced Technology Sourcing",
            "job_title": "Director, Data Center Infrastructure, Advanced Technology Sourcing",
            "job_started_on": "Jul 2023",
            "job_ended_on": null,
            "job_location": "Kirkland, Washington, United States",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1441",
                    "raw_company_name": "Google",
                    "company_name": "Google",
                    "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
                    "company_url": "https://www.linkedin.com/company/google/",
                    "company_website": "https://goo.gle/3DLEokh",
                    "company_location": "Mountain View, California, United States",
                    "company_city": "Mountain View",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1748476800&v=beta&t=9lsGDIQ8Pq-29pe5xRl3G4trohCpd9LHXc93vjDNX4A",
                    "company_industry": "Software Development",
                    "job_description": "Responsible for Sourcing and Supply Chain for all Data Center Infrastructure including Power Generation, Power Distribution, Cooling and Modular Equipment for Data Center Construction. Responsible for $XB Spend.",
                    "raw_job_title": "Director, Data Center Infrastructure and Advanced Technology Sourcing",
                    "job_title": "Director, Data Center Infrastructure, Advanced Technology Sourcing",
                    "job_started_on": "Jul 2023",
                    "job_ended_on": null,
                    "job_location": "Kirkland, Washington, United States",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1441",
            "started_at_company": "Jul 2023",
            "started_at_position": "Jul 2023",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "2037809",
            "industry": "Technology, Information and Internet",
            "location": "San Francisco Bay Area",
            "location_county": null,
            "location_city": null,
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Competitive Analysis",
                "Business Strategy",
                "Analytics",
                "Customer Insight",
                "Management Consulting",
                "Strategic Planning",
                "Acquisition Integration",
                "Cross-functional Team Leadership",
                "Management",
                "Mergers & Acquisitions",
                "Business Process Improvement",
                "Leadership",
                "Business Development",
                "Product Management",
                "Business Planning",
                "Financial Analysis",
                "Financial Modeling",
                "Strategic Partnerships",
                "E-commerce",
                "Strategic Financial Planning",
                "Program Management",
                "Business Analysis",
                "Turnaround Experience",
                "International",
                "Global Strategy",
                "Consumer Insight",
                "Marketing Strategy",
                "Social Media Marketing",
                "Digital Marketing",
                "Marketing"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Management & Strategy, Marketing, IT Industry Management"
                    ],
                    "degree": "MBA",
                    "university_id": "3195",
                    "university_name": "Northwestern University - Kellogg School of Management"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Management Information Systems"
                    ],
                    "degree": "BBA",
                    "university_id": "4556",
                    "university_name": "Texas A&M University"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Carrie Tharp",
            "full_name": "Carrie Tharp",
            "first_name": "Carrie",
            "middle_name": "",
            "last_name": "Tharp",
            "summary": "Innovative Chief Digital Officer/Chief Marketing Officer with experience driving growth and business transformation in retail, consumer products and eCommerce based businesses.  Creating data driven, customer centric strategies that drive growth through new customer experiences, digital innovation, and business model expansion.  Currently focused on evolving retail capabilities for the new digital age - dedicated to building teams and experiences to serve customers in new and compelling ways. ",
            "sales_id": "ACwAAAAfGDEBXMRVvzLz1wRPQjdlqd4A457FgBM",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAAfGDEBXMRVvzLz1wRPQjdlqd4A457FgBM,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/carrie-tharp",
            "headline": "VP Solutions & Industries - Google Cloud | Board Director | Digital Exec",
            "raw_headline": "VP Solutions & Industries - Google Cloud | Board Director | Digital Exec",
            "num_of_connections": 11282,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C5603AQHYBwTtYGg80g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1600182924549?e=1748476800&v=beta&t=2k_WmNYKrCcYPU1il9gjwO9mp22_PDJDDLao3b9sEZI",
            "is_premium": true,
            "is_openlink": true,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "1441",
            "raw_company_name": "Google",
            "company_name": "Google",
            "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
            "company_url": null,
            "company_website": "https://goo.gle/3DLEokh",
            "company_location": "Mountain View, CA, United States",
            "company_city": "Mountain View",
            "company_state": "CA",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=1749081600&v=beta&t=NGmpIs-BhwHCIoXtxbK5hH_oKvx39ivWIbvhMlxr8hg",
            "company_industry": "Software Development",
            "job_description": null,
            "raw_job_title": "VP Global Solutions & Industries - Google Cloud",
            "job_title": "VP Global Solutions and Industries - Google Cloud",
            "job_started_on": "Jun 2024",
            "job_ended_on": null,
            "job_location": "Dallas, Texas, United States ",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1441",
                    "raw_company_name": "Google",
                    "company_name": "Google",
                    "company_description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
                    "company_url": "https://www.linkedin.com/company/google/",
                    "company_website": "https://goo.gle/3DLEokh",
                    "company_location": "Mountain View, California, United States",
                    "company_city": "Mountain View",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1748476800&v=beta&t=9lsGDIQ8Pq-29pe5xRl3G4trohCpd9LHXc93vjDNX4A",
                    "company_industry": "Software Development",
                    "job_description": null,
                    "raw_job_title": "VP Global Solutions & Industries - Google Cloud",
                    "job_title": "VP Global Solutions and Industries - Google Cloud",
                    "job_started_on": "Jun 2024",
                    "job_ended_on": null,
                    "job_location": "Dallas, Texas, United States ",
                    "job_still_working": true
                },
                {
                    "company_id": "33192359",
                    "raw_company_name": "Rue Gilt Groupe",
                    "company_name": "Rue Gilt Groupe",
                    "company_description": "Rue Gilt Groupe is a leading off-price e-commerce portfolio company, connecting the next-generation shopper to world-class brands. We've defined the online treasure hunt through our daily sale events allowing a large, loyal member base to discover over 5,000 premium and luxury brands at prices up to 70% off full-price retail.\n\nRue Gilt Groupe operates three complementary sites - Rue La La, Gilt, and ShopSimon.\n\nOur vision at RGG is to spark delight through daily discovery - we make shopping an occasion to celebrate. At the forefront of fashion and technology, we're also in the business of sparking delight for our Associates. We inspire each other, our Members, and ourselves to push past the expected - every day. Our culture is rooted in our values and together we work to demonstrate being Kind, Passionate, Collaborative, Innovative, Tenacious and Empowered.",
                    "company_url": "https://www.linkedin.com/company/rue-gilt-groupe/",
                    "company_website": "https://careers.ruegiltgroupe.com/",
                    "company_location": "Boston, Massachusetts, United States",
                    "company_city": "Boston",
                    "company_state": "Massachusetts",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/D4E0BAQHmc0apu8jDaw/company-logo_400_400/company-logo_400_400/0/1719933655155/rue_gilt_groupe_logo?e=1748476800&v=beta&t=WOn2AWp0R6ShgIXisduTfCaXaMqvREP0f057vVe-cNU",
                    "company_industry": "Retail",
                    "job_description": null,
                    "raw_job_title": "Board Member",
                    "job_title": "Board Member",
                    "job_started_on": "Feb 2022",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "38264",
                    "raw_company_name": "Vera Bradley",
                    "company_name": "Vera Bradley",
                    "company_description": "Vera Bradley began as an instinct.\n\nAn instinct fueled by the optimism, passion, and bold self-expression of our founders, who imagined a more colorful, beautiful world -- specifically a more beautiful world of bags and travel accessories.\n\nThey listened to themselves and invited generations of women to listen to be their own muses. That, together with a passion for design, artistry, and craft, has inspired independent women everywhere to embrace their very personal and unique individual styles.\n\nWe exist to champion all the ways women move today, enriching everyday moments and playing a supporting role in their adventures. We do that by listening to our own muse, and to yours. In a very real sense, Vera Bradley belongs to every woman who rejects the notion of sameness and the suggestion of conformity and chooses to be bold and expressive in all the ways that matter to them.\n\nVera Bradley designs for you because Vera Bradley is you. And you are your own muse.\n\nOur vision of hope ... Vera Bradley Co-founders Barbara Bradley Baekgaard and Patricia R. Miller began raising funds for breast cancer research in 1993 after the loss of their dear friend, Mary Sloan. Since then, their genuine commitment to this cause has evolved into the Vera Bradley Foundation for Breast Cancer. Together with our donors, event participants and volunteers, we hope for a future free from breast cancer. $25.7 million in contributions have been raised so far to support critical advancements in breast cancer research. Learn more @ www.verabradley.org.",
                    "company_url": "https://www.linkedin.com/company/vera-bradley/",
                    "company_website": "http://www.verabradley.com",
                    "company_location": "Roanoke, Indiana, United States",
                    "company_city": "Roanoke",
                    "company_state": "Indiana",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/D560BAQGOC-h3jG97Aw/company-logo_400_400/company-logo_400_400/0/1720702091343/vera_bradley_logo?e=1748476800&v=beta&t=q43YsJ4Hi1Zn1AaxJMk4sC2zMCDrzIVT1NFJYEf9x1o",
                    "company_industry": "Retail Apparel and Fashion",
                    "job_description": null,
                    "raw_job_title": "Board Member",
                    "job_title": "Board Member",
                    "job_started_on": "Apr 2020",
                    "job_ended_on": null,
                    "job_location": "Fort Wayne, Indiana",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1441",
            "started_at_company": "Jun 2024",
            "started_at_position": "Jun 2024",
            "is_current": true,
            "linkedin_lead_persona": null
        }, {
            "is_full_data": true,
            "linkedin_id": "13540576",
            "industry": "IT Services and IT Consulting",
            "location": "Redmond, Washington, United States",
            "location_county": null,
            "location_city": "Redmond",
            "location_state": "Washington",
            "location_country": "United States",
            "skills": [
                "Web Services",
                "XML",
                "C#",
                "Agile Methodologies",
                "C++",
                "Microsoft SQL Server",
                "Java",
                "Distributed Systems",
                "Software Development",
                ".NET",
                "Java Enterprise Edition",
                "JavaScript",
                "Visual Studio",
                "Cloud Computing",
                "Performance Tuning",
                "Scalability",
                "Databases",
                "Offshore Management",
                "Product Management",
                "Online Advertising",
                "Social Analytics",
                "Large Scale Deployments",
                "Big Data",
                "Computer Science",
                "System Architecture",
                "Optimization",
                "Global Cross-Functional Team Leadership",
                "Software Project Management",
                "Quality Assurance",
                "Gifted Education",
                "Project Management",
                "SMS Gateway",
                "WAP",
                "Machine Learning",
                "Behavioral Targeting",
                "TCP/IP",
                "PowerBuilder",
                "Linux",
                "CVS",
                "DNS management",
                "Visio",
                "PostgreSQL",
                "MySQL",
                "Apache",
                "J2EE Application Development",
                "FoxPro",
                "Powershell",
                "IIS",
                "OOP",
                "HDInsight"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 2012
                    },
                    "ended_on": {
                        "year": 2014
                    },
                    "fields_of_study": null,
                    "degree": "Master of Business Administration (MBA)",
                    "university_id": "15104017",
                    "university_name": "UW Foster School of Business"
                },
                {
                    "started_on": {
                        "month": 9,
                        "year": 2017
                    },
                    "ended_on": {
                        "month": 12,
                        "year": 2017
                    },
                    "fields_of_study": [
                        "C-Suite Communications, Executive Strategies, Emotional Intelligence, Global Challenger, etc."
                    ],
                    "degree": "Executive Certificate - Wharton & Microsoft",
                    "university_id": "5290",
                    "university_name": "The Wharton School"
                },
                {
                    "started_on": {
                        "year": 2001
                    },
                    "ended_on": {
                        "year": 2003
                    },
                    "fields_of_study": [
                        "Computer Science"
                    ],
                    "degree": "MS",
                    "university_id": "6477",
                    "university_name": "Loyola University Chicago"
                },
                {
                    "started_on": {
                        "year": 1994
                    },
                    "ended_on": {
                        "year": 1998
                    },
                    "fields_of_study": [
                        "Computer Science"
                    ],
                    "degree": "BS",
                    "university_id": "47892",
                    "university_name": "Tongji University"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Chu Chen",
            "full_name": "Chu Chen",
            "first_name": "Chu",
            "middle_name": "",
            "last_name": "Chen",
            "summary": "Throughout 25+ years IT professional career, from individual SME to group leader, from East to West, from industry to industry, I enjoyed every success with the team I joined, managed, or built. My mission and passion are to explore technology and market trends and translate them into useful innovations through building efficient teams, high performance products and sustainable businesses models. My areas of professional interest include advanced AI, big data and cloud computing, distributed infrastructure systems, machine learning, social and online advertising, leadership development on entrepreneurship and innovation. A Leader, builder and motivator of large scale, high quality software engineering and architect teams, within which people can work together organically and meet business objectives with both results driven and growth mindsets.\n\n*\tProven track record of executing technology vision to maximize business effectiveness\n*\tAbility to keep optimal balance between strategic and tactical orientations\n*\tExtensive breadth and depth of experience across varied IT disciplines\n*\tAbility to build positive, genuine relationships with internal and external stakeholders\n*\tProven record of building and leading high performance teams\n*\tAcumen for business/technology strategy with influential and collaborative style",
            "sales_id": "ACwAAADOnOABgkaQ6fa288tEKoH6NdIh0NFjhj0",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAADOnOABgkaQ6fa288tEKoH6NdIh0NFjhj0,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/chuchen",
            "headline": "Sr. Director + Chief Architect at Microsoft | Advisory Board Member | Ethical AI Leader | Seasoned Entrepreneur | Youth Coach",
            "raw_headline": "Sr. Director + Chief Architect at Microsoft | Advisory Board Member | Ethical AI Leader | Seasoned Entrepreneur | Youth Coach",
            "num_of_connections": 1353,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQHrqPMrSBTSIA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635724995626?e=1749081600&v=beta&t=DbowN-0h36WxsBYjlJElLS1DrDNotBmLPeOLCSfFPcQ",
            "is_premium": true,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "English"
                },
                {
                    "name": "Chinese (Simplified)"
                }
            ],
            "certifications": [],
            "company_id": "1035",
            "raw_company_name": "Microsoft",
            "company_name": "Microsoft",
            "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
            "company_url": null,
            "company_website": "https://news.microsoft.com/",
            "company_location": "Redmond, Washington, United States",
            "company_city": "Redmond",
            "company_state": "Washington",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHAUh8aLDIbdQ/company-logo_400_400/B56ZXs7P1IGUAY-/0/1743436709506/microsoft_logo?e=1749081600&v=beta&t=_xwWl6xUviS3RO8GQivLxHqnfuIsZp11TKHXxwu5ih0",
            "company_industry": "Software Development",
            "job_description": "- Oversee multi-billion dollars business for MSUS Azure and lead full-cycle Advanced AI developments in the market.\n\n- Build high performance teams to guide large-scale digital transformation initiatives for S&P 500 enterprises on Azure, overseeing global governance/security/compliance, crafting multi-year corporate strategies, and establishing CCoEs to drive innovation and operational excellence.\n\n- Serve as a trusted advisor to C-Suite executives cross industries and markets, guiding the definition of long-term cloud strategies and execution in cutting-edge AI domains, ensuring alignment with organizational goals and delivering measurable results.\n\n- Partner with industry leaders to design and launch modern Data/AI products, setting new standards for cloud solutions while fostering a culture of empowerment and high performance within engineering teams.",
            "raw_job_title": "Sr. Director / Chief Architect , Products and Engineering",
            "job_title": "Senior Director and Chief Architect, Products, Engineering",
            "job_started_on": "Aug 2015",
            "job_ended_on": null,
            "job_location": "Greater Seattle Area",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1035",
                    "raw_company_name": "Microsoft",
                    "company_name": "Microsoft",
                    "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
                    "company_url": "https://www.linkedin.com/company/microsoft/",
                    "company_website": "https://news.microsoft.com/",
                    "company_location": "Redmond, Washington, United States",
                    "company_city": "Redmond",
                    "company_state": "Washington",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_400_400/company-logo_400_400/0/1630652622688/microsoft_logo?e=1749081600&v=beta&t=5YvAwKBaRqqwN0byTrHOfPfx-EKoLbAzA79oOCUCGHg",
                    "company_industry": "Software Development",
                    "job_description": "- Oversee multi-billion dollars business for MSUS Azure and lead full-cycle Advanced AI developments in the market.\n\n- Build high performance teams to guide large-scale digital transformation initiatives for S&P 500 enterprises on Azure, overseeing global governance/security/compliance, crafting multi-year corporate strategies, and establishing CCoEs to drive innovation and operational excellence.\n\n- Serve as a trusted advisor to C-Suite executives cross industries and markets, guiding the definition of long-term cloud strategies and execution in cutting-edge AI domains, ensuring alignment with organizational goals and delivering measurable results.\n\n- Partner with industry leaders to design and launch modern Data/AI products, setting new standards for cloud solutions while fostering a culture of empowerment and high performance within engineering teams.",
                    "raw_job_title": "Sr. Director / Chief Architect , Products and Engineering",
                    "job_title": "Senior Director and Chief Architect, Products, Engineering",
                    "job_started_on": "Aug 2015",
                    "job_ended_on": null,
                    "job_location": "Greater Seattle Area",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1035",
            "started_at_company": "Aug 2015",
            "started_at_position": "Aug 2015",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "91583039",
            "industry": "Transportation, Logistics, Supply Chain and Storage",
            "location": "Greater Seattle Area",
            "location_county": null,
            "location_city": "",
            "location_state": "Washington",
            "location_country": "United States",
            "skills": [
                "Procurement",
                "Cloud Infrastructure",
                "Sales Operations",
                "Mobile Devices",
                "Wireless",
                "Telecommunications",
                "Customer Experience",
                "Management",
                "Customer Retention",
                "Leadership",
                "Retail",
                "Sales",
                "Sales Management",
                "Program Management",
                "Project Management",
                "Direct Sales",
                "Customer Satisfaction",
                "M2M",
                "Process Improvement",
                "Integration",
                "Analysis",
                "Product Development",
                "Quality Assurance",
                "Negotiation",
                "User Acceptance Testing",
                "Supply Chain Management",
                "Supply Chain Operations",
                "Inventory Control",
                "SAP Inventory Management",
                "Team Leadership",
                "Wireless Technologies",
                "Business Process Improvement",
                "Channel Partners",
                "Multi-channel Retail",
                "Returns",
                "Customer Experience Management",
                "Customer Engagement",
                "Inventory Management",
                "Product Lifecycle Management",
                "Distribution Channel Management",
                "Change Management",
                "SAP Supply Chain",
                "Diversity & Inclusion",
                "Accessibility",
                "Inclusion "
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Business Administration and Management"
                    ],
                    "degree": "Master of Business Administration (MBA)",
                    "university_id": "163149",
                    "university_name": "Colorado State University"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Business Administration - Management and Operations"
                    ],
                    "degree": "Bachelor of Arts (B.A.)",
                    "university_id": "166875",
                    "university_name": "Washington State University"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Joe Brooke",
            "full_name": "Joe Brooke",
            "first_name": "Joe",
            "middle_name": "",
            "last_name": "Brooke",
            "summary": "Supply Chain & Operations Planning Professional with extensive experience leading S&OP, supply chain, channel operations, sourcing, procurement, and operational effectiveness for one of the world's leading tech corporations. \n\nPassionate About and Dedicated to: \n\n+ Customer experience, providing the best solutions for the customer and organization.\n\n+ Leveraging data and testing to make smarter decisions and limit expensive mistakes.\n\n+ Uncovering opportunities to strategically drive down expenses and increase profitability.\n\n+ Strengthening complex operations by caring for both the people and the process behind them.\n\n+ Influencing individuals across the organization to perform at their absolute best.\n\n+ Proactively addressing constantly evolving customer expectations and market demands.",
            "sales_id": "ACwAAAV1cj8BIC1Uh-ubCMcGNycNQHcgQbPZdBc",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAV1cj8BIC1Uh-ubCMcGNycNQHcgQbPZdBc,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/josephbrooke",
            "headline": "Director Strategic Sourcing & Procurement, Data Center Infrastructure at Microsoft for Commercial Cloud + AI",
            "raw_headline": "Director Strategic Sourcing & Procurement, Data Center Infrastructure at Microsoft for Commercial Cloud + AI",
            "num_of_connections": 5465,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C4D03AQGwMkuyLYiCmg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517395296290?e=1749081600&v=beta&t=cr9Sg8CfFTUK26-MVkqYz1d53yX-8tg89wejmQjSrgE",
            "is_premium": true,
            "is_openlink": true,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [
                {
                    "authority": "Microsoft",
                    "name": "Accessibility in Action",
                    "startedOn": {
                        "month": 11,
                        "year": 2020
                    },
                    "url": "https://www.youracclaim.com/badges/bb9ebc4d-9ff8-41ef-aaaa-364aa23c5515?source=linked_in_profile",
                    "company_id": "1035"
                }
            ],
            "company_id": "1035",
            "raw_company_name": "Microsoft",
            "company_name": "Microsoft",
            "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
            "company_url": null,
            "company_website": "https://news.microsoft.com/",
            "company_location": "Redmond, Washington, United States",
            "company_city": "Redmond",
            "company_state": "Washington",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHAUh8aLDIbdQ/company-logo_400_400/B56ZXs7P1IGUAY-/0/1743436709506/microsoft_logo?e=1749081600&v=beta&t=_xwWl6xUviS3RO8GQivLxHqnfuIsZp11TKHXxwu5ih0",
            "company_industry": "Software Development",
            "job_description": "Leading the Strategic Sourcing & Procurement Supply Chain for Americas for Cloud Infrastructure, focusing on Long Lead Equipment (LLE) & Substation Design/Bid/Build Procurement. The role includes sourcing, procurement, contracting, negotiating, planning, and technical alignment for various equipment categories including Electrical, Mechanical, Energy, and Design-Bid-Build for Substations. \nKey accomplishments include consolidating equipment procurement, reducing re-work by 50%, reducing submittal durations by 70%, and shaping supply with demand to reduce lost allocations by 25%.\nResponsible for the following equipment categories\n\nProcurement for all Electrical, Mechanical, Energy, & Design-Bid-Build for Substations categories across Americas.\n\nCategories include:\n\nMechanical\n*\tAHU (Air Handling Units), BAS (Building Automation System)\n*\tCRAH (Computer Room Air Handling)\n*\tCRAC (Computer Room Air Conditioner)\n*\tEPMS (Electrical Power Monitoring Systems), B&B (Busway & Busplugs)\n*\tHAC (Hot Aisle Containment)\n*\tACC (Air Cooled Chillers)\n*\tWCC (Water Cooled Chillers)\n*\tCDU (Coolant Distribution Units)\n*\tDCU (Dry Cooling Units/Fin Fan)\n*\tFCT (Fluid Cooling Towers)\n       \n Energy \n*\tSUB (Substation Transformers & High Voltage Breakers)\n*\tGEN (Generators), ATS (Automatic Transfer Switch)\n\nElectrical \n*\tLVS (Low-Voltage Switchgear)\n*\tMVS (Medium-Voltage Switchgear) \n*\tUPS (Uninterruptible Power Supply)\n*\tPDU (Power Distribution Unit)\n*\tE-House Buildings & Skidding",
            "raw_job_title": "Director, Strategic Sourcing & Procurement, Data Center Infrastructure for Commercial Cloud + AI",
            "job_title": "Director, Strategic Sourcing and Procurement, Data Center Infrastructure for Commercial Cloud and AI",
            "job_started_on": "Mar 2023",
            "job_ended_on": null,
            "job_location": "Redmond, Washington, United States",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1035",
                    "raw_company_name": "Microsoft",
                    "company_name": "Microsoft",
                    "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
                    "company_url": "https://www.linkedin.com/company/microsoft/",
                    "company_website": "https://news.microsoft.com/",
                    "company_location": "Redmond, Washington, United States",
                    "company_city": "Redmond",
                    "company_state": "Washington",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_400_400/company-logo_400_400/0/1630652622688/microsoft_logo?e=1749081600&v=beta&t=5YvAwKBaRqqwN0byTrHOfPfx-EKoLbAzA79oOCUCGHg",
                    "company_industry": "Software Development",
                    "job_description": "Leading the Strategic Sourcing & Procurement Supply Chain for Americas for Cloud Infrastructure, focusing on Long Lead Equipment (LLE) & Substation Design/Bid/Build Procurement. The role includes sourcing, procurement, contracting, negotiating, planning, and technical alignment for various equipment categories including Electrical, Mechanical, Energy, and Design-Bid-Build for Substations. \nKey accomplishments include consolidating equipment procurement, reducing re-work by 50%, reducing submittal durations by 70%, and shaping supply with demand to reduce lost allocations by 25%.\nResponsible for the following equipment categories\n\nProcurement for all Electrical, Mechanical, Energy, & Design-Bid-Build for Substations categories across Americas.\n\nCategories include:\n\nMechanical\n*\tAHU (Air Handling Units), BAS (Building Automation System)\n*\tCRAH (Computer Room Air Handling)\n*\tCRAC (Computer Room Air Conditioner)\n*\tEPMS (Electrical Power Monitoring Systems), B&B (Busway & Busplugs)\n*\tHAC (Hot Aisle Containment)\n*\tACC (Air Cooled Chillers)\n*\tWCC (Water Cooled Chillers)\n*\tCDU (Coolant Distribution Units)\n*\tDCU (Dry Cooling Units/Fin Fan)\n*\tFCT (Fluid Cooling Towers)\n       \n Energy \n*\tSUB (Substation Transformers & High Voltage Breakers)\n*\tGEN (Generators), ATS (Automatic Transfer Switch)\n\nElectrical \n*\tLVS (Low-Voltage Switchgear)\n*\tMVS (Medium-Voltage Switchgear) \n*\tUPS (Uninterruptible Power Supply)\n*\tPDU (Power Distribution Unit)\n*\tE-House Buildings & Skidding",
                    "raw_job_title": "Director, Strategic Sourcing & Procurement, Data Center Infrastructure for Commercial Cloud + AI",
                    "job_title": "Director, Strategic Sourcing and Procurement, Data Center Infrastructure for Commercial Cloud and AI",
                    "job_started_on": "Mar 2023",
                    "job_ended_on": null,
                    "job_location": "Redmond, Washington, United States",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1035",
            "started_at_company": "Mar 2023",
            "started_at_position": "Mar 2023",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "48600655",
            "industry": "Entertainment Providers",
            "location": "San Francisco Bay Area",
            "location_county": null,
            "location_city": null,
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Social Media",
                "Digital Strategy",
                "Photoshop",
                "Social Media Marketing",
                "Digital Marketing",
                "Digital Media",
                "Creative Direction",
                "Digital Communication Strategy",
                "Editorial",
                "Community Management",
                "Content Strategy",
                "PS3",
                "Online Advertising",
                "Video",
                "Video Games",
                "Copywriting",
                "Mobile Games",
                "Interactive Entertainment",
                "Social Games",
                "Xbox 360",
                "Marketing Communications",
                "Online Marketing",
                "Management",
                "Marketing",
                "Marketing Strategy",
                "Integrated Marketing",
                "Social Networking",
                "SEO",
                "Web Analytics",
                "Facebook",
                "Mobile Marketing",
                "New Media"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 2000
                    },
                    "ended_on": {
                        "year": 2002
                    },
                    "fields_of_study": [
                        "Comp Sci"
                    ],
                    "degree": null,
                    "university_id": "166678",
                    "university_name": "University of Technology Sydney"
                },
                {
                    "started_on": {
                        "year": 1985
                    },
                    "ended_on": {
                        "year": 1999
                    },
                    "fields_of_study": null,
                    "degree": null,
                    "university_id": null,
                    "university_name": "Trinity Grammar School"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Charles Kha",
            "full_name": "Charles Kha",
            "first_name": "Charles",
            "middle_name": "",
            "last_name": "Kha",
            "summary": null,
            "sales_id": "ACwAAALllk8BQDzc6n4-5Au_9pYa66XQae1xC3w",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAALllk8BQDzc6n4-5Au_9pYa66XQae1xC3w,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/charles-kha-46733914",
            "headline": "Vice President Integrated Marketing, Microsoft ",
            "raw_headline": "Vice President Integrated Marketing, Microsoft ",
            "num_of_connections": 1888,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C5603AQFTJsGCVja2TA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1557039754405?e=1749081600&v=beta&t=iHQiZ19BQjTENNqx9JA8NSITJDZ9ot67T4UCNWxq3sI",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "1035",
            "raw_company_name": "Microsoft",
            "company_name": "Microsoft",
            "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
            "company_url": null,
            "company_website": "https://news.microsoft.com/",
            "company_location": "Redmond, Washington, United States",
            "company_city": "Redmond",
            "company_state": "Washington",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHAUh8aLDIbdQ/company-logo_400_400/B56ZXs7P1IGUAY-/0/1743436709506/microsoft_logo?e=1749081600&v=beta&t=_xwWl6xUviS3RO8GQivLxHqnfuIsZp11TKHXxwu5ih0",
            "company_industry": "Software Development",
            "job_description": null,
            "raw_job_title": "Vice President Integrated Marketing",
            "job_title": "Vice President Integrated Marketing",
            "job_started_on": "Feb 2025",
            "job_ended_on": null,
            "job_location": "San Francisco Bay Area",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1035",
                    "raw_company_name": "Microsoft",
                    "company_name": "Microsoft",
                    "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
                    "company_url": "https://www.linkedin.com/company/microsoft/",
                    "company_website": "https://news.microsoft.com/",
                    "company_location": "Redmond, Washington, United States",
                    "company_city": "Redmond",
                    "company_state": "Washington",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_400_400/company-logo_400_400/0/1630652622688/microsoft_logo?e=1749081600&v=beta&t=5YvAwKBaRqqwN0byTrHOfPfx-EKoLbAzA79oOCUCGHg",
                    "company_industry": "Software Development",
                    "job_description": null,
                    "raw_job_title": "Vice President Integrated Marketing",
                    "job_title": "Vice President Integrated Marketing",
                    "job_started_on": "Feb 2025",
                    "job_ended_on": null,
                    "job_location": "San Francisco Bay Area",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1035",
            "started_at_company": "Feb 2025",
            "started_at_position": "Feb 2025",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "23212604",
            "industry": "Data Infrastructure and Analytics",
            "location": "Singapore, Singapore",
            "location_county": null,
            "location_city": null,
            "location_state": "Singapore",
            "location_country": "Singapore",
            "skills": [
                "Engineering, Procurement, and Construction (EPC)",
                "Supply Chain Operations",
                "Cross-functional Team Leadership",
                "Strategic Sourcing",
                "Global Sourcing",
                "Leadership",
                "Six Sigma",
                "Supply Chain",
                "Program Management",
                "Supply Chain Management",
                "Management",
                "Manufacturing",
                "Business Transformation",
                "Project Planning",
                "Procurement",
                "Integration",
                "Project Management",
                "Business Strategy",
                "Strategy",
                "Toyota Production System",
                "Product Development",
                "Lean Manufacturing",
                "Operations Management",
                "Process Engineering",
                "Vendor Management",
                "Continuous Improvement",
                "Sourcing",
                "Supply Management"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Business Management"
                    ],
                    "degree": "Senior Executive Management",
                    "university_id": "157274",
                    "university_name": "Indian Institute of Management, Calcutta"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Business Management"
                    ],
                    "degree": "Post Graduation in Management",
                    "university_id": "8455628",
                    "university_name": "The Maharaja Sayajirao University of Baroda"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": null,
                    "degree": "Bachelor of Engineering",
                    "university_id": "15112808",
                    "university_name": "Maharashtra Institute of Technology"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "High School"
                    ],
                    "degree": null,
                    "university_id": "19094407",
                    "university_name": "The Bishop's School"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Sarang Gupta",
            "full_name": "Sarang Gupta",
            "first_name": "Sarang",
            "middle_name": "",
            "last_name": "Gupta",
            "summary": "Executive leader with 27+ years of extensive diverse industry experience in successfully leading Global Strategic Sourcing, Procurement, Supplier Quality & Supply Chain with multidisciplinary regional team development.\n\nSuccessfully worked across different Industry sectors such as Hyperscale Cloud Infrastructure (Data Center Construction), Heavy Industrial (Power Infrastructure and Oil & Gas), Technology (Healthcare Imaging & Diagnostics), Automotive & Consumer Electronics (Large Scale Manufacturing). \n\nCareer & professional development in top leading multinational organizations in growing leadership positions in Microsoft, Whirlpool Corporation, General Electric & General Motors.",
            "sales_id": "ACwAAAFiMjwBz75LuS6UAVL8L7azaJrNBgzP2G0",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAFiMjwBz75LuS6UAVL8L7azaJrNBgzP2G0,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/sarang1",
            "headline": "Senior Director at Microsoft | Data Center Infrastructure | Global Supply Chain & Strategic Sourcing | Singapore",
            "raw_headline": "Senior Director at Microsoft | Data Center Infrastructure | Global Supply Chain & Strategic Sourcing | Singapore",
            "num_of_connections": 1480,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C5603AQF8AYj2QWJnbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1638805017513?e=1749081600&v=beta&t=oWrh_nOx2jWmRYAhoSmXhVOzurnQ64L8aZdll04Kj4Y",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [
                {
                    "authority": "GE",
                    "name": "Manager Development Course (GE Crotonville Leadership)",
                    "startedOn": {
                        "month": 2,
                        "year": 2018
                    },
                    "company_id": "1015"
                },
                {
                    "authority": "GE",
                    "name": "Advance Manager Course (GE Crotonville Leadership)",
                    "startedOn": {
                        "month": 6,
                        "year": 2010
                    },
                    "company_id": "1015"
                }
            ],
            "company_id": "1035",
            "raw_company_name": "Microsoft",
            "company_name": "Microsoft",
            "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
            "company_url": null,
            "company_website": "https://news.microsoft.com/",
            "company_location": "Redmond, Washington, United States",
            "company_city": "Redmond",
            "company_state": "Washington",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHAUh8aLDIbdQ/company-logo_400_400/B56ZXs7P1IGUAY-/0/1743436709506/microsoft_logo?e=1749081600&v=beta&t=_xwWl6xUviS3RO8GQivLxHqnfuIsZp11TKHXxwu5ih0",
            "company_industry": "Software Development",
            "job_description": "Leading APAC Regional Supply Chain and Procurement organization for Hyperscale Data Center Construction & Infrastructure with active projects in 10+ countries across Asia. Covering entire scope of procurement & contracting for long lead Equipment, Construction General Contractors, Power Infrastructure, Architectural Engineering and other Services with a multi-Billion USD annual spend. Leading a multidisciplinary cross regional team to execute and set up strategies for long term cloud infrastructure growth with regional supply base capability enhancement, including future capacity augmentation using Liquid Cooling for AI.",
            "raw_job_title": "Senior Director - Global Strategic Sourcing & Supply Chain | Data Center Infrastructure | APAC",
            "job_title": "Senior Director - Global Strategic Sourcing and Supply Chain, Data Center Infrastructure, APAC",
            "job_started_on": "Jun 2022",
            "job_ended_on": null,
            "job_location": "Singapore",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1035",
                    "raw_company_name": "Microsoft",
                    "company_name": "Microsoft",
                    "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
                    "company_url": "https://www.linkedin.com/company/microsoft/",
                    "company_website": "https://news.microsoft.com/",
                    "company_location": "Redmond, Washington, United States",
                    "company_city": "Redmond",
                    "company_state": "Washington",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_400_400/company-logo_400_400/0/1630652622688/microsoft_logo?e=1749081600&v=beta&t=5YvAwKBaRqqwN0byTrHOfPfx-EKoLbAzA79oOCUCGHg",
                    "company_industry": "Software Development",
                    "job_description": "Leading APAC Regional Supply Chain and Procurement organization for Hyperscale Data Center Construction & Infrastructure with active projects in 10+ countries across Asia. Covering entire scope of procurement & contracting for long lead Equipment, Construction General Contractors, Power Infrastructure, Architectural Engineering and other Services with a multi-Billion USD annual spend. Leading a multidisciplinary cross regional team to execute and set up strategies for long term cloud infrastructure growth with regional supply base capability enhancement, including future capacity augmentation using Liquid Cooling for AI.",
                    "raw_job_title": "Senior Director - Global Strategic Sourcing & Supply Chain | Data Center Infrastructure | APAC",
                    "job_title": "Senior Director - Global Strategic Sourcing and Supply Chain, Data Center Infrastructure, APAC",
                    "job_started_on": "Jun 2022",
                    "job_ended_on": null,
                    "job_location": "Singapore",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1035",
            "started_at_company": "Jun 2022",
            "started_at_position": "Jun 2022",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "1198579",
            "industry": "IT Services and IT Consulting",
            "location": "The Randstad, Netherlands",
            "location_county": null,
            "location_city": null,
            "location_state": "The Randstad",
            "location_country": "Netherlands",
            "skills": [
                "Microsoft Partner Strategy",
                "Customer Success",
                "Digital Transformation",
                "Business Strategy",
                "Leadership",
                "Cloud Computing",
                "SharePoint",
                "Microsoft Technologies",
                "Architecture",
                "Enterprise Architecture",
                "Solution Architecture",
                "IT Strategy",
                "Business Intelligence",
                "Enterprise Software",
                "Software Project Management",
                "Pre-sales",
                "SaaS",
                "Consulting",
                "Web Services",
                "IT Management",
                "Architectures",
                "Microsoft Office Sharepoint Server",
                "Scrum",
                "SOA",
                "Office 365",
                "Security",
                "Management",
                "Information Technology",
                "Microsoft Products",
                "Cloud computing",
                "Software as a Service (SaaS)"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1994
                    },
                    "ended_on": {
                        "year": 1998
                    },
                    "fields_of_study": [
                        "Small Business"
                    ],
                    "degree": "Bachelor's degree",
                    "university_id": "8000",
                    "university_name": "Inholland University of Applied Sciences"
                },
                {
                    "started_on": {
                        "year": 2018
                    },
                    "ended_on": {
                        "year": 2019
                    },
                    "fields_of_study": [
                        "Management & Leadership"
                    ],
                    "degree": null,
                    "university_id": "1501",
                    "university_name": "MIT Sloan School of Management"
                },
                {
                    "started_on": {
                        "year": 2017
                    },
                    "ended_on": {
                        "year": 2017
                    },
                    "fields_of_study": [
                        "Philosophy and Critical Thinking"
                    ],
                    "degree": null,
                    "university_id": "166664",
                    "university_name": "The University of Queensland"
                },
                {
                    "started_on": {
                        "year": 2016
                    },
                    "ended_on": {
                        "year": 2016
                    },
                    "fields_of_study": [
                        "User Innovation"
                    ],
                    "degree": null,
                    "university_id": "16181368",
                    "university_name": "MITx Courses"
                },
                {
                    "started_on": {
                        "year": 2015
                    },
                    "ended_on": {
                        "year": 2015
                    },
                    "fields_of_study": [
                        "Innovating in Health Care"
                    ],
                    "degree": null,
                    "university_id": "9220773",
                    "university_name": "Harvard Business School Online"
                }
            ],
            "twitter_link": "https://www.twitter.com/DannyBurlage",
            "private_website": "https://www.wortell.nl",
            "unformatted_full_name": "Danny Burlage 💚💜",
            "full_name": "Danny Burlage",
            "first_name": "Danny",
            "middle_name": "",
            "last_name": "Burlage",
            "summary": "Founder & CEO @ Wortell\n\nWortell ondersteund organisaties met een succesvolle inzet van technologie. Daarmee kun jij je focussen op jouw business. En dat al sinds 1997!\n\nAls CEO van Wortell leid ik een organisatie die verder gaat dan technische oplossingen; we transformeren de manier waarop bedrijven werken en groeien door hen te voorzien van digitale strategieen die concrete bedrijfsresultaten opleveren. Met een sterke focus op Microsoft-expertise helpen wij organisaties om technologie om te zetten in een katalysator voor hun kernprocessen.\n\nWortell staat voor innovatie met impact. Van het optimaliseren van beveiligingsstructuren tot het vereenvoudigen van werkprocessen - wij verbinden technologie met bedrijfswaarde. Onze missie is helder: mensen in hun kracht zetten door technologie, zodat elke investering direct bijdraagt aan de zakelijke doelen van onze klanten. Benieuwd hoe we jouw organisatie kunnen ondersteunen? Stuur mij gerust een bericht!",
            "sales_id": "ACwAAAASSfMBtFw330S4XHc5hv2QA6AYEuLFLBs",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAASSfMBtFw330S4XHc5hv2QA6AYEuLFLBs,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/dannyburlage",
            "headline": "Founder & CEO @ Wortell -  Microsoft Security MSSP of the Year 2024 ",
            "raw_headline": "Founder & CEO @ Wortell -  Microsoft Security MSSP of the Year 2024 ✨🏆",
            "num_of_connections": 17181,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C5603AQHzXOrpkCKO4g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1599740047741?e=1749081600&v=beta&t=zEpB--phs4U2xtSYy-f-Poo6FEFZvNy6NgAAqwDtHJ8",
            "is_premium": true,
            "is_openlink": true,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "English",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "Dutch",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "German",
                    "proficiency": "LIMITED_WORKING"
                }
            ],
            "certifications": [],
            "company_id": "1035",
            "raw_company_name": "Microsoft",
            "company_name": "Microsoft",
            "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
            "company_url": null,
            "company_website": "https://news.microsoft.com/",
            "company_location": "Redmond, Washington, United States",
            "company_city": "Redmond",
            "company_state": "Washington",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHAUh8aLDIbdQ/company-logo_400_400/B56ZXs7P1IGUAY-/0/1743436709506/microsoft_logo?e=1749081600&v=beta&t=_xwWl6xUviS3RO8GQivLxHqnfuIsZp11TKHXxwu5ih0",
            "company_industry": "Software Development",
            "job_description": "Wortell is 12-vold Microsoft Gold Certified Partner, Microsoft Online Partner, Microsoft Healtcare Partner, Microsoft LRG Partner, Microsoft Education Partner and Microsoft Surface Partner.",
            "raw_job_title": "Partner",
            "job_title": "Partner",
            "job_started_on": "1997",
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "21216",
                    "raw_company_name": "Wortell",
                    "company_name": "Wortell",
                    "company_description": "We empower people. \n\nAt Wortell, our goal is to close the gap between the endless possibilities at our disposal, and the degree to which people and businesses make use of them. We want to empower people with technology. That is the mission of Wortell and the reason we go to work with a smile every day. \n\nClosing the Gap since 1997. \n\nFor more than 20 years we have been helping organisations to stay ahead in their changing business environment by making smart use of new technology. \n\nSpecialised in modern outsourcing in the areas of work, cloud, security, smart and meet. We are happy to take final responsibility and take care of the delivered environments for you.  \n\nTake a look at our product pages where we tell you more about MDR, Mission Critical Azure, Smart Data Platform, Teams Calling & Meetings and Work, the modern workplace. \n\nWe have been a dedicated Microsoft Partner for many years and belong to a select group of partners who work closely with Microsoft. \n\nProud \n\nWhere are we proud of? That Wortell has been elected 2 times as best Microsoft partner of The Netherlands, 2 times as best Office 365 partner worldwide and 2 times as Best Employer in the IT industry. \n\nFurthermore Wortell is a 16 times Microsoft Gold partner and we go the extra mile with proven expertise through multiple Advanced Specializations. \n\nMicrosoft Advanced Specializations \n\nThreat Protection  \nMicrosoft Windows Virtual Desktop \nTeamwork Deployment  \nAdoption and Change management  \nMeetings and Meeting Rooms for Microsoft Teams  \nIdentity and Access Management \nWindows Server & SQL Server Migration to Microsoft Azure\nCalling for Microsoft Teams \n\nWe are also a Microsoft FastTrack and Power BI Solution partner and part of the Azure Migration Programme (AMP) and Microsoft Intelligent Security Association (MISA). \n",
                    "company_url": "https://www.linkedin.com/company/wortell/",
                    "company_website": "http://www.wortell.nl",
                    "company_location": "Hoofddorp, North Holland, Netherlands",
                    "company_city": "Hoofddorp",
                    "company_state": "North Holland",
                    "company_country": "Netherlands",
                    "company_image": "https://media.licdn.com/dms/image/v2/D4E0BAQEGvuFVGrcYAQ/company-logo_400_400/company-logo_400_400/0/1691393063028/wortell_logo?e=1749081600&v=beta&t=kJwE_0hRf5MhDPChb8UepqRh8xWGqptMxJuEJMSFgLw",
                    "company_industry": "Information Technology & Services",
                    "job_description": "Als oprichter en CEO van Wortell leid ik onze strategische en innovatieve initiatieven, met als doel om technologie in te zetten als een krachtig middel voor bedrijfsverbetering. Mijn rol draait om het verbinden van onze Microsoft-expertise met de specifieke zakelijke uitdagingen van onze klanten. Dit varieert van het ontwikkelen van toekomstbestendige werkplekken tot het bieden van 24x7 beveiligingsoplossingen die onze klanten helpen zich te focussen op hun core business.\n\nOnder mijn leiding is Wortell gegroeid naar een organisatie met meer dan 600 medewerkers verdeeld over Nederland en Belgie. Wortell levert haar diensten aan branches zoals zorg, financiele en zakelijke dienstverlening en industrue. Wij voegen waarde toe door processen te vereenvoudigen, compliance te waarborgen en veilige, flexibele werkplekken te creeren.",
                    "raw_job_title": "Founder, CEO",
                    "job_title": "Founder, CEO",
                    "job_started_on": "Jan 1997",
                    "job_ended_on": null,
                    "job_location": "Amsterdam Area",
                    "job_still_working": true
                },
                {
                    "company_id": "1035",
                    "raw_company_name": "Microsoft",
                    "company_name": "Microsoft",
                    "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
                    "company_url": "https://www.linkedin.com/company/microsoft/",
                    "company_website": "https://news.microsoft.com/",
                    "company_location": "Redmond, Washington, United States",
                    "company_city": "Redmond",
                    "company_state": "Washington",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_400_400/company-logo_400_400/0/1630652622688/microsoft_logo?e=1749081600&v=beta&t=5YvAwKBaRqqwN0byTrHOfPfx-EKoLbAzA79oOCUCGHg",
                    "company_industry": "Software Development",
                    "job_description": "Wortell is 12-vold Microsoft Gold Certified Partner, Microsoft Online Partner, Microsoft Healtcare Partner, Microsoft LRG Partner, Microsoft Education Partner and Microsoft Surface Partner.",
                    "raw_job_title": "Partner",
                    "job_title": "Partner",
                    "job_started_on": "1997",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1035",
            "started_at_company": "1997",
            "started_at_position": "1997",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "10331315",
            "industry": "Public Health",
            "location": "San Diego, California, United States",
            "location_county": null,
            "location_city": "San Diego",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "SSIS",
                "SSRS",
                "Microsoft SQL Server",
                "ETL",
                "Data Modeling",
                "Data Warehousing",
                "Relational Databases",
                "Database Design",
                "Business Intelligence",
                "T-SQL",
                "Business Intelligence Tools",
                "Analysis Services",
                "OLAP",
                "SQL Tuning",
                "Databases",
                "OLTP",
                "Data Mining",
                "SQL",
                "SSAS 2008",
                "Big Data Analytics",
                "Enterprise Architecture",
                "Database Development",
                "Big Data"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1989
                    },
                    "ended_on": {
                        "year": 1993
                    },
                    "fields_of_study": [
                        "Physics"
                    ],
                    "degree": "Bachelor of Science (BS)",
                    "university_id": "3382",
                    "university_name": "UC San Diego"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Binh Cao",
            "full_name": "Binh Cao",
            "first_name": "Binh",
            "middle_name": "",
            "last_name": "Cao",
            "summary": "Experienced Cloud Solution Architect specialized in customer digital transformation and adoption of AI, advanced analytics (machine learning), and cost-effective ways of leveraging the cloud.  I help businesses add new capabilities leveraging data as the new currency and enhance their competitiveness.  ",
            "sales_id": "ACwAAACdpLMBHg-vm0tpHhyJPMMhCu8cGVre5mo",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAACdpLMBHg-vm0tpHhyJPMMhCu8cGVre5mo,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/binh-cao-92b5623",
            "headline": "Principal Cloud Solution Architect (Azure Databases & AI focus)",
            "raw_headline": "Principal Cloud Solution Architect (Azure Databases & AI focus)",
            "num_of_connections": 1039,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C4E03AQH3gap21MLlWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516309470486?e=1749081600&v=beta&t=31Q71wxnR26lSfxDPdUD5VMLpmWk7t2tyrEEI0XXQYI",
            "is_premium": true,
            "is_openlink": true,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [
                {
                    "authority": "edX",
                    "name": "Edx_DAT208x_Python_For_Data_Science",
                    "licenseNumber": "18558a9244c34d8fbd352081d783d130",
                    "startedOn": {
                        "month": 5,
                        "year": 2018
                    },
                    "url": "https://courses.microsoft.com/certificates/18558a9244c34d8fbd352081d783d130",
                    "company_id": "2746406"
                },
                {
                    "authority": "Microsoft",
                    "name": "Microsoft Certified Azure Data Scientist Associate",
                    "startedOn": {
                        "month": 6,
                        "year": 2019
                    },
                    "company_id": "1035"
                },
                {
                    "authority": "Microsoft",
                    "name": "Microsoft Certified Azure AI Engineer Associate",
                    "startedOn": {
                        "month": 5,
                        "year": 2019
                    },
                    "company_id": "1035"
                },
                {
                    "authority": "Microsoft",
                    "name": "Microsoft Certified Azure Data Engineer Associate",
                    "startedOn": {
                        "month": 5,
                        "year": 2019
                    },
                    "company_id": "1035"
                },
                {
                    "authority": "LinkedIn",
                    "name": "DevOps for Data Scientists",
                    "startedOn": {
                        "month": 7,
                        "year": 2019
                    },
                    "url": "https://www.linkedin.com/learning/certificates/28b5c5760a94bcbae81f31290b4655da7bc345d7e65a058f60e5e580bde491de?trk=backfilled_certificate",
                    "company_id": "1337"
                },
                {
                    "authority": "Microsoft",
                    "name": "Microsoft Data Warehouse OpenHack",
                    "licenseNumber": "Open Hack Data Engineer",
                    "startedOn": {
                        "month": 9,
                        "year": 2019
                    },
                    "company_id": "1035"
                },
                {
                    "authority": "Microsoft",
                    "name": "BACK ON TRACK HACK Mentor",
                    "startedOn": {
                        "month": 7,
                        "year": 2020
                    },
                    "url": "https://www.youracclaim.com/badges/abc63a4c-ecae-47fc-86c3-8c311926bb32?source=linked_in_profile",
                    "company_id": "1035"
                },
                {
                    "authority": "Microsoft",
                    "name": "What the Hack: COVID-19 Response Coach",
                    "licenseNumber": "Azure Synapse Data Warehouse Hack",
                    "startedOn": {
                        "month": 3,
                        "year": 2021
                    },
                    "url": "https://www.youracclaim.com/badges/45f968e9-a840-40b4-b61f-8287a5375dd1?source=linked_in_profile",
                    "company_id": "1035"
                },
                {
                    "authority": "Microsoft",
                    "name": "Connected Communities - Subject Matter Expert 2021",
                    "licenseNumber": "Connected Communities - Subject Matter Expert 2021",
                    "startedOn": {
                        "month": 6,
                        "year": 2021
                    },
                    "url": "https://www.credly.com/badges/4bae6658-4097-4874-94b0-938ce50bc668?source=linked_in_profile",
                    "company_id": "1035"
                },
                {
                    "authority": "Microsoft",
                    "name": "Microsoft Global Hackathon 2021",
                    "startedOn": {
                        "month": 10,
                        "year": 2021
                    },
                    "url": "https://www.credly.com/badges/27328e42-7220-4d28-95ae-386197569637?source=linked_in_profile",
                    "company_id": "1035"
                },
                {
                    "authority": "Databricks",
                    "name": "Azure DataBricks Partner Training - Developer Foundations",
                    "licenseNumber": "41814453",
                    "startedOn": {
                        "month": 11,
                        "year": 2021
                    },
                    "url": "https://credentials.databricks.com/396f9f93-6a2b-4a2d-9a6e-ee93f0547280",
                    "company_id": "3477522"
                },
                {
                    "authority": "Microsoft",
                    "name": "Connected Communities - Subject Matter Expert 2025",
                    "startedOn": {
                        "month": 4,
                        "year": 2024
                    },
                    "url": "https://www.credly.com/badges/0ecdffc8-b454-4559-8043-1ba8b034f12b/linked_in_profile",
                    "company_id": "1035"
                }
            ],
            "company_id": "1035",
            "raw_company_name": "Microsoft",
            "company_name": "Microsoft",
            "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
            "company_url": null,
            "company_website": "https://news.microsoft.com/",
            "company_location": "Redmond, Washington, United States",
            "company_city": "Redmond",
            "company_state": "Washington",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHAUh8aLDIbdQ/company-logo_400_400/B56ZXs7P1IGUAY-/0/1743436709506/microsoft_logo?e=1749081600&v=beta&t=_xwWl6xUviS3RO8GQivLxHqnfuIsZp11TKHXxwu5ih0",
            "company_industry": "Software Development",
            "job_description": "Anything related to database, big data, and machine learning",
            "raw_job_title": "Database Platform Solution Architect (Database, IOT, BI Analytics, and Machine Learning focused)",
            "job_title": "Database Platform Solution Architect (Database, IOT, BI Analytics,, Machine Learning Focused)",
            "job_started_on": "Mar 2006",
            "job_ended_on": null,
            "job_location": "San Diego, Irvine, Los Angeles",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1035",
                    "raw_company_name": "microsoft",
                    "company_name": "Microsoft",
                    "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
                    "company_url": "https://www.linkedin.com/company/microsoft/",
                    "company_website": "https://news.microsoft.com/",
                    "company_location": "Redmond, Washington, United States",
                    "company_city": "Redmond",
                    "company_state": "Washington",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_400_400/company-logo_400_400/0/1630652622688/microsoft_logo?e=1749081600&v=beta&t=5YvAwKBaRqqwN0byTrHOfPfx-EKoLbAzA79oOCUCGHg",
                    "company_industry": "Software Development",
                    "job_description": "Anything related to database, big data, and machine learning",
                    "raw_job_title": "Database Platform Solution Architect (Database, IOT, BI Analytics, and Machine Learning focused)",
                    "job_title": "Database Platform Solution Architect (Database, IOT, BI Analytics,, Machine Learning Focused)",
                    "job_started_on": "Mar 2006",
                    "job_ended_on": null,
                    "job_location": "San Diego, Irvine, Los Angeles",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1035",
            "started_at_company": "Mar 2006",
            "started_at_position": "Mar 2006",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "3210895",
            "industry": "Construction",
            "location": "Houston, Texas, United States",
            "location_county": null,
            "location_city": "Houston",
            "location_state": "Texas",
            "location_country": "United States",
            "skills": [
                "Contract Negotiation",
                "Procurement",
                "Supply Chain Management",
                "Supply Chain",
                "Contract Management",
                "Purchasing",
                "Materials Management",
                "Logistics",
                "Project Planning",
                "Manufacturing",
                "Sourcing",
                "Project Management",
                "Management",
                "EPC",
                "Strategic Sourcing",
                "Strategic Planning",
                "Engineering",
                "Global Sourcing",
                "Negotiation",
                "Forecasting",
                "Factory",
                "Purchase Management",
                "Six Sigma",
                "Business Planning",
                "Supplier Negotiation",
                "Risk Management",
                "Cross-functional Team Leadership",
                "Budgets",
                "Leadership",
                "Supply Management",
                "EPCM",
                "Construction Management",
                "Inventory Optimization",
                "Demand Forecasting",
                "SAP",
                "Continuous Improvement",
                "Materials",
                "Team Leadership",
                "Energy",
                "Demand Planning",
                "Operations Management",
                "Pricing",
                "EPCG",
                "SEZ",
                "Petroleum",
                "Lean Manufacturing",
                "Production Planning",
                "Pipelines",
                "Automotive",
                "Derivatives"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 2001
                    },
                    "ended_on": {
                        "year": 2002
                    },
                    "fields_of_study": [
                        "Marketing, Finance, 2001 - 2002"
                    ],
                    "degree": "MBA",
                    "university_id": "234299",
                    "university_name": "Institute of Management Technology, Dubai"
                },
                {
                    "started_on": {
                        "year": 1996
                    },
                    "ended_on": {
                        "year": 1997
                    },
                    "fields_of_study": [
                        "Material Management"
                    ],
                    "degree": "Post Graduate Diploma in Material Management",
                    "university_id": "8536038",
                    "university_name": "Annamalai University"
                },
                {
                    "started_on": {
                        "year": 1991
                    },
                    "ended_on": {
                        "year": 1995
                    },
                    "fields_of_study": [
                        "Mechanical"
                    ],
                    "degree": "BE",
                    "university_id": "15105506",
                    "university_name": "Motilal Nehru National Institute Of Technology"
                }
            ],
            "twitter_link": "https://www.twitter.com/madhivanan",
            "private_website": "http://www.ril.com",
            "unformatted_full_name": "Madhivanan T.A (Madhi) PMP,  ICF (ACC)",
            "full_name": "Madhivanan TA",
            "first_name": "Madhivanan",
            "middle_name": "",
            "last_name": "TA",
            "summary": "A global leader with a proven track record in managing Hyperscaler / Datacenter builds, mega turnarounds, supply chain, logistics, and mega EPC & construction contracts, I have a unique ability to achieve exceptional results in challenging environments. \n\nWith over 28 years of experience, I have executed global mega contracts worth over $400MM and mega projects worth $1.5BN+. I am an expert in demand forecasting, planning, and inventory optimization and have led several EPCm/construction contracts in diverse cultures under challenging global environments. \n\nI possess excellent collaborative skills and am an influential people leader, with a strong ability to coach, motivate, and lead teams to success. I have executed projects in various global locations, including India, Vietnam, Indonesia, Singapore, Dubai, Saudi Arabia, and the United States, and have extensive experience in global EPC contracting, construction contracts, lead contract evaluation award & management, and mega projects. \n\nI have managed and led global purchasing, cross-border negotiations, supply chain, demand forecasting, inventory control, and competitive cost sourcing from the global marketplace. I also have extensive experience in the supply chain of after-sales and service networks in the automobile industry, having worked with leading global companies like DOW Inc, Reliance Industries, Hero Honda Motors Ltd, Maruti Suzuki Limited, and Hindustan Construction Company Ltd.\n\n\nI am an expert in managing and leading various areas with a proven track record in delivering exceptional results. My specialties include:\n\n- Successfully executing turnaround contracts and engineering projects\n- Proficiently managing mega projects from FEED to commissioning\n- Achieving global success in executing mega projects\n- Expertise in EPCm / Construction Contract award, management, and closures for mega projects\n- Strategic planning and forecasting to achieve success\n- Managing inventory in complex situations with efficiency\n- Capital procurement and cross-border negotiation to achieve cost-efficiency\n- Capital equipment and infrastructure equipment purchase and leasing\n- Business development to increase revenue and growth.\n- Strong people leadership skills with the ability to coach, motivate and lead teams to success.",
            "sales_id": "ACwAAAAw_o8Bi_CuAbgUxqEl_IPNuPnqRMIWfAI",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAAw_o8Bi_CuAbgUxqEl_IPNuPnqRMIWfAI,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/madhivanan",
            "headline": "Global Purchasing Leader & a Leadership Coach with experience in multiple functions across continents, now working as a Regional Director for Microsoft. Building Hyperscalers!  Opinions on LinkedIn are my own!",
            "raw_headline": "Global Purchasing Leader & a Leadership Coach with experience in multiple functions across continents, now working as a Regional Director for Microsoft. Building Hyperscalers!  Opinions on LinkedIn are my own!",
            "num_of_connections": 11362,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQGz0Z6620D31A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675383922133?e=1749081600&v=beta&t=sYOUIw8eQNWG5iD83qIaewwZNRmqAuAp0boWjFg6if0",
            "is_premium": true,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "Hindi"
                },
                {
                    "name": "Telugu"
                },
                {
                    "name": "Tamil"
                },
                {
                    "name": "English"
                }
            ],
            "certifications": [
                {
                    "name": "Certified Construction Contracts Manager",
                    "authority": "National Institute of Construction Management & Research (NICMAR)",
                    "company_id": "15098370"
                },
                {
                    "authority": "The Dow Chemical Company",
                    "name": "Six Sigma Green Belt Project Leader",
                    "startedOn": {
                        "month": 12,
                        "year": 2011
                    },
                    "company_id": "2562"
                },
                {
                    "endedOn": {
                        "month": 12,
                        "year": 2022
                    },
                    "authority": "Project Management Institute",
                    "name": "Project Management Professional (PMP)",
                    "startedOn": {
                        "month": 12,
                        "year": 2013
                    },
                    "company_id": "11352"
                },
                {
                    "endedOn": {
                        "month": 5,
                        "year": 2021
                    },
                    "authority": "Symbiosis Coaching",
                    "name": "ICF Approved Certified Life Coach",
                    "licenseNumber": "756018",
                    "startedOn": {
                        "month": 6,
                        "year": 2019
                    },
                    "company_id": "4988790"
                },
                {
                    "endedOn": {
                        "month": 1,
                        "year": 2024
                    },
                    "authority": "International Coaching Federation",
                    "name": "Associate Certified Coach (ACC)",
                    "startedOn": {
                        "month": 1,
                        "year": 2021
                    },
                    "url": "https://www.youracclaim.com/badges/4b0aa788-b1a9-478b-84a4-42cad0c7f7b0?source=linked_in_profile",
                    "company_id": "42457"
                },
                {
                    "endedOn": {
                        "month": 1,
                        "year": 2027
                    },
                    "authority": "International Coaching Federation",
                    "name": "Associate Certified Coach (ACC)",
                    "startedOn": {
                        "month": 2,
                        "year": 2024
                    },
                    "url": "https://www.credly.com/badges/b6a40b82-2077-4ee7-b51f-917e5dbfe288/linked_in_profile",
                    "company_id": "42457"
                },
                {
                    "endedOn": {
                        "month": 12,
                        "year": 2025
                    },
                    "authority": "Project Management Institute",
                    "name": "Project Management Professional (PMP)(r)",
                    "startedOn": {
                        "month": 12,
                        "year": 2013
                    },
                    "url": "https://www.credly.com/badges/b2efa22e-155f-4a8b-88c4-deafa2f60991/linked_in_profile",
                    "company_id": "11352"
                },
                {
                    "authority": "Microsoft",
                    "name": "Human-Centered Facilitation Badge",
                    "startedOn": {
                        "month": 11,
                        "year": 2024
                    },
                    "url": "https://www.credly.com/badges/d95458a5-60e2-4686-bf19-d6315cc05392/linked_in_profile",
                    "company_id": "1035"
                }
            ],
            "company_id": "1035",
            "raw_company_name": "Microsoft",
            "company_name": "Microsoft",
            "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
            "company_url": null,
            "company_website": "https://news.microsoft.com/",
            "company_location": "Redmond, Washington, United States",
            "company_city": "Redmond",
            "company_state": "Washington",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHAUh8aLDIbdQ/company-logo_400_400/B56ZXs7P1IGUAY-/0/1743436709506/microsoft_logo?e=1749081600&v=beta&t=_xwWl6xUviS3RO8GQivLxHqnfuIsZp11TKHXxwu5ih0",
            "company_industry": "Software Development",
            "job_description": null,
            "raw_job_title": " Supply Chain Director - Hyperscaler/ Data Center Supply Chain (America East+ LATM), Cloud Operation",
            "job_title": "Supply Chain Director - Hyperscaler and Data Center Supply Chain (America East and LATM), Cloud Operation",
            "job_started_on": "Oct 2024",
            "job_ended_on": null,
            "job_location": "Houston, Texas, United States",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1035",
                    "raw_company_name": "Microsoft",
                    "company_name": "Microsoft",
                    "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
                    "company_url": "https://www.linkedin.com/company/microsoft/",
                    "company_website": "https://news.microsoft.com/",
                    "company_location": "Redmond, Washington, United States",
                    "company_city": "Redmond",
                    "company_state": "Washington",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_400_400/company-logo_400_400/0/1630652622688/microsoft_logo?e=1749081600&v=beta&t=5YvAwKBaRqqwN0byTrHOfPfx-EKoLbAzA79oOCUCGHg",
                    "company_industry": "Software Development",
                    "job_description": null,
                    "raw_job_title": " Supply Chain Director - Hyperscaler/ Data Center Supply Chain (America East+ LATM), Cloud Operation",
                    "job_title": "Supply Chain Director - Hyperscaler and Data Center Supply Chain (America East and LATM), Cloud Operation",
                    "job_started_on": "Oct 2024",
                    "job_ended_on": null,
                    "job_location": "Houston, Texas, United States",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1035",
            "started_at_company": "Oct 2024",
            "started_at_position": "Oct 2024",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "19254241",
            "industry": "Technology, Information and Internet",
            "location": "Dallas, Texas, United States",
            "location_county": null,
            "location_city": "Dallas",
            "location_state": "Texas",
            "location_country": "United States",
            "skills": [
                "Brand Development",
                "Marketing Management",
                "Advertising",
                "Direct Marketing",
                "Brand Management",
                "Collateral",
                "Event Management",
                "Integrated Marketing",
                "Digital Marketing",
                "Lead Generation",
                "Email Marketing",
                "Direct Mail",
                "Multi-channel Marketing",
                "Creative Direction",
                "Marketing Strategy",
                "CRM",
                "Marketing",
                "Account Management",
                "Strategy",
                "Strategic Planning",
                "Sales",
                "Public Speaking",
                "Public Relations",
                "Leadership",
                "Content Marketing",
                "B2C Marketing"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1997
                    },
                    "ended_on": {
                        "year": 2001
                    },
                    "fields_of_study": [
                        "Major in Communications Technology Management / Minor in Marketing"
                    ],
                    "degree": "BS Management",
                    "university_id": "17078",
                    "university_name": "Ateneo de Manila University"
                },
                {
                    "started_on": {
                        "year": 1993
                    },
                    "ended_on": {
                        "year": 1997
                    },
                    "fields_of_study": null,
                    "degree": null,
                    "university_id": null,
                    "university_name": "La Salle Greenhills"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Benjamin Lim",
            "full_name": "Benjamin Lim",
            "first_name": "Benjamin",
            "middle_name": "",
            "last_name": "Lim",
            "summary": "Dynamic, self-motivated professional offers over 2 decades of success in marketing and advertising within the United States and the Philippines - spanning brand & marketing communications management, advertising management (direct marketing, TV, radio, print, OOH, collateral, social media), and experiential marketing.  Strategic thinker, with strong planning and problem-solving abilities. Successful leading and working within team environments. \n\n*\tExtensive experience leading strategy development, planning and execution of marketing programs and advertising campaigns (experiential marketing, direct marketing, TV, Radio, Print, OOH, collateral, social media). \n*\tLeads the Experiential Marketing center of excellence for AT&T Business, responsible for strategy development, planning and execution of flagship and sponsored events targeting enterprise, mid-market, and small business customers.   \n*\tLed the Vertical Marketing Communications program (including content marketing and strategic messaging) for AT&T Business, spanning the Healthcare, Finance, Manufacturing, Transportation, Retail, and Sports & Entertainment industries. \n*\tLed entire creative operations for award-winning AT&T Business Marketing Multimedia Solutions team responsible for 1,500+ projects per year - spanning video content development, presentation management, web, mobility & digital solutions, and graphic design.\n*\tLed the launch of the AT&T Business brand, design and identity. Includes development of brand design, iconography and presentation design systems, in collaboration with the corporate Brand team.\n*\tManaged development and company-wide implementation of corporate AT&T and business unit specific brand management frameworks such as Design Identity, Naming, Tone of Voice and Brand Attribution.\n*\tLed AT&T Brand Integrated Marketing team through strategy development, planning and execution of key initiatives, including Disney, Olympics, SXSW, employee communications, brand integration for the T-Mobile Merger planning process and the Cannes Silver Lion winning branded entertainment marketing initiative \"Daybreak\".",
            "sales_id": "ACwAAAEly-EBufHz-_ng093STvkcba76xAP-r_g",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAEly-EBufHz-_ng093STvkcba76xAP-r_g,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/benlim",
            "headline": "Events Marketing Director - Security Products @ Microsoft",
            "raw_headline": "Events Marketing Director - Security Products @ Microsoft",
            "num_of_connections": 1497,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C4E03AQH2fOFvk8cO-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1579819280923?e=1749081600&v=beta&t=eDrTx4f_EZXbXmJ6U_cujWpFl8BE3lplUpUDOgtsXp4",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "English",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "Tagalog",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                }
            ],
            "certifications": [
                {
                    "authority": "LinkedIn",
                    "name": "Shane Snow on Storytelling",
                    "startedOn": {
                        "month": 5,
                        "year": 2019
                    },
                    "url": "https://www.linkedin.com/learning/certificates/9ad08eaef0837f2f1c0c5877049da1d14b2a5e682481f9cbd8b4682fa991241b?trk=backfilled_certificate",
                    "company_id": "1337"
                }
            ],
            "company_id": "1035",
            "raw_company_name": "Microsoft",
            "company_name": "Microsoft",
            "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
            "company_url": null,
            "company_website": "https://news.microsoft.com/",
            "company_location": "Redmond, Washington, United States",
            "company_city": "Redmond",
            "company_state": "Washington",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHAUh8aLDIbdQ/company-logo_400_400/B56ZXs7P1IGUAY-/0/1743436709506/microsoft_logo?e=1749081600&v=beta&t=_xwWl6xUviS3RO8GQivLxHqnfuIsZp11TKHXxwu5ih0",
            "company_industry": "Software Development",
            "job_description": null,
            "raw_job_title": "Events Marketing Director - Security Products",
            "job_title": "Events Marketing Director - Security Products",
            "job_started_on": "Oct 2022",
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1035",
                    "raw_company_name": "Microsoft",
                    "company_name": "Microsoft",
                    "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
                    "company_url": "https://www.linkedin.com/company/microsoft/",
                    "company_website": "https://news.microsoft.com/",
                    "company_location": "Redmond, Washington, United States",
                    "company_city": "Redmond",
                    "company_state": "Washington",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_400_400/company-logo_400_400/0/1630652622688/microsoft_logo?e=1749081600&v=beta&t=5YvAwKBaRqqwN0byTrHOfPfx-EKoLbAzA79oOCUCGHg",
                    "company_industry": "Software Development",
                    "job_description": null,
                    "raw_job_title": "Events Marketing Director - Security Products",
                    "job_title": "Events Marketing Director - Security Products",
                    "job_started_on": "Oct 2022",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1035",
            "started_at_company": "Oct 2022",
            "started_at_position": "Oct 2022",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "75111629",
            "industry": "IT Services and IT Consulting",
            "location": "Greater Chicago Area",
            "location_county": null,
            "location_city": "",
            "location_state": "Illinois",
            "location_country": "United States",
            "skills": [],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Marketing"
                    ],
                    "degree": "Bachelor's degree",
                    "university_id": "42291",
                    "university_name": "DePaul University"
                }
            ],
            "twitter_link": "https://www.twitter.com/daniel_chicago5",
            "private_website": null,
            "unformatted_full_name": "Daniel Contreras",
            "full_name": "Daniel Contreras",
            "first_name": "Daniel",
            "middle_name": "",
            "last_name": "Contreras",
            "summary": "Our mission at Microsoft is to empower every person and organization on the planet to achieve more and my current role in that corporate mission is IT transformation and modernization in the manufacturing sector.\n\nMy personal mission is:\n- Empower youth in underserved communities to achieve more, by exposing them to current and emerging technologies and enabling them to pursue skills, jobs and careers in tech.\n\n- Empower nonprofit organizations to achieve more, through Microsoft Cloud for Nonprofit, a solution from Tech for Social Impact (Microsoft's Philanthropies division focused on NPOs)\n\n\n\"If you want to build a ship, don't drum up people together to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea.\" - Antoine de Saint Exupery",
            "sales_id": "ACwAAAR6HM0BpZokkgHM_PbXUX7rvGZlk4Smf70",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAR6HM0BpZokkgHM_PbXUX7rvGZlk4Smf70,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/danielcontreras-ai",
            "headline": "Technology Strategy, Innovation, Digital Transformation, Business Outcomes through Data & AI/GenAI",
            "raw_headline": "Technology Strategy, Innovation, Digital Transformation, Business Outcomes through Data & AI/GenAI",
            "num_of_connections": 2941,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C4E03AQGYzHU6b41hBw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1552298908434?e=1749081600&v=beta&t=Zu_9t3XDnNSxx_OG9PXwP7Gt29nhyg8Rg9dq7SE2aiE",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "Spanish",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "French",
                    "proficiency": "LIMITED_WORKING"
                },
                {
                    "name": "English",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                }
            ],
            "certifications": [
                {
                    "authority": "Microsoft",
                    "name": "Microsoft Certified: Azure Fundamentals",
                    "startedOn": {
                        "month": 5,
                        "year": 2019
                    },
                    "url": "https://www.youracclaim.com/badges/197132d8-6af9-4e3b-98d2-e275120e68aa/linked_in_profile",
                    "company_id": "1035"
                },
                {
                    "authority": "Microsoft",
                    "name": "Accessibility in Action",
                    "url": "https://www.youracclaim.com/badges/13ff1ea4-eef6-4868-970f-707592c1c27e/linked_in_profile",
                    "company_id": "1035"
                },
                {
                    "authority": "Microsoft",
                    "name": "Microsoft 365 Certified Fundamentals",
                    "startedOn": {
                        "month": 12,
                        "year": 2019
                    },
                    "url": "https://www.youracclaim.com/badges/87af6eb1-ed66-4ed1-b1ce-c58beaa383f3/linked_in_profile",
                    "company_id": "1035"
                },
                {
                    "authority": "Microsoft",
                    "name": "Microsoft Certified: Dynamics 365 Fundamentals (MB-901)",
                    "startedOn": {
                        "month": 2,
                        "year": 2020
                    },
                    "url": "https://www.youracclaim.com/badges/35efed41-95b9-414a-a63c-8e7c7684b951/linked_in_profile",
                    "company_id": "1035"
                },
                {
                    "authority": "Microsoft",
                    "name": "Microsoft Certified: Azure AI Fundamentals",
                    "licenseNumber": "82C75BF8537728D3",
                    "startedOn": {
                        "month": 1,
                        "year": 2024
                    },
                    "url": "https://learn.microsoft.com/api/credentials/share/en-us/danielcontreras/82C75BF8537728D3?sharingId=2A3E488D6BCAD917",
                    "company_id": "1035"
                }
            ],
            "company_id": "1035",
            "raw_company_name": "Microsoft",
            "company_name": "Microsoft",
            "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
            "company_url": null,
            "company_website": "https://news.microsoft.com/",
            "company_location": "Redmond, Washington, United States",
            "company_city": "Redmond",
            "company_state": "Washington",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHAUh8aLDIbdQ/company-logo_400_400/B56ZXs7P1IGUAY-/0/1743436709506/microsoft_logo?e=1749081600&v=beta&t=_xwWl6xUviS3RO8GQivLxHqnfuIsZp11TKHXxwu5ih0",
            "company_industry": "Software Development",
            "job_description": "I serve as Chief Technology Officer to one of Microsoft's most strategic global manufacturing customers.",
            "raw_job_title": "Global Director, Technology Strategy",
            "job_title": "Global Director, Technology Strategy",
            "job_started_on": "Jul 2021",
            "job_ended_on": null,
            "job_location": "Greater Chicago Area",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1035",
                    "raw_company_name": "Microsoft",
                    "company_name": "Microsoft",
                    "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
                    "company_url": "https://www.linkedin.com/company/microsoft/",
                    "company_website": "https://news.microsoft.com/",
                    "company_location": "Redmond, Washington, United States",
                    "company_city": "Redmond",
                    "company_state": "Washington",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_400_400/company-logo_400_400/0/1630652622688/microsoft_logo?e=1749081600&v=beta&t=5YvAwKBaRqqwN0byTrHOfPfx-EKoLbAzA79oOCUCGHg",
                    "company_industry": "Software Development",
                    "job_description": "I serve as Chief Technology Officer to one of Microsoft's most strategic global manufacturing customers.",
                    "raw_job_title": "Global Director, Technology Strategy",
                    "job_title": "Global Director, Technology Strategy",
                    "job_started_on": "Jul 2021",
                    "job_ended_on": null,
                    "job_location": "Greater Chicago Area",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1035",
            "started_at_company": "Jul 2021",
            "started_at_position": "Jul 2021",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "20293837",
            "industry": "Higher Education",
            "location": "Greater Seattle Area",
            "location_county": null,
            "location_city": "",
            "location_state": "Washington",
            "location_country": "United States",
            "skills": [
                "Marketing Strategy",
                "Leadership",
                "Strategic Planning",
                "Marketing",
                "Customer Insight",
                "Strategy",
                "Digital Marketing",
                "Product Development",
                "Product Management",
                "Business Strategy",
                "Marketing Communications",
                "Start-ups",
                "Market Research",
                "Management",
                "Business Development",
                "Social Media Marketing",
                "Online Marketing",
                "Research",
                "Social Media",
                "Team Leadership",
                "Competitive Analysis",
                "Public Relations",
                "New Business Development",
                "Entrepreneurship",
                "Product Marketing",
                "Marketing Research",
                "Management Consulting",
                "Analytics",
                "Strategic Partnerships",
                "Program Management",
                "Online Advertising",
                "Storytelling",
                "Visual Storytelling",
                "Digital Storytelling",
                "Story",
                "Branding & Identity",
                "Brand Development",
                "Corporate Branding",
                "Brand Management"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Strategy and Leadership"
                    ],
                    "degree": "Master's degree",
                    "university_id": "5954",
                    "university_name": "London Business School"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Integrated Marketing Communications"
                    ],
                    "degree": "Master's degree",
                    "university_id": "3196",
                    "university_name": "Northwestern University"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Double Major: Journalism and English"
                    ],
                    "degree": "Bachelor's Degree",
                    "university_id": "5258",
                    "university_name": "University of Iowa"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Catherine Captain",
            "full_name": "Catherine Captain",
            "first_name": "Catherine",
            "middle_name": "",
            "last_name": "Captain",
            "summary": null,
            "sales_id": "ACwAAAE1qM0BVO6nyGD9FzSVVwj2iDUqdLrofBs",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAE1qM0BVO6nyGD9FzSVVwj2iDUqdLrofBs,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/catherinecaptain",
            "headline": "Global Marketing & Communications Leader",
            "raw_headline": "Global Marketing & Communications Leader",
            "num_of_connections": 3792,
            "profile_photo": null,
            "is_premium": true,
            "is_openlink": true,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "1035",
            "raw_company_name": "Microsoft",
            "company_name": "Microsoft",
            "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
            "company_url": null,
            "company_website": "https://news.microsoft.com/",
            "company_location": "Redmond, Washington, United States",
            "company_city": "Redmond",
            "company_state": "Washington",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHAUh8aLDIbdQ/company-logo_400_400/B56ZXs7P1IGUAY-/0/1743436709506/microsoft_logo?e=1749081600&v=beta&t=_xwWl6xUviS3RO8GQivLxHqnfuIsZp11TKHXxwu5ih0",
            "company_industry": "Software Development",
            "job_description": "Office of the CEO",
            "raw_job_title": "Senior Director, Communications at Xbox",
            "job_title": "Senior Director, Communications at Xbox",
            "job_started_on": "2025",
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "1035",
                    "raw_company_name": "Microsoft",
                    "company_name": "Microsoft",
                    "company_description": "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. Because impact matters. \n\nMicrosoft operates in 190 countries and is made up of approximately 228,000 passionate employees worldwide.",
                    "company_url": "https://www.linkedin.com/company/microsoft/",
                    "company_website": "https://news.microsoft.com/",
                    "company_location": "Redmond, Washington, United States",
                    "company_city": "Redmond",
                    "company_state": "Washington",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_400_400/company-logo_400_400/0/1630652622688/microsoft_logo?e=1749081600&v=beta&t=5YvAwKBaRqqwN0byTrHOfPfx-EKoLbAzA79oOCUCGHg",
                    "company_industry": "Software Development",
                    "job_description": "Office of the CEO",
                    "raw_job_title": "Senior Director, Communications at Xbox",
                    "job_title": "Senior Director, Communications at Xbox",
                    "job_started_on": "2025",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "1035",
            "started_at_company": "2025",
            "started_at_position": "2025",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "15547199",
            "industry": "Business Consulting and Services",
            "location": "United States",
            "location_county": null,
            "location_city": null,
            "location_state": null,
            "location_country": "United States",
            "skills": [
                "Innovation Management",
                "Program Management",
                "Creativity and Innovation",
                "Automotive Engineering",
                "Sensors",
                "Batteries",
                "compute",
                "Customer Service",
                "service supply",
                "Environmental, Social, and Governance (ESG)",
                "Executive Visibility",
                "Communication Training",
                "Manufacturing Process Improvement",
                "Communication",
                "Negotiation",
                "Product Design",
                "Supply Chain Management",
                "Business Strategy",
                "Contract Negotiation",
                "Strategic Leadership",
                "Automotive",
                "Strategy",
                "Competitive Analysis",
                "SPC",
                "Materials",
                "Acoustics",
                "Product Marketing",
                "Management",
                "Supply Chain",
                "Lean Manufacturing",
                "Business Process Improvement",
                "Design for Manufacturing",
                "Continuous Improvement",
                "Engineering Management",
                "Operations Management",
                "Strategic Sourcing",
                "FMEA",
                "Procurement",
                "Product Launch",
                "Leadership",
                "Team Leadership",
                "Strategic Planning"
            ],
            "educations": [
                {
                    "started_on": {
                        "month": 1,
                        "year": 2025
                    },
                    "ended_on": {
                        "month": 3,
                        "year": 2025
                    },
                    "fields_of_study": [
                        "Artificial Intelligence: Implications for Business Strategy"
                    ],
                    "degree": "Certificate",
                    "university_id": "1501",
                    "university_name": "MIT Sloan School of Management"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": null,
                    "degree": "Master of Business Administration - MBA",
                    "university_id": "4695",
                    "university_name": "Michigan State University"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Mechanical Engineering"
                    ],
                    "degree": "Bachelor of Science - BS",
                    "university_id": "15124851",
                    "university_name": "Mumbai University Mumbai"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Mechanical Engineering"
                    ],
                    "degree": "Master of Science - MS",
                    "university_id": "166680",
                    "university_name": "The University of Texas at Arlington"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Salil S.",
            "full_name": "Salil S",
            "first_name": "Salil",
            "middle_name": "",
            "last_name": "S",
            "summary": "Salil Shetye is a dynamic thought leader and visionary strategist with over two decades of experience at the forefront of global procurement, supply chain innovation, and product development. Known for his ability to forge strong partnerships and drive collaboration across suppliers, technical teams, and stakeholders, Salil has consistently delivered transformative results in highly competitive industries.\n\nThroughout his career at Apple and beyond, Salil has demonstrated a rare blend of technical expertise and strategic acumen. He has negotiated complex agreements, spearheaded innovative solutions, and championed sustainability while ensuring operational excellence on a global scale. His work spans groundbreaking technologies, including autonomous systems, high-density energy storage, and advanced audio and haptic innovations.\n\nSalil thrives on tackling the challenges of tomorrow, always working on transformative ideas that drive value and impact. As a natural collaborator and mentor, he empowers teams to push boundaries and achieve extraordinary outcomes.\n\nSalil is always open to meaningful conversations about innovation, strategy, and partnerships. If you share a passion for bold ideas and transformative ventures, don't hesitate to reach out.",
            "sales_id": "ACwAAADtOz8BIivJnltw0vaVj6cejhfgUWFREOw",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAADtOz8BIivJnltw0vaVj6cejhfgUWFREOw,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/salilshetye",
            "headline": "Operations, Mobility & Procurement Innovator | Investor | Entrepreneur | Building the future of Supply Chain",
            "raw_headline": "Operations, Mobility & Procurement Innovator | Investor | Entrepreneur | Building the future of Supply Chain",
            "num_of_connections": 1889,
            "profile_photo": null,
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": "AppleCare - Service Supply Chain Operations\n   - Lead global procurement strategies for AppleCare, optimizing service supply chain scalability and resilience.\n   - Partner with engineering and operations to enhance supply chain performance for repair and service parts.\n   - Drive ethical sourcing and sustainability initiatives across AppleCare's ecosystem.\n   - Build and lead high-performing teams to execute operational excellence at scale.\n\niPhone OEM, Accessories, SPG, and Consumables\n   - Managed procurement strategies across global manufacturing sites for iPhone, accessories, and SPG, aligning operations with product goals.\n   - Directed sourcing for consumables, including adhesives and protective films, ensuring consistent quality and innovation.\n   \nApple Audio and Accessories\n   - Orchestrated procurement for AirPods, HomePods, and Beats hardware, ensuring seamless product launches.\n   - Advanced capacity for MEMS microphones and sensors, driving market leadership and tech innovation.\n\nSpecial Projects Group (SPG) - Strategic Deals\n   - Negotiated high-value procurement for autonomous driving systems, battery tech, and adv sensor suites.\n   - Enabled ventures into mobility and cutting-edge hardware innovations.\n\nBattery Technology and Capital Equipment (CapEX) \n   - Spearheaded the commercial development of adv energy storage solutions and high-density battery systems.\n   - Optimized Cap-Ex / Op-Ex planning for next-gen energy storage tech.\n\nAudio/Acoustics, Haptics, and Vibration Motors\n   - Led product launches for innovative audio and haptic components in iOS and Mac products.\n   - Scaled supply chain capacity for acoustic and haptic tech, driving product growth strategies.\n   \nLeadership and Organizational Development\n   - Drove procurement innovation and operational excellence.\n   - Defined and executed strategic vision for procurement, ensuring growth and resilience.\n   - Negotiated complex agreements to secure critical technologies and partnerships.",
            "raw_job_title": "Director of Operations Procurement",
            "job_title": "Director of Operations Procurement",
            "job_started_on": "Jul 2010",
            "job_ended_on": null,
            "job_location": "San Francisco Bay Area",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": "AppleCare - Service Supply Chain Operations\n   - Lead global procurement strategies for AppleCare, optimizing service supply chain scalability and resilience.\n   - Partner with engineering and operations to enhance supply chain performance for repair and service parts.\n   - Drive ethical sourcing and sustainability initiatives across AppleCare's ecosystem.\n   - Build and lead high-performing teams to execute operational excellence at scale.\n\niPhone OEM, Accessories, SPG, and Consumables\n   - Managed procurement strategies across global manufacturing sites for iPhone, accessories, and SPG, aligning operations with product goals.\n   - Directed sourcing for consumables, including adhesives and protective films, ensuring consistent quality and innovation.\n   \nApple Audio and Accessories\n   - Orchestrated procurement for AirPods, HomePods, and Beats hardware, ensuring seamless product launches.\n   - Advanced capacity for MEMS microphones and sensors, driving market leadership and tech innovation.\n\nSpecial Projects Group (SPG) - Strategic Deals\n   - Negotiated high-value procurement for autonomous driving systems, battery tech, and adv sensor suites.\n   - Enabled ventures into mobility and cutting-edge hardware innovations.\n\nBattery Technology and Capital Equipment (CapEX) \n   - Spearheaded the commercial development of adv energy storage solutions and high-density battery systems.\n   - Optimized Cap-Ex / Op-Ex planning for next-gen energy storage tech.\n\nAudio/Acoustics, Haptics, and Vibration Motors\n   - Led product launches for innovative audio and haptic components in iOS and Mac products.\n   - Scaled supply chain capacity for acoustic and haptic tech, driving product growth strategies.\n   \nLeadership and Organizational Development\n   - Drove procurement innovation and operational excellence.\n   - Defined and executed strategic vision for procurement, ensuring growth and resilience.\n   - Negotiated complex agreements to secure critical technologies and partnerships.",
                    "raw_job_title": "Director of Operations Procurement",
                    "job_title": "Director of Operations Procurement",
                    "job_started_on": "Jul 2010",
                    "job_ended_on": null,
                    "job_location": "San Francisco Bay Area",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Jul 2010",
            "started_at_position": "Jul 2010",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "18573",
            "industry": "Computers and Electronics Manufacturing",
            "location": "San Jose, California, United States",
            "location_county": null,
            "location_city": "San Jose",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Product Marketing",
                "Business Development",
                "Marketing Strategy",
                "Strategic Partnerships",
                "Product Management",
                "Marketing",
                "Digital Media",
                "Digital Marketing",
                "Social Media Marketing",
                "Mobile Devices",
                "Management",
                "Video",
                "Digital Strategy",
                "Email Marketing",
                "Mobile Marketing"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1982
                    },
                    "ended_on": {
                        "year": 1987
                    },
                    "fields_of_study": [
                        "Mechanical Engineering and Marketing "
                    ],
                    "degree": "BS BBA",
                    "university_id": "166659",
                    "university_name": "University of Oklahoma"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": null,
                    "degree": "Guest Lecturer",
                    "university_id": "15094531",
                    "university_name": "Kyoto University"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": null,
                    "degree": "Guest Lecturer",
                    "university_id": "15096035",
                    "university_name": "Tokyo Denki University"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Glenn B.",
            "full_name": "Glenn B",
            "first_name": "Glenn",
            "middle_name": "",
            "last_name": "B",
            "summary": "Leading Direct Marketing for our Services Division (App Store, Music, TV+, Books, PodCasts, Fitness, iCloud, Card/Pay/Maps...) Focused on helping everyone on our teams grow through working smart to delight, educate, and inspire our customers worldwide.",
            "sales_id": "ACwAAAAASI0Bbg0X3077E3dRp9THpYFUsUFCONc",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAAASI0Bbg0X3077E3dRp9THpYFUsUFCONc,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/glennbulycz",
            "headline": "Marketing at Apple (R)",
            "raw_headline": "Marketing at Apple (R)",
            "num_of_connections": 2195,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C5603AQH_pCPAKZhIvQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1546041946189?e=1748476800&v=beta&t=9Tdyv1OUKp9wP5gQXsVkU-QWcU50xDfL9kw1V6olrnM",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "French"
                },
                {
                    "name": "Italian"
                }
            ],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": "Leading WW Direct Marketing and CRM programs for all businesses in the Services Division of Apple.",
            "raw_job_title": "Marketing Director",
            "job_title": "Marketing Director",
            "job_started_on": "Nov 2012",
            "job_ended_on": null,
            "job_location": "Cupertino, CA",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": "Leading WW Direct Marketing and CRM programs for all businesses in the Services Division of Apple.",
                    "raw_job_title": "Marketing Director",
                    "job_title": "Marketing Director",
                    "job_started_on": "Nov 2012",
                    "job_ended_on": null,
                    "job_location": "Cupertino, CA",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Nov 2012",
            "started_at_position": "Nov 2012",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "2164340",
            "industry": "Computers and Electronics Manufacturing",
            "location": "Fremont, California, United States",
            "location_county": null,
            "location_city": "Fremont",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "CRM - Services Management",
                "Knowledge Management",
                "Strategic Planning",
                "Enterprise Content Management",
                "Management",
                "IT Operations",
                "Portals",
                "Technical Leadership",
                "Cross-functional Team Leadership",
                "Program Management",
                "Enterprise Search",
                "Enterprise Software",
                "Change Management",
                "Team Building",
                "IT Strategy",
                "Collaboration Solutions",
                "CRM",
                "Integration",
                "Organizational Leadership",
                "Localization",
                "Social Media",
                "Records Management",
                "Strategy",
                "Cloud Computing",
                "Software Project Management",
                "Content Management",
                "Web Experience Management",
                "Knowledge Centered Support (KCS)",
                "PeopleSoft",
                "Vendor Management",
                "SaaS",
                "Project Management",
                "Consulting",
                "SDLC",
                "Agile Methodologies",
                "Customer Relationship Management (CRM)"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Industrial Engineering"
                    ],
                    "degree": "MS",
                    "university_id": "15108983",
                    "university_name": "Indian Institute of Management Mumbai"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Industrial Engineering"
                    ],
                    "degree": "BE",
                    "university_id": "157269",
                    "university_name": "Indian Institute of Technology, Roorkee"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Amit Bansal",
            "full_name": "Amit Bansal",
            "first_name": "Amit",
            "middle_name": "",
            "last_name": "Bansal",
            "summary": "I am a passionate technology leader who successfully collaborates across organizations to drive vision, IT strategy and delivery of global enterprise IT services for large enterprises. In my career I have successfully built many highly effective global teams and led several large business and technical transformational programs that led to replacing complex enterprise grade legacy solutions with new cutting edge technical solutions without business disruption. I have extensive experience in building trust based business partnership across multiple groups. \n\nExpertise\n\nIT Leadership - IT Strategy, Product Management, Customer Journey Mapping/BPR, Vendor Management, Contract Negotiation, Business Engagement and Partnership Management, Change Management, Team Development,  Talent Management, Global Organization Development,  System Delivery (concept to go-live) using Agile and traditional methodologies, IT Operations Management, Budget Management\n\nDomain - CRM Services Management, Multi-channel Customer Services Management, Call Center Technologies, Online Self-Service, Knowledge Management, Learning Management, Enterprise Content Management, Web Content Management, Communities, Content Localization, Customer Feedback Management, Shipping Logistics Management\n\nTechnologies, IT Services - Multi-tenant private cloud based IT services, distributed global highly scalable enterprise services architecture, SOA, Web architecture, Native iOS bases applications, Database technologies (Relational and No SQL), JEE\n\nSoftware Products - Adobe AEM, SDL WorldServer, Saba LMS, EMC Documentum, FAST Search, Oracle KM (Inquira), Verint Vovici, Jive",
            "sales_id": "ACwAAAAhBnQBS8_1FS2nYR-4Wlozr6bTbJGLYvI",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAAhBnQBS8_1FS2nYR-4Wlozr6bTbJGLYvI,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/ambansal2",
            "headline": "Director Of Information Technology at Apple ",
            "raw_headline": "Director Of Information Technology at Apple ",
            "num_of_connections": 1002,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQGKf_YENR2vnA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671040480216?e=1748476800&v=beta&t=dp4S_OPFawNXQ9f54iyZeLGUfenvXkk83dIMu3JawiY",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "Hindi",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "English",
                    "proficiency": "FULL_PROFESSIONAL"
                }
            ],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": "Leading IT strategy, technology directions, core engineering and operations for Global Repairs Management and CRM platform at Apple",
            "raw_job_title": "Director Of Information Technology",
            "job_title": "Director of Information Technology",
            "job_started_on": "Mar 2019",
            "job_ended_on": null,
            "job_location": "Cupertino",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": "Leading IT strategy, technology directions, core engineering and operations for Global Repairs Management and CRM platform at Apple",
                    "raw_job_title": "Director Of Information Technology",
                    "job_title": "Director of Information Technology",
                    "job_started_on": "Mar 2019",
                    "job_ended_on": null,
                    "job_location": "Cupertino",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Mar 2019",
            "started_at_position": "Mar 2019",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "15432204",
            "industry": "Computer Networking Products",
            "location": "Mill Valley, California, United States",
            "location_county": null,
            "location_city": "Mill Valley",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Team Leadership",
                "Strategic Communications",
                "Cross Functional Team Building",
                "Cloud Computing",
                "Data Center",
                "Network Security",
                "Security",
                "Networking",
                "Firewalls",
                "Cisco IOS",
                "Cisco Technologies",
                "Network Architecture",
                "TCP/IP",
                "Virtualization",
                "Computer Security",
                "Servers",
                "Troubleshooting",
                "IT Operations",
                "Information Security",
                "Web Application Security",
                "DDoS Mitigation and Prevention",
                "Unix Security",
                "Agile Methodologies",
                "Agile Project Management",
                "DevOps",
                "Disaster Recovery",
                "Internet Protocol Suite (TCP/IP)",
                "Enterprise Software",
                "Cisco Systems Products"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1988
                    },
                    "ended_on": {
                        "year": 1998
                    },
                    "fields_of_study": null,
                    "degree": null,
                    "university_id": "13302",
                    "university_name": "University of Montana"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Brian Fahey",
            "full_name": "Brian Fahey",
            "first_name": "Brian",
            "middle_name": "",
            "last_name": "Fahey",
            "summary": null,
            "sales_id": "ACwAAADregwBUNXMXO_3ekjE24OLsWU75baCsx0",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAADregwBUNXMXO_3ekjE24OLsWU75baCsx0,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/brian-fahey-8102025",
            "headline": "Director, Information Security at Apple",
            "raw_headline": "Director, Information Security at Apple",
            "num_of_connections": 1225,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C4E03AQG-3_Sn75b9Gg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517731968569?e=1748476800&v=beta&t=fr7jQkJE49zApNtkJmmRXBaiDgBFBzrSYX6GjG0JDv4",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": null,
            "raw_job_title": "Director, Information Security",
            "job_title": "Director, Information Security",
            "job_started_on": "Feb 2019",
            "job_ended_on": null,
            "job_location": "San Francisco, California, United States",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": null,
                    "raw_job_title": "Director, Information Security",
                    "job_title": "Director, Information Security",
                    "job_started_on": "Feb 2019",
                    "job_ended_on": null,
                    "job_location": "San Francisco, California, United States",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Feb 2019",
            "started_at_position": "Feb 2019",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "357985202",
            "industry": "Financial Services",
            "location": "New York, New York, United States",
            "location_county": null,
            "location_city": "New York",
            "location_state": "New York",
            "location_country": "United States",
            "skills": [
                "Direct Sales",
                "Governance",
                "Leadership",
                "Philanthropy",
                "Small Business",
                "Executive Management",
                "Strategy",
                "Leadership Development",
                "Strategic Partnerships",
                "Strategic Planning",
                "Finance",
                "Business Planning",
                "Business Strategy",
                "Start-ups",
                "Cross-functional Team Leadership",
                "Entrepreneurship",
                "Marketing",
                "Marketing Strategy",
                "Social Media"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1975
                    },
                    "ended_on": {
                        "year": 1979
                    },
                    "fields_of_study": [
                        "English Language and Literature/Letters"
                    ],
                    "degree": "Bachelor of Arts (BA)",
                    "university_id": "157313",
                    "university_name": "Princeton University"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Andrea Jung",
            "full_name": "Andrea Jung",
            "first_name": "Andrea",
            "middle_name": "",
            "last_name": "Jung",
            "summary": "Andrea Jung is President and Chief Executive Officer of Grameen America, the largest microfinance organization in the United States. Ms. Jung, the former Chairman and Chief Executive Officer of Avon Products, Inc. and longtime champion of women's issues, was appointed by Grameen's Chairman Nobel Peace Laureate Muhammad Yunus to the position in 2014 'to bring her unique qualifications and able leadership to accelerate our mission.\" Grameen America is dedicated to helping minority women who live in poverty build small businesses to create better lives for their families. In a record achievement over the last fifteen years, Grameen America has proven that microlending to women increases their income, creates assets and builds communities, and has invested over $3.2 billion in loan capital to over 170,000 low income entrepreneurs and their families. \n\nMs. Jung, the longest serving female chief executive in the Fortune 500, is respected as a trailblazer for women's empowerment. Ms. Jung was also the first woman to serve as Chairman of the Cosmetic, Toiletry & Fragrance Association, and Chairman of the World Federation of Direct Selling Associations. \n \nDuring her tenure at Avon, she was responsible for developing and expanding earnings opportunities to over six million women in over one hundred countries. Ms. Jung has been lauded globally for her dedication to empowering women through her pursuit of public-private partnerships. Under her leadership, the Avon Foundation for Women raised and awarded over $1.5 billion to support health and empowerment causes, becoming the largest women-focused corporate philanthropy around the world. In 2010, she received the Clinton Global Citizen Award for her visionary leadership in solving pressing global issues. \n\nMs. Jung ranked consistently among top leaders including Fortune's \"Most Powerful Women in Business,\" Forbes' 'Most Powerful Women in the World\" and Financial Times' \"Top Women in World Business.\"",
            "sales_id": "ACwAABVWa7IBi4H26Z1Q034RR3kK7PdMous0ZLc",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAABVWa7IBi4H26Z1Q034RR3kK7PdMous0ZLc,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/andrea-jung-442a7b9b",
            "headline": "Microfinance and Poverty Alleviation, Women's Economic Empowerment",
            "raw_headline": "Microfinance and Poverty Alleviation, Women's Economic Empowerment",
            "num_of_connections": 2294,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C4E03AQEq8FI6BNVSRw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1644538609802?e=1748476800&v=beta&t=w-e6vMsnSGIy2GFMzsl772rLHWv3zK_w40rmt-biAqU",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": "Chairman, Compensation Committee\nNominating and Governance Committee\nFormer Co-lead Director",
            "raw_job_title": "Board Director",
            "job_title": "Board Director",
            "job_started_on": "Jan 2008",
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "598139",
                    "raw_company_name": "Grameen America, Inc.",
                    "company_name": "Grameen America",
                    "company_description": "Grameen America is dedicated to helping low-income women build small businesses to create better lives for their families. We offer access to loan capital, financial education, asset- and credit-building, and peer support to transform communities and advance financial mobility in the United States.\n\nGrameen America has invested over $5.2 billion to more than 224,000 women entrepreneurs across 29 cities in the U.S.",
                    "company_url": "https://www.linkedin.com/company/grameen-america-inc-/",
                    "company_website": "http://www.grameenamerica.org",
                    "company_location": "Babylon, New York, United States",
                    "company_city": "Babylon",
                    "company_state": "New York",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C510BAQFNKDQGfK6oeg/company-logo_400_400/company-logo_400_400/0/1631346744143?e=1748476800&v=beta&t=ApoYXR7-2uU8sqtlyRlbKWJ4tLy-oLtSrMZY0eSfihs",
                    "company_industry": "Financial Services",
                    "job_description": null,
                    "raw_job_title": "President And CEO",
                    "job_title": "President, CEO",
                    "job_started_on": "Jan 2014",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": "Chairman, Compensation Committee\nNominating and Governance Committee\nFormer Co-lead Director",
                    "raw_job_title": "Board Director",
                    "job_title": "Board Director",
                    "job_started_on": "Jan 2008",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "1248",
                    "raw_company_name": "Unilever",
                    "company_name": "Unilever",
                    "company_description": "Be part of the world's most successful, purpose-led business. Work with brands that are well-loved around the world, that improve the lives of our consumers and the communities around us. We promote innovation, big and small, to make our business win and grow; and we believe in business as a force for good. Unleash your curiosity, challenge ideas and disrupt processes; use your energy to make this happen. Our brilliant business leaders and colleagues provide mentorship and inspiration, so you can be at your best. \n\nOur portfolio ranges from nutritionally balanced foods to indulgent ice creams, affordable soaps, luxurious shampoos and everyday household care products. We produce world-leading brands including Lipton, Knorr, Dove, Axe, Hellmann's and Omo, alongside trusted local names and innovative-forward thinking brands like Ben & Jerry's, The Dollar Shave Club and Dermalogica. \n\nEvery individual here can bring their purpose to life through their work. Join us and you'll be surrounded by inspiring leaders and supportive peers. Among them, you'll channel your purpose, bring fresh ideas to the table, and simply be you. As you work to make a real impact on the business and the world, we'll work to help you become a better you.  ",
                    "company_url": "https://www.linkedin.com/company/unilever/",
                    "company_website": "http://www.unilever.com",
                    "company_location": "London, England, United Kingdom",
                    "company_city": "London",
                    "company_state": "England",
                    "company_country": "United Kingdom",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4E0BAQF6TJKa56uLAg/company-logo_400_400/company-logo_400_400/0/1663661971310/unilever_logo?e=1748476800&v=beta&t=ziL2Ho5Xx1bxK-iV5xnhxVXlI2Wgjz1rLuPoGuCmYuY",
                    "company_industry": "Manufacturing",
                    "job_description": "Vice-Chair, Senior Independent Director \nChairman, Compensation Committee\nNominating and Governance Committee",
                    "raw_job_title": "Board Director",
                    "job_title": "Board Director",
                    "job_started_on": "May 2018",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "19857",
                    "raw_company_name": "Wayfair",
                    "company_name": "Wayfair",
                    "company_description": "Wayfair is the destination for all things home: helping everyone, anywhere create their feeling of home. From expert customer service, to the development of tools that make the shopping process easier, to carrying one of the widest and deepest selections of items for every space, style, and budget, Wayfair gives everyone the power to create spaces that are just right for them.",
                    "company_url": "https://www.linkedin.com/company/wayfair/",
                    "company_website": "http://aboutwayfair.com/careers",
                    "company_location": "Boston, Massachusetts, United States",
                    "company_city": "Boston",
                    "company_state": "Massachusetts",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/D4E0BAQE5VUS4aKzIjw/company-logo_400_400/company-logo_400_400/0/1707335788746/wayfair_logo?e=1748476800&v=beta&t=etixwq-8sFqefqzhs9wJE8KRZWpI7abHQ2o1vU-krpc",
                    "company_industry": "Retail",
                    "job_description": "Compensation Committee\nNominating and Governance Committee",
                    "raw_job_title": "Board Director",
                    "job_title": "Board Director",
                    "job_started_on": "May 2018",
                    "job_ended_on": null,
                    "job_location": "Boston, Massachusetts",
                    "job_still_working": true
                },
                {
                    "company_id": "11511462",
                    "raw_company_name": "Rockefeller Capital Management",
                    "company_name": "Rockefeller Capital Management",
                    "company_description": "At Rockefeller Capital Management, we aspire to bring the unique promise of the Rockefeller legacy together with a culture of innovation and cutting-edge technology to help discerning clients--individuals, families, businesses, and institutions--achieve their goals through the delivery of premier financial advisory and investment management. We specialize in wealth management, asset management, and investment management with the objective of connecting clients to a broad network of solutions and compelling opportunities that they wouldn't be able to explore anywhere else.\n\nOriginally founded in 1882 as the family office of John D. Rockefeller, the firm has evolved to offer strategic advice to ultra- and high-net-worth individuals and families, institutions, and corporations.",
                    "company_url": "https://www.linkedin.com/company/rockefeller-capital-management/",
                    "company_website": "https://www.rockco.com/",
                    "company_location": "New York, New York, United States",
                    "company_city": "New York",
                    "company_state": "New York",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/D4E0BAQGzdsi290vgnA/company-logo_400_400/company-logo_400_400/0/1694645783117/rockefeller_capital_management_logo?e=1748476800&v=beta&t=GGabbKEN48dbOaZbatn02N6IlKb4KSBUoROqM05Ge90",
                    "company_industry": "Financial Services",
                    "job_description": "Audit Committee",
                    "raw_job_title": "Board Member",
                    "job_title": "Board Member",
                    "job_started_on": "Mar 2018",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Jan 2008",
            "started_at_position": "Jan 2008",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "54081708",
            "industry": "Renewable Energy Semiconductor Manufacturing",
            "location": "San Francisco, California, United States",
            "location_county": null,
            "location_city": "San Francisco",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Renewable Energy",
                "Resource Management",
                "Solar Energy",
                "Sustainability",
                "Management",
                "Energy Efficiency",
                "Energy",
                "Photovoltaics",
                "Alternative Energy",
                "Energy Policy",
                "Project Management",
                "Water",
                "Wind",
                "Environmental Awareness",
                "Project Planning",
                "Program Management",
                "Cleantech",
                "Energy Conservation",
                "Energy Management",
                "Sustainable Energy",
                "Project Finance",
                "Feasibility Studies",
                "Energy Audits",
                "Power Generation",
                "Climate Change",
                "Smart Grid"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Environmental Engineering & Science"
                    ],
                    "degree": "MS",
                    "university_id": "1792",
                    "university_name": "Stanford University"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Civil Engineering"
                    ],
                    "degree": "BS",
                    "university_id": "1792",
                    "university_name": "Stanford University"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Financial Economics"
                    ],
                    "degree": "MSc",
                    "university_id": "166649",
                    "university_name": "University of London"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Robert Redlinger",
            "full_name": "Robert Redlinger",
            "first_name": "Robert",
            "middle_name": "",
            "last_name": "Redlinger",
            "summary": null,
            "sales_id": "ACwAAAM5OKwB4LxkqLDspoGA10MLcihx7AbOvJQ",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAM5OKwB4LxkqLDspoGA10MLcihx7AbOvJQ,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/robert-redlinger-35014116",
            "headline": "Director, Global Energy and Sustainability at Apple",
            "raw_headline": "Director, Global Energy and Sustainability at Apple",
            "num_of_connections": 1235,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C5603AQFeRRuykUuvcg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1565132444661?e=1748476800&v=beta&t=Y_aT-Pl2Nlp382ZOcW3HiJSIGOdOjoK0x4IA-L9hnwU",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "English",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "Japanese",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "Spanish",
                    "proficiency": "LIMITED_WORKING"
                },
                {
                    "name": "French",
                    "proficiency": "ELEMENTARY"
                }
            ],
            "certifications": [
                {
                    "name": "Professional Engineer (Civil), California",
                    "licenseNumber": "C49616",
                    "company_id": ""
                }
            ],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": null,
            "raw_job_title": "Director, Global Energy and Sustainability",
            "job_title": "Director, Global Energy, Sustainability",
            "job_started_on": "Oct 2017",
            "job_ended_on": null,
            "job_location": "Cupertino, CA",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": null,
                    "raw_job_title": "Director, Global Energy and Sustainability",
                    "job_title": "Director, Global Energy, Sustainability",
                    "job_started_on": "Oct 2017",
                    "job_ended_on": null,
                    "job_location": "Cupertino, CA",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Oct 2017",
            "started_at_position": "Oct 2017",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "182908",
            "industry": "Software Development",
            "location": "San Jose, California, United States",
            "location_county": null,
            "location_city": "San Jose",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Data Modeling",
                "Big Data",
                "Project Management",
                "Continuous Integration (CI)",
                "C++",
                "Agile Methodologies",
                "Distributed Systems",
                "Software Engineering",
                "Software Development",
                "Scrum",
                "Cloud Computing",
                "Scalability",
                "Object Oriented Design",
                "Design Patterns",
                "Test Automation",
                "Software Design",
                "Test Driven Development",
                "Architecture",
                "Agile Project Management",
                "Python",
                "Java",
                "OOP",
                "Apache",
                "Open Source",
                "System Architecture"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1987
                    },
                    "ended_on": {
                        "year": 1994
                    },
                    "fields_of_study": [
                        "Mathematics & Computer Science"
                    ],
                    "degree": "Diploma",
                    "university_id": "1311736",
                    "university_name": "Leibniz Universitat Hannover"
                },
                {
                    "started_on": {
                        "year": 1991
                    },
                    "ended_on": {
                        "year": 1992
                    },
                    "fields_of_study": [
                        "Numerical Mathematics"
                    ],
                    "degree": "Masters",
                    "university_id": "11584",
                    "university_name": "Brunel University of London"
                }
            ],
            "twitter_link": null,
            "private_website": "https://plus.google.com/u/1/103097764320602190090/about",
            "unformatted_full_name": "Mark Striebeck",
            "full_name": "Mark Striebeck",
            "first_name": "Mark",
            "middle_name": "",
            "last_name": "Striebeck",
            "summary": null,
            "sales_id": "ACwAAAACynwBF8KFc5CeOLqZoj-2gVD2rN3zoqo",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAACynwBF8KFc5CeOLqZoj-2gVD2rN3zoqo,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/markstriebeck",
            "headline": "Leading Siri's platform teams",
            "raw_headline": "Leading Siri's platform teams",
            "num_of_connections": 2951,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C4E03AQHMBWQkKodABA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516178819644?e=1748476800&v=beta&t=FYUSknn-dVyhjIjYK1NdsLV3ae8JGFGH0sV6uecojGk",
            "is_premium": true,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": "Leading Siri platform",
            "raw_job_title": "Director of Engineering",
            "job_title": "Director of Engineering",
            "job_started_on": "Jan 2025",
            "job_ended_on": null,
            "job_location": "Santa Clara County, California, United States",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": "Leading Siri platform",
                    "raw_job_title": "Director of Engineering",
                    "job_title": "Director of Engineering",
                    "job_started_on": "Jan 2025",
                    "job_ended_on": null,
                    "job_location": "Santa Clara County, California, United States",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Jan 2025",
            "started_at_position": "Jan 2025",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "22111146",
            "industry": "Computer Hardware Manufacturing",
            "location": "Cupertino, California, United States",
            "location_county": null,
            "location_city": "Cupertino",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Strategic Sourcing",
                "Supply Chain Management"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Industrial Engineering"
                    ],
                    "degree": "Bachelor of Science - BS",
                    "university_id": "3846",
                    "university_name": "Purdue University"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Business"
                    ],
                    "degree": "Master of Business Administration - MBA",
                    "university_id": "271091",
                    "university_name": "University of St. Thomas (TX)"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Dan Rosckes",
            "full_name": "Dan Rosckes",
            "first_name": "Dan",
            "middle_name": "",
            "last_name": "Rosckes",
            "summary": "Manage and lead all Global Sourcing, Supply Chain and Procurement across all product lines worldwide. 22 years at Apple.",
            "sales_id": "ACwAAAFRY6oBUA3rfl7-fJfo1aIOCD168DK7yY0",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAFRY6oBUA3rfl7-fJfo1aIOCD168DK7yY0,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/dan-rosckes-9764a37",
            "headline": "Vice President Global Sourcing and Supply",
            "raw_headline": "Vice President Global Sourcing and Supply",
            "num_of_connections": 948,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQFW3RaK2Atqcw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667414520439?e=1748476800&v=beta&t=dtfe0EInZGqn3WUa_SWcWGEgpot090-5xQ0Bz9TzbqY",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": null,
            "raw_job_title": "Vice President Global Sourcing and Supply",
            "job_title": "Vice President Global Sourcing, Supply",
            "job_started_on": "Oct 2009",
            "job_ended_on": null,
            "job_location": "Cupertino, California, United States",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": null,
                    "raw_job_title": "Vice President Global Sourcing and Supply",
                    "job_title": "Vice President Global Sourcing, Supply",
                    "job_started_on": "Oct 2009",
                    "job_ended_on": null,
                    "job_location": "Cupertino, California, United States",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Oct 2009",
            "started_at_position": "Oct 2009",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "684237942",
            "industry": "Computers and Electronics Manufacturing",
            "location": "Cork Metropolitan Area",
            "location_county": null,
            "location_city": null,
            "location_state": "Cork",
            "location_country": "Ireland",
            "skills": [],
            "educations": [],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Gemma Naughton",
            "full_name": "Gemma Naughton",
            "first_name": "Gemma",
            "middle_name": "",
            "last_name": "Naughton",
            "summary": null,
            "sales_id": "ACwAACjIpHYBDeOYfEGQKEQMRjLMPUDaID6nWvA",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAACjIpHYBDeOYfEGQKEQMRjLMPUDaID6nWvA,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/gemma-naughton-046197171",
            "headline": "Director, AIML Data Operations at Apple",
            "raw_headline": "Director, AIML Data Operations at Apple",
            "num_of_connections": 619,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D4E03AQFzGmGOayGR8w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706201009040?e=1748476800&v=beta&t=7oWLN_fig1nuVJ9tIC0-dtnntJThONVu7upMuEr2QEw",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": null,
            "raw_job_title": "Director, AIML Data Operations",
            "job_title": "Director, AIML Data Operations",
            "job_started_on": "Nov 2024",
            "job_ended_on": null,
            "job_location": "Cork, County Cork, Ireland",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": null,
                    "raw_job_title": "Director, AIML Data Operations",
                    "job_title": "Director, AIML Data Operations",
                    "job_started_on": "Nov 2024",
                    "job_ended_on": null,
                    "job_location": "Cork, County Cork, Ireland",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Nov 2024",
            "started_at_position": "Nov 2024",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "21144401",
            "industry": "Appliances, Electrical, and Electronics Manufacturing",
            "location": "Cupertino, California, United States",
            "location_county": null,
            "location_city": "Cupertino",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Semiconductors",
                "Optics",
                "Photonics",
                "Characterization",
                "Thin Films",
                "Spectroscopy",
                "Simulations",
                "Optoelectronics",
                "R&D",
                "Sensors",
                "Labview",
                "Physics",
                "AFM",
                "Optical Engineering",
                "Materials Science",
                "Nanotechnology",
                "CVD",
                "Photolithography",
                "Design of Experiments",
                "Display Technology",
                "LCD",
                "Engineering Management",
                "Solid State Lighting"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Optics"
                    ],
                    "degree": "Ph.D., M.S., B.S.",
                    "university_id": "24531",
                    "university_name": "Zhejiang University"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Chenhua You",
            "full_name": "Chenhua You",
            "first_name": "Chenhua",
            "middle_name": "",
            "last_name": "You",
            "summary": null,
            "sales_id": "ACwAAAFCo1EBer_YIRpbTq9gNwp6QvviAtkCKlU",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAFCo1EBer_YIRpbTq9gNwp6QvviAtkCKlU,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/chenhua-you-4150b87",
            "headline": "Sr Optical Display Engineer",
            "raw_headline": "Sr Optical Display Engineer",
            "num_of_connections": 464,
            "profile_photo": null,
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": null,
            "raw_job_title": "Sr Optical Display Engineer",
            "job_title": "Senior Optical Display Engineer",
            "job_started_on": "May 2008",
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": null,
                    "raw_job_title": "Sr Optical Display Engineer",
                    "job_title": "Senior Optical Display Engineer",
                    "job_started_on": "May 2008",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "May 2008",
            "started_at_position": "May 2008",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "15547199",
            "industry": "Business Consulting and Services",
            "location": "United States",
            "location_county": null,
            "location_city": null,
            "location_state": null,
            "location_country": "United States",
            "skills": [
                "Innovation Management",
                "Program Management",
                "Creativity and Innovation",
                "Automotive Engineering",
                "Sensors",
                "Batteries",
                "compute",
                "Customer Service",
                "service supply",
                "Environmental, Social, and Governance (ESG)",
                "Executive Visibility",
                "Communication Training",
                "Manufacturing Process Improvement",
                "Communication",
                "Negotiation",
                "Product Design",
                "Supply Chain Management",
                "Business Strategy",
                "Contract Negotiation",
                "Strategic Leadership",
                "Automotive",
                "Strategy",
                "Competitive Analysis",
                "SPC",
                "Materials",
                "Acoustics",
                "Product Marketing",
                "Management",
                "Supply Chain",
                "Lean Manufacturing",
                "Business Process Improvement",
                "Design for Manufacturing",
                "Continuous Improvement",
                "Engineering Management",
                "Operations Management",
                "Strategic Sourcing",
                "FMEA",
                "Procurement",
                "Product Launch",
                "Leadership",
                "Team Leadership",
                "Strategic Planning"
            ],
            "educations": [
                {
                    "started_on": {
                        "month": 1,
                        "year": 2025
                    },
                    "ended_on": {
                        "month": 3,
                        "year": 2025
                    },
                    "fields_of_study": [
                        "Artificial Intelligence: Implications for Business Strategy"
                    ],
                    "degree": "Certificate",
                    "university_id": "1501",
                    "university_name": "MIT Sloan School of Management"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": null,
                    "degree": "Master of Business Administration - MBA",
                    "university_id": "4695",
                    "university_name": "Michigan State University"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Mechanical Engineering"
                    ],
                    "degree": "Bachelor of Science - BS",
                    "university_id": "15124851",
                    "university_name": "Mumbai University Mumbai"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Mechanical Engineering"
                    ],
                    "degree": "Master of Science - MS",
                    "university_id": "166680",
                    "university_name": "The University of Texas at Arlington"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Salil S.",
            "full_name": "Salil S",
            "first_name": "Salil",
            "middle_name": "",
            "last_name": "S",
            "summary": "Salil Shetye is a dynamic thought leader and visionary strategist with over two decades of experience at the forefront of global procurement, supply chain innovation, and product development. Known for his ability to forge strong partnerships and drive collaboration across suppliers, technical teams, and stakeholders, Salil has consistently delivered transformative results in highly competitive industries.\n\nThroughout his career at Apple and beyond, Salil has demonstrated a rare blend of technical expertise and strategic acumen. He has negotiated complex agreements, spearheaded innovative solutions, and championed sustainability while ensuring operational excellence on a global scale. His work spans groundbreaking technologies, including autonomous systems, high-density energy storage, and advanced audio and haptic innovations.\n\nSalil thrives on tackling the challenges of tomorrow, always working on transformative ideas that drive value and impact. As a natural collaborator and mentor, he empowers teams to push boundaries and achieve extraordinary outcomes.\n\nSalil is always open to meaningful conversations about innovation, strategy, and partnerships. If you share a passion for bold ideas and transformative ventures, don't hesitate to reach out.",
            "sales_id": "ACwAAADtOz8BIivJnltw0vaVj6cejhfgUWFREOw",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAADtOz8BIivJnltw0vaVj6cejhfgUWFREOw,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/salilshetye",
            "headline": "Operations, Mobility & Procurement Innovator | Investor | Entrepreneur | Building the future of Supply Chain",
            "raw_headline": "Operations, Mobility & Procurement Innovator | Investor | Entrepreneur | Building the future of Supply Chain",
            "num_of_connections": 1889,
            "profile_photo": null,
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": "AppleCare - Service Supply Chain Operations\n   - Lead global procurement strategies for AppleCare, optimizing service supply chain scalability and resilience.\n   - Partner with engineering and operations to enhance supply chain performance for repair and service parts.\n   - Drive ethical sourcing and sustainability initiatives across AppleCare's ecosystem.\n   - Build and lead high-performing teams to execute operational excellence at scale.\n\niPhone OEM, Accessories, SPG, and Consumables\n   - Managed procurement strategies across global manufacturing sites for iPhone, accessories, and SPG, aligning operations with product goals.\n   - Directed sourcing for consumables, including adhesives and protective films, ensuring consistent quality and innovation.\n   \nApple Audio and Accessories\n   - Orchestrated procurement for AirPods, HomePods, and Beats hardware, ensuring seamless product launches.\n   - Advanced capacity for MEMS microphones and sensors, driving market leadership and tech innovation.\n\nSpecial Projects Group (SPG) - Strategic Deals\n   - Negotiated high-value procurement for autonomous driving systems, battery tech, and adv sensor suites.\n   - Enabled ventures into mobility and cutting-edge hardware innovations.\n\nBattery Technology and Capital Equipment (CapEX) \n   - Spearheaded the commercial development of adv energy storage solutions and high-density battery systems.\n   - Optimized Cap-Ex / Op-Ex planning for next-gen energy storage tech.\n\nAudio/Acoustics, Haptics, and Vibration Motors\n   - Led product launches for innovative audio and haptic components in iOS and Mac products.\n   - Scaled supply chain capacity for acoustic and haptic tech, driving product growth strategies.\n   \nLeadership and Organizational Development\n   - Drove procurement innovation and operational excellence.\n   - Defined and executed strategic vision for procurement, ensuring growth and resilience.\n   - Negotiated complex agreements to secure critical technologies and partnerships.",
            "raw_job_title": "Director of Operations Procurement",
            "job_title": "Director of Operations Procurement",
            "job_started_on": "Jul 2010",
            "job_ended_on": null,
            "job_location": "San Francisco Bay Area",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": "AppleCare - Service Supply Chain Operations\n   - Lead global procurement strategies for AppleCare, optimizing service supply chain scalability and resilience.\n   - Partner with engineering and operations to enhance supply chain performance for repair and service parts.\n   - Drive ethical sourcing and sustainability initiatives across AppleCare's ecosystem.\n   - Build and lead high-performing teams to execute operational excellence at scale.\n\niPhone OEM, Accessories, SPG, and Consumables\n   - Managed procurement strategies across global manufacturing sites for iPhone, accessories, and SPG, aligning operations with product goals.\n   - Directed sourcing for consumables, including adhesives and protective films, ensuring consistent quality and innovation.\n   \nApple Audio and Accessories\n   - Orchestrated procurement for AirPods, HomePods, and Beats hardware, ensuring seamless product launches.\n   - Advanced capacity for MEMS microphones and sensors, driving market leadership and tech innovation.\n\nSpecial Projects Group (SPG) - Strategic Deals\n   - Negotiated high-value procurement for autonomous driving systems, battery tech, and adv sensor suites.\n   - Enabled ventures into mobility and cutting-edge hardware innovations.\n\nBattery Technology and Capital Equipment (CapEX) \n   - Spearheaded the commercial development of adv energy storage solutions and high-density battery systems.\n   - Optimized Cap-Ex / Op-Ex planning for next-gen energy storage tech.\n\nAudio/Acoustics, Haptics, and Vibration Motors\n   - Led product launches for innovative audio and haptic components in iOS and Mac products.\n   - Scaled supply chain capacity for acoustic and haptic tech, driving product growth strategies.\n   \nLeadership and Organizational Development\n   - Drove procurement innovation and operational excellence.\n   - Defined and executed strategic vision for procurement, ensuring growth and resilience.\n   - Negotiated complex agreements to secure critical technologies and partnerships.",
                    "raw_job_title": "Director of Operations Procurement",
                    "job_title": "Director of Operations Procurement",
                    "job_started_on": "Jul 2010",
                    "job_ended_on": null,
                    "job_location": "San Francisco Bay Area",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Jul 2010",
            "started_at_position": "Jul 2010",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "18573",
            "industry": "Computers and Electronics Manufacturing",
            "location": "San Jose, California, United States",
            "location_county": null,
            "location_city": "San Jose",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Product Marketing",
                "Business Development",
                "Marketing Strategy",
                "Strategic Partnerships",
                "Product Management",
                "Marketing",
                "Digital Media",
                "Digital Marketing",
                "Social Media Marketing",
                "Mobile Devices",
                "Management",
                "Video",
                "Digital Strategy",
                "Email Marketing",
                "Mobile Marketing"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1982
                    },
                    "ended_on": {
                        "year": 1987
                    },
                    "fields_of_study": [
                        "Mechanical Engineering and Marketing "
                    ],
                    "degree": "BS BBA",
                    "university_id": "166659",
                    "university_name": "University of Oklahoma"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": null,
                    "degree": "Guest Lecturer",
                    "university_id": "15094531",
                    "university_name": "Kyoto University"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": null,
                    "degree": "Guest Lecturer",
                    "university_id": "15096035",
                    "university_name": "Tokyo Denki University"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Glenn B.",
            "full_name": "Glenn B",
            "first_name": "Glenn",
            "middle_name": "",
            "last_name": "B",
            "summary": "Leading Direct Marketing for our Services Division (App Store, Music, TV+, Books, PodCasts, Fitness, iCloud, Card/Pay/Maps...) Focused on helping everyone on our teams grow through working smart to delight, educate, and inspire our customers worldwide.",
            "sales_id": "ACwAAAAASI0Bbg0X3077E3dRp9THpYFUsUFCONc",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAAASI0Bbg0X3077E3dRp9THpYFUsUFCONc,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/glennbulycz",
            "headline": "Marketing at Apple (R)",
            "raw_headline": "Marketing at Apple (R)",
            "num_of_connections": 2195,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C5603AQH_pCPAKZhIvQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1546041946189?e=1748476800&v=beta&t=9Tdyv1OUKp9wP5gQXsVkU-QWcU50xDfL9kw1V6olrnM",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "French"
                },
                {
                    "name": "Italian"
                }
            ],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": "Leading WW Direct Marketing and CRM programs for all businesses in the Services Division of Apple.",
            "raw_job_title": "Marketing Director",
            "job_title": "Marketing Director",
            "job_started_on": "Nov 2012",
            "job_ended_on": null,
            "job_location": "Cupertino, CA",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": "Leading WW Direct Marketing and CRM programs for all businesses in the Services Division of Apple.",
                    "raw_job_title": "Marketing Director",
                    "job_title": "Marketing Director",
                    "job_started_on": "Nov 2012",
                    "job_ended_on": null,
                    "job_location": "Cupertino, CA",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Nov 2012",
            "started_at_position": "Nov 2012",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "2164340",
            "industry": "Computers and Electronics Manufacturing",
            "location": "Fremont, California, United States",
            "location_county": null,
            "location_city": "Fremont",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "CRM - Services Management",
                "Knowledge Management",
                "Strategic Planning",
                "Enterprise Content Management",
                "Management",
                "IT Operations",
                "Portals",
                "Technical Leadership",
                "Cross-functional Team Leadership",
                "Program Management",
                "Enterprise Search",
                "Enterprise Software",
                "Change Management",
                "Team Building",
                "IT Strategy",
                "Collaboration Solutions",
                "CRM",
                "Integration",
                "Organizational Leadership",
                "Localization",
                "Social Media",
                "Records Management",
                "Strategy",
                "Cloud Computing",
                "Software Project Management",
                "Content Management",
                "Web Experience Management",
                "Knowledge Centered Support (KCS)",
                "PeopleSoft",
                "Vendor Management",
                "SaaS",
                "Project Management",
                "Consulting",
                "SDLC",
                "Agile Methodologies",
                "Customer Relationship Management (CRM)"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Industrial Engineering"
                    ],
                    "degree": "MS",
                    "university_id": "15108983",
                    "university_name": "Indian Institute of Management Mumbai"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Industrial Engineering"
                    ],
                    "degree": "BE",
                    "university_id": "157269",
                    "university_name": "Indian Institute of Technology, Roorkee"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Amit Bansal",
            "full_name": "Amit Bansal",
            "first_name": "Amit",
            "middle_name": "",
            "last_name": "Bansal",
            "summary": "I am a passionate technology leader who successfully collaborates across organizations to drive vision, IT strategy and delivery of global enterprise IT services for large enterprises. In my career I have successfully built many highly effective global teams and led several large business and technical transformational programs that led to replacing complex enterprise grade legacy solutions with new cutting edge technical solutions without business disruption. I have extensive experience in building trust based business partnership across multiple groups. \n\nExpertise\n\nIT Leadership - IT Strategy, Product Management, Customer Journey Mapping/BPR, Vendor Management, Contract Negotiation, Business Engagement and Partnership Management, Change Management, Team Development,  Talent Management, Global Organization Development,  System Delivery (concept to go-live) using Agile and traditional methodologies, IT Operations Management, Budget Management\n\nDomain - CRM Services Management, Multi-channel Customer Services Management, Call Center Technologies, Online Self-Service, Knowledge Management, Learning Management, Enterprise Content Management, Web Content Management, Communities, Content Localization, Customer Feedback Management, Shipping Logistics Management\n\nTechnologies, IT Services - Multi-tenant private cloud based IT services, distributed global highly scalable enterprise services architecture, SOA, Web architecture, Native iOS bases applications, Database technologies (Relational and No SQL), JEE\n\nSoftware Products - Adobe AEM, SDL WorldServer, Saba LMS, EMC Documentum, FAST Search, Oracle KM (Inquira), Verint Vovici, Jive",
            "sales_id": "ACwAAAAhBnQBS8_1FS2nYR-4Wlozr6bTbJGLYvI",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAAhBnQBS8_1FS2nYR-4Wlozr6bTbJGLYvI,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/ambansal2",
            "headline": "Director Of Information Technology at Apple ",
            "raw_headline": "Director Of Information Technology at Apple ",
            "num_of_connections": 1002,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQGKf_YENR2vnA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671040480216?e=1748476800&v=beta&t=dp4S_OPFawNXQ9f54iyZeLGUfenvXkk83dIMu3JawiY",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "Hindi",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "English",
                    "proficiency": "FULL_PROFESSIONAL"
                }
            ],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": "Leading IT strategy, technology directions, core engineering and operations for Global Repairs Management and CRM platform at Apple",
            "raw_job_title": "Director Of Information Technology",
            "job_title": "Director of Information Technology",
            "job_started_on": "Mar 2019",
            "job_ended_on": null,
            "job_location": "Cupertino",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": "Leading IT strategy, technology directions, core engineering and operations for Global Repairs Management and CRM platform at Apple",
                    "raw_job_title": "Director Of Information Technology",
                    "job_title": "Director of Information Technology",
                    "job_started_on": "Mar 2019",
                    "job_ended_on": null,
                    "job_location": "Cupertino",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Mar 2019",
            "started_at_position": "Mar 2019",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "15432204",
            "industry": "Computer Networking Products",
            "location": "Mill Valley, California, United States",
            "location_county": null,
            "location_city": "Mill Valley",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Team Leadership",
                "Strategic Communications",
                "Cross Functional Team Building",
                "Cloud Computing",
                "Data Center",
                "Network Security",
                "Security",
                "Networking",
                "Firewalls",
                "Cisco IOS",
                "Cisco Technologies",
                "Network Architecture",
                "TCP/IP",
                "Virtualization",
                "Computer Security",
                "Servers",
                "Troubleshooting",
                "IT Operations",
                "Information Security",
                "Web Application Security",
                "DDoS Mitigation and Prevention",
                "Unix Security",
                "Agile Methodologies",
                "Agile Project Management",
                "DevOps",
                "Disaster Recovery",
                "Internet Protocol Suite (TCP/IP)",
                "Enterprise Software",
                "Cisco Systems Products"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1988
                    },
                    "ended_on": {
                        "year": 1998
                    },
                    "fields_of_study": null,
                    "degree": null,
                    "university_id": "13302",
                    "university_name": "University of Montana"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Brian Fahey",
            "full_name": "Brian Fahey",
            "first_name": "Brian",
            "middle_name": "",
            "last_name": "Fahey",
            "summary": null,
            "sales_id": "ACwAAADregwBUNXMXO_3ekjE24OLsWU75baCsx0",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAADregwBUNXMXO_3ekjE24OLsWU75baCsx0,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/brian-fahey-8102025",
            "headline": "Director, Information Security at Apple",
            "raw_headline": "Director, Information Security at Apple",
            "num_of_connections": 1225,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C4E03AQG-3_Sn75b9Gg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517731968569?e=1748476800&v=beta&t=fr7jQkJE49zApNtkJmmRXBaiDgBFBzrSYX6GjG0JDv4",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": null,
            "raw_job_title": "Director, Information Security",
            "job_title": "Director, Information Security",
            "job_started_on": "Feb 2019",
            "job_ended_on": null,
            "job_location": "San Francisco, California, United States",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": null,
                    "raw_job_title": "Director, Information Security",
                    "job_title": "Director, Information Security",
                    "job_started_on": "Feb 2019",
                    "job_ended_on": null,
                    "job_location": "San Francisco, California, United States",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Feb 2019",
            "started_at_position": "Feb 2019",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "357985202",
            "industry": "Financial Services",
            "location": "New York, New York, United States",
            "location_county": null,
            "location_city": "New York",
            "location_state": "New York",
            "location_country": "United States",
            "skills": [
                "Direct Sales",
                "Governance",
                "Leadership",
                "Philanthropy",
                "Small Business",
                "Executive Management",
                "Strategy",
                "Leadership Development",
                "Strategic Partnerships",
                "Strategic Planning",
                "Finance",
                "Business Planning",
                "Business Strategy",
                "Start-ups",
                "Cross-functional Team Leadership",
                "Entrepreneurship",
                "Marketing",
                "Marketing Strategy",
                "Social Media"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1975
                    },
                    "ended_on": {
                        "year": 1979
                    },
                    "fields_of_study": [
                        "English Language and Literature/Letters"
                    ],
                    "degree": "Bachelor of Arts (BA)",
                    "university_id": "157313",
                    "university_name": "Princeton University"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Andrea Jung",
            "full_name": "Andrea Jung",
            "first_name": "Andrea",
            "middle_name": "",
            "last_name": "Jung",
            "summary": "Andrea Jung is President and Chief Executive Officer of Grameen America, the largest microfinance organization in the United States. Ms. Jung, the former Chairman and Chief Executive Officer of Avon Products, Inc. and longtime champion of women's issues, was appointed by Grameen's Chairman Nobel Peace Laureate Muhammad Yunus to the position in 2014 'to bring her unique qualifications and able leadership to accelerate our mission.\" Grameen America is dedicated to helping minority women who live in poverty build small businesses to create better lives for their families. In a record achievement over the last fifteen years, Grameen America has proven that microlending to women increases their income, creates assets and builds communities, and has invested over $3.2 billion in loan capital to over 170,000 low income entrepreneurs and their families. \n\nMs. Jung, the longest serving female chief executive in the Fortune 500, is respected as a trailblazer for women's empowerment. Ms. Jung was also the first woman to serve as Chairman of the Cosmetic, Toiletry & Fragrance Association, and Chairman of the World Federation of Direct Selling Associations. \n \nDuring her tenure at Avon, she was responsible for developing and expanding earnings opportunities to over six million women in over one hundred countries. Ms. Jung has been lauded globally for her dedication to empowering women through her pursuit of public-private partnerships. Under her leadership, the Avon Foundation for Women raised and awarded over $1.5 billion to support health and empowerment causes, becoming the largest women-focused corporate philanthropy around the world. In 2010, she received the Clinton Global Citizen Award for her visionary leadership in solving pressing global issues. \n\nMs. Jung ranked consistently among top leaders including Fortune's \"Most Powerful Women in Business,\" Forbes' 'Most Powerful Women in the World\" and Financial Times' \"Top Women in World Business.\"",
            "sales_id": "ACwAABVWa7IBi4H26Z1Q034RR3kK7PdMous0ZLc",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAABVWa7IBi4H26Z1Q034RR3kK7PdMous0ZLc,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/andrea-jung-442a7b9b",
            "headline": "Microfinance and Poverty Alleviation, Women's Economic Empowerment",
            "raw_headline": "Microfinance and Poverty Alleviation, Women's Economic Empowerment",
            "num_of_connections": 2294,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C4E03AQEq8FI6BNVSRw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1644538609802?e=1748476800&v=beta&t=w-e6vMsnSGIy2GFMzsl772rLHWv3zK_w40rmt-biAqU",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": "Chairman, Compensation Committee\nNominating and Governance Committee\nFormer Co-lead Director",
            "raw_job_title": "Board Director",
            "job_title": "Board Director",
            "job_started_on": "Jan 2008",
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "598139",
                    "raw_company_name": "Grameen America, Inc.",
                    "company_name": "Grameen America",
                    "company_description": "Grameen America is dedicated to helping low-income women build small businesses to create better lives for their families. We offer access to loan capital, financial education, asset- and credit-building, and peer support to transform communities and advance financial mobility in the United States.\n\nGrameen America has invested over $5.2 billion to more than 224,000 women entrepreneurs across 29 cities in the U.S.",
                    "company_url": "https://www.linkedin.com/company/grameen-america-inc-/",
                    "company_website": "http://www.grameenamerica.org",
                    "company_location": "Babylon, New York, United States",
                    "company_city": "Babylon",
                    "company_state": "New York",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C510BAQFNKDQGfK6oeg/company-logo_400_400/company-logo_400_400/0/1631346744143?e=1748476800&v=beta&t=ApoYXR7-2uU8sqtlyRlbKWJ4tLy-oLtSrMZY0eSfihs",
                    "company_industry": "Financial Services",
                    "job_description": null,
                    "raw_job_title": "President And CEO",
                    "job_title": "President, CEO",
                    "job_started_on": "Jan 2014",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": "Chairman, Compensation Committee\nNominating and Governance Committee\nFormer Co-lead Director",
                    "raw_job_title": "Board Director",
                    "job_title": "Board Director",
                    "job_started_on": "Jan 2008",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "1248",
                    "raw_company_name": "Unilever",
                    "company_name": "Unilever",
                    "company_description": "Be part of the world's most successful, purpose-led business. Work with brands that are well-loved around the world, that improve the lives of our consumers and the communities around us. We promote innovation, big and small, to make our business win and grow; and we believe in business as a force for good. Unleash your curiosity, challenge ideas and disrupt processes; use your energy to make this happen. Our brilliant business leaders and colleagues provide mentorship and inspiration, so you can be at your best. \n\nOur portfolio ranges from nutritionally balanced foods to indulgent ice creams, affordable soaps, luxurious shampoos and everyday household care products. We produce world-leading brands including Lipton, Knorr, Dove, Axe, Hellmann's and Omo, alongside trusted local names and innovative-forward thinking brands like Ben & Jerry's, The Dollar Shave Club and Dermalogica. \n\nEvery individual here can bring their purpose to life through their work. Join us and you'll be surrounded by inspiring leaders and supportive peers. Among them, you'll channel your purpose, bring fresh ideas to the table, and simply be you. As you work to make a real impact on the business and the world, we'll work to help you become a better you.  ",
                    "company_url": "https://www.linkedin.com/company/unilever/",
                    "company_website": "http://www.unilever.com",
                    "company_location": "London, England, United Kingdom",
                    "company_city": "London",
                    "company_state": "England",
                    "company_country": "United Kingdom",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4E0BAQF6TJKa56uLAg/company-logo_400_400/company-logo_400_400/0/1663661971310/unilever_logo?e=1748476800&v=beta&t=ziL2Ho5Xx1bxK-iV5xnhxVXlI2Wgjz1rLuPoGuCmYuY",
                    "company_industry": "Manufacturing",
                    "job_description": "Vice-Chair, Senior Independent Director \nChairman, Compensation Committee\nNominating and Governance Committee",
                    "raw_job_title": "Board Director",
                    "job_title": "Board Director",
                    "job_started_on": "May 2018",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "19857",
                    "raw_company_name": "Wayfair",
                    "company_name": "Wayfair",
                    "company_description": "Wayfair is the destination for all things home: helping everyone, anywhere create their feeling of home. From expert customer service, to the development of tools that make the shopping process easier, to carrying one of the widest and deepest selections of items for every space, style, and budget, Wayfair gives everyone the power to create spaces that are just right for them.",
                    "company_url": "https://www.linkedin.com/company/wayfair/",
                    "company_website": "http://aboutwayfair.com/careers",
                    "company_location": "Boston, Massachusetts, United States",
                    "company_city": "Boston",
                    "company_state": "Massachusetts",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/D4E0BAQE5VUS4aKzIjw/company-logo_400_400/company-logo_400_400/0/1707335788746/wayfair_logo?e=1748476800&v=beta&t=etixwq-8sFqefqzhs9wJE8KRZWpI7abHQ2o1vU-krpc",
                    "company_industry": "Retail",
                    "job_description": "Compensation Committee\nNominating and Governance Committee",
                    "raw_job_title": "Board Director",
                    "job_title": "Board Director",
                    "job_started_on": "May 2018",
                    "job_ended_on": null,
                    "job_location": "Boston, Massachusetts",
                    "job_still_working": true
                },
                {
                    "company_id": "11511462",
                    "raw_company_name": "Rockefeller Capital Management",
                    "company_name": "Rockefeller Capital Management",
                    "company_description": "At Rockefeller Capital Management, we aspire to bring the unique promise of the Rockefeller legacy together with a culture of innovation and cutting-edge technology to help discerning clients--individuals, families, businesses, and institutions--achieve their goals through the delivery of premier financial advisory and investment management. We specialize in wealth management, asset management, and investment management with the objective of connecting clients to a broad network of solutions and compelling opportunities that they wouldn't be able to explore anywhere else.\n\nOriginally founded in 1882 as the family office of John D. Rockefeller, the firm has evolved to offer strategic advice to ultra- and high-net-worth individuals and families, institutions, and corporations.",
                    "company_url": "https://www.linkedin.com/company/rockefeller-capital-management/",
                    "company_website": "https://www.rockco.com/",
                    "company_location": "New York, New York, United States",
                    "company_city": "New York",
                    "company_state": "New York",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/D4E0BAQGzdsi290vgnA/company-logo_400_400/company-logo_400_400/0/1694645783117/rockefeller_capital_management_logo?e=1748476800&v=beta&t=GGabbKEN48dbOaZbatn02N6IlKb4KSBUoROqM05Ge90",
                    "company_industry": "Financial Services",
                    "job_description": "Audit Committee",
                    "raw_job_title": "Board Member",
                    "job_title": "Board Member",
                    "job_started_on": "Mar 2018",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Jan 2008",
            "started_at_position": "Jan 2008",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "54081708",
            "industry": "Renewable Energy Semiconductor Manufacturing",
            "location": "San Francisco, California, United States",
            "location_county": null,
            "location_city": "San Francisco",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Renewable Energy",
                "Resource Management",
                "Solar Energy",
                "Sustainability",
                "Management",
                "Energy Efficiency",
                "Energy",
                "Photovoltaics",
                "Alternative Energy",
                "Energy Policy",
                "Project Management",
                "Water",
                "Wind",
                "Environmental Awareness",
                "Project Planning",
                "Program Management",
                "Cleantech",
                "Energy Conservation",
                "Energy Management",
                "Sustainable Energy",
                "Project Finance",
                "Feasibility Studies",
                "Energy Audits",
                "Power Generation",
                "Climate Change",
                "Smart Grid"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Environmental Engineering & Science"
                    ],
                    "degree": "MS",
                    "university_id": "1792",
                    "university_name": "Stanford University"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Civil Engineering"
                    ],
                    "degree": "BS",
                    "university_id": "1792",
                    "university_name": "Stanford University"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Financial Economics"
                    ],
                    "degree": "MSc",
                    "university_id": "166649",
                    "university_name": "University of London"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Robert Redlinger",
            "full_name": "Robert Redlinger",
            "first_name": "Robert",
            "middle_name": "",
            "last_name": "Redlinger",
            "summary": null,
            "sales_id": "ACwAAAM5OKwB4LxkqLDspoGA10MLcihx7AbOvJQ",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAM5OKwB4LxkqLDspoGA10MLcihx7AbOvJQ,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/robert-redlinger-35014116",
            "headline": "Director, Global Energy and Sustainability at Apple",
            "raw_headline": "Director, Global Energy and Sustainability at Apple",
            "num_of_connections": 1235,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C5603AQFeRRuykUuvcg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1565132444661?e=1748476800&v=beta&t=Y_aT-Pl2Nlp382ZOcW3HiJSIGOdOjoK0x4IA-L9hnwU",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [
                {
                    "name": "English",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "Japanese",
                    "proficiency": "NATIVE_OR_BILINGUAL"
                },
                {
                    "name": "Spanish",
                    "proficiency": "LIMITED_WORKING"
                },
                {
                    "name": "French",
                    "proficiency": "ELEMENTARY"
                }
            ],
            "certifications": [
                {
                    "name": "Professional Engineer (Civil), California",
                    "licenseNumber": "C49616",
                    "company_id": ""
                }
            ],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": null,
            "raw_job_title": "Director, Global Energy and Sustainability",
            "job_title": "Director, Global Energy, Sustainability",
            "job_started_on": "Oct 2017",
            "job_ended_on": null,
            "job_location": "Cupertino, CA",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": null,
                    "raw_job_title": "Director, Global Energy and Sustainability",
                    "job_title": "Director, Global Energy, Sustainability",
                    "job_started_on": "Oct 2017",
                    "job_ended_on": null,
                    "job_location": "Cupertino, CA",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Oct 2017",
            "started_at_position": "Oct 2017",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "182908",
            "industry": "Software Development",
            "location": "San Jose, California, United States",
            "location_county": null,
            "location_city": "San Jose",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Data Modeling",
                "Big Data",
                "Project Management",
                "Continuous Integration (CI)",
                "C++",
                "Agile Methodologies",
                "Distributed Systems",
                "Software Engineering",
                "Software Development",
                "Scrum",
                "Cloud Computing",
                "Scalability",
                "Object Oriented Design",
                "Design Patterns",
                "Test Automation",
                "Software Design",
                "Test Driven Development",
                "Architecture",
                "Agile Project Management",
                "Python",
                "Java",
                "OOP",
                "Apache",
                "Open Source",
                "System Architecture"
            ],
            "educations": [
                {
                    "started_on": {
                        "year": 1987
                    },
                    "ended_on": {
                        "year": 1994
                    },
                    "fields_of_study": [
                        "Mathematics & Computer Science"
                    ],
                    "degree": "Diploma",
                    "university_id": "1311736",
                    "university_name": "Leibniz Universitat Hannover"
                },
                {
                    "started_on": {
                        "year": 1991
                    },
                    "ended_on": {
                        "year": 1992
                    },
                    "fields_of_study": [
                        "Numerical Mathematics"
                    ],
                    "degree": "Masters",
                    "university_id": "11584",
                    "university_name": "Brunel University of London"
                }
            ],
            "twitter_link": null,
            "private_website": "https://plus.google.com/u/1/103097764320602190090/about",
            "unformatted_full_name": "Mark Striebeck",
            "full_name": "Mark Striebeck",
            "first_name": "Mark",
            "middle_name": "",
            "last_name": "Striebeck",
            "summary": null,
            "sales_id": "ACwAAAACynwBF8KFc5CeOLqZoj-2gVD2rN3zoqo",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAACynwBF8KFc5CeOLqZoj-2gVD2rN3zoqo,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/markstriebeck",
            "headline": "Leading Siri's platform teams",
            "raw_headline": "Leading Siri's platform teams",
            "num_of_connections": 2951,
            "profile_photo": "https://media.licdn.com/dms/image/v2/C4E03AQHMBWQkKodABA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516178819644?e=1748476800&v=beta&t=FYUSknn-dVyhjIjYK1NdsLV3ae8JGFGH0sV6uecojGk",
            "is_premium": true,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": "Leading Siri platform",
            "raw_job_title": "Director of Engineering",
            "job_title": "Director of Engineering",
            "job_started_on": "Jan 2025",
            "job_ended_on": null,
            "job_location": "Santa Clara County, California, United States",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": "Leading Siri platform",
                    "raw_job_title": "Director of Engineering",
                    "job_title": "Director of Engineering",
                    "job_started_on": "Jan 2025",
                    "job_ended_on": null,
                    "job_location": "Santa Clara County, California, United States",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Jan 2025",
            "started_at_position": "Jan 2025",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "22111146",
            "industry": "Computer Hardware Manufacturing",
            "location": "Cupertino, California, United States",
            "location_county": null,
            "location_city": "Cupertino",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Strategic Sourcing",
                "Supply Chain Management"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Industrial Engineering"
                    ],
                    "degree": "Bachelor of Science - BS",
                    "university_id": "3846",
                    "university_name": "Purdue University"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Business"
                    ],
                    "degree": "Master of Business Administration - MBA",
                    "university_id": "271091",
                    "university_name": "University of St. Thomas (TX)"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Dan Rosckes",
            "full_name": "Dan Rosckes",
            "first_name": "Dan",
            "middle_name": "",
            "last_name": "Rosckes",
            "summary": "Manage and lead all Global Sourcing, Supply Chain and Procurement across all product lines worldwide. 22 years at Apple.",
            "sales_id": "ACwAAAFRY6oBUA3rfl7-fJfo1aIOCD168DK7yY0",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAFRY6oBUA3rfl7-fJfo1aIOCD168DK7yY0,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/dan-rosckes-9764a37",
            "headline": "Vice President Global Sourcing and Supply",
            "raw_headline": "Vice President Global Sourcing and Supply",
            "num_of_connections": 948,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQFW3RaK2Atqcw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667414520439?e=1748476800&v=beta&t=dtfe0EInZGqn3WUa_SWcWGEgpot090-5xQ0Bz9TzbqY",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": null,
            "raw_job_title": "Vice President Global Sourcing and Supply",
            "job_title": "Vice President Global Sourcing, Supply",
            "job_started_on": "Oct 2009",
            "job_ended_on": null,
            "job_location": "Cupertino, California, United States",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": null,
                    "raw_job_title": "Vice President Global Sourcing and Supply",
                    "job_title": "Vice President Global Sourcing, Supply",
                    "job_started_on": "Oct 2009",
                    "job_ended_on": null,
                    "job_location": "Cupertino, California, United States",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Oct 2009",
            "started_at_position": "Oct 2009",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "684237942",
            "industry": "Computers and Electronics Manufacturing",
            "location": "Cork Metropolitan Area",
            "location_county": null,
            "location_city": null,
            "location_state": "Cork",
            "location_country": "Ireland",
            "skills": [],
            "educations": [],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Gemma Naughton",
            "full_name": "Gemma Naughton",
            "first_name": "Gemma",
            "middle_name": "",
            "last_name": "Naughton",
            "summary": null,
            "sales_id": "ACwAACjIpHYBDeOYfEGQKEQMRjLMPUDaID6nWvA",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAACjIpHYBDeOYfEGQKEQMRjLMPUDaID6nWvA,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/gemma-naughton-046197171",
            "headline": "Director, AIML Data Operations at Apple",
            "raw_headline": "Director, AIML Data Operations at Apple",
            "num_of_connections": 619,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D4E03AQFzGmGOayGR8w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706201009040?e=1748476800&v=beta&t=7oWLN_fig1nuVJ9tIC0-dtnntJThONVu7upMuEr2QEw",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": null,
            "raw_job_title": "Director, AIML Data Operations",
            "job_title": "Director, AIML Data Operations",
            "job_started_on": "Nov 2024",
            "job_ended_on": null,
            "job_location": "Cork, County Cork, Ireland",
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": null,
                    "raw_job_title": "Director, AIML Data Operations",
                    "job_title": "Director, AIML Data Operations",
                    "job_started_on": "Nov 2024",
                    "job_ended_on": null,
                    "job_location": "Cork, County Cork, Ireland",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "Nov 2024",
            "started_at_position": "Nov 2024",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "21144401",
            "industry": "Appliances, Electrical, and Electronics Manufacturing",
            "location": "Cupertino, California, United States",
            "location_county": null,
            "location_city": "Cupertino",
            "location_state": "California",
            "location_country": "United States",
            "skills": [
                "Semiconductors",
                "Optics",
                "Photonics",
                "Characterization",
                "Thin Films",
                "Spectroscopy",
                "Simulations",
                "Optoelectronics",
                "R&D",
                "Sensors",
                "Labview",
                "Physics",
                "AFM",
                "Optical Engineering",
                "Materials Science",
                "Nanotechnology",
                "CVD",
                "Photolithography",
                "Design of Experiments",
                "Display Technology",
                "LCD",
                "Engineering Management",
                "Solid State Lighting"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Optics"
                    ],
                    "degree": "Ph.D., M.S., B.S.",
                    "university_id": "24531",
                    "university_name": "Zhejiang University"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Chenhua You",
            "full_name": "Chenhua You",
            "first_name": "Chenhua",
            "middle_name": "",
            "last_name": "You",
            "summary": null,
            "sales_id": "ACwAAAFCo1EBer_YIRpbTq9gNwp6QvviAtkCKlU",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAFCo1EBer_YIRpbTq9gNwp6QvviAtkCKlU,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/chenhua-you-4150b87",
            "headline": "Sr Optical Display Engineer",
            "raw_headline": "Sr Optical Display Engineer",
            "num_of_connections": 464,
            "profile_photo": null,
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "162479",
            "raw_company_name": "Apple",
            "company_name": "Apple",
            "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
            "company_url": null,
            "company_website": "http://www.apple.com/careers",
            "company_location": "Cupertino, California, United States",
            "company_city": "Cupertino",
            "company_state": "California",
            "company_country": "United States",
            "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1748476800&v=beta&t=lzsZskYdaxV4DbSUowejwpnbLPxrtnGatDL4LwLZkc8",
            "company_industry": "Computers and Electronics Manufacturing",
            "job_description": null,
            "raw_job_title": "Sr Optical Display Engineer",
            "job_title": "Senior Optical Display Engineer",
            "job_started_on": "May 2008",
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "162479",
                    "raw_company_name": "Apple",
                    "company_name": "Apple",
                    "company_description": "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices -- strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
                    "company_url": "https://www.linkedin.com/company/apple/",
                    "company_website": "http://www.apple.com/careers",
                    "company_location": "Cupertino, California, United States",
                    "company_city": "Cupertino",
                    "company_state": "California",
                    "company_country": "United States",
                    "company_image": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1748476800&v=beta&t=iPs4O0yeQRW8jO9WZoET4aWFD459wv0OGervPVKSftY",
                    "company_industry": "Computers and Electronics Manufacturing",
                    "job_description": null,
                    "raw_job_title": "Sr Optical Display Engineer",
                    "job_title": "Senior Optical Display Engineer",
                    "job_started_on": "May 2008",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "162479",
            "started_at_company": "May 2008",
            "started_at_position": "May 2008",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "1434371376",
            "industry": "Technology, Information and Internet",
            "location": "California, United States",
            "location_county": null,
            "location_city": null,
            "location_state": "California",
            "location_country": "United States",
            "skills": [],
            "educations": [],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Quandale Dingle",
            "full_name": "Quandale Dingle",
            "first_name": "Quandale",
            "middle_name": "",
            "last_name": "Dingle",
            "summary": null,
            "sales_id": "ACwAAFV-xTABW5rI4nUJhj_lb-Xjbjm5UTg85Zg",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAFV-xTABW5rI4nUJhj_lb-Xjbjm5UTg85Zg,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/quandale-dingle-040450340",
            "headline": "Chief Executive Officer at Tesla",
            "raw_headline": "Chief Executive Officer at Tesla",
            "num_of_connections": 0,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQG4o4y6fW6jxg/profile-displayphoto-shrink_200_200/B56ZOYDToqHYAY-/0/1733422824215?e=1749686400&v=beta&t=1dZIwIAucrJAKkTaqErLRxaLkOpspUit4VSC0Fs8_KA",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "8819091",
            "raw_company_name": "Tesla",
            "company_name": "Tesla",
            "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
            "company_url": "https://www.linkedin.com/company/tesla/",
            "company_website": null,
            "company_location": "Denmark",
            "company_city": "Kobenhavn",
            "company_state": null,
            "company_country": "Denmark",
            "company_image": null,
            "company_industry": "Technology, Information and Internet",
            "job_description": null,
            "raw_job_title": "Chief Executive Officer",
            "job_title": "Chief Executive Officer",
            "job_started_on": null,
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "8819091",
                    "raw_company_name": "Tesla",
                    "company_name": "Tesla",
                    "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
                    "company_url": "https://www.linkedin.com/company/tesla/",
                    "company_website": null,
                    "company_location": "Copenhagen Municipality, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen Municipality",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": null,
                    "company_industry": "Technology, Information and Internet",
                    "job_description": null,
                    "raw_job_title": "Chief Executive Officer",
                    "job_title": "Chief Executive Officer",
                    "job_started_on": null,
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "8819091",
            "started_at_company": null,
            "started_at_position": null,
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "1192696305",
            "industry": "Technology, Information and Internet",
            "location": "Los Angeles, California, United States",
            "location_county": null,
            "location_city": "Los Angeles",
            "location_state": "California",
            "location_country": "United States",
            "skills": [],
            "educations": [],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "creet undefined",
            "full_name": "Creet Undefined",
            "first_name": "Creet",
            "middle_name": "",
            "last_name": "Undefined",
            "summary": null,
            "sales_id": "ACwAAEcXGfEBEYYzi9Aj0MlwJoWOkphL66hdyuE",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAEcXGfEBEYYzi9Aj0MlwJoWOkphL66hdyuE,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/creet-undefined-929521293",
            "headline": "fortune 500 owner  at Tesla",
            "raw_headline": "fortune 500 owner  at Tesla",
            "num_of_connections": 0,
            "profile_photo": null,
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "8819091",
            "raw_company_name": "Tesla",
            "company_name": "Tesla",
            "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
            "company_url": "https://www.linkedin.com/company/tesla/",
            "company_website": null,
            "company_location": "Denmark",
            "company_city": "Kobenhavn",
            "company_state": null,
            "company_country": "Denmark",
            "company_image": null,
            "company_industry": "Technology, Information and Internet",
            "job_description": null,
            "raw_job_title": "fortune 500 owner ",
            "job_title": "Fortune 500 Owner",
            "job_started_on": null,
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "8819091",
                    "raw_company_name": "Tesla",
                    "company_name": "Tesla",
                    "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
                    "company_url": "https://www.linkedin.com/company/tesla/",
                    "company_website": null,
                    "company_location": "Copenhagen Municipality, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen Municipality",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": null,
                    "company_industry": "Technology, Information and Internet",
                    "job_description": null,
                    "raw_job_title": "fortune 500 owner ",
                    "job_title": "Fortune 500 Owner",
                    "job_started_on": null,
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "8819091",
            "started_at_company": null,
            "started_at_position": null,
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "317788198",
            "industry": "Investment Management",
            "location": "Copenhagen Municipality, Capital Region of Denmark, Denmark",
            "location_county": null,
            "location_city": "Copenhagen Municipality",
            "location_state": "Capital Region of Denmark",
            "location_country": "Denmark",
            "skills": [
                "Financial Analysis",
                "Accounting",
                "Marketing Communications"
            ],
            "educations": [
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Economics and Business Administration"
                    ],
                    "degree": "Master of Science (MSc)",
                    "university_id": "2151",
                    "university_name": "Copenhagen Business School"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Economics and Business Administration"
                    ],
                    "degree": "Bachelor of Science (BSc)",
                    "university_id": "2151",
                    "university_name": "Copenhagen Business School"
                },
                {
                    "started_on": null,
                    "ended_on": null,
                    "fields_of_study": [
                        "Combat Engineering"
                    ],
                    "degree": "First Lieutenant (Retired)",
                    "university_id": null,
                    "university_name": "Army Corps of Engineers"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Michael Vang",
            "full_name": "Michael Vang",
            "first_name": "Michael",
            "middle_name": "",
            "last_name": "Vang",
            "summary": "If you're interested in getting my perspective on your business, you can hire me for a day or two, as an external consultant. You're obviously doing something right, otherwise you wouldn't still be in business. I 'search' for the things that you're doing wrong.\n\nWhy should you hire me?\n- well-educated from a prominent business school\n- worked for an industry leading 'Fortune Global 100' company\n- excelled as a military leader under tough circumstances\n- thrive as a Financier and a Management Consultant\n\nRequests (Rider):\n- cut my sandwich in half lengthwise, but I prefer a fresh demi-batard sandwich semi-splitted widthwise\n- drink mineral water or espresso coffee with whole milk, but I prefer freezing-cold orange chocolate milk\n- prefer buttery, flaky Viennoiseries, preferable a dark brown croissant aux amandes with sliced nuts\n\nRates:\n- EUR 1,000.00 (or equivalent) per hour\n- one (1) hour minimum incl. PDF report\n- advance payment in agreed currency\n- additional capital expenditures apply",
            "sales_id": "ACwAABLxECYBnTIGqg4AvBkPit6RDiF-N31IMFk",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAABLxECYBnTIGqg4AvBkPit6RDiF-N31IMFk,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/michaelvang",
            "headline": "Chief Executive Officer",
            "raw_headline": "Chief Executive Officer",
            "num_of_connections": 637,
            "profile_photo": null,
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "8819091",
            "raw_company_name": "Tesla",
            "company_name": "Tesla",
            "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
            "company_url": "https://www.linkedin.com/company/tesla/",
            "company_website": null,
            "company_location": "Denmark",
            "company_city": "Kobenhavn",
            "company_state": null,
            "company_country": "Denmark",
            "company_image": null,
            "company_industry": "Technology, Information and Internet",
            "job_description": null,
            "raw_job_title": "Account Manager",
            "job_title": "Account Manager",
            "job_started_on": "2020",
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "11342107",
                    "raw_company_name": "Michael Vang",
                    "company_name": "Michael Vang",
                    "company_description": "Michael Vang (MICHAEL VANG A/S) offers strategy consulting (developing long-term strategic plans) and business consulting (improving operational efficiency and business processes).\n\nFollow us to receive our company updates and job postings.\n\nNotice: We are updating our website (we are in full operation).",
                    "company_url": "https://www.linkedin.com/company/michaelvang/",
                    "company_website": "http://www.michaelvang.com",
                    "company_location": "Copenhagen, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": "https://media.licdn.com/dms/image/v2/D4E0BAQFPG1hVxvl8SQ/company-logo_400_400/company-logo_400_400/0/1667251152792/michaelvang_logo?e=1749686400&v=beta&t=aji9yKCht6Bvgqvn4jJ15Dy98nth68lrvam3bgFxvwY",
                    "company_industry": "Business Consulting and Services",
                    "job_description": null,
                    "raw_job_title": "Chief Executive Officer",
                    "job_title": "Chief Executive Officer",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "1221350",
                    "raw_company_name": "MV",
                    "company_name": "MV",
                    "company_description": "MV (MV A/S) is an investment management company. MV is an abbreviation (an initialism).\n\nMV is a control oriented private equity firm specializing in acquiring and partnering with businesses that can benefit from our operational expertise and flexible capital base. We combine the operational and due diligence capabilities of a strategic buyer with the seasoned knowledge of a traditional financial buyer.\n\nWe specialize in acquiring businesses that are undergoing change in capital structure, strategy, operations or growth and can benefit from our operational and strategic approach. We target companies with a defensible core business, mature products or services, sustainable revenues, established customer relationships, and that have reached a transition point in their lifecycle presenting an opportunity for transformation.\n\nMotto: Patientia. Frugalitas. Sacrificium. (English: Patience. Frugality. Sacrifice.).\n\nFollow us to receive our company updates and job postings.\n\nNotice: We are updating our website (we are in full operation).",
                    "company_url": "https://www.linkedin.com/company/mv/",
                    "company_website": "http://www.mv.dk",
                    "company_location": "Copenhagen, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQFYp-5JrUuqZA/company-logo_400_400/company-logo_400_400/0/1649690259065/mv_logo?e=1749686400&v=beta&t=MifMIQcox6Iz_W6SsEZs8aiZ2IhQHLv2KbCo6rkBb4Q",
                    "company_industry": "Investment Management",
                    "job_description": null,
                    "raw_job_title": "Chief Executive Officer",
                    "job_title": "Chief Executive Officer",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "52281",
                    "raw_company_name": "IMV",
                    "company_name": "IMV",
                    "company_description": "IMV (IMV A/S) is a research institute that performs research, concerning topics such as social policy, political strategy, economics, military, technology and culture.\n\nWe deploy advocacy in an avid pursuit of reversing 100+ years of failed, destructive and reprehensible policies - creating lasting systemic change, restoring traditional (nationalist) values.\n\nThe end goal of IMV is the complete (political) annihilation of the deliberately imposed, evil (globalist) plan/protocol of the international jew, and the remigration of all middle easterners, africans, et al.\n\nIMV is a for-profit non-governmental organisation, registered as a limited liability company. IMV is an abbreviation (an initialism). IMV is a divine court. We stand above all else.\n\nIMV is situated on the 55th parallel north - virtuously aligned with Moskva, Rossiia (Moscow, Russia).\n\nIMV has zero tolerance for anti-whiteism (hate speech and discrimination against aryans and/or slavs).\n\nIMV unequivocally supports political commentator and future political candidate Nicholas J. Fuentes.\n\nSi vis pacem, para bellum. We must secure the existence of our people and a future for white children.",
                    "company_url": "https://www.linkedin.com/company/imv/",
                    "company_website": "http://www.imv.org",
                    "company_location": null,
                    "company_city": null,
                    "company_state": null,
                    "company_country": null,
                    "company_image": null,
                    "company_industry": "Research Services",
                    "job_description": null,
                    "raw_job_title": "Chief Executive Officer",
                    "job_title": "Chief Executive Officer",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "21656107",
                    "raw_company_name": "F",
                    "company_name": "F",
                    "company_description": "F (F A/S) is a newspaper publishing company. The operations is divided into half a dozen divisions:\n\n1. newspaper publishing (newspapers and periodicals)\n\n2. home entertainment (movies, series and games)\n\n3. education and recreation (subscription learning and leisure activities)\n\n4. events and event catering (public events and quick-service trailer catering)\n\n5. merchandise trading (business-to-consumer and business-to-business)\n\n6. commercial services (banking, electricity, pharmacy, web services, etc.)\n\nFollow us to receive our company updates and job postings.\n\nNotice: We are updating our website (we are in full operation).",
                    "company_url": "https://www.linkedin.com/company/f/",
                    "company_website": "http://www.faedrelandet.com",
                    "company_location": "Copenhagen, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": "https://media.licdn.com/dms/image/v2/D4D0BAQFGLvr7ZkltbA/company-logo_400_400/company-logo_400_400/0/1738621771794/f_logo?e=1749686400&v=beta&t=KlZDNrvEn19f0UVVqnZfcY5nQaPSdT0Al7fVIDUFsas",
                    "company_industry": "Newspaper Publishing",
                    "job_description": null,
                    "raw_job_title": "Chief Executive Officer",
                    "job_title": "Chief Executive Officer",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "502249",
                    "raw_company_name": "FWS",
                    "company_name": "FWS",
                    "company_description": "-",
                    "company_url": "https://www.linkedin.com/company/fws/",
                    "company_website": null,
                    "company_location": "Copenhagen, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": null,
                    "company_industry": "Technology, Information and Internet",
                    "job_description": null,
                    "raw_job_title": "Chief Executive Officer",
                    "job_title": "Chief Executive Officer",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "6084059",
                    "raw_company_name": "Faedrelandet",
                    "company_name": "Faedrelandet",
                    "company_description": "Faedrelandet (FAEDRELANDET A/S) is a newspaper publishing company.\n\nFollow us to receive our company updates and job postings.\n\nNotice: We are updating our website (we are in full operation).\n\nX @faedrelandet",
                    "company_url": "https://www.linkedin.com/company/faedrelandet/",
                    "company_website": "http://www.faedrelandet.com",
                    "company_location": "Copenhagen, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": null,
                    "company_industry": "Newspaper Publishing",
                    "job_description": null,
                    "raw_job_title": "Chief Executive Officer",
                    "job_title": "Chief Executive Officer",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "8299080",
                    "raw_company_name": "Fedrelandet",
                    "company_name": "Fedrelandet",
                    "company_description": "Fedrelandet is a newspaper publishing company.\n\nFollow us to receive our company updates and job postings.\n\nNotice: We are updating our website (we are in full operation).",
                    "company_url": "https://www.linkedin.com/company/fedrelandet/",
                    "company_website": "http://www.fedrelandet.no",
                    "company_location": "Oslo, Oslo, Norway",
                    "company_city": "Oslo",
                    "company_state": "Oslo",
                    "company_country": "Norway",
                    "company_image": null,
                    "company_industry": "Newspaper Publishing",
                    "job_description": null,
                    "raw_job_title": "Chief Executive Officer",
                    "job_title": "Chief Executive Officer",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "1118865",
                    "raw_company_name": "Fosterlandet",
                    "company_name": "Fosterlandet",
                    "company_description": "Fosterlandet is a newspaper publishing company.\n\nFollow us to receive our company updates and job postings.\n\nNotice: We are updating our website (we are in full operation).",
                    "company_url": "https://www.linkedin.com/company/fosterlandet/",
                    "company_website": "www.fosterlandet.se",
                    "company_location": "Stockholm, Stockholm County, Sweden",
                    "company_city": "Stockholm",
                    "company_state": "Stockholm",
                    "company_country": "Sweden",
                    "company_image": "https://media.licdn.com/dms/image/v2/D4D0BAQFY_jwHo8fjxA/company-logo_400_400/company-logo_400_400/0/1727202478763/field_security_services_fss_group__logo?e=1749686400&v=beta&t=MPDlORrldrckMew5ScKOqn61agMdUkDdM77q3uqv4XQ",
                    "company_industry": "Newspaper Publishing",
                    "job_description": null,
                    "raw_job_title": "Chief Executive Officer",
                    "job_title": "Chief Executive Officer",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "31473853",
                    "raw_company_name": "REITAN",
                    "company_name": "Reitan",
                    "company_description": "REITAN (REITAN A/S) is a real estate investment trust.\n\nFollow us to receive our company updates and job postings.\n\nNotice: We are updating our website (we are in full operation).",
                    "company_url": "https://www.linkedin.com/company/reitan/",
                    "company_website": "http://www.reitan.com",
                    "company_location": null,
                    "company_city": null,
                    "company_state": null,
                    "company_country": null,
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQGwmcaj6wFTtw/company-logo_400_400/company-logo_400_400/0/1630548258288/reitan_logo?e=1749686400&v=beta&t=DAB2EK27tl8fdfrqdkcxQiANEquvWvOkic7p1pohzF0",
                    "company_industry": "Financial Services",
                    "job_description": null,
                    "raw_job_title": "Chief Executive Officer",
                    "job_title": "Chief Executive Officer",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "3849404",
                    "raw_company_name": "Total",
                    "company_name": "Total",
                    "company_description": "Total is an internet company.\n\nFollow us to receive our company updates and job postings.\n\nNotice: We are updating our website (we are still in full operation).",
                    "company_url": "https://www.linkedin.com/company/total/",
                    "company_website": null,
                    "company_location": "Copenhagen Municipality, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen Municipality",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": "https://media.licdn.com/dms/image/v2/C4D0BAQGiyT1rilIfnw/company-logo_400_400/company-logo_400_400/0/1638011421946/leki_lenhart_gmbh_logo?e=1749686400&v=beta&t=iNOQQO99JdpSaiB8ps0JYZdrHja8uPJO3Rv4OWHEvYM",
                    "company_industry": "Technology, Information and Internet",
                    "job_description": null,
                    "raw_job_title": "Account Manager",
                    "job_title": "Account Manager",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "8819091",
                    "raw_company_name": "Tesla",
                    "company_name": "Tesla",
                    "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
                    "company_url": "https://www.linkedin.com/company/tesla/",
                    "company_website": null,
                    "company_location": "Copenhagen Municipality, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen Municipality",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": null,
                    "company_industry": "Technology, Information and Internet",
                    "job_description": null,
                    "raw_job_title": "Account Manager",
                    "job_title": "Account Manager",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "2408510",
                    "raw_company_name": "JD",
                    "company_name": "JD",
                    "company_description": "",
                    "company_url": "https://www.linkedin.com/company/jd/",
                    "company_website": null,
                    "company_location": null,
                    "company_city": null,
                    "company_state": null,
                    "company_country": null,
                    "company_image": null,
                    "company_industry": null,
                    "job_description": null,
                    "raw_job_title": "Account Manager",
                    "job_title": "Account Manager",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "24143315",
                    "raw_company_name": "Andel",
                    "company_name": "Andel",
                    "company_description": "-",
                    "company_url": "https://www.linkedin.com/company/andel/",
                    "company_website": null,
                    "company_location": null,
                    "company_city": null,
                    "company_state": null,
                    "company_country": null,
                    "company_image": null,
                    "company_industry": "Technology, Information and Internet",
                    "job_description": null,
                    "raw_job_title": "Account Manager",
                    "job_title": "Account Manager",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "10187287",
                    "raw_company_name": "Arla",
                    "company_name": "Arla",
                    "company_description": "",
                    "company_url": "https://www.linkedin.com/company/arla/",
                    "company_website": null,
                    "company_location": null,
                    "company_city": null,
                    "company_state": null,
                    "company_country": null,
                    "company_image": null,
                    "company_industry": null,
                    "job_description": null,
                    "raw_job_title": "Account Manager",
                    "job_title": "Account Manager",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "3602119",
                    "raw_company_name": "Norse Technology",
                    "company_name": "Norse Technology",
                    "company_description": "-",
                    "company_url": "https://www.linkedin.com/company/norse-technology/",
                    "company_website": null,
                    "company_location": "Norway",
                    "company_city": null,
                    "company_state": "",
                    "company_country": "Norway",
                    "company_image": "https://media.licdn.com/dms/image/v2/D4D0BAQF_qaeImBpJ1Q/company-logo_100_100/B4DZW5RRK5HwAY-/0/1742570067040/norse_technology_logo?e=1749686400&v=beta&t=htNicZAoSvo6h8cACnsbuSaB9inzygr-VVu0W4YV-cY",
                    "company_industry": "Security and Investigations",
                    "job_description": null,
                    "raw_job_title": "Account Manager",
                    "job_title": "Account Manager",
                    "job_started_on": "2020",
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "8819091",
            "started_at_company": "2020",
            "started_at_position": "2020",
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "1414265662",
            "industry": "Technology, Information and Internet",
            "location": "Alexandria, Alexandria, Egypt",
            "location_county": null,
            "location_city": "Alexandria",
            "location_state": "Alexandria",
            "location_country": "Egypt",
            "skills": [],
            "educations": [],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Ali Mohsen",
            "full_name": "Ali Mohsen",
            "first_name": "Ali",
            "middle_name": "",
            "last_name": "Mohsen",
            "summary": null,
            "sales_id": "ACwAAFRL-z4B93z1rzt-hAy8CS8v55OsH2iNCCM",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAFRL-z4B93z1rzt-hAy8CS8v55OsH2iNCCM,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/ali-mohsen-93a774335",
            "headline": "Owner at Tesla",
            "raw_headline": "Owner at Tesla",
            "num_of_connections": 0,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D4D03AQEW1_C4kcDYEA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730023394132?e=1749686400&v=beta&t=hIJHGZMbFztkMNMvC6AsPm11yqG2X4Gg7U8pZe_Lp2E",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "8819091",
            "raw_company_name": "Tesla",
            "company_name": "Tesla",
            "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
            "company_url": "https://www.linkedin.com/company/tesla/",
            "company_website": null,
            "company_location": "Denmark",
            "company_city": "Kobenhavn",
            "company_state": null,
            "company_country": "Denmark",
            "company_image": null,
            "company_industry": "Technology, Information and Internet",
            "job_description": null,
            "raw_job_title": "Owner",
            "job_title": "Owner",
            "job_started_on": null,
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "8819091",
                    "raw_company_name": "Tesla",
                    "company_name": "Tesla",
                    "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
                    "company_url": "https://www.linkedin.com/company/tesla/",
                    "company_website": null,
                    "company_location": "Copenhagen Municipality, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen Municipality",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": null,
                    "company_industry": "Technology, Information and Internet",
                    "job_description": null,
                    "raw_job_title": "Owner",
                    "job_title": "Owner",
                    "job_started_on": null,
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "8819091",
            "started_at_company": null,
            "started_at_position": null,
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "1423680828",
            "industry": "Technology, Information and Internet",
            "location": "Fort Bragg, California, United States",
            "location_county": null,
            "location_city": "Fort Bragg",
            "location_state": "California",
            "location_country": "United States",
            "skills": [],
            "educations": [],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "tajin ramirez",
            "full_name": "Tajin Ramirez",
            "first_name": "Tajin",
            "middle_name": "",
            "last_name": "Ramirez",
            "summary": null,
            "sales_id": "ACwAAFTbpTwBTbv3iBeOWT72Kjxi26lMiCoNi84",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAFTbpTwBTbv3iBeOWT72Kjxi26lMiCoNi84,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/tajin-ramirez-450955338",
            "headline": "Principal CEO at Tesla",
            "raw_headline": "Principal CEO at Tesla",
            "num_of_connections": 0,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D4D03AQHHA6si94cuyw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731474828668?e=1749686400&v=beta&t=UX9fw64Ixh5jPPEsAhcJ7hK5PEx46Khla6z3YsrQ1XA",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "8819091",
            "raw_company_name": "Tesla",
            "company_name": "Tesla",
            "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
            "company_url": "https://www.linkedin.com/company/tesla/",
            "company_website": null,
            "company_location": "Denmark",
            "company_city": "Kobenhavn",
            "company_state": null,
            "company_country": "Denmark",
            "company_image": null,
            "company_industry": "Technology, Information and Internet",
            "job_description": null,
            "raw_job_title": "Principal CEO",
            "job_title": "Principal CEO",
            "job_started_on": null,
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "8819091",
                    "raw_company_name": "Tesla",
                    "company_name": "Tesla",
                    "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
                    "company_url": "https://www.linkedin.com/company/tesla/",
                    "company_website": null,
                    "company_location": "Copenhagen Municipality, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen Municipality",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": null,
                    "company_industry": "Technology, Information and Internet",
                    "job_description": null,
                    "raw_job_title": "Principal CEO",
                    "job_title": "Principal CEO",
                    "job_started_on": null,
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "8819091",
            "started_at_company": null,
            "started_at_position": null,
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "1296318066",
            "industry": "Technology, Information and Internet",
            "location": "Ende, East Nusa Tenggara, Indonesia",
            "location_county": null,
            "location_city": "Ende",
            "location_state": "East Nusa Tenggara",
            "location_country": "Indonesia",
            "skills": [],
            "educations": [],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "didie didie",
            "full_name": "Didie",
            "first_name": "",
            "middle_name": "",
            "last_name": "Didie",
            "summary": null,
            "sales_id": "ACwAAE1EPnIBdNlaVVhl8Fuzw6LDgHZ3URsk9R8",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAE1EPnIBdNlaVVhl8Fuzw6LDgHZ3URsk9R8,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/didie-didie-096174302",
            "headline": "Entrepreneur at Tesla",
            "raw_headline": "Entrepreneur at Tesla",
            "num_of_connections": 0,
            "profile_photo": null,
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "8819091",
            "raw_company_name": "Tesla",
            "company_name": "Tesla",
            "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
            "company_url": "https://www.linkedin.com/company/tesla/",
            "company_website": null,
            "company_location": "Denmark",
            "company_city": "Kobenhavn",
            "company_state": null,
            "company_country": "Denmark",
            "company_image": null,
            "company_industry": "Technology, Information and Internet",
            "job_description": null,
            "raw_job_title": "Entrepreneur",
            "job_title": "Entrepreneur",
            "job_started_on": null,
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "8819091",
                    "raw_company_name": "Tesla",
                    "company_name": "Tesla",
                    "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
                    "company_url": "https://www.linkedin.com/company/tesla/",
                    "company_website": null,
                    "company_location": "Copenhagen Municipality, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen Municipality",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": null,
                    "company_industry": "Technology, Information and Internet",
                    "job_description": null,
                    "raw_job_title": "Entrepreneur",
                    "job_title": "Entrepreneur",
                    "job_started_on": null,
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "8819091",
            "started_at_company": null,
            "started_at_position": null,
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "1434418833",
            "industry": "Technology, Information and Internet",
            "location": "Punjab, India",
            "location_county": null,
            "location_city": null,
            "location_state": "Punjab",
            "location_country": "India",
            "skills": [],
            "educations": [],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Jot Mann",
            "full_name": "Jot Mann",
            "first_name": "Jot",
            "middle_name": "",
            "last_name": "Mann",
            "summary": null,
            "sales_id": "ACwAAFV_fpEBpk6m00N3r9lr3Bn19CnbreQf57g",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAFV_fpEBpk6m00N3r9lr3Bn19CnbreQf57g,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/jot-mann-5a9473340",
            "headline": "Business Development Manager at Tesla",
            "raw_headline": "Business Development Manager at Tesla",
            "num_of_connections": 0,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D4E03AQF2cqvY6nV-3w/profile-displayphoto-shrink_100_100/B4EZOf95axGQAY-/0/1733555625140?e=1749686400&v=beta&t=VGpp_nEK5BfGH_FCQ5BmoGHaQ1-_taDAF8M6L9nCi3k",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "8819091",
            "raw_company_name": "Tesla",
            "company_name": "Tesla",
            "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
            "company_url": "https://www.linkedin.com/company/tesla/",
            "company_website": null,
            "company_location": "Denmark",
            "company_city": "Kobenhavn",
            "company_state": null,
            "company_country": "Denmark",
            "company_image": null,
            "company_industry": "Technology, Information and Internet",
            "job_description": null,
            "raw_job_title": "Business Development Manager",
            "job_title": "Business Development Manager",
            "job_started_on": null,
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "8819091",
                    "raw_company_name": "Tesla",
                    "company_name": "Tesla",
                    "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
                    "company_url": "https://www.linkedin.com/company/tesla/",
                    "company_website": null,
                    "company_location": "Copenhagen Municipality, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen Municipality",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": null,
                    "company_industry": "Technology, Information and Internet",
                    "job_description": null,
                    "raw_job_title": "Business Development Manager",
                    "job_title": "Business Development Manager",
                    "job_started_on": null,
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "8819091",
            "started_at_company": null,
            "started_at_position": null,
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "1493715610",
            "industry": "Technology, Information and Internet",
            "location": "Suisun City, California, United States",
            "location_county": null,
            "location_city": "Suisun City",
            "location_state": "California",
            "location_country": "United States",
            "skills": [],
            "educations": [],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Julia jchou",
            "full_name": "Julia Jchou",
            "first_name": "Julia",
            "middle_name": "",
            "last_name": "Jchou",
            "summary": null,
            "sales_id": "ACwAAFkISpoBfkG1ciNWAkPTOJQLYnS8j_JaAUY",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAFkISpoBfkG1ciNWAkPTOJQLYnS8j_JaAUY,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/julia-jchou-90a2aa358",
            "headline": "Senior Analyst at Tesla",
            "raw_headline": "Senior Analyst at Tesla",
            "num_of_connections": 0,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D4E03AQG_rg6Wnf54GQ/profile-displayphoto-shrink_200_200/B4EZXNMveFGgAk-/0/1742904425393?e=1749686400&v=beta&t=DYQUcgAjLVUHINt4HyJWNUTJrxVGpLf2NV65UuEEZGc",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "8819091",
            "raw_company_name": "Tesla",
            "company_name": "Tesla",
            "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
            "company_url": "https://www.linkedin.com/company/tesla/",
            "company_website": null,
            "company_location": "Denmark",
            "company_city": "Kobenhavn",
            "company_state": null,
            "company_country": "Denmark",
            "company_image": null,
            "company_industry": "Technology, Information and Internet",
            "job_description": null,
            "raw_job_title": "Senior Analyst",
            "job_title": "Senior Analyst",
            "job_started_on": null,
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "8819091",
                    "raw_company_name": "Tesla",
                    "company_name": "Tesla",
                    "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
                    "company_url": "https://www.linkedin.com/company/tesla/",
                    "company_website": null,
                    "company_location": "Copenhagen Municipality, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen Municipality",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": null,
                    "company_industry": "Technology, Information and Internet",
                    "job_description": null,
                    "raw_job_title": "Senior Analyst",
                    "job_title": "Senior Analyst",
                    "job_started_on": null,
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "8819091",
            "started_at_company": null,
            "started_at_position": null,
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "1423905285",
            "industry": "Food and Beverage Services",
            "location": "Chimay, Walloon Region, Belgium",
            "location_county": null,
            "location_city": "Chimay",
            "location_state": "Walloon Region",
            "location_country": "Belgium",
            "skills": [],
            "educations": [],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "Antoine Français",
            "full_name": "Antoine Francais",
            "first_name": "Antoine",
            "middle_name": "",
            "last_name": "Francais",
            "summary": null,
            "sales_id": "ACwAAFTfEgUBnuJmV_baCwGKGfNAi_BAAIZ88Qk",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAFTfEgUBnuJmV_baCwGKGfNAi_BAAIZ88Qk,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/antoine-fran%C3%A7ais-319a43338",
            "headline": "Etudiant, serveur ",
            "raw_headline": "Étudiant, serveur ",
            "num_of_connections": 0,
            "profile_photo": null,
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "8819091",
            "raw_company_name": "Tesla",
            "company_name": "Tesla",
            "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
            "company_url": "https://www.linkedin.com/company/tesla/",
            "company_website": null,
            "company_location": "Denmark",
            "company_city": "Kobenhavn",
            "company_state": null,
            "company_country": "Denmark",
            "company_image": null,
            "company_industry": "Technology, Information and Internet",
            "job_description": null,
            "raw_job_title": "Propriétaire entreprise",
            "job_title": "Proprietaire Entreprise",
            "job_started_on": null,
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "8819091",
                    "raw_company_name": "Tesla",
                    "company_name": "Tesla",
                    "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
                    "company_url": "https://www.linkedin.com/company/tesla/",
                    "company_website": null,
                    "company_location": "Copenhagen Municipality, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen Municipality",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": null,
                    "company_industry": "Technology, Information and Internet",
                    "job_description": null,
                    "raw_job_title": "Propriétaire entreprise",
                    "job_title": "Proprietaire Entreprise",
                    "job_started_on": null,
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                },
                {
                    "company_id": "64798795",
                    "raw_company_name": "La Brasserie des Lacs",
                    "company_name": "La Brasserie des Lacs",
                    "company_description": ", fils du travail de la terre, des vignes et des oliveraies, fondateur et chef de deux restaurants gastronomiques a Bruxelles ayant connu un developpement fulgurant, ensuite manager de l'ensemble des etablissements d'un grand nom de la restauration bruxelloise, Jeronimo Moreira met son savoir-faire et son amour pour la cuisine et l'hospitalite a votre service pour concevoir et realiser vos evenements aux concepts varies. ",
                    "company_url": "https://www.linkedin.com/company/la-brasserie-des-lacs/",
                    "company_website": "http://traiteur-lmdt.be",
                    "company_location": "Froid-Chapelle, Walloon Region, Belgium",
                    "company_city": "Froid Chapelle",
                    "company_state": "Walloon Region",
                    "company_country": "Belgium",
                    "company_image": null,
                    "company_industry": "Restaurants",
                    "job_description": null,
                    "raw_job_title": "Serveur",
                    "job_title": "Serveur",
                    "job_started_on": "Jul 2024",
                    "job_ended_on": null,
                    "job_location": "Belgique",
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "8819091",
            "started_at_company": null,
            "started_at_position": null,
            "is_current": true,
            "linkedin_lead_persona": null
        },
        {
            "is_full_data": true,
            "linkedin_id": "1235574734",
            "industry": "Technology, Information and Media",
            "location": "Canada",
            "location_county": null,
            "location_city": null,
            "location_state": "",
            "location_country": "Canada",
            "skills": [
                "Direction",
                "Conseil d'administration"
            ],
            "educations": [
                {
                    "started_on": {
                        "month": 2,
                        "year": 2014
                    },
                    "ended_on": {
                        "month": 6,
                        "year": 2016
                    },
                    "fields_of_study": [
                        "Affaires / gestion, general"
                    ],
                    "degree": "Master of Business Administration - MBA",
                    "university_id": "287349",
                    "university_name": "Vancouver Island University"
                }
            ],
            "twitter_link": null,
            "private_website": null,
            "unformatted_full_name": "G. Hanna Kelly, MBA",
            "full_name": "Hanna G Kelly",
            "first_name": "Hanna",
            "middle_name": "G",
            "last_name": "Kelly",
            "summary": null,
            "sales_id": "ACwAAEmlX84BZGNnntIFpGW8O6DnBhBzKmUYJrU",
            "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAEmlX84BZGNnntIFpGW8O6DnBhBzKmUYJrU,NAME_SEARCH,OJWs",
            "linkedin_url": "https://www.linkedin.com/in/g-hanna-kelly-mba-81295b2a5",
            "headline": "Manager of fixed operations",
            "raw_headline": "Manager of fixed operations",
            "num_of_connections": 1,
            "profile_photo": "https://media.licdn.com/dms/image/v2/D4E03AQFk0sYY2n7Xvw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704549780744?e=1749686400&v=beta&t=aLfG8GmM2lBKdCmcZ1Tlv5nFOl2ccWMV5V6Oxhe__3A",
            "is_premium": false,
            "is_openlink": false,
            "is_job_seeker": false,
            "is_retired": false,
            "languages": [],
            "certifications": [],
            "company_id": "8819091",
            "raw_company_name": "Tesla",
            "company_name": "Tesla",
            "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
            "company_url": "https://www.linkedin.com/company/tesla/",
            "company_website": null,
            "company_location": "Denmark",
            "company_city": "Kobenhavn",
            "company_state": null,
            "company_country": "Denmark",
            "company_image": null,
            "company_industry": "Technology, Information and Internet",
            "job_description": null,
            "raw_job_title": "Directrice des opérations",
            "job_title": "Directrice Des Operations",
            "job_started_on": null,
            "job_ended_on": null,
            "job_location": null,
            "job_still_working": true,
            "jobs": [
                {
                    "company_id": "8819091",
                    "raw_company_name": "Tesla",
                    "company_name": "Tesla",
                    "company_description": "Tesla is an internet company.\n\nFollow us to receive our company updates and job postings.",
                    "company_url": "https://www.linkedin.com/company/tesla/",
                    "company_website": null,
                    "company_location": "Copenhagen Municipality, Capital Region of Denmark, Denmark",
                    "company_city": "Copenhagen Municipality",
                    "company_state": "Capital Region of Denmark",
                    "company_country": "Denmark",
                    "company_image": null,
                    "company_industry": "Technology, Information and Internet",
                    "job_description": null,
                    "raw_job_title": "Directrice des opérations",
                    "job_title": "Directrice Des Operations",
                    "job_started_on": null,
                    "job_ended_on": null,
                    "job_location": null,
                    "job_still_working": true
                }
            ],
            "linkedin_company_id": "8819091",
            "started_at_company": null,
            "started_at_position": null,
            "is_current": true,
            "linkedin_lead_persona": null
        }
    ]);
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
            description: "Find senior cybersecurity leaders who have held roles like CISO or VP Security at Fortune 500 companies, ideal for keynote sessions on enterprise security."
        },
        {
            id: 2,
            title: "Search by Experience",
            description: "Find product managers with over 8 years of experience in AI/ML across top-tier startups or FAANG companies to lead a panel on emerging AI trends."
        },
        {
            id: 3,
            title: "Search by Expertise",
            description: "Find thought leaders with expertise in sustainability strategy and carbon-neutral innovation for a workshop on green business transformation."
        },
        {
            id: 4,
            title: "Search for Similar People",
            description: "Find digital transformation speakers similar to [https://www.linkedin.com/in/mghissasi/] who can engage audiences with practical insights on tech-driven business models."
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
                    limit_by: 10
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
                <div className="space-y-2">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Welcome to DELIGHT LOOP.</h1>
                    <h2 className="text-lg font-medium text-gray-300">Let's get started and find you experts.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {searchCategories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-gray-900 rounded-xl p-6 cursor-pointer hover:bg-gray-800 transition-all duration-300 border border-gray-800 shadow-lg hover:shadow-xl hover:border-gray-700 transform hover:-translate-y-1"
                            onClick={() => handleCategoryClick(category)}
                        >
                            <h2 className="text-xl font-semibold mb-3">{category.title}</h2>
                            <p className="text-gray-400">{category.description}</p>
                        </div>
                    ))}
                </div>

                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative">
                        <textarea
                            className="w-full p-5 pr-14 bg-gray-900 rounded-xl border border-gray-800 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-gray-500 resize-none h-28 shadow-lg"
                            placeholder="Describe the experts you are looking for..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <button
                            className="absolute right-4 bottom-4 bg-white text-black rounded-full p-3 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105"
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