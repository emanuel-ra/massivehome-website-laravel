interface Props {
    className: string;
}
export const ArrowsMaximize = (props: Props) => {
    const { className } = props;
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={`${className}`}
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M16 4l4 0l0 4' />
            <path d='M14 10l6 -6' />
            <path d='M8 20l-4 0l0 -4' />
            <path d='M4 20l6 -6' />
            <path d='M16 20l4 0l0 -4' />
            <path d='M14 14l6 6' />
            <path d='M8 4l-4 0l0 4' />
            <path d='M4 4l6 6' />
        </svg>
    );
};