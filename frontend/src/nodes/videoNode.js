// VideoNode.tsx
import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';
import { Position } from 'reactflow';
import { Input } from '../components/Input';
import { getHelperText } from '../utils';

export const VideoNode = ({ id, data }) => {
  const [videoSrc, setVideoSrc] = useState(data?.videoSrc || '');

  const handleVideoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setVideoSrc(reader.result);
        // if (data.onVideoUpload) {
        //   data.onVideoUpload(reader.result, file);
        // }
      };
    }
  };

  const content = (
    <Input type="file" labelText="Video File" accept="video/*" helperText={getHelperText('video')} onChange={handleVideoChange} />
    // <>
    //   <label>
    //     <input type="file" accept="video/*" onChange={handleVideoChange} />
    //   </label>
    //   {/* {videoSrc && <video controls src={videoSrc} style={{ width: '100%' }} />} */}
    // </>
  );

  const handles = { source: [{ position: Position.Right, id: 'video-output' }] }
  return (
    <BaseNode
      id={id}
      data={{
        label: 'Video Upload',
        content,
        handles,
      }}
    />
  );
};
