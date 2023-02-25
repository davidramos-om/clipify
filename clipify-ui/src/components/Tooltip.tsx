
type TooltipProps = {
    children: React.ReactNode;
    elId: string;
    text: string;
}

export function Tooltip({ children, text, elId }: TooltipProps) {

    return (
        <>
            <div id={elId}
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
                {text}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            {children}
        </>
    );
}
