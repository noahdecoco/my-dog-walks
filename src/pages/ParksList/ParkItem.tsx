import React from "react";
import { Park } from "../../data/walks";
import { openGoogleMaps } from "../../utils/GoogleMapsUtils";

export const ParkItem = React.memo(
  ({ park, className }: { park: Park; className?: string }) => {
    return (
      <div className={`flex border-b-2 px-4 py-6 ${className}`}>
        <div className="flex-1">
          <div className="flex items-center">
            <span className="text-3xl">{park.name}</span>
          </div>
          <span className="text-xl">{park.address}</span>
        </div>

        <button
          className="ml-2 inline-block rounded-lg bg-green-600 p-4 text-center text-4xl font-bold tracking-wider text-white shadow-inner drop-shadow-md"
          onClick={() => openGoogleMaps(park.address)}
        >
          🚘
        </button>
      </div>
    );
  }
);
