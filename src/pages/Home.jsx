import AddPost from "../components/AddPost";
import { Stories, Feed } from "../components/index";

const Home = () => {
  return (
    <section className="flex flex-col gap-3 mt-4  px-4">
      <Stories />
      <AddPost />
      <Feed />
    </section>
  );
};

export default Home;
