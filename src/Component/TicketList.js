import React from 'react';
import TicketItem from './TicketItem';

export default function TicketList({tickets, dispatch}) {
return (
    <div className="ticket-list">
        {
            // eslint-disable-next-line array-callback-return
            tickets.map((ticket) => (
                <TicketItem key={ticket.id} ticket={ticket} dispatch={dispatch} />
            )) 
       
        }
    </div>
)
}