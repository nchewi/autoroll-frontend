import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
    href: string;
    title: string;
    setIsOpen: (value: boolean) => void;
}

const NavLink = ({ href, title, setIsOpen }: NavLinkProps) => {
    return (
        <Link 
            href={href} 
            passHref
            className="block py-2 pl-3 pr-4 text-[#03021E] sm:text-xl rounded md:p-0 hover:text-[#9E1D20]"  
            onClick={() => setIsOpen(false)}>
            {title}
        </Link>
    );
}

export default NavLink;
