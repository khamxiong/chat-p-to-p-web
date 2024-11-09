// useAuthContext.js
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext'

export const useAuthContext = () => useContext(AuthContext);