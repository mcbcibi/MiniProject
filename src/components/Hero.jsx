import React from "react";

const Hero = () => {
  return (
    <section class="text-gray-600 body-font ">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            MURGASEN GROCERY SHOP
          </h1>
          <p class="mb-8 leading-relaxed">
            Welcome to MURGASEN GROCERY SHOP, your one-stop shop for all your
            grocery needs! We offer a wide range of high-quality products at
            affordable prices. Our mission is to provide our customers with a
            convenient and enjoyable shopping experience while also ensuring the
            highest standards of quality and safety.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-black bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              About Us
            </button>
            <button class="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Buy Now
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
