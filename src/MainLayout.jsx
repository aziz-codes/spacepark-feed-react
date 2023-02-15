import { Navbar, RightSidebar, Sidebar } from "./components/index";

import { Routes, Route } from "react-router-dom";
import { Store } from "./context/Context";
// const Sidebar = lazy(() => import("./components/Sidebar"));

import SignInWithGoogle from "./components/SignInWithGoogle";
import {
  NewsFeed,
  Peoples,
  Photos,
  Profile,
  Settings,
  Home,
  User,
  Login,
} from "./pages/index";
// import Main from "./skeleton/Main";

const MainLayout = () => {
  return (
    <>
      <section className="bg-homemain ">
        <Navbar />
        <div className="flex justify-between w-full bg-white mt-1 2xl:justify-center ">
          <Sidebar />

          <div className="flex-auto max-w-lg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/peoples" element={<Peoples />} />
              <Route path="/feed" element={<NewsFeed />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/user/:id" element={<User />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          </div>
          <RightSidebar />
        </div>
      </section>
    </>
  );
};

export default MainLayout;
