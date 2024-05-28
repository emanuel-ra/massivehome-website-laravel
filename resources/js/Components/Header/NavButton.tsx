import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
    callback?: () => void;
    isSubmit?: boolean;
}
export const NavButton = (props: Props) => {
    const { children, className, callback, isSubmit = false } = props;
    const handleClick = () => {
        if (!callback) return;

        callback();
    };
    return (
        <button
            type={`${isSubmit ? "submit" : "button"}`}
            className={`transition ease-in-out border-b-2 border-transparent  ${className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
