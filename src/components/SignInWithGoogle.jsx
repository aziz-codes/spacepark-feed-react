import googleIcon from "../assets/icongoogle.png";
import sidelogo from "../assets/sidelogo.png";
import { Store } from "../context/Context";
const SignInWithGoogle = () => {
  const { googleSignin } = Store();
  return (
    <section className="flex justify-center items-center h-screen ">
      <div className="max-w-sm  relative flex flex-col gap-7 px-4">
        <div className="flex flex-row gap-2 items-center">
          <img src={sidelogo} alt="logo" />
          <h4 className="text-4xl font-bold">Spacepark</h4>
        </div>
        <div>
          <h4 className="ml-3">Sign in with your google account to continue</h4>
        </div>
        <div
          role="button"
          className="max-w-sm h-14 flex justify-center items-center 
        gap-3 border rounded-sm p-2 hover:scale-110 duration-75 transition-all ease-in-out"
          onClick={() => {
            googleSignin();
          }}
        >
          <img
            src={googleIcon}
            className="h-9 w-9 rounded-full"
            alt="provider"
          />
          <h4 className="font-semibold ">Sign in with Google</h4>
        </div>
      </div>
    </section>
  );
};

export default SignInWithGoogle;
