import React from "react";
import Navbar from "./NavBar";
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
    <div className="rightbar">
        <Navbar saveCanvas={saveCanvas} />
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