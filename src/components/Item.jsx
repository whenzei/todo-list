import React from 'react';
import classes from './Item.module.css';

const Item = ({data, toggleMark, deleteItem}) => {
    return (
        <div className={classes.container}>
            <div className={data.isMarked ? classes.strike : null} 
                onClick={() => toggleMark(data.id)}>
                    {data.name}
            </div>
            <div className={classes.icon} onClick={() => deleteItem(data.id)}>x</div>
        </div>
    )
}

export default Item;