export const Alert = ({ position, data, hideAlert }) => {
    // style this component based on position, position will be string - botton-left, bottom
    const positionStyle = position === 'bottom-left' ? 'bottom-0 left-0' : 'bottom-0 right-0';
    const dagMessage = data.is_dag ? 'The graph is a Directed Acyclic Graph (DAG).' : 'The graph is not a Directed Acyclic Graph (DAG).';

    return (
        <div className={`absolute flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 ${positionStyle}`} role="alert" id="alert-1">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">Pipeline Info:</span>
                <ul className="mt-1.5 list-disc list-inside">
                    <li>Number of Nodes: {data.num_nodes}</li>
                    <li>Number of Edges: {data.num_edges}</li>
                    <li>{dagMessage}</li>
                </ul>
            </div>
            <button 
                type="button" 
                class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8" d
                ata-dismiss-target="#alert-1" 
                aria-label="Close"
                onClick={hideAlert}
            >
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    )
}
