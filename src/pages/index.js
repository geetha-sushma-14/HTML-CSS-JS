import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Index(){
    return(
        <Fragment>
            {/* <link rel="stylesheet" href=""></link> */}
            <link rel="stylesheet" href="assets/styles/output1.css"></link>
            <div classNameName="font-sans">
        <div className="mt-10 mb-4 text-center">
            <h1 className="text-4xl font-bold">Which describes you best?</h1>
        </div>
        <div className=" mb-10 text-center">
            <p className="font-normal">This will help us personalize your experience.</p>
        </div>
    
        <div className="max-w-2xl mx-auto hover:max-w-3xl">
            <button className="flex justify-center w-full place-content-center">
                <div className="w-full">
                    <div className="p-4 mb-3 bg-white rounded-xl shadow-md flex items-center space-x-4 border border-gray-300">
                        <div className="ml-2">
                    
                            <i className="fa-solid fa-graduation-cap text-xl"></i>
                        </div>
                        <div>
                            <div className="text-2xl font-medium">
                                <span className="font-normal">Student</span> <span className="text-gray-500 font-normal items-center">or soon to be enrolled</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
        
    
        <div className="max-w-2xl mx-auto hover:max-w-3xl">
            <button className="flex justify-center w-full place-content-center">
                <div className="w-full">
                    <div className="p-4 mb-3 bg-white rounded-xl shadow-md flex items-center space-x-4 border border-gray-300">
                        <div className="ml-2">
                            
                            <i className="fa-solid fa-user-tie text-xl"></i>
                        </div>
                        <div>
                            <div className="text-2xl font-medium">
                                <span className="font-normal">Professional</span> <span className="text-gray-500 font-normal items-center">pursuing a career</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
        
        <div className="max-w-2xl mx-auto hover:max-w-3xl">
            <button className="flex justify-center w-full place-content-center">
                <div className="w-full">
                    <div className="p-4 mb-3 bg-white rounded-xl shadow-md flex items-center space-x-4 border border-gray-300">
                        <div className="ml-2">
                            {/* <!-- <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg" alt=""> --> */}
                            <i className="fa-solid fa-children text-xl"></i>
                        </div>
                        <div>
                            <div className="text-2xl font-medium">
                                <span className="font-normal">Parent</span> <span className="text-gray-500 font-normal items-center">of school-age child</span>
                                {/* <!-- <span>Student<p className="text-base">or soon to be enrolled</p></span> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
        
        <div className="max-w-2xl mx-auto hover:max-w-3xl">
            <button className="flex justify-center w-full place-content-center">
                <div className="w-full">
                    <div className="p-4 mb-3 bg-white rounded-xl shadow-md flex items-center space-x-4 border border-gray-300">
                        <div className="ml-2">
                            {/* <!-- <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg" alt=""> --> */}
                            <i className="fa-solid fa-book text-xl"></i>
                        </div>
                        <div>
                            <div className="text-2xl font-medium">
                                <span className="font-normal">Lifelong learner</span>
                                {/* <!-- <span className="text-gray-500 text-md items-center">or soon to be enrolled</span> --> */}
                                {/* <!-- <span>Student<p className="text-base">or soon to be enrolled</p></span> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
        
        <div className="max-w-2xl mx-auto hover:max-w-3xl">
            <button className="flex justify-center w-full place-content-center">
                <div className="w-full">
                    <div className="p-4 mb-3 bg-white rounded-xl shadow-md flex items-center space-x-4 border border-gray-300">
                        <div className="ml-2">
                            {/* <!-- <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg" alt=""> --> */}
                            <i className="fa-solid fa-chalkboard-user text-xl"></i>
                            {/* <!-- <i className="fa-solid fa-person-chalkboard text-lg"></i> --> */}
                        </div>
                        <div>
                            <div className="text-2xl font-medium">
                                <span className="font-normal">Teacher</span>
                                {/* <!-- <span className="text-gray-500 text-md items-center">or soon to be enrolled</span> --> */}
                                {/* <!-- <span>Student<p className="text-base">or soon to be enrolled</p></span> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
        
        <div className="max-w-2xl mx-auto hover:max-w-3xl">
            <button className="flex justify-center w-full place-content-center">
                <div className="w-full">
                    <div className="p-4 mb-7 bg-white rounded-xl shadow-md flex items-center space-x-4 border border-gray-300">
                        <div className="ml-2">
                            <i className="fa-solid fa-list-ul text-xl"></i>
                            {/* <!-- <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg" alt=""> --> */}
                        </div>
                        <div>
                            <div className="text-2xl font-medium">
                                <span className="font-normal">Other</span>
                                {/* <!-- <span className="text-gray-500 text-md items-center">or soon to be enrolled</span> --> */}
                                {/* <!-- <span>Student<p className="text-base">or soon to be enrolled</p></span> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
        


        <div className="flex justify-center">
            <button className=" bg-black text-white rounded-lg h-10 w-40 hover:bg-slate-600"><Link to="/page2">Continue</Link></button>
        </div>
    </div>
        </Fragment>
    )
}

export default Index;