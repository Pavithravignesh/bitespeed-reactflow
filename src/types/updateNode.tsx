export interface UpdateNodeData {
    label: string;
    [key: string]: any;
}

export interface UpdateNodeType {
    id: string;
    data: UpdateNodeData;
    [key: string]: any;
}

export interface UpdateNodeProps {
    selectedNode: UpdateNodeType;
    setNodeSelected: (selected: boolean) => void;
    setNodes: (updater: (nodes: UpdateNodeType[]) => UpdateNodeType[]) => void;
    // setNewNodeLabel: (label: string) => void;
}
