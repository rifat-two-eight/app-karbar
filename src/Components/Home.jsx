import React from "react";
import Slider from "./Slider";
import { useLoaderData } from "react-router";
import HighRated from "./HighRated";

const Home = () => {
  const apps = useLoaderData();
  const highRate = apps.slice(0, 4);

  return (
    <div>
      <Slider></Slider>
      {/* high rating part */}
      <h2 className="text-center font-semibold text-3xl mt-8">Trending Apps</h2>
      <div className="flex gap-3 mt-5">
        {highRate.map((app) => (
          <HighRated key={app.id} app={app}></HighRated>
        ))}
      </div>
    </div>
  );
};

export default Home;
