import { useState } from 'react';

const EditProfile = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [role, setRole] = useState(user.role);

    const handleUpdate = async () => {
        // Logic to update user details
    };

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
            <input value={role} onChange={(e) => setRole(e.target.value)} placeholder='Role' />
            <button onClick={handleUpdate}>Update Profile</button>
        </div>
    );
};

export default EditProfile;