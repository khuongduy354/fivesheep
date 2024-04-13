import * as React from "react";

function BackButton() {
  return (
    <div className="flex flex-col text-base font-bold whitespace-nowrap text-slate-700 max-md:max-w-full">
      <div className="flex gap-2.5 self-start">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e59664eaf9d299f3580b38514c0c75784414f63b1b15e2811e93e48b84b98179?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt="Back arrow icon"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Back</div>
      </div>
      <div className="shrink-0 mt-2 border-solid bg-neutral-100 border-[3px] border-neutral-100 h-[3px] max-md:max-w-full" />
    </div>
  );
}

function Header() {
  return (
    <header className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
      <BackButton />
      <div className="flex gap-5 justify-between">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4193de3412071f18e76d7da9a7214d41eb8ba5cacdcfcd910807a980135fbad0?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt="Profile icon"
          className="shrink-0 self-start mt-1.5 aspect-[1.52] w-[50px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c12c7f07bb27d665962104dca56b6bb13a04894f20688ef3876be56788a81fa?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt="Search icon"
          className="shrink-0 aspect-[1.11] w-[42px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0335ecf184dc10c928ca6c71bbb117e1154b367e6276b34c47514b77dd72a2c?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt="Menu icon"
          className="shrink-0 my-auto w-10 aspect-[1.14]"
        />
      </div>
    </header>
  );
}

function LessonButton() {
  return (
    <div className="flex overflow-hidden relative flex-col px-10 py-5 text-base font-bold aspect-[2.8] fill-lime-300 w-[241px] max-md:px-5 max-md:mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60056598ee6f5aa894afa7a4eb710f7de5343696d9bd1ff44df8f0dc20c4995c?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative text-white">Start your first lesson</div>
      <div className="relative justify-center self-center px-5 py-1.5 mt-2.5 text-lime-300 rounded-2xl bg-neutral-100">
        Let's go!
      </div>
    </div>
  );
}

function RoundImage({ src, alt }) {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center rounded-full aspect-square bg-neutral-100 h-[62px] w-[62px]">
      <img
        src={src}
        alt={alt}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative shrink-0 w-full rounded-full bg-neutral-100 h-[62px]" />
    </div>
  );
}

export function Roadmap() {
  return (
    <div className="flex flex-col items-center px-5 pb-20 bg-white max-md:px-5">
      <main className="flex z-10 flex-col mt-0 w-full max-w-[1017px] max-md:mt-0 max-md:max-w-full">
        <Header />
        <h1 className="mt-5 text-2xl font-black text-lime-300 max-md:max-w-full">
          Part 1: Phishing
        </h1>
      </main>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/024c3e09c5bfd0bbc172ab06909b78c6cf13a600f5031f4792a8a8c493b057c0?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
        alt=""
        className="mt-20 bg-lime-300 rounded-full aspect-square h-[62px] w-[62px] max-md:mt-10"
      />
      <div className="flex z-10 gap-5 justify-between items-start mt-0 max-w-full w-[189px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6659ae24484dc604753f7b4273cfaecfe039cec72e14fb72aa96f15286c99558?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt="Character 1"
          className="shrink-0 self-start aspect-square w-[73px]"
        />
        <RoundImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1f0b42c9af65baba261dc706b63595603329f34747b01a15631998b4fc9ce7a?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt=""
        />
      </div>
      <div className="z-10 self-end -mt-0 max-w-full w-[606px] max-md:mr-1.5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <LessonButton />
          </div>
          {/* <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="shrink-0 mx-auto mt-16 max-w-full h-64 bg-white rounded-2xl border border-lime-300 border-solid w-[327px] max-md:mt-10" />
          </div> */}
        </div>
      </div>
      <div className="flex gap-4 items-start mt-0 max-md:mt-0">
        <div className="flex flex-col self-start">
          <div className="flex z-10 gap-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c24d32ac83a922822845814eb4ca48ccdcbe55875053f480024a0db8dfbd6a4?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
              alt="Character 2"
              className="shrink-0 max-w-full aspect-square w-[133px]"
            />
            {/* <RoundImage
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f0403ef61be9576f567c741484ca61f190ec423b1b33986a01e811257d66908?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
              alt=""
            /> */}
          </div>
          <div className="flex flex-col justify-center self-end mr-8 rounded-full bg-neutral-100 w-[81px] max-md:mr-2.5">
            <div className="flex justify-center items-center px-5 py-4 bg-lime-300 rounded-full">
              <div className="flex overflow-hidden relative flex-col justify-center items-center aspect-square w-[43px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9564769ca0765e4c8904d4aaee2962a3540a8489ee4f3ad71f0ad659a37369f3?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
                  alt=""
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2480c60ea1a406b4457932616dc7623392f5006e928f950303e0286a1b41dab?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
                  alt="Character 3"
                  className="w-full aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <RoundImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1f0b42c9af65baba261dc706b63595603329f34747b01a15631998b4fc9ce7a?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt=""
          className="shrink-0 self-end mt-48 max-md:mt-10"
        />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0260089e2d9f57ae74255c25ec08538f3c06d2e85260396ef5c3b37757d64105?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
        alt="Character 4"
        className="mt-4 max-w-full aspect-square w-[114px]"
      />
      <div className="flex z-10 gap-5 justify-between items-start mt-0">
        <RoundImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f0403ef61be9576f567c741484ca61f190ec423b1b33986a01e811257d66908?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt=""
          className="self-end mt-11 max-md:mt-10"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6659ae24484dc604753f7b4273cfaecfe039cec72e14fb72aa96f15286c99558?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt="Character 5"
          className="shrink-0 self-start aspect-square w-[73px]"
        />
      </div>
    </div>
  );
}
