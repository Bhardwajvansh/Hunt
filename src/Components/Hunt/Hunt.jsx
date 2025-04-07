import React, { useState, useEffect } from 'react';
import { Search, Check, Loader, ExternalLink } from 'lucide-react';
import { LinkupClient } from 'linkup-sdk';

export default function Hunt() {
    const [searchText, setSearchText] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [chatMessage, setChatMessage] = useState('');
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [leadResults, setLeadResults] = useState([{
        "is_full_data": true,
        "linkedin_id": "396189321",
        "industry": "Retail",
        "location": "Fayetteville, Arkansas, United States",
        "location_county": null,
        "location_city": "Fayetteville",
        "location_state": "Arkansas",
        "location_country": "United States",
        "skills": [
            "Leadership",
            "Information Security",
            "Information Technology",
            "Management",
            "Strategy"
        ],
        "educations": [
            {
                "started_on": {
                    "year": 2006
                },
                "ended_on": {
                    "year": 2007
                },
                "fields_of_study": [
                    "Business Administration and Management"
                ],
                "degree": "Master of Business Administration (M.B.A.)",
                "university_id": "25227",
                "university_name": "John Brown University"
            },
            {
                "started_on": {
                    "year": 2005
                },
                "ended_on": {
                    "year": 2006
                },
                "fields_of_study": [
                    "Leadership and Ethics"
                ],
                "degree": "Master of Science (M.S.)",
                "university_id": "25227",
                "university_name": "John Brown University"
            },
            {
                "started_on": {
                    "year": 2002
                },
                "ended_on": {
                    "year": 2004
                },
                "fields_of_study": [
                    "Organizational Management"
                ],
                "degree": "Bachelor of Science (B.S.)",
                "university_id": "25227",
                "university_name": "John Brown University"
            },
            {
                "started_on": {
                    "year": 2018
                },
                "ended_on": {
                    "year": 2019
                },
                "fields_of_study": [],
                "degree": "CISO - Executive Education and Certificate Program",
                "university_id": "15140453",
                "university_name": "Carnegie Mellon University - Heinz College of Information Systems and Public Policy"
            },
            {
                "started_on": {
                    "year": 2015
                },
                "ended_on": {
                    "year": 2015
                },
                "fields_of_study": [
                    "CyberSecurity: The Intersection of Policy & Technology"
                ],
                "degree": "Executive Education Program",
                "university_id": "441164",
                "university_name": "Harvard Kennedy School"
            }
        ],
        "twitter_link": null,
        "private_website": null,
        "unformatted_full_name": "Jerry Geisler",
        "full_name": "Jerry Geisler",
        "first_name": "Jerry",
        "middle_name": "",
        "last_name": "Geisler",
        "summary": "Jerry Geisler serves as the executive vice president and global chief information security officer (CISO) of Walmart's Information Security department. His responsibilities encompass data security for millions of customers and associates. In addition, he oversees the information security strategy, engineering, services, testing and assessment, accredited forensics lab, risk, threat intel, cybersecurity operations, policies, governance, and compliance for the global enterprise.\n\nWalmart's Information Security program, under Jerry's leadership, is considered a forward-thinking industry-leader focused on emerging best-in-class information security practices, innovation and business enablement broadly engaged across IT, OT, cloud, platform, and product security domains.\n\nJerry serves as an Enterprise Board member of Team8, an incubator and venture capital fund based in Tel Aviv. Previously, Jerry also served as a program committee member for the RSA Executive Security Action Forum and member of the University of Tulsa Board of Trustees. Jerry is an active member with Security 50, The Corporate Research Board, RH-ISAC as well as multiple industry advisory boards.\n\nAn avid supporter of STEM programs, Jerry and his team actively support several local and national programs to encourage and promote the inclusive development of the next generation of technologists and security practitioners. Jerry is an advocate for life-long learning and development, having earned multiple degrees and technical security certifications. \n\nJerry is an armed forces veteran, having served honorably in the United States Marine Corps and is long-term associate with Walmart. He began his Walmart career as a cashier in his hometown store over three decades ago.",
        "sales_id": "ACwAABedXokBMtkpM5zOkEwUOfsGwgQSakgKj-E",
        "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAABedXokBMtkpM5zOkEwUOfsGwgQSakgKj-E,NAME_SEARCH,OJWs",
        "linkedin_url": "https://www.linkedin.com/in/jerry-geisler-289824b0",
        "headline": "EVP & Global CISO at Walmart",
        "raw_headline": "EVP & Global CISO at Walmart",
        "num_of_connections": 4064,
        "profile_photo": null,
        "is_premium": true,
        "is_openlink": false,
        "is_job_seeker": false,
        "is_retired": false,
        "languages": [],
        "certifications": [
            {
                "authority": "Association of Certified Fraud Examiners (ACFE)",
                "name": "Certified Fraud Examiner",
                "licenseNumber": "89037 (Inactive)",
                "url": "http://www.acfe.com",
                "company_id": "66541"
            },
            {
                "authority": "SANS Institute",
                "name": "GSEC - GIAC Security Essentials",
                "licenseNumber": "Expires 3/31/24",
                "url": "http://www.sans.org",
                "company_id": "14104"
            },
            {
                "authority": "SANS Institute",
                "name": "GISP - GIAC Information Security Professional",
                "licenseNumber": "Inactive (July 2021)",
                "url": "http://www.sans.org",
                "company_id": "14104"
            },
            {
                "authority": "SANS Institute",
                "name": "GCIH - GIAC Certified Incident Handler",
                "licenseNumber": "Expires 12/31/24",
                "url": "http://www.sans.org",
                "company_id": "14104"
            },
            {
                "authority": "SANS Institute",
                "name": "GCFE - GIAC Certified Foresnic Examiner (Windows)",
                "licenseNumber": "Expires 12/31/23",
                "url": "http://www.sans.org",
                "company_id": "14104"
            },
            {
                "authority": "SANS Institute",
                "name": "GCFA - GIAC Certified Forensic Analyst (Linux/UNIX)",
                "licenseNumber": "Expired (01/31/23)",
                "url": "http://www.sans.org",
                "company_id": "14104"
            },
            {
                "authority": "Guidance Software",
                "name": "EnCE - EnCase Certified Examiner",
                "licenseNumber": "Inactive",
                "company_id": "9242"
            },
            {
                "endedOn": {
                    "month": 3,
                    "year": 2026
                },
                "url": "https://www.nacdonline.org/nacd-credentials/nacd-directorship-certification/",
                "authority": "NACD (National Association of Corporate Directors)",
                "name": "NACD Directorship Certified",
                "licenseNumber": "405489",
                "startedOn": {
                    "month": 3,
                    "year": 2024
                },
                "company_id": "83473"
            }
        ],
        "company_id": "2646",
        "raw_company_name": "Walmart",
        "company_name": "Walmart",
        "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
        "company_url": "https://www.linkedin.com/company/walmart/",
        "company_website": "https://bit.ly/3IBowlZ",
        "company_location": "Bentonville, Arkansas, United States",
        "company_city": "Bentonville",
        "company_state": "Arkansas",
        "company_country": "United States",
        "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_200_200/company-logo_200_200/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=SbRlt733o640Cu6RNGKF6n_M5Ywu0T_ec417usslm5A",
        "company_industry": "Retail",
        "job_description": "Jerry has developed programs in multiple technology disciplines and currently has responsibility for the following practices:\n\n* @Walmartlabs Global eCommerce InfoSec \n* Information Systems Incident Response \n* Security Operations Center \n* Cyber Intelligence \n* Data Assurance \n* Forensic Services \n* eDiscovery \n* Risk Assessment \n* Risk Management \n* Enterprise Scanning \n* Penetration Testing \n* Secure Code Practices \n* PCI, SOX & HIPAA Compliance \n* Vulnerability Management \n* Security Policy & Governance\n\nAdditionally, Mr. Geisler's forensics and eDiscovery practices have achieved ISO17025 ASCLD accreditation. The laboratory is one of less than 30 private forensic laboratories to accredit against the same rigorous standards as federal laboratories and is the first lab ever to accredit the eDiscovery discipline.\n",
        "raw_job_title": "EVP & Global CISO",
        "job_title": "EVP and Global CISO",
        "job_started_on": "Apr 1991",
        "job_ended_on": null,
        "job_location": null,
        "job_still_working": true,
        "jobs": [
            {
                "company_id": "2646",
                "raw_company_name": "Walmart",
                "company_name": "Walmart",
                "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
                "company_url": "https://www.linkedin.com/company/walmart/",
                "company_website": "https://bit.ly/3IBowlZ",
                "company_location": "Bentonville, Arkansas, United States",
                "company_city": "Bentonville",
                "company_state": "Arkansas",
                "company_country": "United States",
                "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_400_400/company-logo_400_400/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=ckNvC28p60MCknwf_5VS0p3pHY0hH1wCYnJKSD_QR-U",
                "company_industry": "Retail",
                "job_description": "Jerry has developed programs in multiple technology disciplines and currently has responsibility for the following practices:\n\n* @Walmartlabs Global eCommerce InfoSec \n* Information Systems Incident Response \n* Security Operations Center \n* Cyber Intelligence \n* Data Assurance \n* Forensic Services \n* eDiscovery \n* Risk Assessment \n* Risk Management \n* Enterprise Scanning \n* Penetration Testing \n* Secure Code Practices \n* PCI, SOX & HIPAA Compliance \n* Vulnerability Management \n* Security Policy & Governance\n\nAdditionally, Mr. Geisler's forensics and eDiscovery practices have achieved ISO17025 ASCLD accreditation. The laboratory is one of less than 30 private forensic laboratories to accredit against the same rigorous standards as federal laboratories and is the first lab ever to accredit the eDiscovery discipline.\n",
                "raw_job_title": "EVP & Global CISO",
                "job_title": "EVP and Global CISO",
                "job_started_on": "Apr 1991",
                "job_ended_on": null,
                "job_location": null,
                "job_still_working": true
            }
        ],
        "linkedin_company_id": "2646",
        "started_at_company": "Apr 1991",
        "started_at_position": "Apr 1991",
        "is_current": true,
        "linkedin_lead_persona": null
    },
    {
        "is_full_data": true,
        "linkedin_id": "179266880",
        "industry": "Retail",
        "location": "Bentonville, Arkansas, United States",
        "location_county": null,
        "location_city": "Bentonville",
        "location_state": "Arkansas",
        "location_country": "United States",
        "skills": [
            "Cross-functional Team Leadership",
            "Business Process Improvement",
            "Change Management",
            "International Business",
            "Strategic Planning",
            "Global Cross-Functional Team Leadership",
            "Leadership Development",
            "Inventory Management",
            "Inventory Analysis",
            "Retail Replenishment",
            "Supply Chain",
            "Supply Chain Optimization",
            "Supply Chain Management",
            "Logistics Engineering",
            "Logistics",
            "Distribution Center Management",
            "Material Handling Equipment",
            "Retail",
            "Data Modeling",
            "Data Mining",
            "Business Intelligence Tools",
            "VBA",
            "SQL",
            "Warehousing",
            "Training",
            "Operations Management",
            "Forecasting",
            "Six Sigma",
            "Demand Planning",
            "CPFR"
        ],
        "educations": [
            {
                "started_on": null,
                "ended_on": null,
                "fields_of_study": [
                    "Industrial Engineering"
                ],
                "degree": "Bachelor of Science (B.S.)",
                "university_id": "166811",
                "university_name": "Virginia Tech"
            }
        ],
        "twitter_link": null,
        "private_website": null,
        "unformatted_full_name": "Rob Montgomery",
        "full_name": "Rob Montgomery",
        "first_name": "Rob",
        "middle_name": "",
        "last_name": "Montgomery",
        "summary": null,
        "sales_id": "ACwAAAqvZUABj7-2eLakmrXPHEWnfYAg8ct6LtU",
        "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAqvZUABj7-2eLakmrXPHEWnfYAg8ct6LtU,NAME_SEARCH,OJWs",
        "linkedin_url": "https://www.linkedin.com/in/rob-montgomery-4a805250",
        "headline": "Executive Vice President, Supply Chain at Walmart",
        "raw_headline": "Executive Vice President, Supply Chain at Walmart",
        "num_of_connections": 1767,
        "profile_photo": null,
        "is_premium": false,
        "is_openlink": false,
        "is_job_seeker": false,
        "is_retired": false,
        "languages": [],
        "certifications": [],
        "company_id": "2646",
        "raw_company_name": "Walmart",
        "company_name": "Walmart",
        "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
        "company_url": "https://www.linkedin.com/company/walmart/",
        "company_website": "https://bit.ly/3IBowlZ",
        "company_location": "Bentonville, Arkansas, United States",
        "company_city": "Bentonville",
        "company_state": "Arkansas",
        "company_country": "United States",
        "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_200_200/company-logo_200_200/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=SbRlt733o640Cu6RNGKF6n_M5Ywu0T_ec417usslm5A",
        "company_industry": "Retail",
        "job_description": null,
        "raw_job_title": "Executive Vice President, Supply Chain",
        "job_title": "Executive Vice President, Supply Chain",
        "job_started_on": "Jan 2025",
        "job_ended_on": null,
        "job_location": null,
        "job_still_working": true,
        "jobs": [
            {
                "company_id": "2646",
                "raw_company_name": "Walmart",
                "company_name": "Walmart",
                "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
                "company_url": "https://www.linkedin.com/company/walmart/",
                "company_website": "https://bit.ly/3IBowlZ",
                "company_location": "Bentonville, Arkansas, United States",
                "company_city": "Bentonville",
                "company_state": "Arkansas",
                "company_country": "United States",
                "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_400_400/company-logo_400_400/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=ckNvC28p60MCknwf_5VS0p3pHY0hH1wCYnJKSD_QR-U",
                "company_industry": "Retail",
                "job_description": null,
                "raw_job_title": "Executive Vice President, Supply Chain",
                "job_title": "Executive Vice President, Supply Chain",
                "job_started_on": "Jan 2025",
                "job_ended_on": null,
                "job_location": null,
                "job_still_working": true
            }
        ],
        "linkedin_company_id": "2646",
        "started_at_company": "Jan 2025",
        "started_at_position": "Jan 2025",
        "is_current": true,
        "linkedin_lead_persona": null
    },
    {
        "is_full_data": true,
        "linkedin_id": "137328761",
        "industry": "Retail",
        "location": "Plano, Texas, United States",
        "location_county": null,
        "location_city": "Plano",
        "location_state": "Texas",
        "location_country": "United States",
        "skills": [
            "Financial Systems Implementation",
            "Process Reengineering",
            "Operational Risk Management",
            "Leadership in Cross-Functional Teams",
            "Financial Analytics and Reporting",
            "Enterprise Data Management",
            "Risk and Compliance Analysis",
            "Financial Systems Architecture",
            "Data Governance and Quality Assurance",
            "Portfolio Risk Management",
            "Technology-Driven Process Improvements",
            "Agile and Waterfall Methodologies",
            "Enterprise Reporting Transformation",
            "Portfolio Management and Execution",
            "Risk Assessment and Mitigation",
            "Stakeholder Engagement",
            "Data Integration and Standardization",
            "Regulatory Compliance in Reporting",
            "Process Automation and Optimization",
            "Financial Systems Modernization",
            "Strategic Program Leadership",
            "Development of Integrated Financial Solutions",
            "Online Investment Advisory Systems",
            "Customer-Centric Product Design",
            "Data-driven Decision Making",
            "Cross-Functional Collaboration",
            "Process Optimization",
            "Financial Planning and Analytics",
            "Strategic Leadership: Program and Product Management | Stakeholder Collaboration | Change Management",
            "Finance Transformation: Budgeting & Forecasting | Treasury Operations | Global Finance Systems",
            "Data Excellence: Data Governance | Analytics & Reporting | AI/ML Integration",
            "Technical Support and Troubleshooting",
            "Organizational Change Management",
            "Quality Assurance and Regulatory Compliance",
            "Conflict Resolution and Decision-Making",
            "Requirements Analysis",
            "Agile Methodologies",
            "UAT Coordination",
            "Offshore Management",
            "Budgeting",
            "Internal Controls",
            "Process Improvement",
            "End-to-end Testing",
            "User Acceptance Testing",
            "Defect Life Cycle",
            "Vendor Relationship Management",
            "Waterfall",
            "HP Quality Center",
            "Software Development",
            "Integration",
            "Cross-functional Team Leadership",
            "IT Project & Program Management",
            "Product Management",
            "Business Analysis",
            "Requirements Gathering",
            "Functional Testing",
            "Leadership",
            "Project Management",
            "IT Operations",
            "Project Implementation",
            "XML",
            "Risk Management",
            "Loans",
            "Mortgage Banking",
            "Business Development",
            "Testing",
            "Program Management",
            "SDLC",
            "banking",
            "financial",
            "loss mitigation",
            "Financial Risk",
            "Quality Assurance",
            "Test Planning",
            "Test Management",
            "Test Cases",
            "System Testing",
            "Management",
            "Technical Support",
            "Strategy",
            "Finance"
        ],
        "educations": [
            {
                "started_on": null,
                "ended_on": null,
                "fields_of_study": [
                    "Computer Systems Engineering"
                ],
                "degree": null,
                "university_id": null,
                "university_name": "Techpros Group"
            }
        ],
        "twitter_link": null,
        "private_website": null,
        "unformatted_full_name": "Farooq Kamal",
        "full_name": "Farooq Kamal",
        "first_name": "Farooq",
        "middle_name": "",
        "last_name": "Kamal",
        "summary": "As 'The Hammer,' I thrive on bringing order to chaos--turning complex challenges into structured, impactful solutions. Currently serving as the Director of Operations for Finance Product ePMO at Walmart, I oversee the management of 56 finance products, driving enterprise-wide transformation and aligning strategic objectives with measurable outcomes.\n\nWith close to two decade of experience in program and portfolio management, I specialize in creating clarity out of complexity, building high-performing teams, and delivering innovative solutions that enable operational excellence. From implementing AI-driven forecasting tools to designing data governance frameworks, I lead initiatives that streamline processes, enhance decision-making, and deliver value at scale.\n\n What I Do Best:\n\n*\tTransform chaos into actionable roadmaps and scalable processes for enterprise success.\n*\tDevelop and implement efficient delivery frameworks across portfolios.\n*\tFoster collaboration across cross-functional teams to achieve strategic goals.\n*\tDrive measurable results through transparency, governance, and accountability.\n*\tLead transformative programs, blending agile, waterfall, and hybrid methodologies to meet complex \n        organizational needs.\n\n Let's Connect:\nPassionate about solving complex challenges and making an impact, I look forward to collaborating with leaders who value strategic vision and results. \n\nLet's connect and create order from chaos together.",
        "sales_id": "ACwAAAgveHkBgsuZxV_uoW6oaUg0EUfBaIkbF0s",
        "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAgveHkBgsuZxV_uoW6oaUg0EUfBaIkbF0s,NAME_SEARCH,OJWs",
        "linkedin_url": "https://www.linkedin.com/in/farooqkamalkhan",
        "headline": "aka 'The Hammer' | Director of Technology's Operations (ePMO) | Strategic Leader | Driving Digital Transformation & Finance Excellence | Order to Chaos",
        "raw_headline": "aka \"The Hammer\" | Director of Technology's Operations (ePMO) | Strategic Leader | Driving Digital Transformation & Finance Excellence | Order to Chaos",
        "num_of_connections": 7628,
        "profile_photo": "https://media.licdn.com/dms/image/v2/C5603AQGn2-rdhXcE5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516835153972?e=1749686400&v=beta&t=-hc8XClkog41a8jhbdg5kCm9QyoHbYrjqVYgBp9ytlY",
        "is_premium": true,
        "is_openlink": true,
        "is_job_seeker": false,
        "is_retired": false,
        "languages": [
            {
                "name": "English",
                "proficiency": "NATIVE_OR_BILINGUAL"
            }
        ],
        "certifications": [],
        "company_id": "2646",
        "raw_company_name": "Walmart",
        "company_name": "Walmart",
        "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
        "company_url": "https://www.linkedin.com/company/walmart/",
        "company_website": "https://bit.ly/3IBowlZ",
        "company_location": "Bentonville, Arkansas, United States",
        "company_city": "Bentonville",
        "company_state": "Arkansas",
        "company_country": "United States",
        "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_200_200/company-logo_200_200/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=SbRlt733o640Cu6RNGKF6n_M5Ywu0T_ec417usslm5A",
        "company_industry": "Retail",
        "job_description": "As Director of Operations for Walmart's Finance Product ePMO, I oversee a portfolio of 56 finance products/initiatives driving digital transformation and aligning strategies with measurable business outcomes. My role focuses on strategic leadership, process optimization, and delivering scalable solutions to create order from chaos and achieve organizational goals.\n\nKey Leadership Achievements\n*\tProgram & Portfolio Leadership: Led the implementation of a comprehensive intake and planning process, enhancing efficiency, resource alignment, and organizational focus on high-priority initiatives.\n*\tFinance Data Excellence: Built and optimized foundational data platforms to deliver actionable insights, enabling granular financial analysis and improved decision-making.\n*\tAI-Driven Innovation: Introduced AI/ML-powered forecasting tools, transforming financial processes, optimizing resource allocation, and enhancing forecasting accuracy.\n*\tOperational Transformation: Modernized financial planning and reporting systems, streamlining key processes to enhance productivity and scalability.\n*\tData Governance Leadership: Designed and implemented governance frameworks that improved data quality, transparency, and accessibility for stakeholders across the organization.\n\nCore Responsibilities\n*\tLead cross-functional teams, including technical program managers, product managers, Engineering, Business and UX ( supporting roles) (4ITB) to deliver enterprise-wide initiatives.\n*\tUtilize a blend of agile, waterfall, and hybrid methodologies to drive complex projects to successful outcomes.\n*\tPartner with senior leadership to define strategies, manage risks, and ensure seamless execution of high-impact programs.\n*\tDrive operational excellence through automation, data quality monitoring, and scalable technology solutions, supporting enterprise transformation.",
        "raw_job_title": " Director of Technology Operations (Finance Product ePMO)",
        "job_title": "Director of Technology Operations (Finance Product Epmo)",
        "job_started_on": "Nov 2019",
        "job_ended_on": null,
        "job_location": "Dallas, Texas, United States",
        "job_still_working": true,
        "jobs": [
            {
                "company_id": "2646",
                "raw_company_name": "Walmart",
                "company_name": "Walmart",
                "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
                "company_url": "https://www.linkedin.com/company/walmart/",
                "company_website": "https://bit.ly/3IBowlZ",
                "company_location": "Bentonville, Arkansas, United States",
                "company_city": "Bentonville",
                "company_state": "Arkansas",
                "company_country": "United States",
                "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_400_400/company-logo_400_400/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=ckNvC28p60MCknwf_5VS0p3pHY0hH1wCYnJKSD_QR-U",
                "company_industry": "Retail",
                "job_description": "As Director of Operations for Walmart's Finance Product ePMO, I oversee a portfolio of 56 finance products/initiatives driving digital transformation and aligning strategies with measurable business outcomes. My role focuses on strategic leadership, process optimization, and delivering scalable solutions to create order from chaos and achieve organizational goals.\n\nKey Leadership Achievements\n*\tProgram & Portfolio Leadership: Led the implementation of a comprehensive intake and planning process, enhancing efficiency, resource alignment, and organizational focus on high-priority initiatives.\n*\tFinance Data Excellence: Built and optimized foundational data platforms to deliver actionable insights, enabling granular financial analysis and improved decision-making.\n*\tAI-Driven Innovation: Introduced AI/ML-powered forecasting tools, transforming financial processes, optimizing resource allocation, and enhancing forecasting accuracy.\n*\tOperational Transformation: Modernized financial planning and reporting systems, streamlining key processes to enhance productivity and scalability.\n*\tData Governance Leadership: Designed and implemented governance frameworks that improved data quality, transparency, and accessibility for stakeholders across the organization.\n\nCore Responsibilities\n*\tLead cross-functional teams, including technical program managers, product managers, Engineering, Business and UX ( supporting roles) (4ITB) to deliver enterprise-wide initiatives.\n*\tUtilize a blend of agile, waterfall, and hybrid methodologies to drive complex projects to successful outcomes.\n*\tPartner with senior leadership to define strategies, manage risks, and ensure seamless execution of high-impact programs.\n*\tDrive operational excellence through automation, data quality monitoring, and scalable technology solutions, supporting enterprise transformation.",
                "raw_job_title": " Director of Technology Operations (Finance Product ePMO)",
                "job_title": "Director of Technology Operations (Finance Product Epmo)",
                "job_started_on": "Nov 2019",
                "job_ended_on": null,
                "job_location": "Dallas, Texas, United States",
                "job_still_working": true
            }
        ],
        "linkedin_company_id": "2646",
        "started_at_company": "Nov 2019",
        "started_at_position": "Nov 2019",
        "is_current": true,
        "linkedin_lead_persona": null
    },
    {
        "is_full_data": true,
        "linkedin_id": "266545248",
        "industry": "Retail",
        "location": "Bentonville, Arkansas, United States",
        "location_county": null,
        "location_city": "Bentonville",
        "location_state": "Arkansas",
        "location_country": "United States",
        "skills": [
            "Brand Management",
            "P&L Management",
            "Organizational Development",
            "Marketing",
            "Brand Strategy",
            "Customer Insight",
            "Brand Development",
            "Business Strategy",
            "Product Development",
            "Retail",
            "Merchandising",
            "Product Marketing",
            "Product Launch",
            "Inventory Management",
            "Strategic Planning",
            "Marketing Strategy",
            "Retail Marketing",
            "Media planning",
            "Advertising",
            "Strategy",
            "Business Development",
            "Forecasting",
            "Inventory Control",
            "Change Management",
            "Pricing",
            "Cross-functional Team Leadership",
            "Leadership",
            "Team Leadership",
            "Management",
            "Integrated Marketing Communications Planning",
            "Agency Relationship Management",
            "New Market Expansion",
            "Direct to Consumer",
            "Retail Packaging"
        ],
        "educations": [
            {
                "started_on": null,
                "ended_on": null,
                "fields_of_study": [
                    "Double Major: Marketing & Finance"
                ],
                "degree": "Bachelor of Science - BS",
                "university_id": "3180",
                "university_name": "University of Minnesota - Carlson School of Management"
            }
        ],
        "twitter_link": null,
        "private_website": null,
        "unformatted_full_name": "Courtney Carlson",
        "full_name": "Courtney Carlson",
        "first_name": "Courtney",
        "middle_name": "",
        "last_name": "Carlson",
        "summary": "I am a fanatic about the consumer and the experience.  \n\nI believe that unlocking what matters most for every consumer in a rich experience is what makes a brand.  Building a brand with expert execution will deliver the business.\n\nI grow or turnaround consumer-centered businesses. I do this by engaging large global teams in insights about our consumer, immersing ourselves in their lives and imagining how we can design marketing, product and service experiences that enrich their lives and loyalty to the brand. \n\nI believe in learning from experts and surrounding myself with curious, forward looking people.  I build strong relationships with my cross functional peers and together we build a holistic plan.  We leverage data, insights and trends to arrive at clear problem identification to design our objectives, create measurable goals and a collection of strategic choices.  I lead and motivate my teams to to take clear action, setting our brand up for long-term success.\n\nMy strength in strategy, combined with my background in Finance and Marketing allows me to lead through the ambiguity to create a new future state. I appeal to both art and science, emotion and analysis to support innovation and thoughtful risk-taking on my team while delivering upon measurable goals to profitably grow the business. \n\nI enjoy problem solving and have a high level of mental stamina and persistence which I use to lead in times of intense change and uncertainty.  I use it to also lift my teams to preserve and develop a future of growth and comfort with constant change.\n\nMy experience spans the entire business though my roles in leading the P&L and Marketing leadership: P&L Accountability, Brand Strategy, Marketing Strategy, Market Expansion, Full funnel Media Strategy and Measurement, Creative & Brand Positioning, Content Creation, Instore and Experience Design, Advertising, Business Model Design, Product Development, Sourcing, P&L Negotiation, Quality Control, Supply Chain Management, Results and Measurement, Organizational Design, Team Development, Fortune 100 Vendor Management, Agency Management, Change Management.",
        "sales_id": "ACwAAA_jKGABx2AZKWzJZAZDfVBvWvA-CW899ZI",
        "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAA_jKGABx2AZKWzJZAZDfVBvWvA-CW899ZI,NAME_SEARCH,OJWs",
        "linkedin_url": "https://www.linkedin.com/in/courtneylbcarlson",
        "headline": "Senior Vice President Marketing at Walmart",
        "raw_headline": "Senior Vice President Marketing at Walmart",
        "num_of_connections": 3370,
        "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQGRoFGFZiH2mw/profile-displayphoto-shrink_200_200/B56ZXzahvbHoAY-/0/1743545573424?e=1749686400&v=beta&t=ZBe29ofhazyiwIJlca9V9mWYcKJy8pE02PoxeuMTmKs",
        "is_premium": false,
        "is_openlink": false,
        "is_job_seeker": false,
        "is_retired": false,
        "languages": [],
        "certifications": [],
        "company_id": "2646",
        "raw_company_name": "Walmart",
        "company_name": "Walmart",
        "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
        "company_url": "https://www.linkedin.com/company/walmart/",
        "company_website": "https://bit.ly/3IBowlZ",
        "company_location": "Bentonville, Arkansas, United States",
        "company_city": "Bentonville",
        "company_state": "Arkansas",
        "company_country": "United States",
        "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_200_200/company-logo_200_200/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=SbRlt733o640Cu6RNGKF6n_M5Ywu0T_ec417usslm5A",
        "company_industry": "Retail",
        "job_description": null,
        "raw_job_title": "Senior Vice President Marketing",
        "job_title": "Senior Vice President Marketing",
        "job_started_on": "Feb 2021",
        "job_ended_on": null,
        "job_location": "Bentonville, Arkansas, United States",
        "job_still_working": true,
        "jobs": [
            {
                "company_id": "2646",
                "raw_company_name": "Walmart",
                "company_name": "Walmart",
                "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
                "company_url": "https://www.linkedin.com/company/walmart/",
                "company_website": "https://bit.ly/3IBowlZ",
                "company_location": "Bentonville, Arkansas, United States",
                "company_city": "Bentonville",
                "company_state": "Arkansas",
                "company_country": "United States",
                "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_400_400/company-logo_400_400/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=ckNvC28p60MCknwf_5VS0p3pHY0hH1wCYnJKSD_QR-U",
                "company_industry": "Retail",
                "job_description": null,
                "raw_job_title": "Senior Vice President Marketing",
                "job_title": "Senior Vice President Marketing",
                "job_started_on": "Feb 2021",
                "job_ended_on": null,
                "job_location": "Bentonville, Arkansas, United States",
                "job_still_working": true
            }
        ],
        "linkedin_company_id": "2646",
        "started_at_company": "Feb 2021",
        "started_at_position": "Feb 2021",
        "is_current": true,
        "linkedin_lead_persona": null
    },
    {
        "is_full_data": true,
        "linkedin_id": "80452861",
        "industry": "Telecommunications",
        "location": "United States",
        "location_county": null,
        "location_city": null,
        "location_state": null,
        "location_country": "United States",
        "skills": [
            "Business Transformation",
            "Systems Management",
            "Cross-functional Team Leadership",
            "Project Management",
            "Telecommunications",
            "Process Improvement",
            "Team Leadership",
            "Integration",
            "CRM",
            "Leadership",
            "Cloud Computing",
            "Business Analysis",
            "Program Management",
            "SDLC",
            "Requirements Analysis",
            "Vendor Management",
            "Software Project Management",
            "Team Building",
            "Management Consulting",
            "Product Management",
            "Solution Architecture",
            "Customer Satisfaction",
            "Business Process Improvement",
            "Change Management",
            "Data Center",
            "PMP",
            "Enterprise Architecture",
            "IT Strategy",
            "Outsourcing",
            "PMO",
            "Project Portfolio Management",
            "Business Intelligence",
            "Business Process",
            "Professional Services",
            "IT Management",
            "Enterprise Software",
            "ERP",
            "System Deployment",
            "Software Development",
            "Strategy",
            "Customer Relationship Management (CRM)",
            "Project Delivery",
            "Agile Methodologies",
            "Data Warehousing",
            "Strategic Partnerships",
            "Management",
            "Strategic Planning"
        ],
        "educations": [
            {
                "started_on": {
                    "year": 2003
                },
                "ended_on": {
                    "year": 2004
                },
                "fields_of_study": [
                    "Business Administration and Management, General"
                ],
                "degree": "Master of Business Administration (M.B.A.)",
                "university_id": "9375",
                "university_name": "University of Maryland Global Campus"
            },
            {
                "started_on": {
                    "year": 2001
                },
                "ended_on": {
                    "year": 2003
                },
                "fields_of_study": [
                    "Management Information Systems, General"
                ],
                "degree": "Master of Science (M.S.)",
                "university_id": "9375",
                "university_name": "University of Maryland Global Campus"
            },
            {
                "started_on": {
                    "year": 1989
                },
                "ended_on": {
                    "year": 1993
                },
                "fields_of_study": [
                    "Mechanical Engineering"
                ],
                "degree": "Bachelor of Science (B.S)",
                "university_id": "15093679",
                "university_name": "Acharya Nagarjuna University"
            }
        ],
        "twitter_link": null,
        "private_website": null,
        "unformatted_full_name": "Prakash Tadepalli",
        "full_name": "Prakash Tadepalli",
        "first_name": "Prakash",
        "middle_name": "",
        "last_name": "Tadepalli",
        "summary": null,
        "sales_id": "ACwAAATLnP0Bjb1gLL6YxKo9ddHX6iilIbDnujs",
        "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAATLnP0Bjb1gLL6YxKo9ddHX6iilIbDnujs,NAME_SEARCH,OJWs",
        "linkedin_url": "https://www.linkedin.com/in/prakash-tadepalli-451b3a22",
        "headline": "Director at Walmart",
        "raw_headline": "Director at Walmart",
        "num_of_connections": 1597,
        "profile_photo": null,
        "is_premium": false,
        "is_openlink": false,
        "is_job_seeker": false,
        "is_retired": false,
        "languages": [
            {
                "name": "Telugu",
                "proficiency": "NATIVE_OR_BILINGUAL"
            },
            {
                "name": "Hindi",
                "proficiency": "NATIVE_OR_BILINGUAL"
            }
        ],
        "certifications": [
            {
                "authority": "Villanova University",
                "name": "Lean Six Sigma",
                "startedOn": {
                    "month": 8,
                    "year": 2012
                },
                "company_id": "166806"
            },
            {
                "authority": "MIT xPRO",
                "name": "Designing and Building AI Products and Services",
                "licenseNumber": "131440205",
                "startedOn": {
                    "month": 1,
                    "year": 2025
                },
                "url": "https://certificates.emeritus.org/13cc7f7f-82e3-422f-bc0a-cef5d9866ab4",
                "company_id": "18920810"
            }
        ],
        "company_id": "2646",
        "raw_company_name": "Walmart",
        "company_name": "Walmart",
        "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
        "company_url": "https://www.linkedin.com/company/walmart/",
        "company_website": "https://bit.ly/3IBowlZ",
        "company_location": "Bentonville, Arkansas, United States",
        "company_city": "Bentonville",
        "company_state": "Arkansas",
        "company_country": "United States",
        "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_200_200/company-logo_200_200/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=SbRlt733o640Cu6RNGKF6n_M5Ywu0T_ec417usslm5A",
        "company_industry": "Retail",
        "job_description": null,
        "raw_job_title": "Director - International Technology",
        "job_title": "Director - International Technology",
        "job_started_on": "Oct 2018",
        "job_ended_on": null,
        "job_location": "Bentonville, Arkansas",
        "job_still_working": true,
        "jobs": [
            {
                "company_id": "2646",
                "raw_company_name": "Walmart",
                "company_name": "Walmart",
                "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
                "company_url": "https://www.linkedin.com/company/walmart/",
                "company_website": "https://bit.ly/3IBowlZ",
                "company_location": "Bentonville, Arkansas, United States",
                "company_city": "Bentonville",
                "company_state": "Arkansas",
                "company_country": "United States",
                "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_400_400/company-logo_400_400/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=ckNvC28p60MCknwf_5VS0p3pHY0hH1wCYnJKSD_QR-U",
                "company_industry": "Retail",
                "job_description": null,
                "raw_job_title": "Director - International Technology",
                "job_title": "Director - International Technology",
                "job_started_on": "Oct 2018",
                "job_ended_on": null,
                "job_location": "Bentonville, Arkansas",
                "job_still_working": true
            }
        ],
        "linkedin_company_id": "2646",
        "started_at_company": "Oct 2018",
        "started_at_position": "Oct 2018",
        "is_current": true,
        "linkedin_lead_persona": null
    },
    {
        "is_full_data": true,
        "linkedin_id": "138969",
        "industry": "Retail",
        "location": "San Francisco Bay Area",
        "location_county": null,
        "location_city": null,
        "location_state": "California",
        "location_country": "United States",
        "skills": [
            "Affiliate Marketing",
            "Online Advertising",
            "Database Modeling",
            "E-commerce",
            "Direct Marketing",
            "Customer Acquisition",
            "Web Marketing",
            "Usability",
            "Copywriting",
            "Web Analytics",
            "Omniture",
            "PPC",
            "Email Marketing",
            "Database Marketing",
            "Google Analytics",
            "Digital Marketing",
            "SEO",
            "SEM",
            "Analytics",
            "Mobile Marketing",
            "Interactive Marketing",
            "Entrepreneurship",
            "Multi-channel Marketing",
            "Brand Awareness",
            "Marketing",
            "Integrated Marketing",
            "Landing Page Optimization",
            "Lead Generation",
            "Campaign Management",
            "Google Adwords",
            "Online Marketing",
            "Management",
            "Social Media Marketing",
            "Digital Strategy",
            "Marketing Strategy",
            "Advertising",
            "Pay Per Click (PPC)",
            "Search Engine Optimization (SEO)"
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
                    "Journalism/Business Communications"
                ],
                "degree": "BA",
                "university_id": "166643",
                "university_name": "The University of Kansas"
            }
        ],
        "twitter_link": null,
        "private_website": null,
        "unformatted_full_name": "Matt Kennedy",
        "full_name": "Matt Kennedy",
        "first_name": "Matt",
        "middle_name": "",
        "last_name": "Kennedy",
        "summary": "Specialties: Online Customer Acquisition, Email/Database Marketing, Online Customer Retention/Loyalty Programs, Affiliate Marketing, Online Advertising, Online Creative Development, Database Modeling, Online Copywriting, Traditional Direct Marketing List Management and Brokerage, and ECommerce Site Usability and Navigation.",
        "sales_id": "ACwAAAACHtkBYBRUQA0GvoZZwmhje6sQnFqrh8Y",
        "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAACHtkBYBRUQA0GvoZZwmhje6sQnFqrh8Y,NAME_SEARCH,OJWs",
        "linkedin_url": "https://www.linkedin.com/in/matt-kennedy-50968",
        "headline": "Vice President, Performance Marketing at Walmart",
        "raw_headline": "Vice President, Performance Marketing at Walmart",
        "num_of_connections": 2287,
        "profile_photo": "https://media.licdn.com/dms/image/v2/C4E03AQEbxJb9VgZlTg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516173183429?e=1749686400&v=beta&t=6ssQpnXkVI4Vnk77k3NaDcagcYlZh7WbRRQ6ilL0O88",
        "is_premium": false,
        "is_openlink": false,
        "is_job_seeker": false,
        "is_retired": false,
        "languages": [],
        "certifications": [],
        "company_id": "2646",
        "raw_company_name": "Walmart",
        "company_name": "Walmart",
        "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
        "company_url": "https://www.linkedin.com/company/walmart/",
        "company_website": "https://bit.ly/3IBowlZ",
        "company_location": "Bentonville, Arkansas, United States",
        "company_city": "Bentonville",
        "company_state": "Arkansas",
        "company_country": "United States",
        "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_200_200/company-logo_200_200/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=SbRlt733o640Cu6RNGKF6n_M5Ywu0T_ec417usslm5A",
        "company_industry": "Retail",
        "job_description": null,
        "raw_job_title": "Vice President, Performance Marketing",
        "job_title": "Vice President, Performance Marketing",
        "job_started_on": "Jun 2024",
        "job_ended_on": null,
        "job_location": "San Bruno, California, United States",
        "job_still_working": true,
        "jobs": [
            {
                "company_id": "2646",
                "raw_company_name": "Walmart",
                "company_name": "Walmart",
                "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
                "company_url": "https://www.linkedin.com/company/walmart/",
                "company_website": "https://bit.ly/3IBowlZ",
                "company_location": "Bentonville, Arkansas, United States",
                "company_city": "Bentonville",
                "company_state": "Arkansas",
                "company_country": "United States",
                "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_400_400/company-logo_400_400/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=ckNvC28p60MCknwf_5VS0p3pHY0hH1wCYnJKSD_QR-U",
                "company_industry": "Retail",
                "job_description": null,
                "raw_job_title": "Vice President, Performance Marketing",
                "job_title": "Vice President, Performance Marketing",
                "job_started_on": "Jun 2024",
                "job_ended_on": null,
                "job_location": "San Bruno, California, United States",
                "job_still_working": true
            }
        ],
        "linkedin_company_id": "2646",
        "started_at_company": "Jun 2024",
        "started_at_position": "Jun 2024",
        "is_current": true,
        "linkedin_lead_persona": null
    },
    {
        "is_full_data": true,
        "linkedin_id": "228217134",
        "industry": "Retail",
        "location": "Dallas-Fort Worth Metroplex",
        "location_county": null,
        "location_city": null,
        "location_state": "Texas",
        "location_country": "United States",
        "skills": [
            "Supply Chain Management",
            "Global Sourcing",
            "Global Supply Chain Leadership and Management",
            "Global Supplier Relationship Management",
            "Materials Management",
            "COE",
            "Procter & Gamble Proprietary Sourcing College",
            "Strategic Sourcing",
            "Cross-functional Team Leadership",
            "Supply Chain",
            "Supply Management",
            "Sourcing",
            "Purchasing",
            "Management",
            "Project Planning",
            "Procurement",
            "SAP",
            "Logistics",
            "Demand Planning",
            "Continuous Improvement",
            "Supply Chain Optimization",
            "Leadership",
            "Corporate Recruiting",
            "Sustainability"
        ],
        "educations": [
            {
                "started_on": null,
                "ended_on": null,
                "fields_of_study": [
                    "Business Administration and Management"
                ],
                "degree": "Master of Business Administration (MBA)",
                "university_id": "15443",
                "university_name": "Xavier University"
            },
            {
                "started_on": null,
                "ended_on": null,
                "fields_of_study": [
                    "Business Administration and Management, General"
                ],
                "degree": "Bachelor's degree",
                "university_id": "12983",
                "university_name": "Northern Kentucky University"
            }
        ],
        "twitter_link": null,
        "private_website": null,
        "unformatted_full_name": "Priya P.",
        "full_name": "Priya P",
        "first_name": "Priya",
        "middle_name": "",
        "last_name": "P",
        "summary": "With 19+ years of leadership experience in Global Supply Chain including fortune 50 corporations, my expertise entails Global Strategic Sourcing, Global Inventory and Materials Management, Supplier Relationship Management and People Management.  I am a people's person who thrives on linking and leveraging opportunities and business partnerships to drive the best total value Supply Chain Solutions. Other experiences and expertise include:\n\nCenter of Excellence for Procurement\nHR \nLeadership\nMentoring\nSustainability\nNew Product Development\nInnovation\nTeam Building\nCross functional expertise \nSupplier Diversity\nLogistics & Transportation\nProject Management\nContinuous Improvement\nChange Management\nCPG\nCosmetics\nSkincare\nBeauty\nFood\nNutritionals\nNaturals\n\nSystems & Certifications:\nSenior Professional in Supply Management certification (NLPA)\nMBA\nProcter & Gamble Sourcing College\nAriba \nSAP\nCoupa",
        "sales_id": "ACwAAA2aUS4BDU2E9s7spkphYrMMTKcWMkAaxdM",
        "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAA2aUS4BDU2E9s7spkphYrMMTKcWMkAaxdM,NAME_SEARCH,OJWs",
        "linkedin_url": "https://www.linkedin.com/in/priyapasupathy",
        "headline": "Global Procurement/Supply Chain Executive",
        "raw_headline": "Global Procurement/Supply Chain Executive",
        "num_of_connections": 1162,
        "profile_photo": "https://media.licdn.com/dms/image/v2/C4E03AQGeQQw0RX1VlQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1540445219597?e=1749686400&v=beta&t=9uY1nfkaSgfroQGjlm8dFmvJGgKbJS_QJ2THb4HRCbs",
        "is_premium": false,
        "is_openlink": false,
        "is_job_seeker": false,
        "is_retired": false,
        "languages": [],
        "certifications": [],
        "company_id": "2646",
        "raw_company_name": "Walmart",
        "company_name": "Walmart",
        "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
        "company_url": "https://www.linkedin.com/company/walmart/",
        "company_website": "https://bit.ly/3IBowlZ",
        "company_location": "Bentonville, Arkansas, United States",
        "company_city": "Bentonville",
        "company_state": "Arkansas",
        "company_country": "United States",
        "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_200_200/company-logo_200_200/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=SbRlt733o640Cu6RNGKF6n_M5Ywu0T_ec417usslm5A",
        "company_industry": "Retail",
        "job_description": null,
        "raw_job_title": "Senior Director - Global Procurement",
        "job_title": "Senior Director - Global Procurement",
        "job_started_on": "May 2024",
        "job_ended_on": null,
        "job_location": null,
        "job_still_working": true,
        "jobs": [
            {
                "company_id": "2646",
                "raw_company_name": "Walmart",
                "company_name": "Walmart",
                "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
                "company_url": "https://www.linkedin.com/company/walmart/",
                "company_website": "https://bit.ly/3IBowlZ",
                "company_location": "Bentonville, Arkansas, United States",
                "company_city": "Bentonville",
                "company_state": "Arkansas",
                "company_country": "United States",
                "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_400_400/company-logo_400_400/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=ckNvC28p60MCknwf_5VS0p3pHY0hH1wCYnJKSD_QR-U",
                "company_industry": "Retail",
                "job_description": null,
                "raw_job_title": "Senior Director - Global Procurement",
                "job_title": "Senior Director - Global Procurement",
                "job_started_on": "May 2024",
                "job_ended_on": null,
                "job_location": null,
                "job_still_working": true
            }
        ],
        "linkedin_company_id": "2646",
        "started_at_company": "May 2024",
        "started_at_position": "May 2024",
        "is_current": true,
        "linkedin_lead_persona": null
    },
    {
        "is_full_data": true,
        "linkedin_id": "8792231",
        "industry": "IT Services and IT Consulting",
        "location": "Seattle, Washington, United States",
        "location_county": null,
        "location_city": "Seattle",
        "location_state": "Washington",
        "location_country": "United States",
        "skills": [
            "Large Scale Systems",
            "Supply Chain Management",
            "Customer Relationship Management (CRM)",
            "Team Leadership",
            "Startup Development",
            "Cross-functional Team Leadership",
            "Technology Leadership",
            "Gen AI",
            "Automation",
            "Technology Transformation",
            "Executive Management",
            "Distributed Systems",
            "Perl",
            "Java",
            "Scalability",
            "Algorithms",
            "Data Structures",
            "SQL",
            "C++",
            "C",
            "Agile Methodologies",
            "Software Engineering",
            "Communication",
            "Mindfulness",
            "Social Inclusion",
            "Talent Management",
            "Teamwork"
        ],
        "educations": [
            {
                "started_on": {
                    "year": 1999
                },
                "ended_on": {
                    "year": 2003
                },
                "fields_of_study": [
                    "Computer Science and Engineering"
                ],
                "degree": "Bachelor of Engineering",
                "university_id": "15113250",
                "university_name": "National Institute of Technology Durgapur"
            }
        ],
        "twitter_link": null,
        "private_website": null,
        "unformatted_full_name": "Sushanta Das",
        "full_name": "Sushanta Das",
        "first_name": "Sushanta",
        "middle_name": "",
        "last_name": "Das",
        "summary": "With over 20 years in the tech industry, my journey has shaped me into a leader who thrives on innovation and the empowerment of teams. At Walmart, my mission aligns with our vision to revolutionize the associate experience, leveraging my expertise in software development and distributed systems. Our culture fosters speed and ownership, and I am committed to establishing Walmart as a frontrunner in digital workplace solutions, contributing to a legacy of impactful innovation.\n\nIn my current role as Vice President of Technology at Walmart, I lead the People Tech & Services within our Enterprise Business Services. My focus is on creating exceptional digital experiences for over 2 million associates worldwide. I drive my team to deliver platforms that enhance engagement, productivity, and a sense of belonging, ensuring our initiatives resonate with Walmart's vast and diverse associate base. Our success is a testament to our collaborative approach and the cutting-edge solutions we bring to life.",
        "sales_id": "ACwAAACGKKcBculsyCEPH2LCD3TSgSjV-aamxrs",
        "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAACGKKcBculsyCEPH2LCD3TSgSjV-aamxrs,NAME_SEARCH,OJWs",
        "linkedin_url": "https://www.linkedin.com/in/dassushanta",
        "headline": "VP of Technology at Walmart | Empowering Teams, Leading Innovation",
        "raw_headline": "VP of Technology at Walmart | Empowering Teams, Leading Innovation",
        "num_of_connections": 861,
        "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQHgCVCedCEgpg/profile-displayphoto-shrink_800_800/B56ZXGkrffHEAg-/0/1742793259407?e=1749686400&v=beta&t=0EvPqA4eyIjkPw4PQUvYu5MF8hjp75Wn9vMvBiCrhJo",
        "is_premium": true,
        "is_openlink": false,
        "is_job_seeker": false,
        "is_retired": false,
        "languages": [],
        "certifications": [
            {
                "authority": "LinkedIn",
                "name": "Unconscious Bias",
                "startedOn": {
                    "month": 10,
                    "year": 2020
                },
                "url": "https://www.linkedin.com/learning/certificates/c5be83d5301e8a3570a73aa72062c062eff9cbdaf105b77071ddaa0a18adda7b?trk=backfilled_certificate",
                "company_id": "1337"
            }
        ],
        "company_id": "2646",
        "raw_company_name": "Walmart",
        "company_name": "Walmart",
        "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
        "company_url": "https://www.linkedin.com/company/walmart/",
        "company_website": "https://bit.ly/3IBowlZ",
        "company_location": "Bentonville, Arkansas, United States",
        "company_city": "Bentonville",
        "company_state": "Arkansas",
        "company_country": "United States",
        "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_200_200/company-logo_200_200/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=SbRlt733o640Cu6RNGKF6n_M5Ywu0T_ec417usslm5A",
        "company_industry": "Retail",
        "job_description": "I lead People Tech & Services within Walmart's Enterprise Business Services, focused on building world-class digital experiences for the largest associate base on the planet. My team drives innovation in the people space -- delivering platforms that boost engagement, productivity, and belonging for 2M+ associates across the globe.\n\nRooted in Walmart's culture, I operate with speed, ownership, and a deep belief in empowering teams. Our goal: make Walmart a thought leader in associate experience and leave a legacy of fast, meaningful innovation.",
        "raw_job_title": "Vice President of Technology",
        "job_title": "Vice President of Technology",
        "job_started_on": "Sep 2023",
        "job_ended_on": null,
        "job_location": "Bellevue, Washington, United States",
        "job_still_working": true,
        "jobs": [
            {
                "company_id": "2646",
                "raw_company_name": "Walmart",
                "company_name": "Walmart",
                "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
                "company_url": "https://www.linkedin.com/company/walmart/",
                "company_website": "https://bit.ly/3IBowlZ",
                "company_location": "Bentonville, Arkansas, United States",
                "company_city": "Bentonville",
                "company_state": "Arkansas",
                "company_country": "United States",
                "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_400_400/company-logo_400_400/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=ckNvC28p60MCknwf_5VS0p3pHY0hH1wCYnJKSD_QR-U",
                "company_industry": "Retail",
                "job_description": "I lead People Tech & Services within Walmart's Enterprise Business Services, focused on building world-class digital experiences for the largest associate base on the planet. My team drives innovation in the people space -- delivering platforms that boost engagement, productivity, and belonging for 2M+ associates across the globe.\n\nRooted in Walmart's culture, I operate with speed, ownership, and a deep belief in empowering teams. Our goal: make Walmart a thought leader in associate experience and leave a legacy of fast, meaningful innovation.",
                "raw_job_title": "Vice President of Technology",
                "job_title": "Vice President of Technology",
                "job_started_on": "Sep 2023",
                "job_ended_on": null,
                "job_location": "Bellevue, Washington, United States",
                "job_still_working": true
            }
        ],
        "linkedin_company_id": "2646",
        "started_at_company": "Sep 2023",
        "started_at_position": "Sep 2023",
        "is_current": true,
        "linkedin_lead_persona": null
    },
    {
        "is_full_data": true,
        "linkedin_id": "17715116",
        "industry": "Retail",
        "location": "Bentonville, Arkansas, United States",
        "location_county": null,
        "location_city": "Bentonville",
        "location_state": "Arkansas",
        "location_country": "United States",
        "skills": [
            "Business Strategy",
            "Strategic Planning",
            "Marketing Strategy",
            "Marketing Communications",
            "Advertising",
            "Product Innovation",
            "Brand Management",
            "Consumer Products",
            "Shopper Marketing",
            "Strategy",
            "Cross-functional Team Leadership",
            "Integrated Marketing",
            "Segmentation",
            "Marketing",
            "Brand Development",
            "Management",
            "Strategic Communications",
            "Customer Insight",
            "Leadership",
            "Business Planning",
            "Marketing Management",
            "Strategic Thinking",
            "Market Planning",
            "Brand Architecture",
            "Competitive Analysis",
            "FMCG",
            "Marketing Research",
            "Global Marketing",
            "Market Research",
            "Market Analysis",
            "Product Marketing",
            "Digital Marketing",
            "Analytics",
            "Strategic Partnerships",
            "Product Launch",
            "Brand Equity",
            "Fast-Moving Consumer Goods (FMCG)"
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
                    "Marketing"
                ],
                "degree": "MBA",
                "university_id": "3352",
                "university_name": "Duke University - The Fuqua School of Business"
            },
            {
                "started_on": {
                    "year": 1994
                },
                "ended_on": {
                    "year": 1998
                },
                "fields_of_study": [
                    "Public Policy"
                ],
                "degree": "BA",
                "university_id": "3356",
                "university_name": "Duke University"
            }
        ],
        "twitter_link": null,
        "private_website": null,
        "unformatted_full_name": "William White",
        "full_name": "William White",
        "first_name": "William",
        "middle_name": "",
        "last_name": "White",
        "summary": "William White was appointed Chief Marketing Officer of Walmart in May 2020.  He is accountable for customer insights, strategy, and full-funnel marketing planning and execution.  In his role, William has responsibility for driving demand, building customer loyalty, and strengthening brand equity.  \n\nBefore joining Walmart, William worked at Target where he held various leadership roles of increasing scale in marketing, including Senior Vice President.  Prior to joining Target in 2013, William held several global and domestic leadership positions at The Coca-Cola Company. He began his career as a media planner for Starcom MediaVest in New York.  \n\nWilliam is a consumer centric and innovative marketer who has consistently delivered results by crafting a compelling strategic vision, building capabilities, and driving execution. He is a passionate leader who thrives on building, developing, and nurturing teams. He has been recognized by numerous publications, including Forbes, Adweek, and Business Insider, as one of the world's leading CMOs for his leadership in creativity, innovation, and growth.\n\nWilliam holds undergraduate and business degrees from Duke University. He has received NACD Directorship Certification from the National Association of Corporate Directors.  William serves on the boards of the Walmart Foundation, the Association of National Advertisers, the Mobile Marketing Association, and the Duke University Fuqua School of Business. He is an avid runner and extremely proud father.",
        "sales_id": "ACwAAAEOT6wBsqtW1e6zX2SdRHkxNj8-q8E0tB4",
        "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAEOT6wBsqtW1e6zX2SdRHkxNj8-q8E0tB4,NAME_SEARCH,OJWs",
        "linkedin_url": "https://www.linkedin.com/in/williamallenwhite",
        "headline": "Chief Marketing Officer at Walmart",
        "raw_headline": "Chief Marketing Officer at Walmart",
        "num_of_connections": 1747,
        "profile_photo": "https://media.licdn.com/dms/image/v2/D4E03AQFYSF-pgS2msw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701899975081?e=1749686400&v=beta&t=xt63U6yTxxGQiEqz-LlYVB1q28aYiotMGqkuVmtkfOE",
        "is_premium": false,
        "is_openlink": false,
        "is_job_seeker": false,
        "is_retired": false,
        "languages": [],
        "certifications": [
            {
                "endedOn": {
                    "month": 12,
                    "year": 2024
                },
                "authority": "NACD (National Association of Corporate Directors)",
                "name": "NACD Directorship Certification(r)",
                "startedOn": {
                    "month": 12,
                    "year": 2022
                },
                "url": "https://www.credly.com/badges/26a24aa0-8c81-48a7-8de6-3201235325df/linked_in_profile",
                "company_id": "83473"
            }
        ],
        "company_id": "2646",
        "raw_company_name": "Walmart",
        "company_name": "Walmart",
        "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
        "company_url": "https://www.linkedin.com/company/walmart/",
        "company_website": "https://bit.ly/3IBowlZ",
        "company_location": "Bentonville, Arkansas, United States",
        "company_city": "Bentonville",
        "company_state": "Arkansas",
        "company_country": "United States",
        "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_200_200/company-logo_200_200/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=SbRlt733o640Cu6RNGKF6n_M5Ywu0T_ec417usslm5A",
        "company_industry": "Retail",
        "job_description": null,
        "raw_job_title": "Chief Marketing Officer",
        "job_title": "Chief Marketing Officer",
        "job_started_on": "May 2020",
        "job_ended_on": null,
        "job_location": "Bentonville, Arkansas, United States",
        "job_still_working": true,
        "jobs": [
            {
                "company_id": "2646",
                "raw_company_name": "Walmart",
                "company_name": "Walmart",
                "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
                "company_url": "https://www.linkedin.com/company/walmart/",
                "company_website": "https://bit.ly/3IBowlZ",
                "company_location": "Bentonville, Arkansas, United States",
                "company_city": "Bentonville",
                "company_state": "Arkansas",
                "company_country": "United States",
                "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_400_400/company-logo_400_400/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=ckNvC28p60MCknwf_5VS0p3pHY0hH1wCYnJKSD_QR-U",
                "company_industry": "Retail",
                "job_description": null,
                "raw_job_title": "Chief Marketing Officer",
                "job_title": "Chief Marketing Officer",
                "job_started_on": "May 2020",
                "job_ended_on": null,
                "job_location": "Bentonville, Arkansas, United States",
                "job_still_working": true
            }
        ],
        "linkedin_company_id": "2646",
        "started_at_company": "May 2020",
        "started_at_position": "May 2020",
        "is_current": true,
        "linkedin_lead_persona": null
    },
    {
        "is_full_data": true,
        "linkedin_id": "31078156",
        "industry": "Retail",
        "location": "Bentonville, Arkansas, United States",
        "location_county": null,
        "location_city": "Bentonville",
        "location_state": "Arkansas",
        "location_country": "United States",
        "skills": [],
        "educations": [
            {
                "started_on": {
                    "year": 1984
                },
                "ended_on": {
                    "year": 1988
                },
                "fields_of_study": [
                    "Computer Science"
                ],
                "degree": "BS",
                "university_id": "6502",
                "university_name": "University at Buffalo"
            }
        ],
        "twitter_link": null,
        "private_website": null,
        "unformatted_full_name": "Rob Fusillo",
        "full_name": "Rob Fusillo",
        "first_name": "Rob",
        "middle_name": "",
        "last_name": "Fusillo",
        "summary": null,
        "sales_id": "ACwAAAHaNwwBa0FX4dwPHY-rOJdHE6JjtzpLm6A",
        "linkedin_sales_link": "https://www.linkedin.com/sales/lead/ACwAAAHaNwwBa0FX4dwPHY-rOJdHE6JjtzpLm6A,NAME_SEARCH,OJWs",
        "linkedin_url": "https://www.linkedin.com/in/rob-fusillo-0644a9a",
        "headline": "Senior Vice President, Walmart",
        "raw_headline": "Senior Vice President, Walmart",
        "num_of_connections": 4349,
        "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQGL2KUCvq2ZRg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696393296126?e=1749686400&v=beta&t=fKgv6DkUSi6fqGzxQWTjChbkoSsWzMS_BCRS6H0SerI",
        "is_premium": false,
        "is_openlink": false,
        "is_job_seeker": false,
        "is_retired": false,
        "languages": [],
        "certifications": [],
        "company_id": "2646",
        "raw_company_name": "Walmart",
        "company_name": "Walmart",
        "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
        "company_url": "https://www.linkedin.com/company/walmart/",
        "company_website": "https://bit.ly/3IBowlZ",
        "company_location": "Bentonville, Arkansas, United States",
        "company_city": "Bentonville",
        "company_state": "Arkansas",
        "company_country": "United States",
        "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_200_200/company-logo_200_200/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=SbRlt733o640Cu6RNGKF6n_M5Ywu0T_ec417usslm5A",
        "company_industry": "Retail",
        "job_description": "Responsible for Global Technology Operations, Site Reliability Engineering, Global Technology Portfolio and Program Management, and Engineering Excellence",
        "raw_job_title": "Senior Vice President Information Technology",
        "job_title": "Senior Vice President Information Technology",
        "job_started_on": "Sep 2023",
        "job_ended_on": null,
        "job_location": null,
        "job_still_working": true,
        "jobs": [
            {
                "company_id": "2646",
                "raw_company_name": "Walmart",
                "company_name": "Walmart",
                "company_description": "Sixty years ago, Sam Walton started a single mom-and-pop shop and transformed it into the world's biggest retailer. Since those founding days, one thing has remained consistent: our commitment to helping our customers save money so they can live better. Today, we're reinventing the shopping experience and our associates are at the heart of it. When you join our Walmart family of brands, you'll play a crucial role in shaping the future of retail, improving millions of lives around the world. \n\nWe are ecstatic to have been named a Great Place to Work(r) Certified May 2023 - May 2024, Disability: IN 2023 Best Places to Work, and Fast Company 100 Best Workplaces for Innovators 2023.\n\nThis is that place where your passions meet purpose. Join our family and build a career you're proud of.",
                "company_url": "https://www.linkedin.com/company/walmart/",
                "company_website": "https://bit.ly/3IBowlZ",
                "company_location": "Bentonville, Arkansas, United States",
                "company_city": "Bentonville",
                "company_state": "Arkansas",
                "company_country": "United States",
                "company_image": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_400_400/company-logo_400_400/0/1736779000209/walmart_logo?e=1749686400&v=beta&t=ckNvC28p60MCknwf_5VS0p3pHY0hH1wCYnJKSD_QR-U",
                "company_industry": "Retail",
                "job_description": "Responsible for Global Technology Operations, Site Reliability Engineering, Global Technology Portfolio and Program Management, and Engineering Excellence",
                "raw_job_title": "Senior Vice President Information Technology",
                "job_title": "Senior Vice President Information Technology",
                "job_started_on": "Sep 2023",
                "job_ended_on": null,
                "job_location": null,
                "job_still_working": true
            }
        ],
        "linkedin_company_id": "2646",
        "started_at_company": "Sep 2023",
        "started_at_position": "Sep 2023",
        "is_current": true,
        "linkedin_lead_persona": null
    }]);
    const [isLeadsLoading, setIsLeadsLoading] = useState(false);

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

    const fetchLeadsByCompany = async (company) => {
        setIsLeadsLoading(true);
        try {
            const options = {
                method: 'POST',
                headers: {
                    Authorization: `Token ${import.meta.env.VITE_GENERECT_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    company_link: `https://www.linkedin.com/company/${encodeURIComponent(company)}`,
                    limit_by: 10
                })
            };

            const response = await fetch('https://api.generect.com/api/linkedin/leads/by_icp/', options);
            const data = await response.json();

            console.log("Leads data:", data);
            if (data && data.leads) {
                setLeadResults(data.leads);
            }
        } catch (error) {
            console.error("Error fetching leads:", error);
        } finally {
            setIsLeadsLoading(false);
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
                        <div className="flex items-center mb-4">
                            <h2 className="text-xl font-medium">Potential experts at {selectedCompany}</h2>
                            {isLeadsLoading ? (
                                <div className="ml-2 flex items-center">
                                </div>
                            ) : (
                                <Check className="ml-2 text-green-500" size={20} />
                            )}
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
                                            leadResults.map((lead, index) => (
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
                                                            <a
                                                                href={lead.linkedin_url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="bg-blue-600 text-white px-4 py-1 rounded text-center text-xs flex items-center justify-center"
                                                            >
                                                                <span>View Profile</span>
                                                                <ExternalLink size={12} className="ml-1" />
                                                            </a>
                                                            <button
                                                                className="border border-gray-600 text-gray-300 px-4 py-1 rounded text-center text-xs"
                                                            >
                                                                Add to Shortlist
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
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