import { useNavigate, useSearchParams } from 'react-router-dom';

const Profile = () => {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (
    <>
      <div>Profile</div>
      <button onClick={() => navigate('/')}>HOME...</button>
    </>
  );
};

export default Profile;
