import { Handle, Position } from "reactflow";
import { BsChatText } from "react-icons/bs";
import React from "react";
import whatsappIcon from "../assets/whatsapp.svg";

// interface
import type { ActualNodeProps } from "../types/actualNode";

const ActualNode: React.FC<ActualNodeProps> = ({ data }) => {
    return (
        <div>
            <div className="bg-[#b2f0e3] rounded-t-[5px] font-bold text-xs text-black pl-[15px] pt-[3px] pb-[3px] flex items-center justify-between w-[275px] shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_6px_6px]">
                <div className="flex items-center">
                    <BsChatText className="text-lg pr-[7px] pt-[5px]" />
                    {data.heading}
                </div>
                <div className="pr-[15px]">
                    <img src={whatsappIcon} alt="whatsapp icon" width={15} height={15} />
                </div>
            </div>
            <div className="p-[15px] rounded-b-[5px] bg-white shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_6px_6px]">
                <div className="text-black">
                    {data.label}
                </div>
            </div>
            <Handle type="source" position={Position.Right} id="source" />
            <Handle type="target" position={Position.Left} id="target" />
        </div>
    );
};

export default ActualNode;
