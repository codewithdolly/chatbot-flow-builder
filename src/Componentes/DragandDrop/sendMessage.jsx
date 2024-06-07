import React from "react";
import { Handle, Position } from "reactflow";

export default function ShowMessage({ data }) {
  const { label } = data;

  return (
    <>
      <div className="border" style={{ width: "10rem" }}>
        <p className="bg-info px-1">Send Message</p>
        <p className="px-1">
          <small>{label}</small>
        </p>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </>
  );
}
