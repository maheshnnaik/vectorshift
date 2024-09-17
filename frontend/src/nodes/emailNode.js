// HTMLContentNode.tsx
import { BaseNode } from '../components/BaseNode';
import { Position } from 'reactflow';

export const EmailNode = ({ id, data }) => {


  const content = (
    <button className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'>
      Sign In with Email
    </button>
  );

  const handles = { source: [{ position: Position.Right, id: 'html-output' }] };

  return (
    <BaseNode
      id={id}
      data={{
        label: 'Email',
        content,
        handles,
      }}
    />
  );
};
