import { FC } from "react";
import { queries } from "../../api/queries";
import { updateDoc } from "firebase/firestore";

type CheckboxProps = {
  id: string;
};

export const Checkbox: FC<CheckboxProps> = ({ id }) => {
  const archiveTask = async () => {
    const taskRef = queries.getTaskRef(id);
    await updateDoc(taskRef, {
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask}
    >
      <span className="checkbox" />
    </div>
  );
};
