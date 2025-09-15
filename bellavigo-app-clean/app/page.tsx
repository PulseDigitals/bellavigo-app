"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import { groq } from "../lib/groq"; // ⬅️ Uncomment only if you have this file

export default function Home() {
  const [message, setMessage] = useState("Welcome to Bellavigo.ai 🚀");

  useEffect(() => {
    console.log("Home page mounted");
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">{message}</h1>

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={37}
          priority
        />

        <p className="text-gray-500 dark:text-gray-400">
          Your AI-powered productivity assistant.
        </p>
      </main>
    </div>
  );
}
