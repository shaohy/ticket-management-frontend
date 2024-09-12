import React from 'react';

function TicketList({ tickets, onEdit, onDelete }) {
    return (
        <div>
            <h2>Tickets</h2>
            {tickets.length === 0 ? (
                <p>No tickets available</p>
            ) : (
                <ul>
                    {tickets.map(ticket => (
                        <li key={ticket.id}>
                            <p>{ticket.description} - {ticket.status}</p>
                            <button onClick={() => onEdit(ticket)}>Edit</button>
                            <button onClick={() => onDelete(ticket.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TicketList;
