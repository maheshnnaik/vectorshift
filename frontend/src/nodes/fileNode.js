import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode"
import { useState } from "react";
import { Input } from "../components/Input";
import { getHelperText } from "../utils";

export const FileNode = ({id, data}) => {

    const [fileName, setFileName] = useState(data?.fileName || "Choose File");

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name); // Set the uploaded file's name in state
        }
    };

    const content = (
        <Input type="file" labelText="File" helperText={getHelperText('file')}/>
    )

    const handles = {
        source: [{ position: Position.Right, id: 'value' }]
    }
    return (
        <BaseNode 
            id={id}
            data={{
                label: 'File',
                content,
                handles
            }}
        />
    )
}