// submit.js

export const SubmitButton = () => {

	return (
		<div className="flex items-center justify-center">
			<button 
				className="py-2 px-3 flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
				type="submit"
			>Submit</button>
		</div>
	);
}
