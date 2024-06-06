import {Edge, Node } from "reactflow";

export const initialNodes= Node= [
    {
        id: "1",
        type: "Send Message",
        data: { label: "Test Message 1" },
        position: { x: 150, y: 5 },
      },
      {
        id: "2",
        // type: 'input',
        data: { label: "Test Message 2" },
        position: { x: 250, y: 80 },
      },
];

export const initialEdeges= Edge= [
    { id: "1-2", source: "1", target: "2" },
];