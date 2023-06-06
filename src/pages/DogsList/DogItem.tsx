import { useCallback, useState } from "react";
import { Dog } from "../../data/dogs";
import { openGoogleMaps } from "../../utils/GoogleMapsUtils";
import { Walk } from "../../App";
import React from "react";

export const DogItem = React.memo(
  ({ dog, className }: { dog: Dog; className: string }) => {
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
        const storageKey =
          walk === Walk.MORNING ? Walk.MORNING : Walk.AFTERNOON;
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
      <div className={`flex border-b-2 px-4 py-6 ${className}`}>
        <div className="flex-1">
          <div className="flex items-center">
            {dog.collarSize && (
              <span className="text-md mr-2 inline-block h-8 w-8 rounded-full bg-red-900 text-center font-bold uppercase leading-8 text-white">
                {dog.collarSize}
              </span>
            )}
            <span className="text-3xl font-semibold">{dog.name}</span>
          </div>
          <span className="text-lg">{dog.address}</span>
        </div>

        <div className="space-between flex flex-col justify-between	space-y-4">
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
              className="text-4xl opacity-20 drop-shadow-md peer-checked:opacity-100"
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
              className="text-4xl opacity-20 drop-shadow-md peer-checked:opacity-100"
            >
              🕝
            </label>
          </div>
        </div>

        <button
          className="ml-2 inline-block rounded-lg bg-green-600 p-4 text-center text-4xl font-bold tracking-wider text-white shadow-inner drop-shadow-md"
          onClick={() => openGoogleMaps(dog.address)}
        >
          🚘
        </button>
      </div>
    );
  }
);
