// =============== SHOW DECISION componen
function Avatar({ src, alt }) {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center w-6 aspect-square">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-cover absolute inset-0 size-full"
      />
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="w-full aspect-square"
      />
    </div>
  );
}

function ChatMessage({ ansObj, onClick = null }) {
  return (
    <button
      onClick={() => {
        onClick && onClick(ansObj);
      }}
      className="justify-center px-11 py-7 text-lime-300 rounded-3xl bg-neutral-100 max-md:px-5 max-md:max-w-full"
    >
      {ansObj.answer}
    </button>
  );
}

function AssistantMessage({ children }) {
  return (
    <div className="justify-center px-9 py-5 bg-lime-300 rounded-[65px] max-md:px-5 max-md:max-w-full">
      {children}
    </div>
  );
}

export function ShowDecision({ decision, onClick = null }) {
  return (
    <div className="px-20 bg-white max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:max-w-full">
            {/* <Avatar
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/919ae1ac6a4f252e11d6f72b3ce3fa9d0d2719a4ec2b159e9e3bd8e240672a8a?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
              alt=""
            /> */}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/245afa51c123a1e88d192b4376ced2a93e5430f762bdf4ffb2e71f751f9ad192?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
              alt=""
              className="self-end mt-28 max-w-full aspect-square w-[447px] max-md:mt-10"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-16 text-xl font-bold max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col pl-9 mt-20 text-white max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <AssistantMessage>{decision.question}</AssistantMessage>
            </div>
            {decision.answers.map((ansObj, index) => {
              return (
                <ChatMessage key={index} ansObj={ansObj} onClick={onClick} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
