import { useState, useEffect } from 'react';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Mock fetching notifications
        setNotifications([
            { id: 1, message: 'New message received' },
            { id: 2, message: 'Profile updated successfully' }
        ]);
    }, []);

    return (
        <div>
            {notifications.map(note => <div key={note.id}>{note.message}</div>)}
        </div>
    );
};

export default Notifications;