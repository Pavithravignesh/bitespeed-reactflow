import React from "react";
import ReactFlow, { Controls } from "reactflow";
import PopUp from "./PopUp";
import type { ReactFlowCanvasProps } from "../types/reactFlowCanvas";


const ReactFlowCanvas: React.FC<ReactFlowCanvasProps> = ({
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onInit,
    onDrop,
    onDragOver,
    fitView,
    proOptions,
    onNodeClick,
    nodeTypes,
    wrapper,
    errorText,
    textColor,
}) => (
    <div className="wrokflow-wrapper" ref={wrapper}>
        <div className="text-xs bg-[#EDEFE7] p-3 flex flex-grow justify-center">
            <PopUp errorText={errorText} textColor={textColor} />
        </div>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={onInit}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView={fitView}
            proOptions={proOptions}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
        >
            <Controls />
        </ReactFlow>
    </div>
);

export default ReactFlowCanvas;