import { Sidebar } from "../Sidebar/Sidebar";
import { Tasks } from "../../Tasks/Tasks";
import "./styles.scss";

export const Content = () => {
  return (
    <main className="main">
      <Sidebar />
      <Tasks projectId="1" projectName="Project name" userId="123123" />
    </main>
  );
};
