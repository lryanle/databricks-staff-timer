"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Team = {
  name: string;
  number: number;
};

type CountdownTimerProps = {
  team: Team;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ team }) => {
  const [time, setTime] = useState(180);
  const [flash, setFlash] = useState(false);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time <= 0) {
      clearInterval(interval);
      setEnd(true);
    }

    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    if (time === 30 || time === 60 || time === 180 || (time <= 10 && time > 0)) {
      setFlash(true);
      setTimeout(() => setFlash(false), 500);
    }
  }, [time]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return minutes > 0 ? `${minutes}:${secs < 10 ? '0' : ''}${secs}` : `${secs}s`;
  };

  return (
    <div className={`flex items-center justify-center h-screen w-screen ${flash ? 'bg-red-500 text-white' : end ? 'bg-white text-black' : 'bg-black text-white'} transition-colors duration-500`}>
      {end ? (
        <div className="w-full h-full flex justify-center items-center flex-col gap-10">
          <h1 className="text-[14rem] font-bold">PITCH END</h1>
          <Image src="/dataaisummitlogo.svg" width={500} height={500} alt="Databricks Data + AI Summit Logo" />
        </div>
      ) : (
        <div className="text-center flex justify-center items-center flex-col">
          <div className="space-y-4">
              <div className="text-6xl">
                Team {team.number}: {team.name}
              </div>
          </div>
          <h1 className="text-[32rem] font-bold mb-8 leading-none">{formatTime(time)}</h1>
          <Image src="/dataaisummitlogo-white.svg" width={500} height={500} alt="Databricks Data + AI Summit Logo" />
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
