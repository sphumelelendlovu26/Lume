import { useEffect, useRef } from "react";
import gsap from "gsap";
const Login = () => {
  const formRef = useRef(0);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0 }
      );
    }
  }, []);

  return (
    <div
      ref={formRef}
      className="fixed inset-0  border-gray-200 flex items-center container justify-center "
    >
      <form className=" rounded-lg p-6 w-full h-full sm:h-2/3 max-w-md  shadow-lg">
        <fieldset>
          <legend className="text-xl font-bold text-center ">Login</legend>
          <div className="formInputs ">
            <span className=" flex items-center">
              <box-icon type="solid" name="envelope"></box-icon>
            </span>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full  px-3 py-2 rounded"
            />{" "}
            <label htmlFor="email" className="block  font-medium">
              Email
            </label>
          </div>
          <div className="formInputs">
            <span className=" flex items-center">
              <box-icon name="lock"></box-icon>
            </span>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="w-full  px-3 py-2 rounded"
            />{" "}
            <label htmlFor="password" className="block  font-medium">
              Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded"
          >
            Log In
          </button>
        </fieldset>
      </form>
    </div>
  );
};
export default Login;
