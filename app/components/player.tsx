import { CircleCheck, Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";
import Image from 'next/image'
import image from '../../public/joji/joji_in_tongues.jpg'

export default function Player() {
    return (
        <>
            <footer className="bg-zinc-900 p-1 flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <div>
                        <Image className=" rounded-md" src="/joji/joji_in_tongues.jpg" alt="Joji In tongues album" width={60} height={60} ></Image>
                    </div>
                    <div className="flex flex-col">
                        <strong className="text-md font-normal">Pills</strong>
                        <span className="text-zinc-400 text-xs font-medium">Joji</span>
                    </div>
                    <div>
                        <CircleCheck className=" text-green-600"/>
                    </div>
                </div>
                <div className=" flex flex-col items-center gap-1 max-h-13 mt-2">
                    <div className="flex flex-row gap-4 justify-center items-center max-h-10">
                        <div className="flex flex-col items-center">
                            <Shuffle className="text-green-600 mb-1"/>
                            <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                        </div>
                        <div className="flex flex-col items-center">
                            <SkipBack className="text-zinc-500 mb-1 hover:text-white"/>
                            <div className="w-1 h-1"></div>
                       </div>
                       <div className="max-w-11 w-11 max-h-11 h-11 flex items-center justify-center">
                            <button className="w-10 h-10 bg-white rounded-full text-black justify-center flex items-center hover:w-11 hover:h-11">
                                <Play fill="bg-black"/>
                            </button>
                       </div>
                        <div className="flex flex-col items-center">
                            <SkipForward className="text-zinc-500 mb-1 hover:text-white"/>
                            <div className="w-1 h-1"></div>
                       </div>
                       <div className="flex flex-col items-center">
                            <Repeat className="text-green-600 mb-1"/>
                            <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 mb-1">
                        <span className="text-zinc-600 font-normal text-xs">2:41</span>
                        <div>
                            <div className="h-1 w-96 bg-zinc-600 rounded-full">
                                <div className="h-1 w-80 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <span className="text-zinc-600 font-normal text-xs">3:07</span>
                    </div>
                </div>
                <div>

                </div>
            </footer>
        </>
    )
}