import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiExpress, SiPython, } from "react-icons/si";
import { motion } from "framer-motion";

const techIcons = [
    <FaHtml5 className="text-orange-500" />,
    <FaCss3Alt className="text-blue-500" />,
    <SiJavascript className="text-yellow-400" />,
    <FaReact className="text-cyan-400" />,
    <SiTailwindcss className="text-blue-300" />,
    <FaNodeJs className="text-green-500" />,
    <SiExpress className="text-gray-300" />,
    <SiMongodb className="text-green-600" />,
    <SiPython className="text-red-500" />,
    <FaJava className="text-red-300" />
];



export default function Hero() {
    return (
        <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-12 md:py-24">
            {/* Left Side */}
            <div className="text-center md:text-left max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Hello!</h2>
                <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                    I Am <span className="text-indigo-500">Cosy Osaigbovo</span>
                </h1>
                <p className="text-gray-300 mb-6">
                    I'm a Web Developer with growing experience in front-end technologies.
                    I love building clean UIs, fast websites, and cool projects using React,
                    Tailwind, and more.
                </p>



               <a href="#portfolio">
                <button className="px-6 py-3 border border-indigo-500 rounded-full hover:bg-indigo-600 transition">
                    SEE PORTFOLIO
                </button>
                </a>
            </div>

            {/* Right Side */}
            <div className="w-[300px] h-[300px] mb-10 md:mb-0 md:ml-10">
                <img
                  src="/public/2024_01_07_04_20_IMG_0951.JPG"
                  alt="profile"
                  className="rounded-full w-full h-full object-cover shadow-lg border-4 border-indigo-500"
                />

            </div>

            {/* Infinite Loop Icons */}
            <div className="w-full mt-10 overflow-hidden">
                <motion.div className="flex space-x-10 text-3xl items-center" animate={{ x: [ "100%", "-100%" ] }} transition={{ repeat: Infinity, duration: 5, ease:"linear"}} >
                    {[...techIcons, ...techIcons].map ((icon, idx) => (
                        <div key={idx}>{icon}</div>
                    ))}

                </motion.div>

            </div>

        </section>
    )
}