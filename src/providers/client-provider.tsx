"use client";
import { BarLoader } from "@/components/loaders";
import { useState, useEffect } from "react";


type Props = {
    children: React.ReactNode;
};

export default function ClientProvider({ children }: Props) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (loaded) {
        return children;
    }
    return <BarLoader />;
}