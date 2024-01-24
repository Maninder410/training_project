import './App.css';
import { useState } from 'react';
import Todocontainer from './components/Todocontainer';

function App() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [tasks, setTasks] = useState([]);

  const taskHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { task, date }]);
    setTask('');
    setDate('');
  };

  const deleteHandler = (id) => {
    const updatedTasks = tasks.filter((item, index) => index !== id);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>Todo React App</h1>
      <form onSubmit={taskHandler}>
        <div className='ctn'>
          <input
            type='text'
            placeholder='Enter todo here'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type='submit'>Add</button>
        </div>
      </form>
      <div className='container'>
        {tasks &&
          tasks.map((item, index) => (
            <Todocontainer
              key={index}
              task={item.task}
              date={item.date}
              id={index}
              deleteHandler={deleteHandler}
            />
          ))}
      </div>
    </>
  );
}

export default App;
