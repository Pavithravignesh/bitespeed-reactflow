import React from 'react';

// interface 
import type { PopUpProps } from '../types/popUp';

const PopUp: React.FC<PopUpProps> = ({ errorText, textColor }) => {
    // Check if there is an errorText
    if (errorText) {
        // If there is an errorText, render a div with the errorText and apply the textColor class
        return <div className={textColor}>{errorText}</div>;
    }
    // If there is no errorText, render an empty div
    return <div className="savingChanges" style={{ padding: 19 }}></div>;
};

export default PopUp;
