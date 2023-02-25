import { Tooltip } from "./Tooltip";



export default function MovePageControls() {
    return (
        <div className="fixed right-0 bottom-0 m-4">
            <div className="flex flex-col space-y-4">
                <Tooltip
                    text="Move to the previous page"
                    elId="tooltip-btn-prev"
                >
                    <button
                        type="button"
                        data-tooltip-target="tooltip-btn-prev"
                        className="bg-gray-900 text-white rounded-full p-4 hover:bg-gray-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="evaArrowCircleUpOutline0"><g id="evaArrowCircleUpOutline1"><g id="evaArrowCircleUpOutline2" fill="currentColor"><path d="M12.71 7.29a1 1 0 0 0-.32-.21A1 1 0 0 0 12 7h-.1a.82.82 0 0 0-.27.06a.72.72 0 0 0-.19.11a1 1 0 0 0-.13.09l-3 2.86a1 1 0 0 0 1.38 1.45L11 10.34V16a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Z" /></g></g></g></svg>
                    </button>
                </Tooltip>
                <Tooltip
                    text="Move to the next page"
                    elId="tooltip-btn-next"
                >
                    <button
                        type="button"
                        data-tooltip-target="tooltip-btn-next"
                        className="bg-gray-900 text-white rounded-full p-4 hover:bg-gray-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="evaArrowCircleDownOutline0"><g id="evaArrowCircleDownOutline1"><g id="evaArrowCircleDownOutline2" fill="currentColor"><path d="M14.31 12.41L13 13.66V8a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a.54.54 0 0 0 .16-.1a.49.49 0 0 0 .15-.1l3-2.86a1 1 0 0 0-1.38-1.45Z" /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Z" /></g></g></g></svg>
                    </button>
                </Tooltip>
            </div>
        </div>
    );
}
