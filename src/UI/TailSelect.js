
export default function TailSelect({items,rf,handleChange,init}) {
    const options = items.map((op,idx)=><option key={`op${idx}`} value={op}>{op}</option>);
    return (
        <select ref={rf} onChange={handleChange} 
                // defaultValue={init}
                className="m-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-200 focus:border-lime-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-200 dark:focus:border-lime-200">
                    <option value="">{init}</option>
                    {options}
        </select>
    )
}
