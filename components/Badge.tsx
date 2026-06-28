export default function Badge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-docker-500/10 border border-docker-500/20 text-docker-300 text-xs sm:text-sm font-medium">
      <span className="flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-docker-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-docker-400" />
      </span>
      Docker Course &bull; Roadmap &bull; Labs
    </div>
  );
}
