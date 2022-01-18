import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { BlitterContext } from "../../Context/BlitterContext";
import ConnectAccount from "../ConnectAccount/ConnectAccount";

const Navbar = () => {

    const { currentAccount } = useContext(BlitterContext);

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
                        <ConnectAccount />
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;
