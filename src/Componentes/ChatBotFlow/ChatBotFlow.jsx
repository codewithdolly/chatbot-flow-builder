import { useCallback } from 'react';
import ReactFlow, { Controls, Background, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';


const initialNodes = [
    {
        id: "1",
        type: "input",
        data: { label: "Test Message 1" },
        position: { x: 40, y: 40 },
      },
      {
        id: "2",
        // type: "input",
        data: { label: "Test Message 2" },
        position: { x: 150, y: 150 },
      },
      {
        id: "3",
        // type: "input",
        data: { label: "Test Message 3" },
        position: { x: 400, y: 250 },
      },
      {id: "4",
      // type: "input",
      data: { label: "Test Message 4" },
      position: { x: 300, y: 20 },
    },
];

const initialEdeges = [{ id: '1-2', source: '1', target: '2' },
{ id: '2-3', source: '2', target: '3', animated: 'true' }
];

function ChatBotFlow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdeges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        []
      );

  return (
    <div style={{ height: '100%' }}>
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default ChatBotFlow;
