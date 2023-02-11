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
      <div className="grid grid-cols-3">
        <Sidebar />
        <div>
          <Stories />
          <Feed />
        </div>
        <RightSidebar />
      </div>
    </section>
  );
};

export default App;
