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
            <aside className="py-[15px] px-[10px] text-xs bg-white text-[rgba(255,255,255,0.87)] flex">
                {/* Draggable node */}
                <div
                    className="rounded-lg border border-[#A8AF8B] py-[0.6em] px-[1.2em] text-sm font-normal bg-white text-[#A8AF8B] cursor-grab transition-colors duration-250 flex justify-center items-center flex-col w-[90px] hover:border-[#FFAD5E] hover:text-[#FFAD5E] focus:outline-4 focus:outline-auto focus:outline-[#FFAD5E]"
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
