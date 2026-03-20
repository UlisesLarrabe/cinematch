import { Region } from "@/types/region.type";
import React from "react";

const RegionSelect = ({
  regionSelected,
  setRegionSelected,
  regions,
}: {
  regionSelected: string;
  setRegionSelected: React.Dispatch<React.SetStateAction<string>>;
  regions: Region[];
}) => {
  return (
    <section>
      <p className="text-base md:text-lg font-semibold text-red-neutral">
        Paso 3:
      </p>
      <h2 className="text-3xl md:text-4xl font-bold">
        Tu <span className="text-red-neutral">País</span>
      </h2>
      <p className="text-sm md:text-base text-gray-300 mt-2 max-w-3xl mb-6">
        Para mostrarte solo las películas disponibles en tu región.
      </p>

      <div className="relative w-full md:w-1/3">
        <select
          value={regionSelected}
          onChange={(e) => setRegionSelected(e.target.value)}
          className="w-full appearance-none bg-gray-800 border border-gray-700 text-white py-3 px-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-neutral focus:border-transparent cursor-pointer"
        >
          {regions.map((region) => (
            <option key={region.iso_3166_1} value={region.iso_3166_1}>
              {region.native_name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default RegionSelect;
