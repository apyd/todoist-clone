import { FC } from "react";
import { useTasks } from "../../hooks/useTasks";
import { Task } from "../../models/models";
import { Checkbox } from "../Checkbox/Checkbox";

type TasksProps = {
  projectId: string;
  projectName: string;
  userId: string;
};

export const Tasks: FC<TasksProps> = ({ projectId, projectName, userId }) => {
  const { activeTasks } = useTasks(projectId, userId);
  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project__name">{projectName}</h2>
      <ul className="tasks__list">
        {activeTasks.length > 0 &&
          activeTasks.map((task: Task) => (
            <li key={task.id}>
              <Checkbox id={task.id} />
              <span>{task.title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
