import Profile from "./Profile";
import Links from "./Links";
import "./index.css";

function App() {
  return (
    <main className="bg-[#0016262a] border-1 border-white rounded-md w-90 font-sans grid grid-cols-1 grid-rows-2 gap-4 md:scale-110 p-4">
      <Profile />
      <Links />
    </main>
  );
}

export default App;
