import React, { useState, useEffect } from 'react';

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Description</label>
                <input 
                    type="text" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Status</label>
                <input 
                    type="text" 
                    value={status} 
                    onChange={(e) => setStatus(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">
                {editingTicket ? 'Update Ticket' : 'Create Ticket'}
            </button>
            {editingTicket && <button onClick={handleCancel}>Cancel</button>}
        </form>
    );
}

export default TicketForm;
