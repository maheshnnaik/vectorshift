export const Select = (props) => {
    const { initialValue, selectOptions, onChange } = props;
    return (
        <select 
            className="py-1 pe-9 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            value={initialValue}
            onChange={onChange}
        >
            {
                selectOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))
            }
        </select>
    )
}