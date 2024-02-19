 export default function About() { // used to learn tailwind
    return (
        <main className="bg-slate-50">
            <div className="bg-gray-900 grid grid-rows-3 grid-flow-col gap-10 auto-cols-auto h-64 align-middle">
                <button className="bg-gray-800 rounded-lg justify-items-center w-full h-full">
                    1
                </button>
                <div className="bg-gray-800 rounded-lg">
                    2
                </div>
                <div className="bg-gray-800 rounded-lg">
                    <p>Hi</p>
                </div>
                <div className="bg-gray-800 rounded-lg">
                    <p>Hi</p>
                </div>
                <div className="bg-gray-800 rounded-lg">
                    <p>Hi</p>
                </div>
                <div className="bg-gray-800 rounded-lg">
                    <p>Hi</p>
                </div>
                <div className="bg-gray-800 rounded-lg">
                    <p>Hi</p>
                </div>
                <div className="bg-gray-800 rounded-lg">
                    <p>Hi</p>
                </div>
                <div className="bg-gray-800 rounded-lg">
                    <button>Hi</button>
                </div>
                <button className="hover:shadow-md">  Simple
                </button>
            </div>

            <div className="group grid place-items-center h-20 w-20 bg-blue-400 hover:bg-purple-400">
                <div className="h-5 w-5 bg-black group-hover:bg-red-600"></div>
                <div className="h-5 w-5 bg-black group-hover:bg-blue-600"></div>
            </div>
        </main>
    )
}
