import { faWallet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { BlitterContext } from "../../Context/BlitterContext"

const ConnectAccount = () => {

    const { connectWallet, postBleet } = useContext(BlitterContext);

    return (
        <button onClick={() => connectWallet()} className="flex items-center p-4 bg-indigo-200 rounded-lg shadow-xs cursor-pointer hover:bg-indigo-500 hover:text-gray-100">
            <FontAwesomeIcon icon={faWallet} className="h-6 fill-current hover:text-gray-100"/>
            <div>
                <p className="text-xs font-medium ml-2">
                    Connect
                </p>
            </div>
        </button>
    )
}

export default ConnectAccount;
