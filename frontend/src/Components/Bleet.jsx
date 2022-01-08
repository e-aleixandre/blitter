import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { shortAddress } from "../Helpers";
import Avatar from "./Avatar/Avatar";
import TipAction from "./TipAction/TipAction";


const Bleet = (props) => {
    return (
        <div className='flex pt-4 px-4'>
            <Avatar address={props.address} />
            <div className="px-2 pt-2 flex-grow">
            <header>
                <a href="" className="no-underline">
                <span className="font-medium">{shortAddress(props.bleet.address)}</span>
                <span className="ml-2 font-normal text-gray-400">@{ props.bleet.username }</span>
                </a>
                <div className="text-xs text-gray-400 flex items-center my-1">
                <FontAwesomeIcon className="h-4 w-4 mr-1" icon={faCalendarAlt}/>
                <span>{ props.bleet.createdAt }</span>
                </div>
            </header>
            <article className='py-4 text-gray-900'>
                {props.bleet.content}
            </article>
            <footer className="border-t border-gray-200 text-sm flex items-center">
                <TipAction/>
            </footer>
            </div>
        </div>
    );
}

export default Bleet;