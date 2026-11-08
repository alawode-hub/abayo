export default function Loading() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
    
      <div className="h-5 w-28 bg-neutral-800 rounded mb-6 animate-pulse" />

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {Array.from({ length: 9 }).map((_, i) => (
          <div   key={i}  className="w-full border border-neutral-800 p-4 rounded-lg bg-black "  >
        
            <div className="mb-2 space-y-1">
              <div className="h-3 bg-neutral-800 rounded w-full animate-pulse" />
              <div className="h-3 bg-neutral-800 rounded w-4/5 animate-pulse" />
            </div>

            <div className="space-y-1">
              <div className="h-2 bg-neutral-800 rounded w-full animate-pulse" />
              <div className="h-2 bg-neutral-800 rounded w-full animate-pulse" />
              <div className="h-2 bg-neutral-800 rounded w-11/12 animate-pulse" />
              <div className="h-2 bg-neutral-800 rounded w-4/5 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
