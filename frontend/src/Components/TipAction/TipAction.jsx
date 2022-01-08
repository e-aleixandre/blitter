import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate } from "@fortawesome/free-solid-svg-icons";
import InputWithUnits from "../InputWithUnits/InputWithUnits";
import { useState } from "react";

const TipAction = () => {
    const [tipActive, setTipActive] = useState(false);

    return [
        <a key='tip-action-anchor' onClick={() => setTipActive(!tipActive)} className='cursor-pointer no-underline text-black flex px-4 py-2 items-center hover:bg-gray-200'>
            <FontAwesomeIcon className='h-6 w-6 mr-1' icon={faDonate}/>
            <span>Tip</span>
        </a>,
        <InputWithUnits key='tip-action-input' hidden={!tipActive} />
    ];
};

export default TipAction;
