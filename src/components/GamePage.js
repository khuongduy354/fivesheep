import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { Interactor } from "./EmulatedWebs/Interactor";

export function GamePage() {
  const { api } = useContext(AppContext);
  const [attack, setAttack] = useState(null);
  const attackCb = (isAttacked) => {
    if (isAttacked) {
      alert("Attacked");
    } else {
      alert("Not attacked");
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      api.getAttack().then((_attack) => {
        if (_attack) {
          setAttack(_attack);
        }
      });
    }, 1000 * 60);
    return () => {
      clearInterval(interval);
    };
  }, []);
  function BackButton() {
    const { setNav } = useContext(AppContext);
    return (
      <div className="mt-8 ml-8 flex flex-col text-base font-bold whitespace-nowrap text-slate-700 max-md:max-w-full">
        <div className="flex gap-2.5 self-start">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e59664eaf9d299f3580b38514c0c75784414f63b1b15e2811e93e48b84b98179?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
            alt="Back arrow icon"
            className="shrink-0 w-6 aspect-square"
          />
          <button onClick={() => setNav("lessons")} className="my-auto">
            Back
          </button>
        </div>
        <div className="shrink-0 mt-2 border-solid bg-neutral-100 border-[3px] border-neutral-100 h-[3px] max-md:max-w-full" />
      </div>
    );
  }
  return (
    <div>
      <BackButton />
      {!attack ? (
        <div className="flex justify-center items-center h-[100vh]">
          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="1200"
            height="500"
            src="https://khuongduy354.github.io/sudoku-fe/"
          ></iframe>
        </div>
      ) : (
        <Interactor attackCb={attackCb} attackType={attack.attackType} />
      )}
    </div>
  );
}
