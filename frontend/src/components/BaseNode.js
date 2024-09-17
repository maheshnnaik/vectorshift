import { Handle } from "reactflow";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useStore } from "reactflow";
export const BaseNode = ({children,id, data}) => {
    const { label, content, handles, onDelete } = data;
    const deleteNode = useStore((state) => {console.log(state); return state.deleteNode});

    return (
        <div className="max-w-[300px] h-[auto] p-2 border-2 rounded-lg">
            <button
                onClick={() => deleteNode(id)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-3 h-3 flex items-center justify-center text-xs"
            >
                <XCircleIcon />
            </button>
            <div>
                <span>{label}</span>
            </div>
            <div>{content}</div>
            {children}
            {handles?.target?.map((handle) => (
                <Handle className="p-1" key={handle.id} type="target" position={handle.position} id={`${id}-${handle.id}`} />
            ))}
            {handles?.source?.map((handle) => (
                <Handle className="p-1" key={handle.id} type="source" position={handle.position} id={`${id}-${handle.id}`} />
            ))}
        </div>
    );
}