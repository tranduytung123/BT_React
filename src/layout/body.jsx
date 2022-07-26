import React from 'react';
import PropTypes from 'prop-types';
import { STATUS } from './constant';
import TodoItem from '../components/todoItem';
Body.propTypes = {
    
};

function Body(props) {
    const {NEW,DOING,DONE} =STATUS;
    const descriptionData = 'This is a task, This is a task, This is a task.';
    const todoList = [
        {
            title: 'Task1',
            creator: 'Loc',
            status: NEW,
            description:descriptionData,
        },
        {
            title: 'Task1',
            creator: 'Loc',
            status: DOING,
            description:descriptionData,
        },
        {
            title: 'Task1',
            creator: 'Done',
            status: NEW,
            description:descriptionData,
        },
        {
            title: 'Task1',
            creator: 'Loc',
            status: DONE,
            description:descriptionData,
        },
        {
            title: 'Task1',
            creator: 'Loc',
            status: DOING,
            description:descriptionData,
        },
        {
            title: 'Task1',
            creator: 'Loc',
            status: NEW,
            description:descriptionData,
        },
        {
            title: 'Task1',
            creator: 'Loc',
            status: NEW,
            description:descriptionData,
        },
        {
            title: 'Task1',
            creator: 'Loc',
            status: NEW,
            description:descriptionData,
        },
        {
            title: 'Task1',
            creator: 'Loc',
            status: NEW,
            description:descriptionData,
        },
        {
            title: 'Task1',
            creator: 'Loc',
            status: NEW,
            description:descriptionData,
        },
    ];
   
    const renderTodoItem = () => {
        return todoList.map((item, index) => (
            <TodoItem
            key={ `${item.title}_${index}`}
            title={item.title}
            creator={item.creator}
            status={item.status}
            description={item.description}
            />
        ));
        };
        return <div className='containerBody'>{renderTodoItem()}</div>;
    
    };

export default Body;