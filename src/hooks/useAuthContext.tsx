import { useContext } from 'react';
import { AuthContext } from '../contexts';

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
