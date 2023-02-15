import SignInWithGoogle from "./components/SignInWithGoogle";
import { Store } from "./context/Context";
import MainLayout from "./MainLayout";

const App = () => {
  const { loggedIn } = Store();
  let user = JSON.parse(localStorage.getItem("user"));

  return <>{user ? <MainLayout /> : <SignInWithGoogle />}</>;
};

export default App;
