// toolbar.js

import { DraggableNode } from './draggableNode';
import { DocumentPlusIcon, DocumentTextIcon, EnvelopeIcon, FolderIcon, PhotoIcon, SpeakerWaveIcon, VideoCameraIcon } from '@heroicons/react/24/solid';

export const PipelineToolbar = () => {

	return (
		<div style={{ padding: '10px' }}>
			<div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
				<DraggableNode type='customInput' label='Input' />
				<DraggableNode type='llm' label='LLM' />
				<DraggableNode type='customOutput' label='Output' icon={<DocumentPlusIcon width={24} />}/>
				<DraggableNode type='text' label='Text' icon={<DocumentTextIcon width={24} />}/>
				<DraggableNode type='file' label='File' icon={<FolderIcon width={24} />}/>
				<DraggableNode type='image' label='Image' icon={<PhotoIcon width={24} />}/>
				<DraggableNode type='audio' label='Audio'  icon={<SpeakerWaveIcon width={24} />}/>
				<DraggableNode type='video' label='Video' icon={<VideoCameraIcon width={24} />}/>
				<DraggableNode type='email' label='EMAIL' icon={<EnvelopeIcon width={24} />}/>
			</div>
		</div>
	);
};
