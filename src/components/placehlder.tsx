"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useRouter } from 'next/navigation';

export function PlaceholdersAndVanishInputDemo() {
  const [prompt, setPrompt] = useState("");
  const router = useRouter();

  const placeholders = [
    "Deploy a Kubernetes cluster",
    "Set up a CI/CD pipeline",
    "Optimize AWS costs",
    "Migrate workloads to the cloud",
    "Automate cloud infrastructure",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Store the result and metrics in localStorage
      localStorage.setItem('awsResult', JSON.stringify(data));

      // Navigate to the lamp effect page
      router.push('/lampeffect');
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Revolutionize Your Cloud and DevOps Workflows
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}