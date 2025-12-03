import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuthContext from '../../hooks/useAuthContext';
import { getUser } from '../../api';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './UserProfile.css';
import ProfileTextInput from '../ProfileTextInput/ProfileTextInput';
import ProfileTextArea from '../ProfileTextArea/ProfileTextArea';
import { Edit } from '@nsmr/pixelart-react';

const UserProfile = () => {
  const { authenticated } = useAuthContext();

  const [usernameText, setUsernameText] = useState('');
  const [showEditUsername, setShowEditUsername] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [bioText, setBioText] = useState('');
  const [showEditBio, setShowEditBio] = useState(false);
  const [bioTouched, setBioTouched] = useState(false);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['profile'],
    queryFn: getUser
  });

  useEffect(() => {
    const debounce = setTimeout(() => {
      const updatedName = usernameTouched ? usernameText : data?.user.profile.username;
      const updatedBio = bioTouched ? bioText : data?.user.profile.bio;
      console.log(updatedName, updatedBio);
    }, 1000);

    return () => clearInterval(debounce);
  }, [bioText, bioTouched, usernameText, usernameTouched, data]);

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
            {showEditUsername ? (
              <ProfileTextInput
                onBlur={() => setShowEditUsername(false)}
                initialValue={usernameText || username}
                setState={setUsernameText}
              />
            ) : (
              <h2
                onClick={() => {
                  setShowEditUsername(true);
                  setUsernameTouched(true);
                }}
                className='username'
              >
                {usernameTouched ? usernameText : username}
                <Edit className='editIcon' />
              </h2>
            )}
            <span>{email}</span>
          </div>
        </div>
        {bioText}
        <h3>Bio</h3>
        {showEditBio ? (
          <ProfileTextArea
            initialValue={bioText || bio || ''}
            setState={setBioText}
            onBlur={() => setShowEditBio(false)}
          />
        ) : (
          <p
            onClick={() => {
              setShowEditBio(true);
              setBioTouched(true);
            }}
          >
            {bioText || bio || 'Click here to add a bio'}
            <Edit className='editIcon' />
          </p>
        )}
        {usernameText}
        {bioText}
      </main>
    );
  }
};

export default UserProfile;
