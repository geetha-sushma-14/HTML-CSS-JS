import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Page2(){
    return(
        <Fragment>
            <link rel="stylesheet" href="assets/styles/output2.css"></link>
            <div class="font-sans">
        <div class="mt-10 mb-6 text-center">
            <h1 class="text-4xl font-bold">Which are you most interested in?</h1>
        </div>
        <div class=" mb-10 text-center">
            <p class="font-normal">Choose just one. This will help us get you started (but won't limit your experienxe).</p>
        </div>
    
        <div class="max-w-2xl mx-auto hover:max-w-3xl">
            <button class="flex justify-center w-full place-content-center">
                <div class="w-full">
                    <div class="p-4 mb-3 bg-white rounded-xl shadow-md flex items-center space-x-4 border border-gray-300">
                        <div class="ml-2">
                            {/* <!-- <img class="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg" alt=""> --> */}
                            {/* <!-- <i class="fa fa-graduation-cap text-lg"></i> --> */}
                            <i class="fa-solid fa-book text-xl"></i>
                        </div>
                        <div>
                            <div class="text-xl font-medium">
                                {/* <!-- <span class="font-normal">Student</span> <span class="text-gray-500 font-normal items-center">or soon to be enrolled</span> --> */}
                                {/* <!-- <span>Student<p class="text-base">or soon to be enrolled</p></span> --> */}
                                <span class="font-normal">Learning specific skills to advance my career</span>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
        
    
        <div class="max-w-2xl mx-auto hover:max-w-3xl">
            <button class="flex justify-center w-full place-content-center">
                <div class="w-full">
                    <div class="p-4 mb-3 bg-white rounded-xl shadow-md flex items-center space-x-4 border border-gray-300">
                        <div class="ml-2">
                            {/* <!-- <img class="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg" alt=""> --> */}
                            <i class="fa-solid fa-magnifying-glass text-xl"></i>
                        </div>
                        <div>
                            <div class="text-xl font-medium">
                                {/* <!-- <span class="font-normal">Professional</span> <span class="text-gray-500 font-normal items-center">pursuing a career</span> --> */}
                                <span class="font-normal">Exploring new topics I'm interested in</span>
                                {/* <!-- <span>Student<p class="text-base">or soon to be enrolled</p></span> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
        
        <div class="max-w-2xl mx-auto hover:max-w-3xl">
            <button class="flex justify-center w-full place-content-center">
                <div class="w-full">
                    <div class="p-4 mb-3 bg-white rounded-xl shadow-md flex items-center space-x-4 border border-gray-300">
                        <div class="ml-2">
                            {/* <!-- <img class="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg" alt=""> --> */}
                            <i class="fa-solid fa-calculator text-xl"></i>
                        </div>
                        <div>
                            <div class="text-xl font-medium">
                                {/* <!-- <span class="font-normal">Parent</span> <span class="text-gray-500 font-normal items-center">of school-age child</span> --> */}
                                <span class="font-normal">Refreshing my math foundations</span>
                                {/* <!-- <span>Student<p class="text-base">or soon to be enrolled</p></span> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
        
        <div class="max-w-2xl mx-auto hover:max-w-3xl">
            <button class="flex justify-center w-full place-content-center">
                <div class="w-full">
                    <div class="p-4 mb-3 bg-white rounded-xl shadow-md flex items-center space-x-4 border border-gray-300">
                        <div class="ml-2">
                            {/* <!-- <img class="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg" alt=""> --> */}
                            <i class="fa-solid fa-brain text-xl"></i>
                        </div>
                        <div>
                            <div class="text-xl font-medium">
                                <span class="font-normal">Exercising my brain to stay sharp</span>
                                {/* <!-- <span class="font-normal">Lifelong learner</span> --> */}
                                {/* <!-- <span class="text-gray-500 text-md items-center">or soon to be enrolled</span> --> */}
                                {/* <!-- <span>Student<p class="text-base">or soon to be enrolled</p></span> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
        
        <div class="max-w-2xl mx-auto hover:max-w-3xl mb-10">
            <button class="flex justify-center w-full place-content-center">
                <div class="w-full">
                    <div class="p-4 mb-3 bg-white rounded-xl shadow-md flex items-center space-x-4 border border-gray-300">
                        <div class="ml-2">
                            {/* <!-- <img class="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg" alt=""> --> */}
                            <i class="fa-solid fa-list-ul text-xl"></i>
                            {/* <!-- <i class="fa-solid fa-person-chalkboard text-lg"></i> --> */}
                        </div>
                        <div>
                            <div class="text-xl font-medium">
                                <span class="font-normal">Something else</span>
                                {/* <!-- <span class="font-normal">Teacher</span> --> */}
                                {/* <!-- <span class="text-gray-500 text-md items-center">or soon to be enrolled</span> --> */}
                                {/* <!-- <span>Student<p class="text-base">or soon to be enrolled</p></span> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
        
        
        <div class="flex justify-center">
            <button class=" bg-black text-white rounded-lg h-10 w-40 hover:bg-slate-600"><Link to="/page3">Continue</Link></button>
        </div>
    </div>
        </Fragment>
    )
}

export default Page2;