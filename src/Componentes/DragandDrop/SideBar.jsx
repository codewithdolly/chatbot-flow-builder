import React from "react";

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <button className="alertBtn" onClick={alert}>
        Save Changes
      </button>

      <div className="description"></div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "✉️ Message ")}
        draggable
      >
        ✉️ Message
      </div>
    </aside>
  );
};
