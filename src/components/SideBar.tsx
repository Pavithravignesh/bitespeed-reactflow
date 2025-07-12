import { BsChatText } from "react-icons/bs";
import React from "react";

const SideBar: React.FC = () => {
    // Function to handle the drag start event and set the drag data
    const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
    };

    return (
        <>
            <aside>
                {/* Draggable node */}
                <div
                    className="appnode"
                    onDragStart={(event) => onDragStart(event, 'default')} draggable
                >
                    <BsChatText style={{ fontSize: "15px", margin: "5px" }} />
                    Message
                </div>
            </aside>
        </>
    );
};

export default SideBar;
