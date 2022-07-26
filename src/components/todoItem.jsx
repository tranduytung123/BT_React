import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import './style.css'
TodoItem.propTypes = {
    
};

function TodoItem(props) {
    const {taskTitle,taskCreator,taskStatus,taskDesscription} =props;
    return (
        <div className='containerItem'>
            <p className='containerItem_title'>Title : {taskTitle}</p>
            <p className='containerItem_creator'>Creator : {taskCreator}</p>
            <p className='containerItem_status containerItem_status--new'>Status : {taskStatus}</p>
            <hr className='containerItem_lineBreak'></hr>
            <p className='containerItem_description'>Desceiption : {taskDesscription}</p>

        </div>
    );
}

export default TodoItem;