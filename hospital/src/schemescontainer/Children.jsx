import React, { useState } from 'react'
import child1 from "../assets/child1.jpeg"
import child2 from "../assets/child2.jpeg"

const Children = () => {
  const datalist = [
    { plantitle: "Child Wellness plan", img: child1, agegroup:"0-10", gender:[0,1], plan_validity:"6 months", plan_expire:"01/10/25" },
    { plantitle: "Newborn Care Package", img: child2, agegroup:"0-1", gender:[0,1], plan_validity:"1 yr", plan_expire:"04/10/25" },
    { plantitle: "Child Wellness plan", img: child1, agegroup:"0-10", gender:[0,1], plan_validity:"6 months", plan_expire:"01/10/25" },
    { plantitle: "Newborn Care Package", img: child2, agegroup:"0-1", gender:[0,1], plan_validity:"1 yr", plan_expire:"04/10/25" },
    { plantitle: "Child Wellness plan", img: child1, agegroup:"0-10", gender:[0,1], plan_validity:"6 months", plan_expire:"01/10/25" },
    { plantitle: "Newborn Care Package", img: child2, agegroup:"0-1", gender:[0,1], plan_validity:"1 yr", plan_expire:"04/10/25" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = datalist.length - visibleCards;

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  }

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  }

  return (
    <div className="relative mx-auto overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className={`${currentIndex == 0 ? "hidden" :""} absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full z-10`}
      >
        &#129120;
      </button>

      {/* Slides wrapper */}
      <div className="w-[95%] mx-auto overflow-hidden">
        <div
  className="flex transition-transform duration-500 ease-in-out"
  style={{
    transform: window.innerWidth >= 1024
      ? `translateX(-${currentIndex * 33.33}%)`
      : window.innerWidth > 450 ? `translateX(-${currentIndex * 50}%)`
      : `translateX(-${currentIndex * 100}%)`,
  }}
>

          {datalist.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full lg:w-1/3 md:w-1/2 px-2">
              <div className="flex flex-col bg-gray-400 rounded-md p-3">
                <div className="w-full flex gap-2">
                  <div className="w-1/2">
                    <img src={item.img} alt="" className="w-full h-30 rounded-lg object-cover" />
                  </div>
                  <div className="w-1/2 flex justify-center items-center">
                    <p className='font-medium text-lg'>{item.plantitle}</p>
                  </div>
                </div>
                <div className="border-t border-dashed border-white w-full my-4"></div>
                <div>
                  <p>Age group : {item.agegroup}</p>
                  <p>Gender : <span className='px-2 rounded-sm bg-blue-400 border border-blue-200'>male</span> <span className='px-1 rounded-sm border border-pink-200 bg-pink-500'>female</span></p>
                  <p>Plan Validity : {item.plan_validity}</p>
                  <p>Plan Expire : {item.plan_expire}</p>
                  <div className='text-center mt-5'>
                    <button className='bg-green-500 px-3 py-1 rounded-xl cursor-pointer'>view more</button>
                    <button className='bg-orange-500 ml-5 px-5 py-1 rounded-xl cursor-pointer'>enroll</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className={`${currentIndex == maxIndex || maxIndex < 3 ? "hidden" : ""} absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full z-10`}
      >
        &#129122;
      </button>
    </div>
  )
}

export default Children;
