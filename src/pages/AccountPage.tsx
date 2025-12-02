import Heading from '../components/Heading/Heading';
import Nav from '../components/Nav/Nav';
import UserProfile from '../components/UserProfile/UserProfile';
import './AccountPage.css';

const AccountPage = () => {
  return (
    <main className='account'>
      <Heading>Your Account</Heading>
      <UserProfile />
      <Nav />
    </main>
  );
};

export default AccountPage;
