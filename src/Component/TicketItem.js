import React from 'react';

export default function TicketItem({ticket, dispatch}) {

  const priorityClass = {
    1: 'priority-low',
    2: 'priority-medium',
    3: 'priority-high'
  };
  return (
    <div className="ticket-item">
    <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>
    <div className="ticket-content">
        <h3>{ticket.title}</h3> 
       <p>{ticket.description}</p> 
    </div>
       
 <div className="ticket-actions">
       <button className="button" onClick={() => dispatch({type: 'DELETE_TICKET', payload: ticket.id})}>Delete</button>
       <button className="button" onClick={() => dispatch({type: 'SET_EDITING_TICKET', payload: ticket})}>Edit</button></div>
    </div>

      );
    }