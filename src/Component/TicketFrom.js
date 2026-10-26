import React, { useState,useEffect } from 'react';

export default function TicketFrom({dispatch,editingTicket}) {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [priority, setPriority] = useState('1');

useEffect(() => {
  if (editingTicket) {
    setTitle(editingTicket.title);
    setDescription(editingTicket.description);
    setPriority(editingTicket.priority);
  } else {
    clearForm();
  }
}, [editingTicket]);

const priorityOptions = {
 1: 'Low',
 2: 'Medium',
 3: 'High'
}
const clearForm = () => {
  setTitle('');
  setDescription('');
  setPriority('1');
}


const handleSubmit = (e) => {
  e.preventDefault();

  const ticketData = {
    id: editingTicket
      ? editingTicket.id
      : new Date().toISOString(),
    title,
    description,
    priority
  };

  dispatch({
    type: editingTicket ? 'UPDATE_TICKET' : 'ADD_TICKET',
    payload: ticketData
  });

  clearForm();
};

const handleCancelEdit = () => {
  clearForm();
  dispatch({ type: 'CLEAR_EDITING_TICKET' });
}

    return(
    <form className="ticket-form" onSubmit={handleSubmit}>
    <label>Title</label>
    <input className="form-input"type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
    <label>Description</label> 
     <textarea className="form-input" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />   
    <fieldset className="priority-fieldset">
      <legend>Priority</legend>
   {Object.entries(priorityOptions).map(([key, label]) => (
    <label key={key} className="priority-label">
      <input type="radio"  value={key} checked={priority === key} onChange={(e) => setPriority(e.target.value)} />    
      {label}
    </label>
   ))}  
    </fieldset>
    <button type="submit" className="button">Submit</button>
    {editingTicket && <button type="button" className="button" onClick={handleCancelEdit}>Cancel Edit</button> }
    </form>
    
    )
}
