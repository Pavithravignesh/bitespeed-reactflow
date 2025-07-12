import type { Node, Edge, OnConnect } from "reactflow";

export interface ReactFlowCanvasProps {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: any;
    onEdgesChange: any;
    onConnect: OnConnect;
    onInit: (instance: any) => void;
    onDrop: (event: React.DragEvent) => void;
    onDragOver: (event: React.DragEvent) => void;
    fitView?: boolean;
    proOptions?: any;
    onNodeClick?: any;
    nodeTypes?: any;
    wrapper: React.RefObject<HTMLDivElement | null>;
    errorText?: string;
    textColor?: string;
}