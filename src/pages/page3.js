import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Page3(){
    return(
        <Fragment>
            <link rel="stylesheet" href="assets/styles/output3.css"></link>
            <div>
        <div class="h-[30rem] w-full flex justify-center items-center">
            <div class="m-24 p-14 h-full max-w-md flex-grow">
                <img className="pt-16 h-96" src="assets/imgs/pulley.png" alt=""/>
                {/* <!-- <video class="h-full w-full" src="https://brilliant.org/site_media/version-0/images/nux-animations/pulley-blob.mp4">Video</video> --> */}
            </div>
            <div class="m-10 h-full max-w-xl flex-grow flex flex-col justify-center items-center">
                <div class="">
                    <h1 class="font-bold text-4xl text-left">You're in right place</h1>
                    
                    <p class="pt-5 pr-20 text-left">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science and computer science.</p>
                </div>
            </div>
        </div>
    
        <div class="m-8 flex justify-center">
            <button class=" bg-black text-white rounded-lg h-10 w-40 hover:bg-slate-600"><Link to="/page4">Continue</Link></button>
        </div>
    </div>
        </Fragment>
    )
}

export default Page3;