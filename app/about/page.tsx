const Page = () => {
  return (
    <div>
      
      <div className="text-7xl font-bold text-center p-10 bg-blue-200 shadow-lg rounded-2xl">
        This is the Next Page
      </div>

      <div className="text-5xl italic bg-green-200 p-20 rounded-3xl mb-6">
        Welcome to GadgetHaus Home of Technology
      </div>


      <div className="grid grid-cols-3 gap-4 bg-white-200 p-10 rounded-2xl text-center font-bold text-xl">
        <div className="bg-black p-4 rounded-xl">iPhone 14</div>
        <div className="bg-black p-4 rounded-xl">iPhone 15</div>
        <div className="bg-black p-4 rounded-xl">iPhone 16</div>
        <div className="bg-black p-4 rounded-xl">Charger</div>
        <div className="bg-black p-4 rounded-xl">Case</div>
        <div className="bg-black p-4 rounded-xl">Cable</div>
      </div>

      <div className="flex justify-between p-10 bg-black text-white rounded-2xl font-bold">
        <div className="bg-black rounded-xl">START</div>
        <div className="bg-black rounded-xl">HOME</div>
        <div className="bg-black rounded-xl">ABOUT</div>
        <div className="bg-black rounded-xl">LINKS</div>
      </div>

     <div className="grid grid-cols-3 gap-6">
  <div className="bg-blue-400/40 rounded-xl h-32 hover:bg-blue-500/40 transition duration-500"></div>
  <div className="bg-blue-400/40 rounded-xl h-32 col-span-2"></div>
  <div className="bg-blue-400/40 rounded-xl h-32"></div>
  <div className="bg-blue-400/40 rounded-xl h-32 col-start-2 col-span-2"></div>
  
  
  <input 
    type="text" 
    placeholder="Search gadget..."
    className="col-span-3 h-16 rounded-lg border border-gray-400 outline-none py-2 px-4 focus:bg-slate-900 transition duration-500 bg-transparent"
  />
</div>

<div className="flex flex-col sm:flex-row gap-6 mt-10 px-6">
  <div className="flex-1 w-full h-60 bg-green-500 rounded-xl"></div>
  <div className="flex-1 w-full h-60 bg-green-500 rounded-xl"></div>
  <div className="flex-1 w-full h-60 bg-green-500 rounded-xl"></div>
  <div className="flex-1 w-full h-60 bg-green-500 rounded-xl"></div>
</div>


    
          </div>
  )
}

export default Page