import {
  Navbar,
  // Stories,
  // Feed,
  RightSidebar,
} from "./components/index";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Sidebar = lazy(() => import("./components/Sidebar"));
import {
  NewsFeed,
  Peoples,
  Photos,
  Profile,
  Settings,
  Home,
  User,
} from "./pages/index";
import SidebarSkeleton from "./skeleton/SidebarSkeleton";
const App = () => {
  return (
    <section className="bg-homemain ">
      <Navbar />
      <div className="flex justify-between w-full bg-white mt-1 2xl:justify-center ">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <div className="flex-auto max-w-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/peoples" element={<Peoples />} />
            <Route path="/feed" element={<NewsFeed />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/user/:id" element={<User />} />
          </Routes>
        </div>
        <RightSidebar />
      </div>
    </section>
  );
};

export default App;
