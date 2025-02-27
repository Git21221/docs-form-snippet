import React, { Fragment } from "react";
import CurrentPageSubTopics from "./CurrentPageSubTopics";
import { scrollToPos } from "../utils.jsx";

const CurrentPageTopics = ({ subContentToShow }) => {
  return (
    <div className="w-[270px] h-[calc(100vh-4rem)] sticky top-16  hidden custom-md:flex items-center font-serif flex-col border-l-2 border-slate-200 p-5 overflow-x-hidden overflow-y-auto">
      <h3 className="tracking-widest font-semibold text-xl font-sans underline mb-5">
        CONTENT
      </h3>
      <div className="min-w-[180px] max-w-[250px]">
        {subContentToShow.map((subTopic) => (
          <Fragment key={subTopic.id}>
            <p
              title={`${subTopic.topicHeading}`}
              onClick={() =>
                scrollToPos(
                  `${subTopic.topicHeading.replace(/\s+/g, "").toLowerCase()}`
                )
              }
              className="text-zinc-700 text-lg font-sans text-left tracking-wider font-semibold truncate cursor-pointer"
            >
              {subTopic.topicHeading}
            </p>
            {subTopic.subContents !== undefined ? (
              <CurrentPageSubTopics content={subTopic.subContents} />
            ) : (
              ""
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default CurrentPageTopics;
