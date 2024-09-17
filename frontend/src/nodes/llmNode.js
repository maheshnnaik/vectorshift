// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const LLMNode = ({ id, data }) => {

	const content = (
		<span>This is a LLM.</span>
	)

	const handles = {
		source: [
			{ position: Position.Right, id: 'response' }
		],
		target: [
			{ position: Position.Left, id: 'system', style: { top: `${100 / 3}%` } },
			{ position: Position.Left, id: 'prompt', style: { top: `${200 / 3}%` } }
		]
	}
	return (
		<BaseNode
			id={id}
			data={{
				label: 'LLM',
				content,
				handles
			}}
		/>
	);
}
