import * as React from "react";
import { supabase } from "../helper/supabase";
import sheepImg from "../assets/sheep.png";
import schoolLogo from "../assets/school-logo.png";
import langIcon from "../assets/lang-icon.svg";
import { AppContext } from "../App";
import { BEApi } from "../api";

function LanguageSelector() {
  return (
    <div className="flex gap-5 justify-between self-start mt-5">
      <img
        loading="lazy"
        src={langIcon}
        alt=""
        className="shrink-0 w-6 aspect-square"
      />
      <div>English</div>
    </div>
  );
}

function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`justify-center items-center px-16 py-4 max-w-full text-center rounded-[30px] w-[462px] max-md:px-5 ${className}`}
    >
      {children}
    </button>
  );
}

export function Menu() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const { setNav, setApi } = React.useContext(AppContext);

  React.useEffect(() => {
    supabase.auth.getUser().then((res) => {
      setIsSignedIn(res.data.user ? true : false);
    });
  }, []);
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event == "SIGNED_IN") {
      setIsSignedIn(true);
      setApi(new BEApi(session.access_token));
    } else if (event == "SIGNED_OUT") {
      setIsSignedIn(false);
    }
  });
  const signInGG = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000",
      },
    });
  };

  return (
    <div className="flex flex-col pt-3 pr-14 pb-12 bg-white max-md:pr-5">
      <header className="flex gap-5 justify-between self-center w-full text-xl font-bold text-center text-lime-300 whitespace-nowrap max-w-[1130px] max-md:flex-wrap max-md:max-w-full">
        <img
          src={schoolLogo}
          alt=""
          className="shrink-0 max-w-full aspect-[2.38] w-[103px]"
        />
        <LanguageSelector />
      </header>
      <main className="mt-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={sheepImg}
              alt=""
              className="grow w-full aspect-[1.03] max-md:max-w-full"
            />
          </div>
          <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center mt-24 text-2xl font-bold text-lime-300 max-md:mt-10 max-md:max-w-full">
              <h1 className="self-stretch text-6xl font-black max-md:max-w-full max-md:text-4xl">
                DIGITAL SECURITY
              </h1>
              <img
                loading="lazy"
                src={schoolLogo}
                alt=""
                className="mt-6 max-w-full aspect-[2.38] w-[351px]"
              />
              <Button
                onClick={() => {
                  if (isSignedIn) {
                    // supabase.auth.signOut();
                    setNav("lessons");
                  } else {
                    signInGG();
                  }
                }}
                className="mt-20 text-white bg-lime-300 max-md:mt-10"
              >
                GET STARTED
              </Button>
              <Button className="mt-8 bg-neutral-100">
                I ALREADY HAVE AN ACCOUNT
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
