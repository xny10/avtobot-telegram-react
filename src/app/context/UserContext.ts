import { createContext } from 'react';
import { IUser } from 'shared/types';

export const UserContext = createContext<IUser | null>(null);
