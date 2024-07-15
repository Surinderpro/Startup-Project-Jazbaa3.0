"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function LampDemo() {
  const [result, setResult] = useState("");
  const [metrics, setMetrics] = useState<number[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem('awsResult');
    if (storedData) {
      const { result, metrics } = JSON.parse(storedData);
      setResult(result);
      setMetrics(metrics);
    }
  }, []);

  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <h1>See Your Result Here</h1>
        {error && <p className="text-red-500 text-2xl">{error}</p>}
        {result && (
          <div className="text-2xl mt-4">
            <h2>Result:</h2>
            <p>{result}</p>
          </div>
        )}
        {metrics && metrics.length > 0 && (
          <div className="text-2xl mt-4">
            <h2>Metrics:</h2>
            <p>Execution Time: {metrics[0].toFixed(2)} ms</p>
          </div>
        )}
      </motion.div>
    </LampContainer>
  );
}