import { type ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const result = await fetch("http://localhost:3000/api/v1/health/action", {
    next: {
      tags: ["root"],
    },
  });
  const { timeStamp } = await result.json();

  return (
    <main className="bg-blue-300">
      <p>RootLayout {timeStamp}</p>
      {children}
    </main>
  );
};

export default RootLayout;
