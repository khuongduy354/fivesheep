import { useRef, useState } from "react";
import { multileChoices } from "../../question-dataset";
import { useEffect } from "react";
import { ShowDecision } from "./DecisionViewer";

export const QuestionLoader = ({ id = 0 }) => {
  const [convos, setConvos] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [decision, setDecision] = useState(null);
  const bottomRef = useRef(null);
  useEffect(() => {
    loadNext();
  }, []);

  const scrollBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
    }
  };
  useEffect(scrollBottom, [convos]);

  const loadNext = () => {
    if (currentIdx >= multileChoices[id].conversations.length) return;
    const currentConvo = multileChoices[id].conversations[currentIdx];
    setConvos([...convos, currentConvo]);
    if (currentConvo.decisionIdx !== -1) {
      setDecision(multileChoices[id].decisions[currentConvo.decisionIdx]);
    }
    setCurrentIdx(currentIdx + 1);
    scrollBottom();
  };

  const MainQuestion = () => {
    return (
      <div>
        <div id="chat-container" className="flex content-center justify-center">
          <div class="bg-white shadow-md rounded-lg w-2/3">
            <div ref={bottomRef} id="chatbox" class=" p-4 h-80 overflow-y-auto">
              {convos.map((conver, idx) => {
                const isFromCuu = conver.from === "Cừu";
                return (
                  <div
                    key={idx}
                    className={`mb-2 ${isFromCuu ? "text-right" : "text-left"}`}
                  >
                    <p
                      className={`${
                        isFromCuu
                          ? "bg-[#B4FF55] text-white"
                          : "bg-[#F5F5F5] text-[#B4FF55]"
                      }  rounded-lg py-2 px-4 inline-block`}
                    >
                      <b>{conver.content}</b>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };
  const onDecisionMade = (ansObj) => {
    switch (ansObj.state) {
      case 1:
        alert("Correct");
        break;
      case -1:
        alert("Incorrect");
        break;
      case 0:
        alert("Neutral");
        break;
      default:
        break;
    }
    setDecision(null);
  };
  return (
    <div>
      {decision ? (
        <ShowDecision onClick={onDecisionMade} decision={decision} />
      ) : (
        <MainQuestion />
      )}

      <button
        onClick={() => {
          loadNext();
        }}
      >
        Continue
      </button>
    </div>
  );
};
