import { useEffect, useState } from "react";
import { data as dogList } from "./data/dogs";
import { data as walkList } from "./data/walks";
import { DogsList } from "./pages/DogsList/DogsList";
import { ParksList } from "./pages/ParksList/ParksList";
import { WalkList } from "./pages/WalkList/WalkList";

enum Page {
  ALL_DOGS,
  ALL_PARKS,
  MORNING_WALK,
  AFTERNOON_WALK,
}

export enum Walk {
  MORNING = "MORNING",
  AFTERNOON = "AFTERNOON",
}

function App() {
  const [page, setPage] = useState(Page.ALL_DOGS);

  const getPage = () => {
    switch (page) {
      case Page.ALL_DOGS:
        return <DogsList dogs={dogList} />;

      case Page.ALL_PARKS:
        return <ParksList walks={walkList} />;

      case Page.MORNING_WALK:
        return <WalkList walk={Walk.MORNING} />;

      case Page.AFTERNOON_WALK:
        return <WalkList walk={Walk.AFTERNOON} />;

      default:
        return (
          <div className="p-4">
            <p>Not available yet!</p>
          </div>
        );
    }
  };

  useEffect(() => {
    if (!localStorage.getItem(Walk.MORNING)) {
      localStorage.setItem(Walk.MORNING, JSON.stringify({}));
    }

    if (!localStorage.getItem(Walk.AFTERNOON)) {
      localStorage.setItem(Walk.AFTERNOON, JSON.stringify({}));
    }
  }, []);

  return (
    <div className="App flex min-h-screen flex-col bg-slate-800">
      <div className="h-screen w-screen overflow-scroll">{getPage()}</div>

      <div className="fixed bottom-0 left-0 right-0 flex h-20 bg-slate-400 text-white drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
        <button
          className={`flex-1 border-r disabled:bg-slate-500`}
          disabled={page === Page.ALL_DOGS}
          onClick={() => setPage(Page.ALL_DOGS)}
        >
          <span className="text-3xl">🐕</span>
          <div className="mt-1 text-sm">DOGS</div>
        </button>
        <button
          className="flex-1 border-r text-xl active:bg-slate-500 disabled:bg-slate-500"
          disabled={page === Page.ALL_PARKS}
          onClick={() => setPage(Page.ALL_PARKS)}
        >
          <span className="text-3xl">🏞️</span>
          <div className="mt-1 text-sm">WALKS</div>
        </button>
        <button
          className="flex-1 border-r text-xl active:bg-slate-500 disabled:bg-slate-500"
          disabled={page === Page.MORNING_WALK}
          onClick={() => setPage(Page.MORNING_WALK)}
        >
          <span className="text-3xl">🕥</span>
          <div className="mt-1 text-sm">MORNING</div>
        </button>
        <button
          className="flex-1 text-xl active:bg-slate-500 disabled:bg-slate-500"
          disabled={page === Page.AFTERNOON_WALK}
          onClick={() => setPage(Page.AFTERNOON_WALK)}
        >
          <span className="text-3xl">🕝</span>
          <div className="mt-1 text-sm">AFTERNOON</div>
        </button>
      </div>
    </div>
  );
}

export default App;
