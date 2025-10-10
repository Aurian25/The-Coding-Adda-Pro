"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const LAST_VISIT_KEY = "codingAdda_last_visit";
    const now = Date.now();
    const thirtyMinutes = 30 * 60 * 1000;
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
    const shouldIncrement = !lastVisit || now - Number.parseInt(lastVisit) > thirtyMinutes;

    async function fetchAndMaybeIncrement() {
      try {
        if (shouldIncrement) {
          // Increment total visitors in the database
          await fetch("/api/visitors", { method: "POST" });
          localStorage.setItem(LAST_VISIT_KEY, now.toString());
        }
        // Fetch the latest total visitor count
        const res = await fetch("/api/visitors");
        const json = await res.json();
        setVisitorCount(json.count ?? 0);
      } catch (err) {
        console.error("Visitor counter error:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAndMaybeIncrement();
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
      <Eye className="w-4 h-4 text-blue-400" />
      {isLoading ? (
        <span className="animate-pulse">Loading...</span>
      ) : (
        <>
          <span className="text-blue-400 font-semibold">{visitorCount?.toLocaleString()}</span>
          <span> total visitors</span>
        </>
      )}
    </div>
  );
}
