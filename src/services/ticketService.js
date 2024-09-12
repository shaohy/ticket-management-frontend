import axios from 'axios';

const API_URL = 'http://localhost:8080/tickets';

export const getTickets = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error;
    }
};

export const createTicket = async (ticket) => {
    try {
        await axios.post(API_URL, ticket, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error creating ticket:', error);
        throw error;
    }
};

export const updateTicket = async (id, ticket) => {
    try {
        await axios.put(`${API_URL}/${id}`, ticket, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error updating ticket:', error);
        throw error;
    }
};

export const deleteTicket = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting ticket:', error);
        throw error;
    }
};