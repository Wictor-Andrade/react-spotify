import { HomeIcon, Library, List, MoveRight, Plus, Search } from "lucide-react";

export default function NavMenu() {
    return (
        <>
            <aside className="w-96">
                <nav className="bg-zinc-900/70 rounded-md flex flex-col gap-4 mb-2">
                    <div className='flex flex-center flex-row gap-6 ml-4 mt-4'>
                    <HomeIcon/>
                    <a href="#">Início</a>
                    </div>
                    <div className='flex flex-center flex-row gap-6 ml-4 mb-4'>
                    <Search/>
                    <a href="#">Buscar</a>
                    </div>
                </nav>
                <nav className="bg-zinc-900/70 rounded-md flex flex-col">
                    <div className="flex flex-row mt-2">
                    <div className='flex flex-center flex-row gap-2 ml-4 mb-4 p-2'>
                        <Library/>
                        <a href="#">Sua Biblioteca</a>
                    </div>
                    <div className="flex flex-row gap-4 ml-auto mr-4">
                        <div className='hover:bg-zinc-800/80 rounded-full p-2'>
                        <Plus/>
                        </div>
                        <div className='hover:bg-zinc-800/80 rounded-full p-2'>
                        <MoveRight/>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-2 mb-4">
                    <button className="bg-zinc-800/80 rounded-xl pl-3 pr-3 pt-1 pb-1 text-sm ml-4" >Playlists</button>
                    <button className="bg-zinc-800/80 rounded-xl pl-3 pr-3 pt-1 pb-1 text-sm" >Artistas</button>
                    </div>
                    <div className="flex flex-1 flex-row ml-4 mr-4">
                    <div>  
                        <Search/>
                    </div>
                    <div className='flex flex-row gap-2 ml-auto'>
                        <h3>Recentes</h3>
                        <List/>
                    </div>
                    <div>
                        
                    </div>
                    </div>
                </nav>
            </aside>
        </>
    )
}