export default function How_it_works(){
    return (
        <section className="py-8 px-6 text-center bg-zinc-900">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-zinc-400 to-white">
                Why GitSpotlight?
            </h2>
            <p className="text-zinc-300 mt-4 max-w-3xl mx-auto text-lg">
                Transform your GitHub journey into an engaging and visually stunning profile that highlights your contributions.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="p-8 bg-zinc-800 rounded-2xl border border-zinc-700 shadow-lg hover:shadow-zinc-500/30 transition-shadow">
                    <h3 className="text-2xl font-semibold text-white">GitHub Profile Analytics</h3>
                    <p className="text-zinc-400 mt-3 text-lg">Gain deep insights into your GitHub activity, projects, and repositories.</p>
                </div>
                <div className="p-8 bg-zinc-800 rounded-2xl border border-zinc-700 shadow-lg hover:shadow-zinc-500/30 transition-shadow">
                    <h3 className="text-2xl font-semibold text-white">Open Source Leaderboards</h3>
                    <p className="text-zinc-400 mt-3 text-lg">Compete with top open-source contributors and climb the global ranks.</p>
                </div>
                <div className="p-8 bg-zinc-800 rounded-2xl border border-zinc-700 shadow-lg hover:shadow-zinc-500/30 transition-shadow">
                    <h3 className="text-2xl font-semibold text-white">AI-Generated Reports</h3>
                    <p className="text-zinc-400 mt-3 text-lg">Receive AI-powered summaries and insights about your coding journey.</p>
                </div>
            </div>
        </section>
    )
}