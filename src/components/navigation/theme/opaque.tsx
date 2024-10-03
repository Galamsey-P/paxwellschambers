"use client";
import { ReactNode, useEffect } from 'react';
import { useNavigation } from "@/context/navigation";



export default function OpaqueHeader({ children }: { children: ReactNode; }) {
    const { setNavigationState } = useNavigation();

    useEffect(() => {
        setNavigationState(false, "colored");
    }, [setNavigationState]);

    return children;
}