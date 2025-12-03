import { useSearchParams } from 'react-router';
import Heading from '../components/Heading/Heading';
import Nav from '../components/Nav/Nav';
import UserProfile from '../components/UserProfile/UserProfile';
import './ProfilePage.css';

const ProfilePage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  if (token) localStorage.setItem('token', token);

  return (
    <main className='profilePage'>
      <Heading>Your Account</Heading>
      <UserProfile />
      <Nav />
    </main>
  );
};

export default ProfilePage;
