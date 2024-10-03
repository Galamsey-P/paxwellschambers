"use client"
import React, { useState, ReactNode } from 'react';
import { LogoVariant } from '@/components/navigation/logo/index.types';
import { NavigationContext } from '@/context/navigation';


export function NavigationProvider({ children }: { children: ReactNode; }) {
    const [isTransparent, setIsTransparent] = useState(true);
    const [logoVariant, setLogoVariant] = useState<LogoVariant>('white');

    const setNavigationState = (newIsTransparent: boolean, newLogoVariant: LogoVariant) => {
        setIsTransparent(newIsTransparent);
        setLogoVariant(newLogoVariant);
    };

    return (
        <NavigationContext.Provider value={{ isTransparent, logoVariant, setNavigationState }}>
            {children}
        </NavigationContext.Provider>
    );
}
