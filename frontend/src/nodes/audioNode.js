// AudioNode.tsx
import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';
import { Position } from 'reactflow';
import { Input } from '../components/Input';
import { getHelperText } from '../utils';

export const AudioNode = ({ id, data }) => {
  const [audioSrc, setAudioSrc] = useState(data?.audioSrc || '');

  const handleAudioChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAudioSrc(reader.result);
      };
    }
  };

  const content = (
    <Input type="file" labelText="Audio File" accept="audio/*" helperText={getHelperText('audio')}/>
  );

  return (
    <BaseNode
      id={id}
      data={{
        label: 'Audio',
        content,
        handles: { source: [{ position: Position.Right, id: 'audio-output' }] },
      }}
    />
  );
};
