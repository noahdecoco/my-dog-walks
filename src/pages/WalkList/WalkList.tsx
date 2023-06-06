import { useEffect, useState } from "react";
import { Walk } from "../../App";
import { WalkItem } from "./WalkItem";
import { Dog } from "../../data/dogs";

export const WalkList = ({ walk }: { walk: Walk }) => {
  const [dogList, setDogLIst] = useState([] as Dog[]);

  const handleClearAll = () => {
    setDogLIst([]);
    localStorage.setItem(walk, "{}");
  };

  useEffect(() => {
    const storedWalkMap = JSON.parse(localStorage.getItem(walk) || "{}");
    const dogList = Object.entries(storedWalkMap).map((walkMap) => {
      return walkMap[1];
    });
    setDogLIst(dogList as Dog[]);
  }, [walk]);

  return (
    <div className="pb-36 pt-20">
      <div className="fixed left-0 right-0 top-0 z-10 h-20 bg-slate-500 px-4 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
        <p className="mt-5 text-center text-4xl text-white">
          {walk === Walk.MORNING ? "🕥 Morning" : "🕝 Afternoon"} round
        </p>
      </div>

      {!dogList.length ? (
        <div className="py-20 text-center text-white">
          <p className="text-5xl">🙁</p>
          <p className="p-10 text-center text-4xl">
            You have no dogs this{" "}
            {walk === Walk.MORNING ? "morning" : "afternoon"}
          </p>
          <p className="px-10 text-2xl">
            Go to 🐕 and click on {walk === Walk.MORNING ? "🕥" : "🕝"} on the
            dogs to add them to your{" "}
            {walk === Walk.MORNING ? "morning" : "afternoon"} round
          </p>
        </div>
      ) : (
        <div className="flex min-h-screen flex-col justify-between">
          <div>
            {dogList.map((dog) => {
              return (
                <WalkItem
                  className="odd:bg-slate-100 even:bg-slate-200"
                  key={dog.id}
                  dog={dog}
                />
              );
            })}
          </div>

          <div className="px-10 pb-8 pt-28 text-center">
            <button
              className="text-md rounded-lg bg-red-500 px-4 py-2 font-bold uppercase tracking-wider text-white"
              onClick={handleClearAll}
            >
              Remove all dogs
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
