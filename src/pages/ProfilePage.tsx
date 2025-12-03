import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import Heading from '../components/Heading/Heading';
import Nav from '../components/Nav/Nav';
import UserProfile from '../components/UserProfile/UserProfile';
import './ProfilePage.css';

const ProfilePage = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      const token = searchParams.get('token');
      if (token) localStorage.setItem('token', token);
      const response = await fetch('https://breen-team-backend.vercel.app/api/users/profile', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
      const user = await response.json();
      console.log(user);
    })();
  }, [searchParams]);

  return (
    <main className='profilePage'>
      <Heading>Your Account</Heading>
      <UserProfile />
      <Nav />
    </main>
  );
};

export default ProfilePage;
