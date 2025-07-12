import React from 'react';

// interface
import type { NavBarProps } from '../types/navBar';

const NavBar: React.FC<NavBarProps> = ({ saveCanvas }) => {
    return (
        <div className="savingChange">
            {/* Button that triggers the saveCanvas function when clicked */}
            <button onClick={saveCanvas}>Save Work</button>
        </div>
    );
};

export default NavBar;
