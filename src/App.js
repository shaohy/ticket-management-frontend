import React, { useState, useEffect } from 'react';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import { getTickets, createTicket, updateTicket, deleteTicket } from './services/ticketService';
import './App.css'; // Import the CSS file for styling

function App() {
    const [tickets, setTickets] = useState([]);
    const [editingTicket, setEditingTicket] = useState(null);

    useEffect(() => {
        loadTickets();
    }, []);

    const loadTickets = async () => {
        const response = await getTickets();
        setTickets(response);
    };

    const handleCreate = async (ticket) => {
        await createTicket(ticket);
        loadTickets();
    };

    const handleUpdate = async (id, ticket) => {
        await updateTicket(id, ticket);
        setEditingTicket(null);
        loadTickets();
    };

    const handleEdit = (ticket) => {
        setEditingTicket(ticket);
    };

    const handleDelete = async (id) => {
        await deleteTicket(id);
        loadTickets();
    };

    return (
        <div className="app">
            <h1>Ticket Management</h1>
            <TicketForm
                onCreate={handleCreate}
                onUpdate={handleUpdate}
                editingTicket={editingTicket}
                setEditingTicket={setEditingTicket}
            />
            <TicketList tickets={tickets} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}

export default App;