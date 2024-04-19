import NavMenu from './components/navmenu'
import Player from './components/player'

export default function Home() {
  return (
    <>
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 p-2 gap-2">
      <NavMenu/>
        <main className="flex-1 bg-zinc-900/70 rounded-md">
          <h2>main</h2>
        </main>
      </div>
      <Player/>
    </div>
    </>
  );
}
