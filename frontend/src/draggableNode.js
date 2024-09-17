// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
	const onDragStart = (event, nodeType) => {
		const appData = { nodeType }
		event.target.style.cursor = 'grabbing';
		event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
		event.dataTransfer.effectAllowed = 'move';
	};

	return (
		<div
			className={`${type} flex flex-col h-[60px] min-w-[80px] items-center justify-center rounded-lg cursor-grab bg-[#408586] gap-x-2`}
			onDragStart={(event) => onDragStart(event, type)}
			onDragEnd={(event) => (event.target.style.cursor = 'grab')}
			draggable
		>
			{icon}
			<span style={{ color: '#fff' }}>{label}</span>
		</div>
	);
};
