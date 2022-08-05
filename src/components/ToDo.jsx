import React, {useState} from 'react';
import classes from './ToDo.module.css';
import useLocalStorage from '../hooks/useLocalStorage';
import Item from './Item';
import {nanoid} from 'nanoid';

const ToDo = () => {
    const [textInput, setTextInput] = useState("");
    const [toDos, setToDos] = useLocalStorage('todo-data', []);

    const addHandler = () => {
        const newToDos = [...toDos];
        newToDos.push({
            id: nanoid(),
            name: textInput,
            isMarked: false
        })
        setToDos(newToDos);
    }

    const toggleMark = (id) => {
        const newToDos = toDos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isMarked: !todo.isMarked
                }
            }
            return todo;
        });
        setToDos(newToDos);
    }

    const deleteItem = (id) => {
        const newToDos = toDos.filter(todo => todo.id !== id);
        setToDos(newToDos);
    }

    const items = toDos.map(todo => <Item key={todo.id} deleteItem={deleteItem} data={todo} toggleMark={toggleMark}/>);

    return (
        <div className={classes.container}>
            <section className={classes.add}>
                <input className={classes['text-field']} onChange={(e) => setTextInput(e.target.value)} value={textInput}/>
                <button className={classes.button} onClick={addHandler}>ADD</button>
            </section>

            <div className={classes.list}>
                {items}
            </div>
        </div>
    )
}

export default ToDo;