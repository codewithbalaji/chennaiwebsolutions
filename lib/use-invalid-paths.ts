'use client'

import { usePathname } from "next/navigation";

export default function useInvalidPaths() {
    const pathname = usePathname();

    const invalidPaths = ['/studio'];

    const isInvalid = invalidPaths.some((path)=>pathname.includes(path));

    return isInvalid;
}
