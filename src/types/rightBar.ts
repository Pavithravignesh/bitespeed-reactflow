import type { UpdateNodeType } from "./updateNode";

export interface RightBarProps {
    nodeSelected: boolean;
    changeNode: UpdateNodeType | null;
    setNodeSelected: (selected: boolean) => void;
    setNodes: any;
    saveCanvas: () => void;
    // setNewNodeLabel?: (label: string) => void; // Uncomment if needed
}
