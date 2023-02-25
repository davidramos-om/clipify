import { PlayButton } from "./PlayButton";

export default function Video() {
    return (

        <div className="flex justify-center items-center">
            <div className="max-w-screen-md">
                <div className="relative">
                    <div className="bg-white rounded-lg overflow-hidden">
                        <div className="aspect-w-9 aspect-h-16">
                            <img src="./thumbnail.png" alt="Video thumbnail" className="object-cover w-full h-full" />
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-700">
                            <h2 className="text-left text-gray-500 dark:text-gray-300 text-lg font-medium">Video Title Goes Here</h2>
                            <p className="text-left text-gray-500 dark:text-gray-300 text-sm mt-2">#funny #savage</p>
                        </div>
                        <hr className="border-gray-200 dark:border-gray-700" />
                        <div className="flex gap-4 p-4 bg-white dark:bg-gray-800">
                            <img className="w-12 h-12 rounded-full" src="./logo.png" alt="user avatar" width="200" height="200" loading="lazy" />
                            <div className="text-left">
                                <h6 className="text-lg text-gray-500 dark:text-gray-200 font-medium ">Issac Smith</h6>
                                <p className="text-sm text-gray-500 dark:text-gray-200">@sac.smth • 1.2M views • 3 weeks ago</p>
                            </div>
                        </div>
                    </div>
                    <PlayButton />
                </div>
            </div>
        </div>
    );
}