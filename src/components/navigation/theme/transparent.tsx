"use client";
import { ReactNode, useEffect } from 'react';
import { useNavigation } from "@/context/navigation";



export default function TransparentHeader({ children }: { children: ReactNode; }) {
    const { setNavigationState } = useNavigation();

    useEffect(() => {
        setNavigationState(true, "white");
    }, [setNavigationState]);

    return children;
}