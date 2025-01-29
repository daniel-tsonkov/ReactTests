import { useNavigate } from 'react-router-dom';

const Profile = () => {
  let navigate = useNavigate();
  return (
    <>
      <div>Profile</div>
      <button onClick={() => navigate('/')}>HOME...</button>
    </>
  );
};

export default Profile;
