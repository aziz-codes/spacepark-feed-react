import googleIcon from "../assets/icongoogle.png";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../config";\
import { Store } from "../context/Context";
const SignInWithGoogle = () => {
  const { googleSignin, user } = Store();
  return (
    <section className="flex justify-center items-center h-screen flex-col gap-5">
      <div>
        <h4>Sign in with your google account to continue</h4>
      </div>
      <div
        role="button"
        className="max-w-sm h-14 flex justify-center items-center 
        gap-3 border rounded-sm p-2 hover:scale-110 duration-75 transition-all ease-in-out"
        onClick={() => {
          googleSignin();
        }}
      >
        <img src={googleIcon} className="h-9 w-9 rounded-full" alt="provider" />
        <h4 className="font-semibold ">Signin with Google</h4>
      </div>
    </section>
  );
};

export default SignInWithGoogle;
