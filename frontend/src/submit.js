// submit.js
import { useState } from 'react';

export const SubmitButton = ({ nodes, edges }) => {
	const [response, setResponse] = useState(null);

	const handleSubmit = async () => {
		// Prepare the data to be sent
		const pipelineData = {
			nodes: nodes,  // Assume nodes is passed from parent as props
			edges: edges   // Assume edges is passed from parent as props
		};

		console.log(pipelineData)
		// try {
		// 	// Send the nodes and edges to the backend
		// 	const res = await fetch('http://localhost:8000/pipelines/parse', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify(pipelineData),
		// 	});

		// 	const result = await res.json();
		// 	setResponse(result);
		// } catch (error) {
		// 	console.error('Error:', error);
		// }
	};
	return (
		<div className="flex items-center justify-center">
			<button 
				className="py-2 px-3 flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
				onClick={handleSubmit}
			>Submit</button>

			{/* Display the response if available */}
			{response && (
				<div className="mt-4">
					<p>Number of Nodes: {response.num_nodes}</p>
					<p>Number of Edges: {response.num_edges}</p>
					<p>Is DAG: {response.is_dag ? 'Yes' : 'No'}</p>
				</div>
			)}
		</div>

		
	);
}
