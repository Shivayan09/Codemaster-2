import React, { useState } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import Navbar from '../components/Navbar';
import LangBox from '../components/LangBox';
import TypingText from '../components/TypingText';
import Modal from '../components/Modal';

import html_icon from '../assets/html.png';
import cpp_icon from '../assets/cpp.png';
import java_icon from '../assets/java.png';
import py_icon from '../assets/py.png';
import js_icon from '../assets/js.png';
import c_icon from '../assets/c.png';
import ts_icon from '../assets/ts.png';
import php_icon from '../assets/php.png';
import sql_icon from '../assets/sql.png';
import go_icon from '../assets/go.png';
import ruby_icon from '../assets/ruby.png';
import swift_icon from '../assets/swift.png';
import kotlin_icon from '../assets/kotlin.png';
import bash_icon from '../assets/bash.png';
import R_icon from '../assets/R.png';
import dart_icon from '../assets/dart.png';
import css_icon from '../assets/css.png';
import matlab_icon from '../assets/matlab.png';

import User from '../components/User';


const Home = () => {

    const [selected, setSelected] = useState(null);
    const [user, setUser] = useState(false);
    function handleUserClick() {
        setUser(prev => !prev)
    }

    const languages = [
        {
            name: 'HTML',
            img: html_icon,
            youtubeId: 'kUMe1FH4CHE',
            docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            description: `HTML (HyperText Markup Language) is the standard language used to create and design documents on the World Wide Web. It structures web pages using elements such as headings, paragraphs, links, images, and other content. 
          HTML works alongside CSS and JavaScript to create interactive and visually appealing websites. It forms the backbone of all web development and is essential for building any web interface or web application.`
        },
        {
            name: 'CSS',
            img: css_icon,
            youtubeId: '1PnVor36_40',
            docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            description: `CSS (Cascading Style Sheets) is a stylesheet language used to control the layout and appearance of HTML documents. It enables developers to apply styles such as colors, fonts, spacing, and positioning to web elements.
          CSS supports responsive design, animations, and transitions, allowing websites to look great on all devices. It's an essential tool for web designers and developers seeking to build modern, user-friendly web interfaces.`
        },
        {
            name: 'JavaScript',
            img: js_icon,
            youtubeId: 'PkZNo7MFNFg',
            docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            description: `JavaScript is a high-level, dynamic programming language primarily used for enhancing interactivity on websites. It enables features like sliders, forms, modals, animations, and complex single-page applications.
          Alongside HTML and CSS, JavaScript forms the core of front-end development. With the rise of Node.js, it's also widely used on the server side, making it a versatile and essential language for full-stack development.`
        },
        {
            name: 'Java',
            img: java_icon,
            youtubeId: 'grEKMHGYyns',
            docsUrl: 'https://docs.oracle.com/en/java/',
            description: `Java is a robust, object-oriented programming language widely used for enterprise software, Android apps, and backend development. Known for its portability, Java applications can run on any platform that supports the Java Virtual Machine (JVM).
          Its features include strong memory management, multithreading, and extensive libraries, making it suitable for building scalable, secure, and reliable applications across different industries.`
        },
        {
            name: 'C++',
            img: cpp_icon,
            youtubeId: 'vLnPwxZdW4Y',
            docsUrl: 'https://en.cppreference.com/w/',
            description: `C++ is a powerful, compiled language that extends the C programming language with object-oriented features. It is used in system software, game engines, embedded systems, and high-performance applications.
          With fine-grained control over hardware and memory, C++ enables the creation of efficient, low-latency applications. It is considered a foundational language for learning systems programming and performance optimization.`
        },
        {
            name: 'C',
            img: c_icon,
            youtubeId: 'KJgsSFOSQv0',
            docsUrl: 'https://en.cppreference.com/w/c',
            description: `C is a foundational programming language known for its efficiency and performance. It is often used in operating systems, embedded systems, and performance-critical applications due to its low-level capabilities.
          C provides direct access to memory and hardware, allowing precise control over system resources. It forms the basis for many modern languages, including C++, and remains widely taught for its importance in computer science.`
        },
        {
            name: 'TypeScript',
            img: ts_icon,
            youtubeId: 'BCg4U1FzODs',
            docsUrl: 'https://www.typescriptlang.org/docs/',
            description: `TypeScript is a statically typed superset of JavaScript that adds optional type annotations and powerful tooling support. It helps developers catch errors early and write more maintainable code.
          TypeScript is commonly used in large-scale web applications and is the language of choice for many modern frameworks like Angular. It compiles to plain JavaScript, making it compatible with all browsers.`
        },
        {
            name: 'PHP',
            img: php_icon,
            youtubeId: 'OK_JCtrrv-c',
            docsUrl: 'https://www.php.net/docs.php',
            description: `PHP is a server-side scripting language widely used for web development and dynamic website creation. It integrates seamlessly with databases like MySQL to deliver interactive web pages.
          Known for its simplicity and flexibility, PHP powers many popular platforms including WordPress, Drupal, and Joomla. Despite newer alternatives, it remains a go-to choice for backend web development.`
        },
        {
            name: 'SQL',
            img: sql_icon,
            youtubeId: 'HXV3zeQKqGY',
            docsUrl: 'https://www.w3schools.com/sql/',
            description: `SQL (Structured Query Language) is used to manage and manipulate relational databases. It enables users to retrieve, insert, update, and delete data efficiently using structured queries.
          SQL is essential for data-driven applications and is supported by major database systems like MySQL, PostgreSQL, SQL Server, and SQLite. Mastering SQL is crucial for backend developers and data analysts alike.`
        },
        {
            name: 'Go',
            img: go_icon,
            youtubeId: 'yyUHQIec83I',
            docsUrl: 'https://pkg.go.dev/std',
            description: `Go, also known as Golang, is an open-source programming language developed at Google. It is designed for building scalable and performant software with simple syntax and strong concurrency support.
          Go is popular in cloud-native development, microservices, and systems programming. Its built-in tools and efficient compilation make it a favorite for building reliable and fast software.`
        },
        {
            name: 'Ruby',
            img: ruby_icon,
            youtubeId: 't_ispmWmdjY',
            docsUrl: 'https://www.ruby-lang.org/en/documentation/',
            description: `Ruby is a dynamic, object-oriented programming language focused on simplicity and productivity. It is best known for the Ruby on Rails framework, which enables rapid web application development.
          Ruby emphasizes human-readable syntax and developer happiness. It's commonly used in startups, automation scripts, and elegant web apps that need to be built quickly.`
        },
        {
            name: 'Swift',
            img: swift_icon,
            youtubeId: 'Ulp1Kimblg0',
            docsUrl: 'https://developer.apple.com/documentation/swift',
            description: `Swift is Apple's modern programming language for developing iOS, macOS, watchOS, and tvOS applications. It features a clean and concise syntax, strong typing, and safety-oriented design.
          Swift is open-source and fast, making it a powerful choice for both mobile and desktop app development. It continues to grow in popularity among Apple developers and is replacing Objective-C in many areas.`
        },
        {
            name: 'Kotlin',
            img: kotlin_icon,
            youtubeId: 'F9UC9DY-vIU',
            docsUrl: 'https://kotlinlang.org/docs/home.html',
            description: `Kotlin is a statically typed programming language developed by JetBrains, officially supported by Google for Android development. It is fully interoperable with Java and introduces modern features like null safety and extension functions.
          Kotlin improves code readability, reduces boilerplate, and enhances productivity. It is widely used in Android apps and increasingly in server-side and multi-platform projects.`
        },
        {
            name: 'Bash',
            img: bash_icon,
            youtubeId: 'v-F3YLd6oMw',
            docsUrl: 'https://www.gnu.org/software/bash/manual/',
            description: `Bash (Bourne Again SHell) is a Unix shell and command language widely used for scripting and automating tasks in Linux and macOS environments. It provides powerful tools for file manipulation, program execution, and text processing.
          Bash scripts are often used by system administrators and DevOps engineers to automate repetitive processes and manage system operations effectively.`
        },
        {
            name: 'R',
            img: R_icon,
            youtubeId: 'f2OYf49MLjA',
            docsUrl: 'https://cran.r-project.org/manuals.html',
            description: `R is a programming language and software environment primarily used for statistical computing and data visualization. It provides extensive libraries for data analysis, machine learning, and graphing.
          R is popular among statisticians, data scientists, and researchers. Its rich ecosystem and powerful plotting capabilities make it a top choice for academic and scientific computing.`
        },
        {
            name: 'Dart',
            img: dart_icon,
            youtubeId: 'Ej_Pcr4uC2Q',
            docsUrl: 'https://dart.dev/guides',
            description: `Dart is a client-optimized language developed by Google, known for its use with the Flutter framework for building natively compiled apps. It offers a smooth learning curve and hot reload feature for rapid development.
          Dart supports both object-oriented and functional programming paradigms, making it versatile for web, desktop, and mobile apps across platforms.`
        },
        {
            name: 'Python',
            img: py_icon,
            youtubeId: 'rfscVS0vtbw',
            docsUrl: 'https://docs.python.org/3/',
            description: `Python is a versatile, high-level language known for its readability and simplicity. It is used in a wide range of domains including web development, data science, automation, artificial intelligence, and more.
          Python's large ecosystem of libraries and frameworks, such as Django, NumPy, and TensorFlow, makes it a go-to language for both beginners and professionals.`
        },
        {
            name: 'Matlab',
            img: matlab_icon,
            youtubeId: 'xBErxSeO3UQ',
            docsUrl: 'https://www.mathworks.com/help/matlab/',
            description: `MATLAB is a proprietary programming language and environment developed by MathWorks, widely used for numerical computing, data analysis, and engineering simulations. It excels at matrix operations and visualizing complex data.
          Engineers and researchers use MATLAB for algorithm development, control systems, and signal/image processing. Its built-in toolboxes cater to various scientific and industrial applications.`
        }
    ];
    return (
        <div>
            <Navbar onUserClick={handleUserClick}/>
            {user ? <User /> : null}
            <div className='body p-10 mb-5 md:mb-0'>
                <div className="header flex justify-center"><TypingText /></div>
                <div className="boxes flex flex-wrap gap-5 md:gap-10 md:pl-20 md:pr-20 mt-5 md:mt-10 justify-center">
                    {languages.map((lang, idx) => (
                        <div key={idx} className="box h-20 w-20 md:h-30 md:w-30 flex justify-center items-center">
                            <LangBox img={lang.img} onClick={() => setSelected(lang)} />
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                show={!!selected}
                title={selected?.name}
                description={selected?.description}
                docsUrl={selected?.docsUrl}
                youtubeId={selected?.youtubeId}
                onClose={() => setSelected(null)}
            />
        </div>
    )
}

export default Home
