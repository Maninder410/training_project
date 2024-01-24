import React from 'react';
import { MdDelete } from 'react-icons/md';

const Todocontainer = ({ task, date, id, deleteHandler }) => {
  return (
    <div className='todo'>
      <span>{task}</span>
      <span>{date}</span>
      <MdDelete onClick={() => deleteHandler(id)} />
    </div>
  );
};

export default Todocontainer;
