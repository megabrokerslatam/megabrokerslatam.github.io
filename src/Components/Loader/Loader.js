import React from 'react';
// importing styles
import './Loader.css';

const Loader = props => {
    return (
        <div className="cs-loader">
            <div className="cs-loader-inner">
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
            </div>
        </div>
    );
}

export default Loader;