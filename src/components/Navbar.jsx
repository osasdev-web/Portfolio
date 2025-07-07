export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-[#0f172a] flex justify-between items-center px-8 py-6 bg-opacity-90 backdrop-blur-sm">
            <h1 className="text-2xl font-bold">Cosy</h1>
            <ul className="hidden md:flex space-x-6 text-sm font-medium">
                {["Home", "About", "Portfolio", "Contact"].map(item => (
                    <li key={item}>
                        <a href={`#${item.toLowerCase()}`} className="hover:text-indigo-400 cursor-pointer">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};