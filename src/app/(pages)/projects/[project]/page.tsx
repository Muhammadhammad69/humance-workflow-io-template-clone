import { projectsInfo, slug } from '@/components/contentData';
import { MainProjectDetailedPageComp } from '@/components/projectDetailedPage/mainProjectDetailedPageComp'
import React from 'react'

export default async function ProjectDetailedPage({
    params,
}: {
    params: Promise<{ project: string }>;
}) {
   
    const { project } = await params;
    const projectDetailed = projectsInfo.filter((proj) => {
        
        return slug(proj.projectTitle) === project
    });
    if(projectDetailed.length === 0) return <h2>404 Project not found</h2>
  return (
    <>
    
    <MainProjectDetailedPageComp project={projectDetailed[0]}/>
    </>
  )
}
