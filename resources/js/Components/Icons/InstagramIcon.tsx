interface Props {
    className?: string;
}
export const InstagramIcon = (props: Props) => {
    const { className } = props;
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={`size-6 ${className}`}
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z'></path>
            <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
            <path d='M16.5 7.5l0 .01'></path>
        </svg >
    );
};