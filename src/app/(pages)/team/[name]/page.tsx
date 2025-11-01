import { MainTeamDetailedComp } from "@/components/teamDetailedPage/mainTeamDetailed";
import React from "react";
import { ourTeamsInfo, slug } from "@/components/contentData";
export default async function TeamDetaledPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const teamDetailed = ourTeamsInfo.filter((team) => name === slug(team.name));
  
  if (teamDetailed.length === 0) return <div>404 Not Found Team Member</div>;
  return (
    <>
      <MainTeamDetailedComp teamData={teamDetailed[0]} />
    </>
  );
}
