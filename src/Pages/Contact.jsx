import React from "react";

function Contact() {
  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-6 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <h2 class="lg:w-2/3 mx-auto  text-base">
            Where are here to help you !!
          </h2>
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3 w-full">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Address
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                </a>
              </div>
            </div>

            <div class="p-4 lg:w-1/3 w-full">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Email ID
                </h1>
                <p class="leading-relaxed mb-3">Murgasenk@gmail.com</p>
                <a class="text-indigo-500 inline-flex items-center">
                  MAil for more information
                </a>
              </div>
            </div>

            <div class="p-4 lg:w-1/3 w-full">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Mobile Number
                </h1>
                <p class="leading-relaxed mb-3">+91 9025012084</p>
                <a class="text-indigo-500 inline-flex items-center">
                  Call for more Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3  md:w-1/2 w-full  bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-20 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md"></div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Drop a Line
          </h2>
          <p class="leading-relaxed mb-5 text-gray-500 font-medium">
            Give us your feedback and queries.
          </p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button class="text-white bg-green-500 border-0 my-6 mx-auto py-2 px-2 w-[200px] focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
