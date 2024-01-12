import Link from "next/link";

export default function Home() {
  return (
    
    <div >
    <div>
    <img
                src="/logo.png"  // <-- Path to the image in the public directory
                alt="Your Logo"
                className=" p-8 flex justify-center left-0 mx-auto w-46 h-40" // Set the height as per your design
              />
    </div>
    <div className="about font-serif text-center tracking-normal ">
      <h1 className="text-5xl pt-6 font-bold font-mono" >WEDAD AJEEB</h1>
      <h4 className="pt-10 font-medium text-xl">Lebanese</h4>
      <h4 className="pt-10 font-medium text-xl">Weight - 46 Kg </h4>
      <h4 className="pt-10 font-medium text-xl">Height - 164 CM</h4>
      <h4 className="pt-10 font-medium text-xl">Hips - 88 CM</h4>
      <h4 className="pt-10 font-medium text-xl">Waist - 58 CM</h4>
      <h4 className="pt-10 font-medium text-xl">Chest - 77 CM</h4>
      <h4 className="pt-10 font-medium text-xl">Languages - Arabic / English fluent</h4>
      <a className="pt-10 pb-10 flex justify-center" href="">
      <img
                src="/instagram-logo-fill.svg"  // <-- Path to the image in the public directory
                alt="ig-logo"
                className="  w-16 h-16 text-white  " // Set the height as per your design
              />
      </a>
    </div>
    <h1 className="  font-bold text-5xl pt-6 pb-10 text-center  ">Gallery</h1>
    <div className="gallery lg:columns-3 md:columns-2 sm:flex-row container left-0 mx-auto ">

    <img
                src="/p6.jpg"  // <-- Path to the image in the public directory
                alt="Your Logo"
                className=" p-8 " // Set the height as per your design
              />
              <img
                src="/p7.jpg"  // <-- Path to the image in the public directory
                alt="Your Logo"
                className="  p-8" // Set the height as per your design
              />
              <img
                src="/p9.jpg"  // <-- Path to the image in the public directory
                alt="Your Logo"
                className="  p-8  w-[800px] " // Set the height as per your design
              />

    </div>
    <div className="gallery lg:columns-3 md:columns-2 sm:flex-row container left-0 mx-auto">

<img
            src="/p12.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className=" p-8" // Set the height as per your design
          />
          <img
            src="/p13.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />
          <img
            src="/p14.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />

</div>
<div className="gallery lg:columns-3 md:columns-2 sm:flex-row container left-0 mx-auto">

<img
            src="/p20.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className=" p-8" // Set the height as per your design
          />
          <img
            src="/p21.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />
          <img
            src="/p23.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />

</div>
<div className="gallery lg:columns-3 md:columns-2 sm:flex-row container left-0 mx-auto">

<img
            src="/p15.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className=" p-8" // Set the height as per your design
          />
          <img
            src="/p16.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />
          <img
            src="/p17.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />

</div>
<div className="gallery lg:columns-3 md:columns-2 sm:flex-row container left-0 mx-auto">

<img
            src="/p11.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className=" p-8" // Set the height as per your design
          />
          <img
            src="/p18.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />
          <img
            src="/p19.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />

</div>
<div className="gallery lg:columns-3 md:columns-2 sm:flex-row container left-0 mx-auto">

<img
            src="/p4.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className=" p-8" // Set the height as per your design
          />
          <img
            src="/p5.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />
          <img
            src="/p26.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />

</div>
<div className="gallery lg:columns-3 md:columns-2 sm:flex-row container left-0 mx-auto">

<img
            src="/p2.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className=" p-8" // Set the height as per your design
          />
          <img
            src="/p3.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />
          <img
            src="/p25.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />

</div>
<div className="gallery lg:columns-3 md:columns-2 sm:flex-row container left-0 mx-auto pb-10">

<img
            src="/p24.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className=" p-8" // Set the height as per your design
          />
          <img
            src="/p27.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />
          <img
            src="/p25.jpg"  // <-- Path to the image in the public directory
            alt="Your Logo"
            className="  p-8" // Set the height as per your design
          />

</div>
<div className=" h-12 pt-3 bg-gray-300 text-center">
 Wedad Ajeeb © 2023
</div>
    </div>
  )
}
