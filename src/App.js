import { Lessons } from "./components/Lessons";
import { Menu } from "./components/Menu";
import { QuestionLoader } from "./components/Conversation/QuestionLoader";
import { BEApi } from "./api";
import { Roadmap } from "./components/Roadmap";
import { createContext, useEffect, useState } from "react";
import { GamePage } from "./components/GamePage";
import { supabase } from "./helper/supabase";

export const AppContext = createContext({
  nav: "menu",
  setNav: () => {},
  api: new BEApi(""),
});
function App() {
  const [nav, setNav] = useState("menu");
  const [api, setApi] = useState(new BEApi(""));
  useEffect(() => {
    supabase.auth.getSession().then((sess) => {
      if (sess.data.session) {
        // console.log(sess.data.session.access_token);
        setApi(new BEApi(sess.data.session.access_token));
      }
    });
  }, []);
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
