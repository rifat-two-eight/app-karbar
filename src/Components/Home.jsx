import Slider from "./Slider";
import { useLoaderData } from "react-router";
import HighRated from "./HighRated";
import Productive from "./Productive";
import HealthCareApp from "./HealthCareApp";
import Edu from "./Edu";

const Home = () => {
  const apps = useLoaderData();
  const highRate = apps.slice(0, 4);
  const ProductivityApp = apps.filter((app) => app.category === "Productivity");
  const HealthApp = apps.filter((app) => app.category === "Healthcare");
  const educationalApp = apps.filter((app) => app.category === "Education");

  return (
    <div>
      <title>App KarBar | Home</title>
      <Slider></Slider>
      {/* high rating part */}
      <h2 className="text-center font-semibold text-3xl mt-8">Trending Apps</h2>
      <div className="flex gap-3 mt-5">
        {highRate.map((app) => (
          <HighRated key={app.id} app={app}></HighRated>
        ))}
      </div>
      {/* healthcare section */}
      <h2 className="text-center font-semibold text-3xl mt-8">
        Healthcare Apps
      </h2>
      <div className="flex gap-3 mt-5 justify-center">
        {HealthApp.map((app) => (
          <HealthCareApp key={app.id} app={app}></HealthCareApp>
        ))}
      </div>
      {/* productivity section */}
      <h2 className="text-center font-semibold text-3xl mt-8">
        Productivity Apps
      </h2>
      <div className="flex gap-3 mt-5 justify-center">
        {ProductivityApp.map((app) => (
          <Productive key={app.id} app={app}></Productive>
        ))}
      </div>

      {/* education section */}
      <h2 className="text-center font-semibold text-3xl mt-8">
        Educational Apps
      </h2>
      <div className="flex gap-3 mt-5 justify-center">
        {educationalApp.map((app) => (
          <Edu key={app.id} app={app}></Edu>
        ))}
      </div>
      {/* extra section */}
      <h2 className="text-center font-semibold text-3xl mt-8 mb-4">
        FAQ About It
      </h2>

      <div className="flex flex-col gap-3 mb-10">
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How can I download an app from your platform?
          </div>
          <div className="collapse-content text-sm">
            Click on the app you’re interested in and select the “Download”
            button. You’ll be redirected to the official app store or download
            page.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Are the app ratings and reviews verified?
          </div>
          <div className="collapse-content text-sm">
            Yes, we collect ratings and reviews from real users and regularly
            moderate content to ensure authenticity.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Can I submit my own app to be featured?
          </div>
          <div className="collapse-content text-sm">
            Yes! Use the “Submit App” form on our site and provide all required
            details. Our team will review your submission shortly.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How are trending apps selected?
          </div>
          <div className="collapse-content text-sm">
            Trending apps are determined based on user ratings, download count,
            and recent popularity within the community.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Is there a way to filter apps by category or rating?
          </div>
          <div className="collapse-content text-sm">
            Absolutely. You can filter apps by category, rating, and even search
            by name using our smart filter and search tools.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
