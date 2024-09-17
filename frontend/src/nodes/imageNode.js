import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode"
import { useState } from "react";
import { Input } from "../components/Input";
import { getHelperText } from "../utils";

export const ImageNode = ({ id, data }) => {
    const [imageName, setImageName] = useState(data?.fileName || "Choose Image");

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageName(file.name); // Set the uploaded file's name in state
        }
    }

    const content = (
        <Input type="file" labelText="Image" accept="image/*" helperText={getHelperText('image')}/>
    )

    const handles = {
        source: [{ position: Position.Right, id: 'value' }]
    }
    return (
        <BaseNode 
            id={id}
            data={{
                label: 'Image',
                content,
                handles
            }}
        />
    )
}