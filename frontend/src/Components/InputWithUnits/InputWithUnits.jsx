const InputWithUnits = (props) => {
    return (
        <div hidden={props.hidden} className="relative rounded-md shadow-sm">
            <input type="text" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" />
            <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="unit" className="sr-only">
                    Unit
                </label>
                <select name="unit" id="unit" className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                    <option>Wei</option>
                    <option>Gwei</option>
                    <option>Ether</option>
                </select>
                <button className='px-4 uppercase border-t border-b border-r h-full rounded-r-md bg-blue-200 hover:bg-blue-400'>Tip</button>
            </div>
        </div>
    );
}

export default InputWithUnits;
