import React, { useCallback } from "react";

import "reactflow/dist/style.css";
import AddNodeAndSave from "./Componentes/AddNodeAndSave/AddNodeAndSave";
import DragandDrop from "./Componentes/DragandDrop/DragandDrop";

export default function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <AddNodeAndSave />
      {/* <DragandDrop /> */}
      
    </div>
  );
}
