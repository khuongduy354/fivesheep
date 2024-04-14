import { Lessons } from "./components/Lessons";
import { Menu } from "./components/Menu";
import { QuestionLoader } from "./components/Conversation/QuestionLoader";
import { BEApi } from "./api";
import { Roadmap } from "./components/Roadmap";
import { createContext, useState } from "react";
import { GamePage } from "./components/GamePage";
import { Interactor } from "./components/EmulatedWebs/Interactor";

export const AppContext = createContext({
  nav: "menu",
  setNav: () => {},
  api: new BEApi(""),
});
function App() {
  const [nav, setNav] = useState("menu");
  const [api, setApi] = useState(new BEApi(""));
  return (
    <AppContext.Provider value={{ nav, setNav, api, setApi }}>
      {nav === "menu" && <Menu />}
      {nav === "lessons" && <Lessons />}
      {nav === "roadmap" && <Roadmap />}
      {nav === "question" && <QuestionLoader />}
      {nav === "game" && <GamePage />}
    </AppContext.Provider>
  );
}

export default App;
