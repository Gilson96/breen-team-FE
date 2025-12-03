import { useState, type ReactNode } from 'react';
import { AuthContext } from '.';

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);

  return <AuthContext value={{ authenticated, setAuthenticated }}>{children}</AuthContext>;
};

export default AuthContextProvider;
