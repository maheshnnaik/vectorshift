import { InformationCircleIcon } from "@heroicons/react/16/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";

export const Alert = ({ position, data, hideAlert }) => {
    // style this component based on position, position will be string - botton-left, bottom
    const positionStyle = position === 'bottom-left' ? 'bottom-0 left-0' : 'bottom-0 right-0';
    const dagMessage = data.is_dag ? 'The graph is a Directed Acyclic Graph (DAG).' : 'The graph is not a Directed Acyclic Graph (DAG).';

    return (
        <div className={`absolute flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 ${positionStyle}`} role="alert" id="alert-1">
            <InformationCircleIcon width={20} height={20}/>
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
                <XCircleIcon width={20} height={20}/>
            </button>
        </div>
    )
}
