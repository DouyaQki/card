import Profile from "./Profile";
import Links from "./Links";
import "./index.css";

function App() {
  return (
    <main className="font-sans font-bold text-lg md:text-[1.25rem] grid grid-cols-1 grid-rows-2 p-4 gap-3 w-dvw md:w-96">
      <Profile />
      <Links />
    </main>
  );
}

export default App;
