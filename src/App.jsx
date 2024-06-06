import React, { useCallback } from "react";

import "reactflow/dist/style.css";
import AddNodeAndSave from "./Componentes/AddNodeAndSave/AddNodeAndSave";
import DragandDrop from "./Componentes/DragandDrop/DragandDrop";
import ChatBotFlow from "./Componentes/ChatBotFlow/ChatBotFlow";

export default function App() {

  return (
    <div style={{ width: "100vw", height: "100vh", border:'1px solid, red' }}>
      <DragandDrop />

    {/* <ChatBotFlow /> */}
      
    </div>
  );
}
