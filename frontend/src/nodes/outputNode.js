// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { Input } from '../components/Input';
import { Select } from '../components/Select';

export const OutputNode = ({ id, data }) => {
	const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
	const [outputType, setOutputType] = useState(data.outputType || 'Text');

	const handleNameChange = (e) => {
		setCurrName(e.target.value);
	};

	const handleTypeChange = (e) => {
		setOutputType(e.target.value);
	};

	const content = (
		<div>
			<Input type="text" labelText="Name" initialValue={currName} onChange={handleNameChange}/>

			<label>
				Type:
				<Select initialValue={outputType} selectOptions={['Text', 'Image']} onChange={handleTypeChange}/>
			</label>
		</div>
	)

	const handles = {
		target: [{ position: Position.Left, id: 'value' }]
	}

	return (
		<BaseNode
			id={id}
			data={{
				label: 'Output',
				content,
				handles
			}}
		/>
	);
}
