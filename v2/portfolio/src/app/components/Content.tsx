import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Content() {
    return (
        <div className="bg-slate-300 border-2 text-red-300 grid xl:grid-cols-4 xl:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 grid-cols-1 list-none w-screen h-screen gap-4 overflow-y-auto">
            <div className="bg-slate-200 rounded-3xl col-span-1 row-span-2 space-y-8 shadow-xl">
                <div className="h-10 bg-slate-300 mt-3 mx-3 rounded-md"></div>
                <h1 className="text-xl font-semibold text-slate-900 mx-3">James Price</h1>
                <p className="text-xs text-slate-900 mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, laborum earum? Ratione provident praesentium quibusdam asperiores, illo quis? Cum optio cumque distinctio doloribus exercitationem error, at vero culpa debitis commodi.</p>
                <p className="text-xs text-slate-900 mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero corrupti necessitatibus fugiat itaque. Numquam reprehenderit, dolorem omnis natus ratione necessitatibus cum, iste ut totam illum tenetur ipsum, repellat quae.</p>
            </div>
            <div className="bg-slate-200 rounded-lg col-span-1 row-span-1 space-y-5 shadow-xl">
                {/* <h1 className="text-2xl mx-4 font-semibold mt-8">Come Find Me</h1> */}
                {/* <div className="bg-slate-300 mx-3 h-32 rounded-lg grid grid-cols-3 grid-row-2 space-x-8 space-y-8 p-6">
                    <FaGithub size={38}/>
                    <CiLinkedin size={38} />
                </div> */}
            </div>
            <div className="bg-slate-200 rounded-lg col-span-1 row-span-1 shadow-xl">
                {/* <h1 className="text-2xl mx-6 font-semibold mt-4">Download My CV</h1> */}
                {/* <div className="bg-slate-900 mx-3 mt-24 h-10 rounded-lg"></div> */}
            </div>
            <div className="bg-slate-200 rounded-lg col-span-1 row-span-2 shadow-xl"></div>
            <div className="bg-slate-200 rounded-lg col-span-2 row-span-2 shadow-xl"></div>
            <div className="bg-slate-200 rounded-lg col-span-1 row-span-1 shadow-xl"></div>
            <div className="bg-slate-200 rounded-lg col-span-1 row-span-2 shadow-xl"></div>
            <div className="bg-slate-200 rounded-lg col-span-2 row-span-1 shadow-xl"></div>
            <div className="bg-slate-200 rounded-lg col-span-1 row-span-1 shadow-xl"></div>
        </div>
    )
}