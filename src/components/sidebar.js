import React from "react";
import PropTypes from "prop-types";


export default function Sidebar(props) {
    
    return (
        <React.Fragment>
            <aside className="sidebar">
                <h2 className="sidebar-title">Sidebar Title</h2>
                <div>
                    <ul className="list">
                        <li className="list-item">List Item</li>
                        <li className="list-item">List Item</li>
                        <li className="list-item">List Item</li>
                    </ul>
                </div>
            </aside>
        </React.Fragment>
    );
}

Sidebar.propTypes = {
    width: PropTypes.string
};