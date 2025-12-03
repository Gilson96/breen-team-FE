import { createContext } from 'react';

type AuthContext = {
  authenticated: boolean;
  setAuthenticated: (authState: boolean) => void;
};

export const AuthContext = createContext<AuthContext>({} as AuthContext);
