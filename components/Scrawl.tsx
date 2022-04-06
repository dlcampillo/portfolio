import React from "react";

import Paragraph from "@/components/Paragraph";

interface ScrawlProps {
  date: Date;
}

const Scrawl: React.FC<ScrawlProps> = ({ children, date }) => {
  const getParsedDate = () =>
    date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      weekday: "short",
      year: "numeric",
    });

  return (
    <li className="flex flex-col py-2 border-b rounded-md sm:px-4 sm:-mx-4">
      <Paragraph>
        <span className="text-xl font-cursive">&quot;{children}&quot;</span>
      </Paragraph>
      <time dateTime={date.toString()}>{getParsedDate()}</time>
    </li>
  );
};

export default Scrawl;
