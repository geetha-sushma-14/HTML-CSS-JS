import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Page6(){
    return(
        <Fragment>
            <link rel="stylesheet" href="assets/styles/output6.css"></link>
            <div class="flex flex-col justify-center items-center h-screen">
        <div   class="h-20 w-20 border-8 border-solid border-gray-400 border-t-yellow-400 rounded-full
        animate-spin mb-5">
        </div>
        <p class=" font-bold text-lg text-center max-w-lg">Finding learning path recommendations for you based on your responses</p>
        <div class="mt-8 flex justify-center">
             <button class=" bg-black text-white rounded-lg h-10 w-40 hover:bg-slate-600"><Link to="/page7">Continue</Link></button>
        </div>
    </div>
        </Fragment>
    )
}

export default Page6;