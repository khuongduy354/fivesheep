import * as React from "react";
const InCorrectPopup = ({ popUpCb }) => {
  function IncorrectMessage() {
    return (
      <div className="flex justify-center items-center px-16 py-20 w-full  max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-48 mb-12 w-full max-w-[967px] max-md:my-10 max-md:max-w-full">
          <h1 className="text-8xl font-bold text-center text-white max-md:max-w-full max-md:text-4xl">
            INCORRECT
          </h1>
          <p className="mt-1.5 text-2xl font-light text-center text-white">
            Oh no, you can try again
          </p>
          <div className="flex gap-5 mt-4 text-5xl font-bold text-center text-white max-md:text-4xl">
            <p className="flex-auto my-auto max-md:text-4xl">-5 Points</p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f78628b9e7d9f763858ae5d8bf9e592acec3d67ac899431ab3a95944ccbf10f8?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
              alt="Decorative image"
              className="shrink-0 aspect-[0.94] w-[71px]"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center bg-black bg-opacity-30">
      <IncorrectMessage />
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-center items-center">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <button
            onClick={popUpCb}
            className="grow justify-center items-center px-16 py-7 w-full text-6xl font-bold text-center whitespace-nowrap bg-white border-solid border-[5px] border-black border-opacity-30 rounded-[65px] text-black text-opacity-30 max-md:px-5 max-md:mt-10 max-md:text-4xl"
            aria-label={"Back"}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
const CorrectPopup = ({ popUpCb }) => {
  function CorrectMessage() {
    return (
      <div className="mt-6 text-8xl font-bold text-center text-white max-md:max-w-full max-md:text-4xl">
        CORRECT
      </div>
    );
  }

  function CorrectSubMessage() {
    return (
      <div className="mt-1.5 text-2xl font-light text-center text-lime-600">
        You did a great job
      </div>
    );
  }

  function PointsMessage() {
    return (
      <div className="flex gap-4 text-5xl font-bold text-center text-lime-600 max-md:text-4xl">
        <div className="grow my-auto max-md:text-4xl">+10 Points</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f78628b9e7d9f763858ae5d8bf9e592acec3d67ac899431ab3a95944ccbf10f8?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt="Points icon"
          className="shrink-0 aspect-[0.94] w-[71px]"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex justify-center items-center px-16 py-20 w-full bg-lime-300 bg-opacity-70 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-14 mb-12 w-full max-w-[967px] max-md:my-10 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20199396bc92b7203e9d965b54c960a44ce5125dc6ef4dd09eff8ceb48d494f1?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
            alt="Correct icon"
            className="max-w-full aspect-[2.38] w-[261px]"
          />
          <CorrectMessage />
          <CorrectSubMessage />
          <PointsMessage />
          <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-center items-center">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <button
                  onClick={popUpCb}
                  className="grow justify-center items-center px-16 py-7 w-full text-6xl font-bold text-center text-lime-300 whitespace-nowrap bg-white border-lime-300 border-solid border-[5px] rounded-[65px] max-md:px-5 max-md:mt-10 max-md:text-4xl"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const PopUp = ({ isCorrect = true, popUpCb = () => {} }) => {
  return (
    <div>
      {isCorrect ? (
        <CorrectPopup popUpCb={popUpCb} />
      ) : (
        <InCorrectPopup popUpCb={popUpCb} />
      )}
    </div>
  );
};
