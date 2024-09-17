

export const Input = (props) => {
    const { children, labelText, type, accept, helperText, initialValue, onChange, customStyle } = props;
    return (
        <div>
            <label 
                className="block mb-2 text-sm font-medium text-gray-900" htmlFor={`${type}_input`}
            >
                {labelText}
            </label>
            {
                type === 'file' && (
                    <input 
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 
                                    dark:text-gray-400 focus:outline-none dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400
                                    file:bg-gray-50 file:border-0 file:me-4
                                    file:py-2 file:px-4
                                    dark:file:bg-neutral-700 dark:file:text-neutral-400" 
                        aria-describedby="file_input_help" 
                        id={`${type}_input_help`} 
                        type={type}
                        accept={accept}
                        placeholder="Enter text"
                        onChange={onChange}
                    />
                ) 
            }
            {   
                type === 'text' && (
                    <input 
                        className="py-1 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " 
                        type="text" 
                        defaultValue={initialValue}
                        placeholder="Enter Text"
                        onChange={onChange}
                    />
                )
            }

            {   
                type === 'textarea' && (
                    <textarea 
                        className="py-1 px-2 w-full border border-gray-400 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " 
                        type="text" 
                        defaultValue={initialValue}
                        placeholder="Enter Text"
                        onChange={onChange}
                        style={customStyle}
                    />
                )
            }
            {children}
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id={`${type}_input_help`}>
                {
                    helperText
                }
            </p>
        </div>
    )
}
