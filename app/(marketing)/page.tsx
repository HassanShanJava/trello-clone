import { Medal } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center">
        {/* babge */}
        <div className="flex mb-4 border shadow-sm p-4 items-center bg-amber-100 rounded-full uppercase text-amber-700">
          <Medal className="h-6 w-6 mr-2" />
          No. 1 Task Management
        </div>

        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskme helps teams move faster
        </h1>

        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-md px-4 p-2 pb-4 w-fit">
          Work Forward.
        </div>
      </div>

      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto  ">
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique - accomplish it all with Taskme.
      </div>
    </div>
  );
}
