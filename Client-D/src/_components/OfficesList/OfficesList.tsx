"use client";
import React, { useEffect, useRef, useState } from 'react'
import { OfficeAddress } from '../ContactUs/Contact_Us_Map/Contact_Us_Map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function OfficesList({textColor}:any) {
      const accordion = useRef<HTMLDivElement>(null);
    
      const handleClick = (evt: React.MouseEvent<HTMLInputElement>) => {
        if (accordion.current) {
          accordion.current.querySelectorAll("input").forEach((input) => {
            if (input !== evt.target) {
              (input as HTMLInputElement).checked = false;
            }
          });
        }
      };
        const [officeAddress, setOfficeAddress] = useState<OfficeAddress | null>(null);
      
          useEffect(() => {
            fetch("/json/addresses.json")
              .then((res) => res.json())
              .then((data) => setOfficeAddress(data))
              .catch((err) => console.error("Failed to load office address:", err));
          }, []);

          
  return (
    <div
              className="max-w-[1152px] mx-auto pt-[23px] pb-[23px] mt-[50px]  mb-[70px]"
              ref={accordion}
            >
              <div className="flex sm:flex-row flex-col lg:mx-4 md:mx-12 mx-8 flex-wrap">
                <div className="sm:w-[25%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                  {officeAddress?.["United Kingdom"]?.title ?? "No Address Available"}
                  </div>
                  {officeAddress?.["United Kingdom"]?.["offices"]?.map((office, index)=>(
                   <div className="collapse collapse-arrow" key={index}>
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                            <p>{office.city}</p>
                        </div>
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                        {office.city ?? ""}
                        </div>
                        <div className={`collapse-content text-sm  ${textColor}`}>
                        <p>
                        {office.address ?? ""} <br />
                        {office.phone ?? ""}  <br /> 
                        {office.email ?? ""}
                        </p>
                        </div>
                        </div> 
                        ))}
                </div>
                <div className="sm:w-[25%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                  {officeAddress?.["Bangladesh"]?.title ?? "No Address Available"}
                  </div>
                  {officeAddress?.["Bangladesh"]?.["offices"]?.map((office, index)=>(
                   <div className="collapse collapse-arrow" key={index}>
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                            <p>{office.city}</p>
                        </div>
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                        {office.city ?? ""}
                        </div>
                        <div className={`collapse-content text-sm  ${textColor}`}>
                        <p>
                        {office.address ?? ""} <br />
                        {office.phone ?? ""}  <br /> 
                        {office.email ?? ""}
                        </p>
                        </div>
                        </div> 
                        ))}
                </div>
                <div className="sm:w-[16%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                  {officeAddress?.["India"]?.title ?? "No Address Available"}
                  </div>
                  {officeAddress?.["India"]?.["offices"]?.map((office, index)=>(
                   <div className="collapse collapse-arrow" key={index}>
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                            <p>{office.city}</p>
                        </div>
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                        {office.city ?? ""}
                        </div>
                        <div className={`collapse-content text-sm  ${textColor}`}>
                        <p className='break-all'>
                        {office.address ?? ""}
                        {office.phone ?? ""}
                        <br />
                        {office.email ?? ""}
                        </p>
                        </div>
                        </div> 
                        ))}
                </div>
                <div className="sm:w-[16%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                  {officeAddress?.["Nigeria"]?.title ?? "No Address Available"}
                  </div>
                  {officeAddress?.["Nigeria"]?.["offices"]?.map((office, index)=>(
                   <div className="collapse collapse-arrow" key={index}>
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                            <p>{office.city}</p>
                        </div>
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                        {office.city ?? ""}
                        </div>
                        <div className={`collapse-content text-sm  ${textColor}`}>
                        <p className='break-all'>
                        {office.address ?? ""} <br />
                        {office.phone ?? ""}  <br /> 
                        {office.email ?? ""}
                        </p>
                        </div>
                        </div> 
                        ))}
                </div>
                <div className="sm:w-[18%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                    Middle East
                  </div>
                  <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                    <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                    {officeAddress?.["Saudi Arabia"]?.["offices"]?.[0].city ?? ""}
                    </div>
                    <div className={`collapse-content text-sm  ${textColor}`}>
                      <p className="break-words">
                      {officeAddress?.["Saudi Arabia"]?.["offices"]?.[0].address ?? ""} <br />
                      {/* {officeAddress?.["Saudi Arabia"]?.["offices"]?.[0].phone ?? ""} <br />
                      {officeAddress?.["Saudi Arabia"]?.["offices"]?.[0].email ?? ""}  */}
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                    <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                    {officeAddress?.["Dubai"]?.["offices"]?.[0].city ?? ""}
                    </div>
                    <div className={`collapse-content text-sm  ${textColor}`}>
                      <p className="break-words">
                      {officeAddress?.["Dubai"]?.["offices"]?.[0].address ?? ""} <br />
                      {/* {officeAddress?.["Saudi Arabia"]?.["offices"]?.[0].phone ?? ""} <br />
                      {officeAddress?.["Saudi Arabia"]?.["offices"]?.[0].email ?? ""}  */}
                      </p>
                    </div>
                  </div>
                </div>


                <div className="sm:w-[25%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                  Cameroon 
                  </div>
                   <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                            <p>Mr Imanuel</p>
                        </div>
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                        Mr Imanuel
                        </div>
                        <div className={`collapse-content text-sm  ${textColor}`}>
                        <p  className="break-all">
                        admissions.cameroon@shabujglobal.africa
                        </p>
                        </div>
                        </div>
                </div>

                <div className="sm:w-[25%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                  Ghana
                  </div>
                   <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                            <p>Cecilia Godzeal</p>
                        </div>
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                        Cecilia Godzeal
                        </div>
                        <div className={`collapse-content text-sm  ${textColor}`}>
                        <p className="break-all">
                        admissions.cameroon@shabujglobal.africa
                        <br />
                        + 233 59522 0126
                        </p>
                        </div>
                        </div>
                </div>


                <div className="sm:w-[25%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                  Kenya
                  </div>
                   <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                            <p>Diana Wanjiru</p>
                        </div>
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                        Diana Wanjiru
                        </div>
                        <div className={`collapse-content text-sm  ${textColor}`}>
                        <p className="break-all">
                        east.africa@shabujglobal.africa
                        <br />
                        +254 702 833720
                        </p>
                        </div>
                        </div>
                </div>


                <div className="sm:w-[25%] w-full pb-8">
                  <div className="mulish-semibold lg:text-[18px] text-base text-blue-600 pl-4">
                  Pakistan
                  </div>
                   <div className="collapse collapse-arrow">
                    <input
                      type="checkbox"
                      name="my-accordion-2"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    />
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                            <p>Sajjal Rahmeen</p>
                        </div>
                        <div className={`collapse-title text-base mulish-medium  ${textColor} `}>
                        Sajjal Rahmeen
                        </div>
                        <div className={`collapse-content text-sm  ${textColor}`}>
                        <p className="break-all">
                        admissions.pak@shabujglobal.org
                        </p>
                        </div>
                        </div>
                </div>


              </div>
            </div>
  )
}

export default OfficesList