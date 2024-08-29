const ActionPage = async () => {
  const result = await fetch("http://localhost:3000/api/v1/health/action/inner-action/page", {
    next: {
      tags: ["page"],
    },
  });
  const { timeStamp } = await result.json();

  return (
    <main className="bg-blue-700">
      <p>Action Page {timeStamp}</p>
    </main>
  );
};

export default ActionPage;
