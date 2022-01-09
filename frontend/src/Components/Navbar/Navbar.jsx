import { faSearch, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <nav className='flex justify-between px-20 py-10 items-center bg-white'>
            <h1 className="text-xl text-gray-800 font-bold">Blitter</h1>
            <div className="flex items-center">
                <div className="flex items-center">
                    <FontAwesomeIcon className='h-5 w-5 pt-0.5 text-gray-600' icon={faSearch} />
                    <input type="text" placeholder="Search..." className="ml-2 outline-none bg-transparent border-0 focus:ring-0" />
                </div>
                <ul className="flex items-center space-x-6">
                    <li className="font-semibold text-gray-700">
                        Home
                    </li>
                    <li className="font-semibold text-gray-700">
                        Last tips
                    </li>
                    <li className="font-semibold text-gray-700">
                        <button className="flex items-center p-4 bg-indigo-200 rounded-lg shadow-xs cursor-pointer hover:bg-indigo-500 hover:text-gray-100">
                            <FontAwesomeIcon icon={faWallet} className="h-6 fill-current hover:text-gray-100"/>
                            <div>
                                <p className="text-xs font-medium ml-2">
                                    Connect
                                </p>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;
