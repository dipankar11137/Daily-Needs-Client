import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-slate-200 lg:m-4 rounded-2xl pb-8">
      <div className="px-12 mx-auto  mb-4">
        <h1 className="text-black text-center text-5xl  font-bold py-6">
          Our Services
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-3">
          {/* Computer technician */}
          <Link to="/computers">
            <div className="card w- bg-base-100 text-black shadow-2xl    hover:shadow-inner">
              <figure>
                <img
                  className="w-full pic-style"
                  src="https://img.freepik.com/premium-vector/computer-technician-profession-mascot-logo-vector-cartoon-style_180868-1139.jpg?w=2000"
                  alt="Shoes"
                  style={{ height: '200px', width: '200px' }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">কম্পিউটার কারিগর</h2>
              </div>
            </div>
          </Link>
          {/* Mechanical  */}
          <Link to="/mechanical">
            <div className="card w- bg-base-100 text-black shadow-2xl    hover:shadow-inner">
              <figure>
                <img
                  className="w-full pic-style"
                  src="https://thumbs.dreamstime.com/b/mechanic-man-logo-holding-huge-wrench-mechanic-man-logo-holding-huge-wrench-service-repair-maintenance-mascot-concept-160467303.jpg"
                  alt="Shoes"
                  style={{ height: '200px', width: '200px' }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">যন্ত্র প্রকৌশল </h2>
              </div>
            </div>
          </Link>
          {/* Electrician */}
          <Link to="/electrician">
            <div className="card w- bg-base-100 text-black shadow-2xl    hover:shadow-inner">
              <figure>
                <img
                  className="w-full pic-style"
                  src="https://images-platform.99static.com/A_KEsPQVtPV0i00vJKujV7Fbmo8=/124x99:1084x1059/500x500/top/smart/99designs-contests-attachments/103/103694/attachment_103694000"
                  alt="Shoes"
                  style={{ height: '200px', width: '200px' }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">ইলেকট্রিশিয়ান </h2>
              </div>
            </div>
          </Link>
          {/* Cleaner */}
          <Link to="/cleaner">
            <div className="card w- bg-base-100 text-black shadow-2xl    hover:shadow-inner">
              <figure>
                <img
                  className="w-full pic-style"
                  src="https://img.freepik.com/free-vector/cleaning-logo-business-composition_1284-35644.jpg?w=2000"
                  alt="Shoes"
                  style={{ height: '200px', width: '200px' }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">পরিষ্কারক</h2>
              </div>
            </div>
          </Link>
          {/* Ambulance */}
          <Link to="/ambulance">
            <div className="card w- bg-base-100 text-black shadow-2xl    hover:shadow-inner">
              <figure>
                <img
                  className="w-full pic-style"
                  src="https://cdn-icons-png.flaticon.com/512/2037/2037551.png"
                  alt="Shoes"
                  style={{ height: '200px', width: '200px' }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">ইভেন্ট ম্যানেজমেন্ট </h2>
              </div>
            </div>
          </Link>
          {/* Vehicles */}
          <Link to="/vehicles">
            <div className="card w- bg-base-100 text-black shadow-2xl    hover:shadow-inner">
              <figure>
                <img
                  className="w-full pic-style"
                  src="https://vehicledetail.info/CarSource/hero-imag.png"
                  alt="Shoes"
                  style={{ height: '200px', width: '200px' }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">যানবাহন পরিষেবা </h2>
              </div>
            </div>
          </Link>
          {/* বাবুর্চি */}
          <Link to="/serif">
            <div className="card w- bg-base-100 text-black shadow-2xl    hover:shadow-inner">
              <figure>
                <img
                  className="w-full pic-style"
                  src="https://www.nicepng.com/png/detail/118-1189598_nurse-clipart-nurse-cartoon.png"
                  alt="Shoes"
                  style={{ height: '200px', width: '200px' }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">নার্স </h2>
              </div>
            </div>
          </Link>
          {/* বাবুর্চি */}
          <Link to="/mason">
            <div className="card w- bg-base-100 text-black shadow-2xl    hover:shadow-inner">
              <figure>
                <img
                  className="w-full pic-style"
                  src="https://cdn1.byjus.com/byjusweb/img/landing-pages/BLC/blc-banner-teacher.png"
                  alt="Shoes"
                  style={{ height: '200px', width: '200px' }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">শিক্ষক </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
