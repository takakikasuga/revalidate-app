import { type ReactNode } from "react";
import { ActionComponent } from "../_component/action-component";

const ActionLayout = async ({ children }: { children: ReactNode }) => {
  const result = await fetch("http://localhost:3000/api/v1/health/action/inner-action", {
    next: {
      tags: ["layout"],
    },
  });
  const { timeStamp } = await result.json();

  return (
    <main className="bg-blue-500">
      <p>ActionLayout {timeStamp}</p>
      {children}
      <ActionComponent />
    </main>
  );
};

export default ActionLayout;
