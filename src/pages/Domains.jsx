import React, { useState } from 'react';
import expand_icon from '../assets/expand.png';
import webdev_roadmap_icon from '../assets/webdevRoadmap.png';
import mobile_roadmap_icon from '../assets/mobiledevRoadmap.png';
import dsai_roadmap_icon from '../assets/dsaiRoadmap.png';
import devOps_roadmap_icon from '../assets/devOpsRoadmap.png';
import cyber_roadmap_icon from '../assets/cybersecRoadmap.png';
import game_roadmap_icon from '../assets/gamedevRoadmap.png';
import dsa_roadmap_icon from '../assets/dsaRoadmap.png';
import oops_roadmap_icon from '../assets/oopsRoadmap.png';
import version_roadmap_icon from '../assets/versionRoadmap.png';
import sql_roadmap_icon from '../assets/sqlRoadmap.png';
import os_roadmap_icon from '../assets/osRoadmap.png';
import cn_roadmap_icon from '../assets/networkingRoadmap.png';
import Modal2 from '../components/Modal2';

const Domains = () => {
    const [expandedName, setExpandedName] = useState(null); // for description toggle
    const [selected, setSelected] = useState(null); // for Modal2

    const softwareDomains = [
        {
            name: 'Web Development',
            description:
                'Web Development refers to the creation of websites and web applications that run in a browser. It involves structuring content using HTML, styling with CSS, and adding interactivity through JavaScript. ' +
                'Modern tools like React, Vue, and Angular are commonly used, along with backend technologies like Node.js or Python. Deployment, APIs, and responsive design are key components of full-stack development.',
            roadmap: webdev_roadmap_icon,
            docsUrl: 'https://developer.mozilla.org/en-US/docs/Learn',
            youtubeId: 'Vi9bxu-M-ag'
        },
        {
            name: 'Mobile App Development',
            description:
                'Mobile App Development involves building applications that run on Android and iOS devices. Developers use technologies like Kotlin for Android, Swift for iOS, or cross-platform frameworks like Flutter and React Native. ' +
                'It includes designing intuitive interfaces, accessing device hardware, and publishing apps to Google Play or the App Store.',
            roadmap: mobile_roadmap_icon,
            docsUrl: 'https://developer.android.com/kotlin',
            youtubeId: '3kaGC_DrUnw'
        },
        {
            name: 'Data Science and ML',
            description:
                'Data Science focuses on extracting insights from structured and unstructured data using statistical and computational methods. Machine Learning (ML) is used to build predictive models using tools like Python, pandas, scikit-learn, and TensorFlow. ' +
                'It is widely applied in recommendation systems, fraud detection, and AI applications.',
            roadmap: dsai_roadmap_icon,
            docsUrl: 'https://scikit-learn.org/stable/',
            youtubeId: 'gDZ6czwuQ18'
        },
        {
            name: 'Cloud Computing and DevOps',
            description:
                'Cloud Computing enables scalable computing resources through platforms like AWS, Azure, and Google Cloud. DevOps practices like CI/CD, automation, and infrastructure as code improve software delivery and operations. ' +
                'Tools such as Docker, Kubernetes, Jenkins, and Terraform are commonly used for efficient deployment and scalability.',
            roadmap: devOps_roadmap_icon,
            docsUrl: 'https://aws.amazon.com/what-is-cloud-computing/',
            youtubeId: 'dmGybCohHsw'
        },
        {
            name: 'Cybersecurity',
            description:
                'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. It includes securing data, preventing breaches, ethical hacking, penetration testing, and monitoring for threats. ' +
                'Professionals use firewalls, encryption, antivirus software, and SIEM tools to maintain system integrity and privacy.',
            roadmap: cyber_roadmap_icon,
            docsUrl: 'https://www.cybrary.it/catalog/cyber-security/',
            youtubeId: 'lpa8uy4DyMo'
        },
        {
            name: 'Game Development',
            description:
                'Game Development involves designing, building, and programming interactive games for consoles, PCs, and mobile devices. Developers use engines like Unity and Unreal with programming languages like C# or C++. ' +
                'It covers gameplay mechanics, graphics rendering, audio design, and real-time performance optimization.',
            roadmap: game_roadmap_icon,
            docsUrl: 'https://learn.unity.com/',
            youtubeId: 'AmGSEH7QcDg'
        }
    ];

    const fundamentalSkills = [
        {
            name: 'Data Structures and Algorithms',
            description:
                'Data Structures and Algorithms are essential for solving complex problems efficiently in software development. They include arrays, linked lists, stacks, queues, trees, and graphs, along with sorting, searching, and recursion. ' +
                'Mastering them helps in optimizing time and space complexity in coding interviews and real-world systems.',
            youtubeId: '8hly31xKli0',
            docsUrl: 'https://www.geeksforgeeks.org/data-structures/',
            roadmap: dsa_roadmap_icon
        },
        {
            name: 'Object Oriented Programming',
            description:
                'Object Oriented Programming (OOP) is a paradigm centered around objects and classes. It uses key concepts like encapsulation, inheritance, polymorphism, and abstraction to structure complex software into reusable components. ' +
                'Languages like Java, C++, Python, and C# widely support OOP for scalable and maintainable development.',
            youtubeId: 'pTB0EiLXUC8',
            docsUrl: 'https://www.programiz.com/oop',
            roadmap: oops_roadmap_icon
        },
        {
            name: 'Version Control',
            description:
                'Version Control allows developers to manage changes to codebases, collaborate efficiently, and track project history. Git is the most widely used version control system, and GitHub offers cloud-based repositories for teams. ' +
                'Developers can branch, merge, resolve conflicts, and roll back code using Git commands.',
            youtubeId: 'RGOj5yH7evk',
            docsUrl: 'https://git-scm.com/docs',
            roadmap: version_roadmap_icon
        },
        {
            name: 'Database Management & SQL',
            description:
                'Database Management involves storing, retrieving, and manipulating data using systems like MySQL, PostgreSQL, and MongoDB. SQL (Structured Query Language) is used to write queries to access and modify data. ' +
                'Understanding normalization, indexing, and transactions is key to designing efficient and scalable databases.',
            youtubeId: 'HXV3zeQKqGY',
            docsUrl: 'https://www.w3schools.com/sql/',
            roadmap: sql_roadmap_icon
        },
        {
            name: 'Operating Systems & CL',
            description:
                'Operating Systems manage hardware and software resources, including memory, processes, and I/O systems. Understanding OS concepts helps in building efficient applications and troubleshooting issues. ' +
                'Command Line (CL) skills in Unix/Linux are essential for file navigation, scripting, and automation.',
            youtubeId: '26QPDBe-NB8',
            docsUrl: 'https://linuxcommand.org/',
            roadmap: os_roadmap_icon
        },
        {
            name: 'Networking Fundamentals',
            description:
                'Networking Fundamentals cover how data is transmitted between devices over the internet or local networks. Concepts like IP addressing, DNS, TCP/IP, firewalls, and HTTP are essential to understand how systems communicate. ' +
                'This knowledge is crucial for web developers, cybersecurity professionals, and DevOps engineers.',
            youtubeId: 'qiQR5rTSshw',
            docsUrl: 'https://www.cloudflare.com/learning/network-layer/what-is-a-computer-network/',
            roadmap: cn_roadmap_icon
        }
    ];

    const handleBoxClick = (name) => {
        setExpandedName(prev => (prev === name ? null : name));
    };

    return (
        <div>
            <div className=' flex flex-col md:flex-row justify-evenly items-center'>
                <div className="domain1 h-full w-[90%] md:w-[40%] p-2">
                    <div className="header p-5 h-[10vh] flex items-center justify-center">
                        <p className='uppercase text-[1.2rem] md:text-[1.4rem] font-bold text-slate-300 text-center'>
                            Popular Software Domains
                        </p>
                    </div>
                    <div className="boxes h-[90vh] flex flex-col items-center justify-center gap-5 pr-2">
                        {softwareDomains.map((domain, idx) => (
                            <div
                                key={idx}
                                className="box w-[90%] p-4 bg-stone-900  shadow-stone-300 shadow-xs hover:bg-stone-800 transition"
                            >
                                <div
                                    className='flex justify-between items-center cursor-pointer'
                                    onClick={() => handleBoxClick(domain.name)}
                                >
                                    <p className='text-[1.1rem] font-semibold text-white'>{domain.name}</p>
                                    <img
                                        src={expand_icon}
                                        alt="expand"
                                        className='h-6 w-6'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelected(domain);
                                        }}
                                    />
                                </div>
                                {expandedName === domain.name && (
                                    <p className="text-sm mt-2 text-gray-500">{domain.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="domain2 h-full w-[90%] md:w-[40%] p-2">
                    <div className="header p-5 h-[10vh] flex items-center justify-center">
                        <p className='uppercase text-[1.2rem] md:text-[1.4rem] font-bold text-slate-300 text-center'>
                            Fundamental Skills
                        </p>
                    </div>
                    <div className="boxes h-[90vh] flex flex-col items-center justify-center gap-5 pr-2">
                        {fundamentalSkills.map((skill, idx) => (
                            <div
                                key={idx}
                                className="box w-[90%] p-4 bg-stone-900 shadow-stone-300 shadow-xs hover:bg-stone-800 transition"
                            >
                                <div
                                    className='flex justify-between items-center cursor-pointer'
                                    onClick={() => handleBoxClick(skill.name)}
                                >
                                    <p className='text-[1.1rem] font-semibold text-white'>{skill.name}</p>
                                    <img
                                        src={expand_icon}
                                        alt="expand"
                                        className='h-6 w-6'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelected(skill);
                                        }}
                                    />
                                </div>
                                {expandedName === skill.name && (
                                    <p className="text-sm mt-2 text-slate-400">{skill.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal2 */}
                <Modal2
                    show={!!selected}
                    title={selected?.name}
                    description={selected?.description}
                    docsUrl={selected?.docsUrl}
                    roadmap={selected?.roadmap}
                    youtubeId={selected?.youtubeId}
                    onClose={() => setSelected(null)}
                />
            </div>
        </div>
    );
};

export default Domains;
