"use client";
import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";
import { Service } from "@/components/types";
import {servicesDataInfo, slug} from "@/components/contentData"
export const SingleService = ({service}:{service:Service}) => {
  servicesDataInfo.map((item)=>{
    if(item.t2.toLowerCase() === service.t2.toLowerCase()){
      item.isClicked = true;
      return item
    }
    item.isClicked = false
    return item
  })
  const path = "bg-[url('/our-services/service-ads-img.jpg)']";
  return (
    <section className="box-border py-[60px] md:py-[80px] lg:py-[100px] w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 lg:px-[10px] relative box-border lg:mr-[50px] order-last lg:order-first">
        <div className="bg-white rounded-[30px] mb-[40px] p-[35px_35px_15px] box-border ">
          <div className="flex items-center  mb-[20px]">
            <Image
              src={"/our-services/solar-energy-green-icon.png"}
              width={20}
              height={20}
              alt="solar-energy-green-icon  "
              className="w-[20px] h-[20px] object-cover"
            />
            <h2 className="text-[24px] leading-[30px] font-[600] text-dark-color ml-[10px] ">
              Our Services
            </h2>
          </div>
          <div>
            {servicesDataInfo.map((item) => (
              <Link 
                href={`/services/${slug(item.t2)}`}
                className={`${
                  item.isClicked ? "bg-btn-icon-color" : ""
                } rounded-[15px] flex p-[15px_20px] font-medium text-[13px] uppercase font-be-vietnam-pro`}
                key={`service-name-${item.t1}-${item.t2}-${item.id}`}
              >
                <span className="font-[400] mr-[6px]">0{item.id}</span>
                <span>{item.t2}</span>
              </Link>
            ))}
          </div>
        </div>
        <div
          className="bg-[url('/our-services/service-ads-img.jpg')] bg-[position:50%] bg-cover rounded-[30px] mb-[40px] pt-[217px] relative overflow-hidden text-center"
          style={{ backgroundImage: path }}
        >
          <div
            className="pb-[40px] px-[30px] "
            style={{
              backgroundImage:
                "linear-gradient(0deg, var(--color-dark-color), var(--color-dark-color) 40%, var(--color-dark-color) 59%, #0000 81%)",
            }}
          >
            <div className="w-[66px] h-[66px] flex items-center justify-center mx-auto bg-white rounded-full ">
              <Image
                src={"/our-services/customer-support-1.png"}
                width={50}
                height={50}
                alt="solar-energy-green-icon  "
                className="w-[35px] h-[35px] object-cover"
              />
            </div>
            <h2 className="mt-[15px] mb-[25px] text-[18px] font-medium  leading-[24px] text-white font-be-vietnam-pro ">
              If you Need any Helps, Please
              <br />
              Feel Free to Contact us
            </h2>
            <h2 className="text-[30px] font-[600] text-btn-icon-color mb-[10px] leading-[30px] ">
              +0(123)456-789
            </h2>
          </div>
        </div>
        <div className="p-[35px_35px_15px] rounded-[30px] mb-[40px] bg-white ">
          <div className="flex items-center  mb-[20px]">
            <Image
              src={"/our-services/solar-energy-green-icon.png"}
              width={20}
              height={20}
              alt="solar-energy-green-icon  "
              className="w-[20px] h-[20px] object-cover"
            />
            <h2 className="text-[24px] leading-[30px] font-[600] text-dark-color ml-[10px] ">
              Company Profile
            </h2>
          </div>
          <div className="flex items-center text-white bg-btn-icon-color  rounded-[10px] justify-between mb-[20px] text-[15px] font-medium py-[15px] px-[25px] ">
            <div className="flex items-center">
              <Image
                src={"/our-services/pdf-icon.png"}
                width={50}
                height={50}
                alt="pdf-icon"
                className="w-[25px]  object-cover"
              />
              <h2 className="text-[16px] font-medium leading-[28px] font-be-vietnam-pro ml-[20px] ">
                Document of Business
              </h2>
            </div>
            <div>
              <Download size={30} className="text-white" />
            </div>
          </div>
          <div className="flex items-center text-white bg-dark-color  rounded-[10px] justify-between mb-[20px] text-[15px] font-medium py-[15px] px-[25px] ">
            <div className="flex items-center">
              <Image
                src={"/our-services/pdf-icon.png"}
                width={50}
                height={50}
                alt="pdf-icon"
                className="w-[25px]  object-cover"
              />
              <h2 className="text-[16px] font-medium leading-[28px] font-be-vietnam-pro ml-[20px] ">
                Document of Business
              </h2>
            </div>
            <div>
              <Download size={30} className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 lg:px-[10px] min-h-[1px] relative">
        <div className="mb-[40px]">
          <Image
            src={service.image}
            width={1000}
            height={1000}
            alt={service.alt}
            className="rounded-[15px] object-cover aspect-[3/2]"
          />
        </div>
        <h2 className="text-[26px] xs:text-[32px] font-[600] leading-[28px] xs:leading-[36px] font-be-vietnam-pro text-dark-color mb-[20px] ">
          {service.t2}
        </h2>
        <p className="text-[17px] font-dm-sans mb-[20px] text-text-color-gray ">
          There are full service engage company is to provide a solution for
          employees needs training manage the entire HR work department for
          companies. We offer
          <Link href={"#"} className="text-dark-color">
            <strong> comprehensive employment services </strong>
          </Link>
          such a assistance with employer able are compliance. Our company is
          your strategic HR partner as instead of HR. About the our at company a
          affected business significantly as our best employees to improvements.
          And Advisors can provides service needs from providing.
        </p>
        <p className="text-[17px] font-dm-sans mb-[20px] text-text-color-gray  ">
          Many small companie assign employment and
          <Link href={"#"} className="text-dark-color">
            <strong> HR issues to operation executive </strong>
          </Link>
          or other employee who may not have the specialized training to
          navigate these operational areas correctly & compliance with state
          regulations. A Company may consultant administrator, HR is ideal
          solutions.
        </p>
        <h2 className="text-[22px] xs:text-[28px] font-[600] leading-[28px] xs:leading-[40px] font-be-vietnam-pro text-dark-color mt-[10px] mb-[20px] ">
          Benefits of Our Services
        </h2>
        <p className="text-[17px] font-dm-sans mb-[20px] text-text-color-gray  ">
          When your immunity is compromised, to your more susceptible to
          illness. However, as discussed earlier, yoga is considered a best
          scientifically backed alternative treatment for stress.
        </p>
        <ul className="mb-[40px] pl-[50px] text-dark-color list-disc" >
          <li>Recruitment Finding a hiring candidates, including sourcing,</li>
          <li>Training and development Providing training a development</li>
          <li>Safety and compliance Ensuring the workplace is safe</li>
          <li>Talent management Identifying developing the best talent</li>
        </ul>
        <p className="text-[17px] font-dm-sans mb-[20px] text-text-color-gray  ">
          Need help with legal issues?
        </p>
        <p className="text-[17px] font-dm-sans mb-[20px] text-text-color-gray  ">
          Function evaluation helps the HR department ensure that the company is
          successful at both are strategic level to with service delivery and
          support. That way, the company is able to deliver of the level of
          services required while operating strategically. Create, publish, and
          promote engaging content to generate.
        </p>
      </div>
    </section>
  );
};
