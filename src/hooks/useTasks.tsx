import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { format, differenceInDays, formatISO } from "date-fns";
import { TASK_TYPES } from "../constants";
import { getTaskQuery } from "../api/queries";
import { Task } from "../models/models";
import { differenceBetweenDatesInDays } from "../helpers";

export const useTasks = (selectedProject: string, userId: string) => {
  const [activeTasks, setActiveTasks] = useState<Task[] | []>([]);
  const [archivedTasks, setArchivedTasks] = useState<Task[] | []>([]);
  useEffect(() => {
    if (!userId || (!selectedProject && selectedProject !== "0")) {
      setActiveTasks([]);
      setArchivedTasks([]);
    } else {
      let unsubscribe: any = getTaskQuery(selectedProject, userId);
      //TODO: REPLACE TYPE ANY
      unsubscribe = onSnapshot(unsubscribe, (querySnapshot: any) => {
        //TODO: REPLACE TYPE: ANY
        let tasks: Task[] = [];
        let filteredActiveTasks,
          filteredArchivedTasks = [];
        querySnapshot.docs.forEach((doc: any) => tasks.push(doc.data()));
        //TODO: REPLACE TYPE ANY FOR DOC
        if (selectedProject === TASK_TYPES.NEXT_7) {
          filteredActiveTasks = tasks.filter(
            (task) =>
              differenceBetweenDatesInDays(task.date, new Date()) <= 7 &&
              task.archived !== true
          );
          filteredArchivedTasks = tasks.filter(
            (task) =>
              differenceBetweenDatesInDays(task.date, new Date()) <= 7 &&
              task.archived !== false
          );
          setActiveTasks(filteredActiveTasks);
          setArchivedTasks(filteredArchivedTasks);
        } else {
          filteredActiveTasks = tasks.filter((task) => task.archived !== true);
          filteredArchivedTasks = tasks.filter(
            (task) => task.archived !== false
          );
          setActiveTasks(filteredActiveTasks);
          setArchivedTasks(filteredArchivedTasks);
        }
      });
      return () => unsubscribe();
    }
  }, [selectedProject, userId]);
  return { activeTasks, archivedTasks };
};
