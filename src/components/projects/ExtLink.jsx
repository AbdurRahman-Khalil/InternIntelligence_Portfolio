
export const ExtLink = ({ linkDestination, linkText }) => {
    return (
        <a
            className="text-[0.9rem] bg-neutral-50/1.5 hover:bg-neutral-50/8 backdrop-blur p-1.5 border-2 border-neutral-100/30 rounded-xl transitions"
            href={linkDestination}
            target="_blank"
        >
            {linkText}
        </a>
    );
};
