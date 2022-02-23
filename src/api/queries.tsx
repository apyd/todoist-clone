import { format } from "date-fns";
import { query, where, collection, orderBy, doc } from "firebase/firestore";
import { TASK_TYPES } from "../constants";
import { COLLECTIONS } from "../constants/index";
import { collatedTasksExist } from "../helpers";
import { db } from "./firebase";

export const queries = {
  getTasksFromInbox: (userId: string) =>
    query(
      collection(db, COLLECTIONS.tasks),
      where("userId", "==", userId),
      where("date", "==", "")
    ),
  getTasksFromToday: (userId: string) =>
    query(
      collection(db, COLLECTIONS.tasks),
      where("userId", "==", userId),
      where("date", "==", format(new Date(), "dd-MM-yyyy"))
    ),
  getAllTasks: (userId: string) =>
    query(collection(db, COLLECTIONS.tasks), where("userId", "==", userId)),
  getAllTasksForProject: (selectedProject: string, userId: string) =>
    query(
      collection(db, COLLECTIONS.tasks),
      where("userId", "==", userId),
      where("projectId", "==", selectedProject)
    ),
  getAllProjects: (userId: string) =>
    query(
      collection(db, COLLECTIONS.tasks),
      where("userId", "==", userId),
      orderBy("projectId")
    ),
  getTaskRef: (taskId: string) => {
    return doc(db, "tasks", taskId);
  },
  getProjectRef: (projectId: string) => {
    return doc(db, "projects", projectId);
  },
};

export const getTaskQuery = (selectedProject: string, userId: string) => {
  switch (selectedProject) {
    case TASK_TYPES.INBOX:
    case TASK_TYPES.NEXT_7:
      return queries.getTasksFromInbox(userId);

    case TASK_TYPES.TODAY:
      return queries.getTasksFromToday(userId);

    case selectedProject && !collatedTasksExist(selectedProject):
      return queries.getAllTasksForProject(selectedProject, userId);

    default:
      return queries.getAllTasks(userId);
  }
};
