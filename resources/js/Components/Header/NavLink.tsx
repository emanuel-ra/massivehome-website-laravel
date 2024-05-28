import { Link } from "@inertiajs/react";
import React from "react";
interface Props {
    href: string;
    className?: string;
    children?: React.ReactNode;
}
export const NavLink = (props: Props) => {
    const { href, children, className } = props;
    return (
        <Link
            href={href}
            className={`
                transition ease-in-out border-b-2 border-transparent
                 ${className}
            `}
        >
            {children}
        </Link>
    );
};
