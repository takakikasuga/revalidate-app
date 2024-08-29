import { revalidateTag } from "next/cache";
// import { redirect } from "next/navigation";

export const ActionComponent = () => {
  async function action() {
    "use server";

    revalidateTag("layout");
    // redirect("/action/inner-action");
  }

  return (
    <form action={action}>
      <button type="submit" className="p-2 border-gray-400 bg-white border rounded">
        Submit Action
      </button>
    </form>
  );
};
