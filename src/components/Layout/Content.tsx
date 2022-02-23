import { Sidebar } from "./Sidebar";
import { Tasks } from "../Tasks/Tasks";

export const Content = () => {
  return (
    <section>
      <Sidebar />
      <Tasks projectId="1" projectName="Project name" userId="123123" />
    </section>
  );
};
