import { Lessons } from "./components/Lessons";
import { Menu } from "./components/Menu";
import { QuestionLoader } from "./components/Conversation/QuestionLoader";
import { Roadmap } from "./components/Roadmap";
import { createContext, useState } from "react";

export const AppContext = createContext({ nav: "menu", setNav: () => {} });
function App() {
  const [nav, setNav] = useState("menu");
  return (
    <AppContext.Provider value={{ nav, setNav }}>
      {nav === "menu" && <Menu />}
      {nav === "lessons" && <Lessons />}
      {nav === "roadmap" && <Roadmap />}
      {nav === "question" && <QuestionLoader />}
    </AppContext.Provider>
  );
}

export default App;
