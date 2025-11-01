import React from "react";
import { Main } from "@/components/servicesComp/dynamicServiceComp/main";
import {servicesDataInfo, slug} from "@/components/contentData";

const DynamicServices = async ({ params }: { params: Promise<{ service: string }> }) => {
  const { service } = await params;
  const getService =  servicesDataInfo.filter((item) => {
    if (slug(item.t2).toLowerCase() === service.toLowerCase()) {
      return true
    }
    return false
  })
  
  if(service.length ===0) return (
    <h2>404 Service not found</h2>
  )
return (
    <>
      <Main service={getService[0]} />
    </>
  );
};

export default DynamicServices;
