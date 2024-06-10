"use client"

import CountdownTimer from "@/components/CountdownTimer"
import { useState } from "react";

export default function Home() {
  const teams = [
    { name: 'Team Alpha', number: 1 },
    { name: 'Team Bravo', number: 2 },
    { name: 'Team Charlie', number: 3 },
    { name: 'Team Delta', number: 4 },
    { name: 'Team Echo', number: 5 },
  ];
  
  const [selectedTeam, setSelectedTeam] = useState();

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-3">
      {!selectedTeam ? (
        <>
          <p className="font-bold text-3xl">Select a team:</p>
          <ul className="flex flex-col justify-center items-center gap-1 w-full">
            {teams.map((team) => (
              <li key={team.number} className="text-2xl cursor-pointer m-1 bg-white bg-opacity-10 px-3 py-1 rounded" onClick={() => setSelectedTeam(team)}>
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