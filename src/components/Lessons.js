import * as React from "react";
import { AppContext } from "../App";

function BackButton() {
  const { setNav } = React.useContext(AppContext);
  return (
    <div className="ml-12 flex flex-row justify-between gap-2.5 whitespace-nowrap text-slate-700">
      <div className="">
        <button onClick={() => setNav("menu")} className="my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7ee6b583d38e80af3e9c934327bfa408d3c7a4995ccba0c28a5a3c908e0a683?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
            className="shrink-0 w-6 aspect-square"
            alt=""
          />
          Back
        </button>
      </div>
    </div>
  );
}

function TopicCard({ title, progress, description, buttonText }) {
  const { setNav } = React.useContext(AppContext);
  return (
    <div className="flex flex-row items-start pt-5 pr-20 pb-9 pl-5 mt-20 ml-3.5 text-white bg-lime-300 rounded-xl max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div>
        <h2 className="text-2xl font-black">{title}</h2>
        <div className="justify-center px-5 py-2 mt-4 text-lime-300 whitespace-nowrap bg-white rounded-[65px]">
          {progress}
        </div>
        <p className="mt-4 ml-9 font-light text-lime-600 max-md:ml-2.5">
          {description}
        </p>
        <button
          onClick={() => setNav("roadmap")}
          className="justify-center px-11 py-3.5 mt-6 whitespace-nowrap bg-lime-600 rounded-[65px] max-md:px-5"
        >
          {buttonText}
        </button>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7f5e01520a1f1192bff932e6902b8ed218c2b6ba0dc8703ffed560df6e7f6de?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
        className="mt-7 w-full aspect-square"
        alt=""
      />
    </div>
  );
}

function ImageGrid() {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col">
          <div className="flex gap-5 justify-between self-end">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4193de3412071f18e76d7da9a7214d41eb8ba5cacdcfcd910807a980135fbad0?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
              className="shrink-0 self-start mt-1.5 aspect-[1.52] w-[50px]"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dca372a30d703402ae62d9fdaae31f840a47d9b4d956e52768f6dc63ec23a2b?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
              className="shrink-0 aspect-[1.11] w-[42px]"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/62bde273385acdb7ef3ec7364ff33925dab39c881a16ad69255af6eb6c8a234c?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
              className="shrink-0 my-auto w-10 aspect-[1.14]"
              alt=""
            />
          </div>
          {/* <div className="shrink-0 mt-48 bg-lime-300 h-[42px] rounded-[65px] max-md:mt-10" /> */}
        </div>
      </div>
    </div>
  );
}

export function Lessons() {
  const { setNav } = React.useContext(AppContext);
  const navItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e800d9c57839ff4068b7044bd09b99e142e5c05246cdd9e0f2815ff4b0e24dec?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&",
      label: "LEARN",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9671e13c606ad5d3d823a3314a72280ff7d371e2ea2e4c987bd012a382aeb872?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&",
      label: "RANKING",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc3ac4efca11b14a9b69824405a5cc6ad48cc8812dd4b2f4504432bbb4535cfd?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&",
      label: "MISSION",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc682e74bba9b8e8826c3dfd64f42b84850ff2c9a2edee6d2431ccc69e7f906b?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&",
      label: "PROFILE",
    },
  ];

  return (
    <div className="flex flex-row px-6 pb-20 bg-white max-md:px-5">
      <nav className="flex z-10 gap-24 self-start text-base font-bold text-lime-300 whitespace-nowrap">
        <div className="flex flex-col self-start mt-40 max-md:mt-10">
          {navItems.map((item, index) => (
            <button
              onClick={() => {
                if (item.label === "MISSION") {
                  setNav("game");
                }
              }}
              key={index}
              className={`flex gap-${index === 0 ? 4 : 5} ${
                index === 0 ? "text-white" : ""
              } ${
                index > 0
                  ? `mt-${
                      index === 1 ? 11 : index === 2 ? 14 : 12
                    } max-md:mt-10`
                  : ""
              }`}
            >
              <img
                loading="lazy"
                src={item.icon}
                className="shrink-0 my-auto w-6 aspect-square"
                alt=""
              />
              <div
                className={`${
                  index === 0
                    ? "justify-center items-start px-5 py-4 bg-lime-300 rounded-[65px] max-md:pr-5"
                    : "flex-auto my-auto"
                }`}
              >
                {item.label}
              </div>
            </button>
          ))}
        </div>
        <div className="shrink-0 border-solid bg-neutral-100 border-[3px] border-neutral-100 h-[832px] w-[3px]" />
      </nav>
      <main className="flex flex-col items-start self-center mt-0 max-w-full text-base font-bold w-[634px] max-md:mt-0">
        <div className="flex gap-24 mt-6">
          <BackButton />
          <ImageGrid />
        </div>
        <TopicCard
          title="Part 1: Phishing"
          progress="30%"
          description={
            <>
              Topic description <br /> Topic description <br /> Topic
              description
            </>
          }
          buttonText="Continue"
        />

        <section className="flex flex-col items-start self-center pt-5 pr-20 pb-14 pl-6 mt-0 max-w-full rounded-xl bg-neutral-100 w-[629px] max-md:px-5">
          <h2 className="text-2xl font-black text-lime-300">
            Part 2: Cyberbullying
          </h2>
          <button className="justify-center items-start px-4 py-3 mt-28 ml-3 max-w-full text-base font-bold text-white bg-lime-300 rounded-xl w-[173px] max-md:pr-5 max-md:mt-10 max-md:ml-2.5">
            Jump to part 2
          </button>
        </section>
      </main>
      {/* <aside className="z-10 self-end mt-0 max-w-full w-[657px] max-md:mt-0">
      </aside> */}
      {/* <div className="z-10 shrink-0 self-end max-w-full h-64 bg-white rounded-2xl border border-lime-300 border-solid w-[327px] max-md:mr-1.5" /> */}
    </div>
  );
}
