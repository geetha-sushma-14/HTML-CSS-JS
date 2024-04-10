import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Page4(){
    return(
        <Fragment>
            <link rel="stylesheet" href="assets/styles/output4.css"></link>
            <div class="">
        <div class="">
            <div class="m-4 mt-32 text-center">
                <p class="text-3xl font-semibold">What is your math comfort level?</p>
            </div>
            <div class=" mb-14 text-center">
                <p class="font-normal">Choose the highest level you feel confident in - you can always adjust later</p>
            </div>
            <div class="mb-14 max-w-5xl  mx-auto flex flex-wrap justify-evenly items-center gap-8">
                <div class="border border-gray-400 rounded-lg h-52 w-52 flex flex-col justify-center items-center hover:border-yellow-500 hover:shadow-xl">
                    <img class="p-2 h-20 w-32"  src="assets/imgs/arithmetic.png" alt="arithmetic"/>
                    <h1 class="p-1 text-lg font-normal">Arithmetic</h1>
                    <p class="p-1 text-xl font-medium text-gray-400">Introductory</p>
                </div>
    
                <div class="border border-gray-400 rounded-lg h-52 w-52 flex flex-col justify-center items-center hover:border-yellow-500 hover:shadow-xl">
                    <img class="p-2 h-20 w-32"  src="assets/imgs/algebra2.png" alt="algebra"/>
                    <h1 class="p-1 text-lg font-normal">Basic algebra</h1>
                    <p class="p-1 text-xl font-medium text-gray-400">Foundational</p>
                </div>
    
                <div class="border border-gray-400 rounded-lg h-52 w-52 flex flex-col justify-center items-center hover:border-yellow-500 hover:shadow-xl">
                    <img class="p-2 h-20 w-32"  src="assets/imgs/inter_algebra.png" alt="intermediate algebra"/>
                    <h1 class="p-1 text-lg font-normal">Intermediate algebra</h1>
                    <p class="p-1 text-xl font-medium text-gray-400">Intermediate</p>
                </div>
    
                <div class="border border-gray-400 rounded-lg h-52 w-52 flex flex-col justify-center items-center hover:border-yellow-500 hover:shadow-xl">
                    <img class="p-2 h-20 w-32"  src="assets/imgs/calculus.png" alt="calculus"/>
                    <h1 class="p-1 text-lg font-normal">Calculus</h1>
                    <p class="p-1 text-xl font-medium text-gray-400">Advanced</p>
                </div>
            </div>
            <div class="flex justify-center">
                <button class=" bg-black text-white rounded-lg h-10 w-40 hover:bg-slate-600"><Link to="/page5">Continue</Link></button>
            </div>
        </div>
    </div>
        </Fragment>
    )
}

export default Page4;