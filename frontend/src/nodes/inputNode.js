// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { Input } from '../components/Input';
import { Select } from '../components/Select';

export const InputNode = ({ id, data }) => {
	const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
	const [inputType, setInputType] = useState(data.inputType || 'Text');

	const handleNameChange = (e) => {
		setCurrName(e.target.value);
	};

	const handleTypeChange = (e) => {
		setInputType(e.target.value);
	};

	const content = (
		<>
			<Input type="text" labelText="Input Name"/>

			<label>
				Type:
				<Select initialValue={inputType} selectOptions={['Text', 'File']} onChange={handleTypeChange}/>
			</label>
		</>
	)

	const handles = { source: [{ position: Position.Right, id: 'value' }] }
				 
	return (
		<BaseNode
			id={id}
			data={{
				label: 'Input',
				content,
				handles
			}}
		/>
	);
}
