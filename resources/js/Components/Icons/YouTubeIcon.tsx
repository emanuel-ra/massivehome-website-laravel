interface Props {
    className?: string;
}
export const YouTubeIcon = (props: Props) => {
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
            <path d='M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z'></path>
            <path d='M10 9l5 3l-5 3z'></path>
        </svg>

    )
}