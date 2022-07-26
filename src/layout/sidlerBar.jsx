import React from 'react';
import PropTypes from 'prop-types';
SidleBar.propTypes = {
    
};

function SidleBar(props) {
    return (
        <div className='containerSideBar'>
            <div className='containerSideBar_item'>
                <p>Task All</p>
            </div>
            <div className='containerSideBar_item'>
                <p>New Task</p>
            </div>
            <div className='containerSideBar_item'>
                <p>Doing Task</p>
            </div>
            <div className='containerSideBar_item'>
                <p>Done Task</p>
            </div>
        </div>
    );
}

export default SidleBar;