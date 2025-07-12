import React from "react";
import NavBar from "./NavBar";
import UpdateNode from "./UpdateNode";
import Sidebar from "./SideBar";
import type { RightBarProps } from "../types/rightBar";


const RightBar: React.FC<RightBarProps> = ({
    nodeSelected,
    changeNode,
    setNodeSelected,
    setNodes,
    saveCanvas,
}) => (
    <div className="flex flex-col bg-white w-[20%] border-l border-[rgb(214,212,212)]">
        <NavBar saveCanvas={saveCanvas} />
        {nodeSelected ? (
            <UpdateNode
                selectedNode={changeNode!}
                setNodeSelected={setNodeSelected}
                setNodes={setNodes}
            />
        ) : (
            <Sidebar />
        )}
    </div>
);


export default RightBar;