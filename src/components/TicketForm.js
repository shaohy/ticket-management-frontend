import React, { useState, useEffect } from 'react';
import './TicketForm.css'; // Import the CSS file for styling

function TicketForm({ onCreate, onUpdate, editingTicket, setEditingTicket }) {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (editingTicket) {
            setDescription(editingTicket.description);
            setStatus(editingTicket.status);
        } else {
            setDescription('');
            setStatus('');
        }
    }, [editingTicket]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const ticket = { description, status };

        if (editingTicket) {
            onUpdate(editingTicket.id, ticket);
        } else {
            onCreate(ticket);
        }

        setDescription('');
        setStatus('');
    };

    const handleCancel = () => {
        setEditingTicket(null);
    };

    return (
        <form className="ticket-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Status</label>
                <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                />
            </div>
            <div className="form-actions">
                <button type="submit">
                    {editingTicket ? 'Update Ticket' : 'Create Ticket'}
                </button>
                {editingTicket && <button type="button" onClick={handleCancel}>Cancel</button>}
            </div>
        </form>
    );
}

export default TicketForm;