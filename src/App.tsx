import Profile from "./Profile";
import Links from "./Links";
import "./index.css";
import Banner from "./Banner";

function App() {
  return (
    <>
      <Banner />
      <main className="font-sans font-bold text-lg md:text-[1.25rem] relative bottom-20 flex flex-col gap-4">
        <Profile />
        <Links />
      </main>
    </>
  );
}

export default App;
