import { usePathname } from 'next/navigation';

/**
 * Custom hook to check if the current URL path matches the given href.
 * @param href - The path to check against the current URL.
 * @returns A boolean indicating whether the current path matches the provided href.
 */
const useActivePath = (href: string): boolean => {
    const pathname = usePathname();

    if (!href) return false;

    const cleanPath = (path: string) => path.toLowerCase();
    const cleanHref = cleanPath(href);
    const cleanPathname = cleanPath(pathname);

    return cleanPathname === cleanHref || cleanPathname.startsWith(`${cleanHref}/`);
};

export default useActivePath;