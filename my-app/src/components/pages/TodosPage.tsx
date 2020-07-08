import React, {useState, useEffect} from 'react';
import {TodoForm} from "../TodoForm";
import {TodoList} from "../TodoList";
import {ITodo} from "../../interfaces";
declare var confirm: (question: string) => boolean;


export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addHandler = (title: string) => {
        console.log('Add New Todo', title);
        const newTodo: ITodo = {
            title,
            completed: false,
            id: Date.now()
        };
        // setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev])
    };
    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = true;
            }
            return todo;
        }))
    };

    const removeHandler = (id: number) => {
        const shouldRemove: boolean = confirm('Вы уверены, что хотите удалить элемент?');
        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    };
    return (
        <>
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
        </>
    );
};

