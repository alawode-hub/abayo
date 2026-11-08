const Page = () => {
  return (
    <div className="bg-black flex justify-center pt-16">
     
      <div className="w-96 bg-zinc-900 border border-zinc-800 rounded-xl p-6">

        <div className="text-center">
          <h2 className="text-white font-bold flex justify-center gap-1">
            <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-sm">C</span>   
            clerk
          </h2>
          <h1 className="text-white  mt-3">Sign in to Clerk</h1>
          <p className="text-zinc-400 text-xs mt-1">Welcome back! Please sign in to continue</p>
        </div>

        
        <div className="flex gap-2 mt-6">
          <button className="flex-1 bg-zinc-800 text-white text-xs py-2 rounded-lg border border-zinc-700 flex items-center justify-center gap-1">
            <span>◉</span> GitHub
          </button>
          <button className="flex-1 bg-zinc-800 text-white text-xs py-2 rounded-lg border border-zinc-700 flex items-center justify-center gap-1">
            <span className="text-blue-400 ">G</span> Google
          </button>
        </div>

        <div className="flex items-center gap-3 my-4">
          <div className="h-px bg-zinc-700 flex-1"></div>
          <p className="text-zinc-500 text-xs">or</p>
          <div className="h-px bg-zinc-700 flex-1"></div>
        </div>


        <label className="text-white font-bold">Email Address</label>
       <input type="text" placeholder=" Enter your Email address"className="w-full bg-transparent border border-zinc-700 rounded-3xl px-3 py-2 mt-4 text-xs text-white placeholder-zinc-500"></input>
       

        <button className="w-full bg-violet-500 text-white text-xs py-2.5 rounded-xl mt-4">Continue → </button>

         
        <p className="text-center text-violet-400 text-xs mt-3">Use passkey instead</p>

        <div className="border-t border-zinc-800 mt-6 pt-3 text-center">
          <p className="text-zinc-400 text-xs">Don't have an account? <span className="text-violet">Sign up</span></p>
          <p className="text-zinc-500 text-xs mt-3">Secured by clerk</p>
        </div>
      </div>
    </div>
  )
}

export default Page