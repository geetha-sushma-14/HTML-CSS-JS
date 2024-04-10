import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Page5(){
    return(
        <Fragment>
            <link rel="stylesheet" href="assets/styles/output5.css"></link>
            <div class="flex justify-center items-center h-screen">
        <div class="">
            <div class="h-[30rem] w-full flex justify-center items-center">
                <div class="m-4 md:m-24 mt-12 mr-12 p-4 md:p-14 h-96 max-w-md flex-grow ">
                    <img   src="assets/imgs/monster.png" alt=""/>
                    {/* <!-- <video class="h-full w-full" src="https://brilliant.org/site_media/version-0/images/nux-animations/pulley-blob.mp4">Video</video> --> */}
                </div>
                <div class="m-10 h-full max-w-xl flex-grow flex flex-col justify-center items-center">
                    <div>
                        <h2 class="text-2xl font-bold mb-4 text-left">You're on your way!</h2>
                        <div class="text-left flex justify-start mb-6">
                            <span class="text-yellow-400 text-4xl">&#9733;</span>
                            <span class="text-yellow-400 text-4xl">&#9733;</span>
                            <span class="text-yellow-400 text-4xl">&#9733;</span>
                            <span class="text-yellow-400 text-4xl">&#9733;</span>
                            <span class="text-yellow-400 text-4xl">&#9733;</span>
                        </div>
                        <p class="text-gray-600 text-left mb-6">"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</p>
                        <p class="text-gray-800 text-left font-bold">— Jacob S.</p>
                    </div>
                </div>
                
            </div>
            <div class="m-8 flex justify-center">
                <button class=" bg-black text-white rounded-lg h-10 w-40 hover:bg-slate-600"><Link to="/page6">Continue</Link></button>
            </div>
            
        </div>
    </div>
        </Fragment>
    )
}

export default Page5;