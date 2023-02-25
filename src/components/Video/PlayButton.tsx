export function PlayButton() {
    return (
        <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-red-600 text-white rounded-full p-4 hover:bg-red-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"></path>
                </svg>
            </button>
        </div>
    );
}
