import { Stories, Feed } from "../components/index";

const Home = () => {
  return (
    <section className="flex flex-col gap-3 mt-4">
      <Stories />
      <Feed />
    </section>
  );
};

export default Home;
