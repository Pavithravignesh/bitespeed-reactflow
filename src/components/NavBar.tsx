import React from 'react';

// interface
import type { NavBarProps } from '../types/navBar';

const NavBar: React.FC<NavBarProps> = ({ saveCanvas }) => {
    return (
        <div className="savingChange text-xs bg-[#EDEFE7] text-[rgba(255,255,255,0.87)] py-[15px] px-[10px] flex justify-center border-none">
            {/* Button that triggers the saveCanvas function when clicked */}
            <button onClick={saveCanvas}>Save Work</button>
        </div>
    );
};

export default NavBar;
