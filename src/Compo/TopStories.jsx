import React from "react";

const stories = [
  {
    source: "The Times of India",
    time: "3h",
    title: "Meghalaya honeymoon murder: Sonam remains silent under police custody",
    label: "Breaking",
  },
  {
    source: "News18",
    time: "5h",
    title: "'Arrest People In Face Masks Now': Trump's New Order As Los Angeles...",
  },
  {
    source: "Times Now",
    time: "1d",
    title: "Elon Musk Rammed Into US Treasury Secy Like A 'Rugby Player'; Did White...",
  },
 
];

const TopStories = () => (
  <div className=" bg-[#2a2a2a] rounded-xl p-2 shadow-md m-2 ">
    <h2 className="text-sm font-semibold mb-4">🔥 Top stories</h2>
    <ul className="space-y-3">
      {stories.map((story, i) => (
        <li key={i} className="border-b border-gray-700 pb-2">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            {story.label && (
              <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded">{story.label}</span>
            )}
            <span>{story.source}</span>
            <span>· {story.time}</span>
          </div>
          <p className="text-white font-medium">{story.title}</p>
        </li>
      ))}
    </ul>
    <div className="text-right mt-2 font-extrabold px-2.5 text-orange-600 text-sm cursor-pointer">See more</div>
  </div>
);

export default TopStories;