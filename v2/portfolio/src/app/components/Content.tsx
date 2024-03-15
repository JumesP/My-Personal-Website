import "@/app/global.css";
import FindMe from "./FindMe";

export default function Content() {
    return (
        <div className="bg-slate-300 border-2 text-red-300 grid xl:grid-cols-4 xl:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 grid-cols-1 list-none w-screen h-2xscreen gap-4 overflow-y-auto">
            <div className="bg-slate-200 rounded-3xl col-span-1 row-span-2 space-y-8 shadow-xl">
                <div className="h-10 bg-slate-300 mt-3 mx-3 rounded-md"></div>
                <h1 className="text-xl font-semibold text-slate-900 mx-3">James Price</h1>
                <p className="text-xs text-slate-900 mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, laborum earum? Ratione provident praesentium quibusdam asperiores, illo quis? Cum optio cumque distinctio doloribus exercitationem error, at vero culpa debitis commodi.</p>
                <p className="text-xs text-slate-900 mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero corrupti necessitatibus fugiat itaque. Numquam reprehenderit, dolorem omnis natus ratione necessitatibus cum, iste ut totam illum tenetur ipsum, repellat quae.</p>
            </div>
            <div className="bg-slate-200 rounded-lg col-span-1 row-span-1 space-y-5 shadow-xl flex flex-col justify-between">
                <h1 className="text-2xl mx-4 font-semibold mt-8">Come Find Me</h1>
                <div className="bg-slate-300 m-3 my-4 h-2/1 rounded-lg grid grid-cols-4 grid-row-2 gap-3 gap-y-20 p-10">
                    <div className="bg-slate-800 full full"></div>
                    <div className="bg-slate-800 full full"></div>
                    <div className="bg-slate-800 full full"></div>
                    <div className="bg-slate-800 full full"></div>
                    <div className="bg-slate-800 full full"></div>
                    <div className="bg-slate-800 full full"></div>
                    <div className="bg-slate-800 full full"></div>
                    <div className="bg-slate-800 full full"></div>
                </div>
            </div>
            <div className="bg-slate-200 rounded-lg col-span-1 row-span-1 shadow-xl flex flex-col justify-between">
                <h1 className="text-2xl mx-6 font-semibold mt-4">Download My CV</h1>
                <div className="bg-slate-900 mx-3 mb-4 h-1/4 rounded-lg">
                    <p className="text-2xl font-semibold text-slate-300 mx-2">Download</p>
                </div>
            </div>
            <div className="bg-slate-200 rounded-lg col-span-1 row-span-2 shadow-xl">
                <p>Hello All</p>
            </div>
            <div className="bg-slate-200 rounded-lg col-span-2 row-span-2 shadow-xl"></div>
            <div className="bg-slate-200 rounded-lg col-span-1 row-span-1 shadow-xl"></div>
            <div className="bg-slate-200 rounded-lg col-span-1 row-span-2 shadow-xl"></div>
            <div className="bg-slate-200 rounded-lg col-span-2 row-span-1 shadow-xl"></div>
            <div className="bg-slate-200 rounded-lg col-span-1 row-span-1 shadow-xl"></div>
        </div>
    )
}