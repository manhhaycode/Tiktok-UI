import { useParams } from 'react-router-dom';

function UserProfile() {
    const params = useParams();

    return <div>UserProfile {params.userId}</div>;
}

export default UserProfile;
