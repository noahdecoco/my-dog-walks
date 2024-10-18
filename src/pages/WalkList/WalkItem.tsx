import { useState, useCallback } from "react";
import { Walk } from "../../App";
import { Dog } from "../../data/dogs";
import { openGoogleMaps } from "../../utils/GoogleMapsUtils";

export const WalkItem = ({
  dog,
  className,
}: {
  dog: Dog;
  className?: string;
}) => {
  const [isInMorningWalk, setIsInMorningWalk] = useState(() => {
    const morningWalk = localStorage.getItem(Walk.MORNING);
    return morningWalk && JSON.parse(morningWalk)[dog.id] ? true : false;
  });

  const [isInAfternoonWalk, setIsInAfternoonWalk] = useState(() => {
    const afternoonWalk = localStorage.getItem(Walk.AFTERNOON);
    return afternoonWalk && JSON.parse(afternoonWalk)[dog.id] ? true : false;
  });

  const handleWalkClick = useCallback(
    (walk: Walk) => {
      const storageKey = walk === Walk.MORNING ? Walk.MORNING : Walk.AFTERNOON;
      const dogWalk = JSON.parse(localStorage.getItem(storageKey) || "{}");

      if (dogWalk[dog.id]) {
        delete dogWalk[dog.id];
        if (walk === Walk.MORNING) {
          setIsInMorningWalk(false);
        } else {
          setIsInAfternoonWalk(false);
        }
      } else {
        dogWalk[dog.id] = dog;
        if (walk === Walk.MORNING) {
          setIsInMorningWalk(true);
        } else {
          setIsInAfternoonWalk(true);
        }
      }

      localStorage.setItem(storageKey, JSON.stringify(dogWalk));
    },
    [dog.id]
  );

  return (
    <div className={`flex border-b-2 px-2 py-4 ${className}`}>
      {dog.photo && (
        <img
          className="mr-2 h-20 w-20 rounded-full drop-shadow-md"
          src={`https://noahdecoco.com/my-dog-walks/photos/${dog.photo}`}
          alt=""
        />
      )}
      <div className="flex-1">
        <div className="flex items-center">
          <span className="mr-2 text-2xl font-semibold">{dog.name}</span>|
          {dog.collarSize && (
            <span className="ml-2 text-center text-xl uppercase">
              {dog.collarSize}
            </span>
          )}
        </div>
        <p className="text-md">
          {dog.address}
          <br />
          {dog.address2}
        </p>
      </div>

      <div className="space-between flex hidden flex-col justify-between space-y-2">
        <div>
          <input
            type="checkbox"
            id={`${dog.id}-morning-walk-checkbox`}
            checked={isInMorningWalk}
            onChange={() => handleWalkClick(Walk.MORNING)}
            className="peer hidden"
          />
          <label
            htmlFor={`${dog.id}-morning-walk-checkbox`}
            className="text-3xl opacity-20 drop-shadow-md peer-checked:opacity-100"
          >
            🕥
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            id={`${dog.id}-afternoon-walk-checkbox`}
            checked={isInAfternoonWalk}
            onChange={() => handleWalkClick(Walk.AFTERNOON)}
            className="peer hidden"
          />
          <label
            htmlFor={`${dog.id}-afternoon-walk-checkbox`}
            className="text-3xl opacity-20 drop-shadow-md peer-checked:opacity-100"
          >
            🕝
          </label>
        </div>
      </div>

      <button
        className="ml-2 inline-block h-20 w-20 rounded-lg bg-green-600 p-4 text-center text-4xl font-bold tracking-wider text-white shadow-inner drop-shadow-md"
        onClick={() =>
          openGoogleMaps(
            dog.parkingGeoLocation ? dog.parkingGeoLocation : dog.address
          )
        }
      >
        🚘
      </button>
    </div>
  );
};
