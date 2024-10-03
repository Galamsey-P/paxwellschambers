'use client';

import  { createContext, useContext,  } from 'react';
import { NavigationContextType } from './index.types';


export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);


export function useNavigation() {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
}