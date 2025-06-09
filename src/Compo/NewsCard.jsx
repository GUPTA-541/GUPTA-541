import React from "react";

const NewsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {dummyArticles.map((item, id) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          key={id}
          className="bg-[#484545] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full"
        >
          <img
            src={item.urlToImage}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-orange-400">{item.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{item.description}</p>
            <button className="text-sm mt-3 px-4 py-2 text-white font-bold bg-amber-500 hover:bg-amber-700 rounded">
              Read More
            </button>
          </div>
        </a>
      ))}
    </div>
  );
};

const dummyArticles = [
  {
    title: "AI Revolutionizes Frontend Development",
    description:
      "AI-powered design tools are now helping developers create stunning UIs with minimal effort.",
    urlToImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIpnfINRG3A5HCEfbOrrUnul-zHr2YcXSCaQ&s",
    url: "https://example.com/ai-frontend",
  },
  {
    title: "New React Update Improves Performance",
    description:
      "React 19 introduces a new compiler that speeds up rendering and reduces bundle size.",
    urlToImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4o5oPjvPbxgjprv7LutPFYB7B8Bh-yCN5w&s",
    url: "https://example.com/react-update",
  },
  {
    title: "5 Best CSS Frameworks in 2025",
    description:
      "Tailwind, Bootstrap, and more — here are the most popular CSS frameworks this year.",
    urlToImage:
      "https://gegosoft.com/wp-content/uploads/2024/12/Top-5-CSS-UI-Kits-in-2024.webp",
    url: "https://example.com/css-frameworks",
  },
  {
    title: "5 Temples Where Gods Are Said to Live Forever",
    description:
      "In a world that constantly moves forward, where everything seems temporary, fleeting.",
    urlToImage:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1FsPtx.img?w=616&h=411&m=6",
    url: "https://example.com/react-update",
  },
  {
    title: "Nurturing Student's Entrepreneurial Talent",
    description:
      "The Amity Innovation Incubator is a pioneering concept in the context of Indian Universities.",
    urlToImage:
      "https://f2.leadsquaredcdn.com/t/t20171020170945/content/common/images/amity_innovation.jpg",
    url: "https://example.com/css-frameworks",
  
  },
  {
    title: "Ballon d'Or 2025 Power Rankings",
    description:
      "Nuno Mendes and Vitinha boost podium chances with Nations League glory as Lamine Yamal falls short in final defeat",
    urlToImage:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1FS42E.img?w=1920&h=1080&q=60&m=2&f=jpg",
    url: "https://example.com/react-update",
  },
];

export default NewsCard;
