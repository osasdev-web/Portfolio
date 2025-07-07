import { delay, motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="px-8 md:px-20 py-20 bg-[#1e293b] text-white">
            <motion.dev initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-6 text-center md:text-left">About Me</h2>
                <p className="text-gray-300 max-w-4xl leading-relaxed mb-10">
                    My name is <span className="text-indigo-400 font-semibold">Cosy Osaigbovo</span>. I'm a 23-year-old passionate student and self-taught
                    software developer. I began my journey just a year ago, but in that time, I've built a solid foundation
                    in web development and have created multiple meaningful projects using modern tools.
                </p>
            </motion.dev>

            {/* Skills and journey cards */}
            <div className="grid md:grid-cols-2 gap-10">
                {/* Skills Card 1 */}
                <motion.dev
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ twice: true }}
                className="bg-[#0f172a] p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                    <h3 className="text-xl font-semibold text-indigo-400 mb-2">🧠 My Skills & Tools</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>HTML, CSS, JavaScript (ES6+) </li>
                        <li>React.js & Taileind CSS </li>
                        <li>Node.js & Express </li>
                        <li>MongoDB (basics) </li>
                        <li>Git, GitHub, and version control </li>
                        <li>Responsive & Mobile-First Design </li>
                    </ul>
                </motion.dev>

                {/* Journey Card 2 */}
                <motion.dev
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ twice: true }}
                className="bg-[#0f172a] p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                    <h3 className="text-xl font-semibold text-indigo-400 mb-2">📈 My Developer Journey</h3>
                    <p className="text-gray-300 leading-relaxed">
                        I started learning web development in 2024. Since then, I've built several projects like:
                        a space exploration app, a crypto wallet & exchange platform, and a global weather app.
                        I'm currently focused on sharpening my backend skills, and I'm aiming to become a full-stack developer.
                        <br /><br />
                        My goal is to work on impactful projects that help people and solve real problems.
                    </p>
                </motion.dev>
            </div>

            {/* Quote */}
            <motion.dev
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            viewport={{ twice: true }}
            className="mt-16"
            >
                <blockquote className="italic text-gray-400 mb-4">
                    "The best way to predict the future is to invent it."
                </blockquote>

                <a href="#" download className="inline-block px-6 py-3 mt-4 border border-indigo-500 rounded-full text-indigo-400 hover:bg-indigo-600 hover:text-white transition">
                    Download Resume
                </a>

            </motion.dev>
        </section>
    );
};