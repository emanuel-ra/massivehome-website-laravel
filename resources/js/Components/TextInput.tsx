import { forwardRef, useEffect, useRef } from "react";

interface Props {
    type?: string;
    className?: string;
    isFocused?: boolean;
    children?: React.ReactNode;
}

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props }: Props,
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
            ref={input}
        />
    );
});
