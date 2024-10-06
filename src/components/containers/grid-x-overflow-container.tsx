"use client";
import { cn } from '@/lib/utils';
import ClientProvider from '@/providers/client-provider';
import { ClassValue } from 'clsx';
import { useMedia } from 'react-use';
// this container is a grid on larger screens and overflows on the x axis on mobile screens


type Props = {
    children: React.ReactNode;
    mobileStyles?: ClassValue;
    styles?: ClassValue;
    breakpoint?: number
};

export default function GridXOverflowContainer({ children, mobileStyles, styles, breakpoint}: Props) {

    const maxWidth = `(max-width: ${(breakpoint || 480)?.toString()}px)`

    const isMobileScreen = useMedia(maxWidth);
    if (isMobileScreen) {
        return (
            <ClientProvider>
                <div className={cn(
                    "overflow-x-hidden max-w-full w-screen ",
                    mobileStyles,
                )}>

                    <div className='hide-scrollbar  flex overflow-x-auto w-full px-3' style={{
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}>
                        {children}
                    </div>
                </div>
            </ClientProvider>
        );
    } else {
        return (
            <ClientProvider>
                <section className={cn(
                    "grid w-full container ",
                    styles,
                )}>
                    {children}
                </section>
            </ClientProvider>
        );

    }
}