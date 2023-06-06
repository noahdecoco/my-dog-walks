import { Dog } from "../../data/dogs";
import { openGoogleMaps } from "../../utils/GoogleMapsUtils";

export const WalkItem = ({
  dog,
  className,
}: {
  dog: Dog;
  className?: string;
}) => {
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

      <button
        className="ml-2 inline-block rounded-lg bg-green-600 p-4 text-center text-4xl font-bold tracking-wider text-white shadow-inner drop-shadow-md"
        onClick={() => openGoogleMaps(dog.address)}
      >
        🚘
      </button>
    </div>
  );
};
