import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuthContext from '../../hooks/useAuthContext';
import { getUser } from '../../api';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './UserProfile.css';
import ProfileTextInput from '../ProfileTextInput/ProfileTextInput';
import ProfileTextArea from '../ProfileTextArea/ProfileTextArea';

const UserProfile = () => {
  const { authenticated } = useAuthContext();

  const [usernameText, setUsernameText] = useState('');
  const [bioText, setBioText] = useState('');

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['profile'],
    queryFn: getUser
  });

  if (!authenticated && data === null) {
    return (
      <main className='userProfile'>
        <h1>Please log in to see your profile</h1>
      </main>
    );
  }

  if (isError) {
    <main className='userProfile'>
      <Error>{error.message}</Error>
    </main>;
  }

  if (isLoading) {
    <main className='userProfile'>
      <Loading>Loading user profile</Loading>
    </main>;
  }

  if (data) {
    const { avatar_url, bio, email, username } = data.user.profile;

    return (
      <main className='userProfile'>
        <div className='profileHeader'>
          <img src={avatar_url} alt={username} className='avatar' />
          <div className='headerDetails'>
            <h2>{username}</h2>
            {usernameText}
            <ProfileTextInput initialValue={username} setState={setUsernameText} />
            <span>{email}</span>
          </div>
        </div>
        <p>{bio || 'Your bio is empty currently!'}</p>
        {bioText}
        <ProfileTextArea initialValue={bio || ''} setState={setBioText} />
      </main>
    );
  }
};

export default UserProfile;
