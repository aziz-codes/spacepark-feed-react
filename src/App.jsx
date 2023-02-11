import {
  Navbar,
  Sidebar,
  Stories,
  Feed,
  RightSidebar,
} from "./components/index";
const App = () => {
  return (
    <section>
      <Navbar />
      <div className="flex justify-between w-full bg-red-500 mt-1">
        <Sidebar />
        <div className="flex-2">
          <Stories />
          <Feed />
        </div>
        <RightSidebar />
      </div>
    </section>
  );
};

export default App;
