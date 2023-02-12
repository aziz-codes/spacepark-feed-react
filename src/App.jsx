import {
  Navbar,
  Sidebar,
  Stories,
  Feed,
  RightSidebar,
} from "./components/index";
import { Routes, Route } from "react-router-dom";
import {
  NewsFeed,
  Peoples,
  Photos,
  Profile,
  Settings,
  Home,
} from "./pages/index";
const App = () => {
  return (
    <section className="bg-homemain">
      <Navbar />
      <div className="flex justify-between w-full bg-red-500 mt-1">
        <Sidebar />
        {/* <div className="flex-2">
          <Stories />
          <Feed />
        </div>
         */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peoples" element={<Peoples />} />
          <Route path="/feed" element={<NewsFeed />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <RightSidebar />
      </div>
    </section>
  );
};

export default App;
