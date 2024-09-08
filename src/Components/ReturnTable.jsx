import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { markdownStringChecker } from "../utils";

const ReturnTable = ({ component, table }) => {
  const [widthin, setInnerWidth] = useState(window.innerWidth);
  console.log(widthin);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    }
  }, [widthin]);
  
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-3xl font-semibold">Props</h3>
      <p className="text-md text-slate-600 font-medium">
        The <span>{component[0].toUpperCase()}</span>
        <span>{component.slice(1)}</span> component accepts the following props:
      </p>
      <div className="w-full overflow-x-auto flex flex-col bg-slate-100 rounded-lg p-3 text-md text-slate-600 font-medium">
        <table className={`${widthin <= 975 ? "min-w-[800px]":""}`}>
          <thead>
            <tr>
              <th className="text-left text-black font-bold">Name</th>
              <th className="text-left text-black font-bold">Type</th>
              <th className="text-left text-black font-bold">Default</th>
              <th className="text-left text-black font-bold">Description</th>
            </tr>
          </thead>
          <tbody>
            {table.map((data) => (
              <tr key={uuidv4()}>
                <td className="text-left pt-2 pr-5 text-blue-700 font-bold">
                  {data.name}
                </td>
                <td className="text-left pt-2 pr-5">
                  <span className="p-1 bg-white rounded-md text-black font-semibold">
                    {data.type}
                  </span>
                </td>
                {data.default !== undefined ? (
                  <td className="text-left text-black pt-2 pr-5">
                    {data.default}
                  </td>
                ) : (
                  <td className="text-center pt-2 pr-5">
                    <span className="px-2 bg-white rounded-md text-black font-bold">
                      -
                    </span>
                  </td>
                )}
                <td className="text-left pt-2 max-w-96">
                  {markdownStringChecker(data.description)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReturnTable;
