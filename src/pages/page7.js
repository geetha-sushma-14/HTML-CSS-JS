import React, { Fragment } from "react";

function Page7(){
    return(
        <Fragment>
            <link rel="stylesheet" href="assets/styles/output7.css"></link>
            <div class="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <h2 class="mt-10 text-3xl font-bold mb-8 text-center">Learning paths based on your answers</h2>
    <p class="text-gray-600 mb-8 text-center">Choose one to get started. You can switch anytime.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* <!-- <div class="relative border border-gray-300 p-4">
            <span class="absolute top-0 right-0 bg-white px-2 -mt-3 text-gray-500 text-xs">Text on Border</span>
            Your content here -->
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet velit quis sem porttitor ultricies sed at justo. 
        </div>  --> */}
          
        <div class="relative">
            {/* <!-- <span class="absolute top-0 right-0 px-2 -mt-3 bg-yellow-500">Foundational Math</span> --> */}
            {/* <!-- <div class="flex justify-center h-7 w-28 rounded-lg items-center bg-yellow-500">Most Popular</div> --> */}
            <div class="rounded-lg p-6 flex justify-center items-center border border-gray-500 hover:shadow-xl hover:border-yellow-400">
                <span class="absolute top-0 px-2 -mt-3 bg-yellow-500 rounded-xl">Most popular</span>
                <div>
                    <p class="text-gray-800 text-left"> <span class="text-xl text-black font-bold mb-2">Foundational Math</span> Build your foundational skills in algebra, geometry, and probability.</p>
                </div>
                <div>
                    <img src="assets/imgs/math1.png" alt="Foundational Math Icon" class="h-40 w-80 mb-4"/>
                </div>
            </div>
        </div>
      
      
      <div class="rounded-lg p-6 flex justify-center items-center border border-gray-500 hover:shadow-xl hover:border-yellow-400">
        <div>
            <p class="text-gray-800 text-left"> <span class="text-xl text-black font-bold mb-2">Mathematical Thinking</span> Build your foundational skills in algebra, geometry, and probability.</p>
        </div>
        <div>
            <img src="assets/imgs/math1.png" alt="Foundational Math Icon" class="h-40 w-80 mb-4"/>
        </div>
      </div>
    </div>
  </div>
        </Fragment>
    )
}

export default Page7;