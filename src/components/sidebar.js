import React from "react";
import PropTypes from "prop-types";


export default function Sidebar(props) {
    const {
        title,
        content
    } = props
    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">{title}</h2>
            <ul className="sidebar-list">
                {content}
            </ul>
        </aside>
    );
}

Sidebar.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string
};