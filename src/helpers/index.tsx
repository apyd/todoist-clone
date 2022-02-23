import { COLLATED_TASKS } from "../constants";
import { differenceInDays, formatISO } from "date-fns";

export const collatedTasksExist = (selectedProject: string) => {
  return COLLATED_TASKS.find((task) => task.key === selectedProject);
};

export const differenceBetweenDatesInDays = (
  firstDate: Date,
  secondDate: Date
) => {
  return differenceInDays(
    new Date(formatISO(firstDate)),
    new Date(formatISO(secondDate))
  );
};
