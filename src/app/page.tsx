'use client';

import { useEffect, useState } from 'react';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('/api/todo');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async () => {
    try {
      const response = await fetch('/api/todo', {
        method: 'POST',
        body: JSON.stringify({ title: newTodo }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setTodos([...todos, data.title]);
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  return (
    <div className="mt-8 justify-center flex">
      <div className="justify-between">
        <input
          className="m-2 bg-slate-200 h-10 px-2 rounded"
          type="text"
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded" onClick={addTodo}>
          Add Todo
        </button>
        <div className="mt-4">
          {todos?.map((todo) => (
            <div key={todo} className="m-2 p-2 bg-slate-100 rounded">
              {todo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
