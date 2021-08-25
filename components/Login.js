import Image from "next/image"
import { signIn } from "next-auth/client";

function Login() {
    return (
      <div className="relative flex flex-col  items-center justify-center ">
        <div className="relative ">
          <Image
            // src="https://links.papareact.com/qd3"
            src="https://links.papareact.com/5me"
            // layout="fill"
            layout="fixed"
            className="relative"
            width={200}
            height={200}
          />
        </div>

        <button
                onClick={signIn}
          className="mt-4 text-white bg-blue-500 px-3 py-2 rounded-xl  "
        >
          Login with Facebook
        </button>
      </div>
    );
}

export default Login
