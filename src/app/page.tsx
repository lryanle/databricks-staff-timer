"use client"

import CountdownTimer from "@/components/CountdownTimer"
import { useState } from "react";
import { DM_Mono } from 'next/font/google'

type Team = {
  name: string;
  number: number;
};

const dmmono = DM_Mono({ subsets: ['latin'], weight: "500" })


export default function Home() {
  const [selectedTeam, setSelectedTeam] = useState<Team>();

  const teams: Team[] = [
    { name: 'Team Alpha', number: 1 },
    { name: 'Team Bravo', number: 2 },
    { name: 'Team Charlie', number: 3 },
    { name: 'Team Delta', number: 4 },
    { name: 'Team Echo', number: 5 },
  ];


  return (
    <div className={`w-screen h-screen flex justify-center items-center flex-col gap-3 ${dmmono.className}`}>
      {!selectedTeam ? (
        <>
          <p className="font-bold text-3xl">Select a team:</p>
          <ul className="flex flex-col justify-center items-center gap-1 w-full">
            {teams.map((team) => (
              <li key={team.number} className="text-2xl cursor-pointer m-1 bg-white bg-opacity-10 px-3 py-1 rounded" onClick={() => {setSelectedTeam(team)}}>
                {team.name} ({team.number})
              </li>
            ))}
          </ul>
        </>
      ) : (
        <CountdownTimer team={selectedTeam} />
      )}
    </div>
  );
}