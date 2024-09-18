// submit.js
import { useState } from 'react';
import { useStore } from './store';
import { Alert } from './components/Alert';

export const SubmitButton = () => {
	const [response, setResponse] = useState(null);
	const [showAlert, setShowAlert] = useState(false);

    const store = useStore();

	const hideAlert = () => {
		setShowAlert(false);
	}
	const handleSubmit = async () => {
		// Prepare the data to be sent
		const pipelineData = {
			nodes: store.nodes,
			edges: store.edges
		};

		try {
			// Send the nodes and edges to the backend
			const res = await fetch('http://localhost:8000/pipelines/parse', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(pipelineData),
			});

			const result = await res.json();
			setResponse(result);
			setShowAlert(true);
		} catch (error) {
			console.error('Error:', error);
		}
	};
	return (
		<div className="flex items-center justify-center">
			<button 
				className="py-2 px-3 flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
				onClick={handleSubmit}
			>Submit</button>

			{/* Display the response if available */}
			{
				response && showAlert && (
					<Alert position="bottom-left" data={response} hideAlert={hideAlert}/>
				)
			}
		</div>

		
	);
}
