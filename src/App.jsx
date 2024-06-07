import React from "react";

import "reactflow/dist/style.css";
import DragandDrop from "./Componentes/DragandDrop/DragandDrop";

export default function App() {

  return (
    <div style={{ width: "100vw", height: "100vh", border:'1px solid, red' }}>
      <DragandDrop />
      
    </div>
  );
}
