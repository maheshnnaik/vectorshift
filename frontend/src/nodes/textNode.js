// textNode.js

import { useEffect, useRef, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { Input } from '../components/Input';

export const TextNode = ({ id, data }) => {
	const [currText, setCurrText] = useState(data?.text || '{{input}}');
	const [variables, setVariables] = useState([]);
	const [textareaHeight, setTextareaHeight] = useState('auto'); // Default height
	const textAreaRef = useRef(null)

	const maxHeight = 100; // Maximum height of the textarea
	// Regex to find variables within double curly braces, variables are surrounded by {{ }} and contain only letters, numbers, and underscores
	const variableRegex = /{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g;

	const extractVariables = (text) => {
		const matches = Array.from(text.matchAll(variableRegex));
		return matches.map((match) => match[1]); // Extract variables
	};
	// Highlight variables in the text
	// const highlightVariables = (text) => {
	// 	return text.replace(variableRegex, (match, variable) => {
	// 	return `<span class="bg-white-200 text-blue-200 font-bold">{{${variable}}}</span>`;
	// 	});
	// };
	// Adjust the textarea height dynamically based on content
	const adjustTextareaHeight = () => {
		const textarea = textAreaRef.current;
		if (textarea) {
		  textarea.style.height = 'auto';
		  const newHeight = Math.min(textarea.scrollHeight, maxHeight); // Set height to content's height or maxHeight
		  setTextareaHeight(newHeight);
		  textarea.style.height = `${newHeight}px`; // Apply new height
		}
	};
	// Update variables when the text input changes
	useEffect(() => {
		const newVariables = extractVariables(currText);
		setVariables(newVariables);
	}, [currText]);

	// Adjust textarea height on text change
	useEffect(() => {
		adjustTextareaHeight();
	}, [currText]);

	const handleTextChange = (e) => {
		setCurrText(e.target.value);
	};

	const content = (
		<Input labelText="Text">
			{/* <div
				className="absolute w-full h-full pointer-events-none whitespace-pre-wrap break-all"
				style={{
					height: textareaHeight,
					color: 'transparent', // Hide actual text color to allow proper rendering
					zIndex: 1,
					overflowY: 'hidden',
				}}
				dangerouslySetInnerHTML={{
					__html: highlightVariables(currText),
				}}
			/> */}
            <textarea 
                className="py-1 px-2 w-full border border-gray-400 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " 
                ref={textAreaRef}
                defaultValue={currText}
                placeholder="Enter Text"
                onChange={handleTextChange}
				style={{
					resize: "none",
					height: textareaHeight,
					overflowY: textareaHeight === maxHeight ? 'scroll' : 'hidden', // Enable vertical scrolling if content exceeds maxHeight
				}}
            />
		</Input>
	)

	const handles = {
		source: [{ position: Position.Right, id: 'output' }]
	}
	return (
		<BaseNode
			id={id}
			data={{
				label: 'Text',
				content,
				handles
			}}
		>
			{variables.map((variable, index) => (
				<Handle
					key={variable}
					className="p-1"
					type="target"
					position={Position.Left}
					id={`${id}-${variable}`}
					style={{ top: `${((index + 1) / (variables.length + 1)) * 100}%` }}  // Dynamically position the handles
				>
					<label className='absolute right-[8px] text-xs text-gray-500'>{variable}</label>
				</Handle>
			))}
		</BaseNode>
	);
}
