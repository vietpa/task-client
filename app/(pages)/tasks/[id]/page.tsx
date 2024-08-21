import { getTask } from "@/app/lib/data";
import Form from "./form";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const task = await getTask(id);

  return (
    <div>
      <h1>Edit Task</h1>
      <Form task={task} />
    </div>
  )
}

export default Page;