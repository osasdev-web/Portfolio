
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";


function Contact() {
    return (
        <section id="contact" className="px-8 md:px-20 py-20 bg-[#1e293b] text-white">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-300 mb-6">
                Feel free to connect with me on social platform or send a message.
            </p>

            {/* Contact form or info */}
            <div className="flex flex-col md:flex-row gap-8">
                <div>
                    <p>Email: <a href="mailto:osaso7143@gmail.com" className="text-indigo-400">osaso7143@gmail.com</a></p>
                    <p>GitHub: <a href="https://github.com/osasdev-web" className="text-indigo-400">osasdev-web</a></p>
                    <p>WhatsApp: <a href="https://wa.me/+234 9017500023" className="text-indigo-400">Chat Me</a></p>
                </div>

                {/* Social icons */}
                <div className="flex space-x-6 text-2xl mt-4">
                    <a href="https://github.com/osasdev-web" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-in" />
                    </a>
                    <a href="mailto:osaso7143@gmail.com">
                        <FaEnvelope className="hover:text-indigo-500" />
                    </a>
                    <a href="https://wa.me/+2349017500023" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="hover:text-indigo-500" />
                    </a>
                </div>
            </div>
        </section>

    );
};

export default Contact;