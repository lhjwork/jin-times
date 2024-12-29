export default function Login() {
  return (
    <div>
      <div className="shadow-md flex justify-center p-4">jin Times</div>
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="text-gray-700 font-medium text-3xl ml-12">Log in or create an account</h1>
        <br />
        <label htmlFor="font-bold text-base">Email Address</label>
        <br />
        <input className="w-6/12 p-2 border border-black " />
        <br />
        <button className="bg-black text-white w-6/12 p-12 mt-4">Continue</button>
        <h1 className="flex justify-center mt-4">or</h1>
        <h1 className="mt-4">
          By continuing, you agree to the updated Terms of Sale, Terms of <br /> Service, and Privacy Policy
        </h1>
        <div className="border border-black w-6/12 p-2 flex justify-center items-center mt-4">
          <img src="" alt="" className="w-4 h-4 " />
          <h1 className="font-bold">Continue with Google</h1>
        </div>
        <div className="border border-black w-6/12 p-2 flex  justify-center items-center  mt-4">
          <img src="" alt="" className="w-4 h-4" />
          <h1 className="font-bold">Continue with GitHub</h1>
        </div>
        <div className="border border-black w-6/12 p-2 flex justify-center items-center  mt-4">
          <img src="" alt="" className="w-4 h-4 " />
          <h1 className="font-bold">Continue with Naver</h1>
        </div>
      </div>
    </div>
  );
}
