import React from 'react';
import './TicketList.css'; // Import the CSS file for styling

function TicketList({ tickets, onEdit, onDelete }) {
    return (
        <div className="ticket-list">
            <h2>Tickets</h2>
            {tickets.length === 0 ? (
                <p>No tickets available</p>
            ) : (
                <ul>
                    {tickets.map(ticket => (
                        <li key={ticket.id} className="ticket-item">
                            <p>{ticket.description} - {ticket.status}</p>
                            <div className="ticket-actions">
                                <button onClick={() => onEdit(ticket)}>Edit</button>
                                <button onClick={() => onDelete(ticket.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TicketList;