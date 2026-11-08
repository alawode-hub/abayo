const Page = () => {
  return (
    <div className="bg-gray-50 text-slate-900 font-sans">
      <h1 className="flex justify-between items-center px-6 py-4 bg-white">
         <div className="flex flex-col items-start leading-none"> 
      <img src="/zendesk.jpg" alt="" className="w-8 h-8 object-contain" />
        <div className="font-bold text-xl">zendesk</div>
        </div>

        <nav className="flex gap-6 text-sm">
          <span>Platform</span>
          <span>Products</span>
          <span>Solutions</span>
          <span>Resources</span>
          <span>Pricing</span>
        </nav>

        <div className="flex gap-2">
          <button className="bg-lime-300 px-4 py-2 rounded-xl text-sm font-medium">Try for free</button>
          <button className="border px-4 py-2 rounded-xl text-sm">Contact Sales</button>
        </div>
      </h1>
      

         <div className="flex justify-center items-center gap-4 mt-6">
        <p className="text-sm text-gray-600">View pricing for:</p>
        <div className="bg-gray-200 p-1 rounded-full flex gap-2 text-xs">
        <span className="bg-white px-4 py-2 rounded-full font-xs">Customer Service</span>
        <span className="px-4 py-2 font-bold">Employee Service</span>
        <span className="px-4 py-2 font-bold">Contact Center</span>
        </div>
       </div>

      <div className="text-center text-4xl font-bold mt-10 px-4">
        Pricing for the <span className="text-green-800">#1 AI customer service solution</span>
      </div>

      <div className="grid grid-cols-4 gap-4 px-6 mt-10">
        {/*card1*/}
        <div className="bg-gray-100 p-6 rounded-3xl">
          <h3 className="font-semibold">Support Team</h3>
          <p className="text-xs mt-8 text-gray-600">For teams that have outgrown a shared inbox and need core support essentials.</p>
          <p className="mt-10 font-bold">$19 <span className="font-normal text-xs">agent/month paid yearly</span></p>
          <button className="w-full bg-lime-300 mt-6 py-3 rounded-3xl text-sm">Buy now</button>
          <ul className="mt-8 text-xs space-y-2">
            <li>Starting with the basics</li>
            <li>Email and ticketing systems</li>
            <li>Ticket routing</li>
            <li>Prebuilt analytics dashboards</li>
            <li>Pre-written responses</li>
            <li>Customer context</li>
            <li>Automations and triggers</li>
          </ul>
        </div>

        {/*card2*/}
        <div className="bg-gray-100 p-6 rounded-3xl">
          <h3 className="font-semibold">Suite Team</h3>
          <p className="text-xs mt-8 text-gray-600">For teams ready to unify support channels and automate resolutions with AI Agents.</p>
          <p className="mt-10 font-bold">$55 <span className="font-normal text-xs">agent/month paid yearly</span></p>
          <button className="w-full bg-lime-300 mt-6 py-3 rounded-3xl text-sm">Buy now</button>
          <ul className="mt-8 text-xs space-y-2">
            <li>Support team features plus:</li>
            <li>AI Agents</li>
            <li>Knowledge base</li>
            <li>Action builder Omnichannel routing</li>
            <li>Messaging and livechat</li>
            <li>Telephony</li>
            <li></li>
          </ul>
        </div>

        {/*card3*/}
        <div className="bg-white p-6 rounded-3xl border border-black relative">
          <span className="bg-black text-white text-xs px-3 py-1 rounded-3xl">MOST POPULAR</span>
          <h3 className="font-semibold">Suite Professional</h3>
          <p className="text-xs mt-8 text-gray-600">For teams optimizing support operations with advanced automation and AI-driven insights.</p>
          <p className="mt-10 font-bold">$115 <span className="font-normal text-xs">agent/month paid yearly</span></p>
          <button className="w-full bg-lime-300 mt-6 py-3 rounded-3xl text-sm">Buy now</button>
          <ul className="mt-8 text-xs space-y-2">
            <li>Suite Team features, plus:</li>
            <li>Admin Copilot</li>
            <li>App Builder</li>
            <li>Writing Tools</li>
            <li>Quick Reports</li>
            <li>Skills-based routing</li>
            <li>IVR phone tree</li>
          </ul>
        </div>

        {/*card4*/}
        <div className="bg-gray-100 p-6 rounded-3xl">
          <h3 className="font-semibold">Suite Enterprise + Copilot</h3>
          <p className="text-xs mt-8 text-gray-600">For teams needing advanced security, governance and the most proactive AI assistance.</p>
          <button className="w-full bg-lime-300 mt-6 py-3 rounded-3xl text-sm">Talk to Sales</button>
          <ul className="mt-8 text-xs space-y-2">
            <li>Suite Professional features, plus:</li>
            <li>Intelligent Triage</li>
            <li>Auto Assist</li>
            <li>Generative AI for Voice</li>
            <li>Approval workflows</li>
            <li>Sandbox environment</li>
            <li>Custom agent roles</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm mt-8 ">Still need help deciding? <u>Compare all plan features</u>, or <u>start a trial</u></p>

      {/*featured side*/}
      <h2 className="text-center text-3xl font-bold mt-20">Featured add-ons</h2>
      <div className="grid grid-cols-3 gap-4 px-6 mt-10">
        <div className="bg-gray-100 p-6 rounded-3xl">
          <h3 className="font-semibold text-lg">Copilot</h3>
          <p className="text-xs mt-6">AI assistance that empowers your entire team.</p>
          <p className="mt-10 font-bold">$50 <span className="font-normal text-xs">agent/month paid yearly</span></p>
          <p className="mt-8 text-sm underline">Learn more</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-3xl">
          <h3 className="font-semibold text-lg">Workforce Engagement Bundle</h3>
          <p className="text-xs mt-4">Elevate customer service quality and optimize agent performance.</p>
          <p className="mt-6 font-bold">$50 <span className="font-normal text-xs">agent/month paid yearly</span></p>
          <p className="mt-8 text-sm underline">Learn more</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-3xl">
          <h3 className="font-semibold">Contact Center</h3>
          <p className="text-xs mt-10">Power complex contact centers with ease of use and flexibility.</p>
          <p className="mt-10 font-bold">$83 <span className="font-normal text-xs">agent/month paid yearly</span></p>
          <p className="mt-8 text-sm underline">Learn more</p>
        </div>
      </div>

      {/*forethought*/}
      <div className="bg-black text-white mt-20 px-6 py-16 flex justify-between items-center">
        <div className="w-1/2">
          <p className="text-xs">ZENDESK + FORETHOUGHT <span className="bg-lime-300 text-black px-2 py-1 rounded ml-2">NEW</span></p>
          <h2 className="text-4xl font-bold mt-2">Self-learning AI for any stack</h2>
          <p className="text-sm mt-4 text-gray-300">Deploy AI agents that learn and improve in real-time. No migration required. Forethought integrates with your current setup, whether you use Zendesk or another service provider, to turn every solved ticket into a smarter outcome.</p>
          <div className="flex gap-3 mt-6">
            <button className="bg-lime-300 text-black px-5 py-2 rounded-xl text-sm">Contact Sales</button>
            <button className="border px-5 py-2 rounded-xl text-sm">Request Forethought demo</button>
          </div>
        </div>
        <div className="flex gap-10 font-bold">
           <img src="/forethought.avif" alt="" className="w-70 h-32 " />

        </div>
      </div>

      {/*startups*/}
      <div className="px-6 py-20 flex justify-between items-center bg-white">
        <div>
          <h2 className="text-3xl">Zendesk for Startups</h2>
          <p className="text-sm mt-4 max-w-md">The startups program provides early stage startups a 6-month trial of the Zendesk Suite for up to 50 agents.</p>
          <button className="bg-lime-300 px-5 py-2 rounded-full text-sm mt-6">Apply now</button>
        </div>
        <div className="w-80 h-48 rounded-2xl overflow-hidden">
          <img src="/ladies.avif" alt="" className="w-full h-full rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Page;