import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { queries } from "../api/queries";
import { Project } from "../models/models";

export const useProjects = (userId: string) => {
  const [projects, setProjects] = useState<Project[] | []>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      let fetchedProjects: Project[] = [];
      const query = queries.getAllProjects(userId);
      const querySnapshot = await getDocs(query);
      querySnapshot.forEach((project: any) => {
        //TODO: REPLACE TYPE ANY
        if (project.exists()) {
          fetchedProjects.push({
            ...project.data(),
          });
        } else {
          fetchedProjects = [];
        }
      });

      if (JSON.stringify(projects) !== JSON.stringify(fetchedProjects)) {
        setProjects(fetchedProjects);
      }
    };
    fetchProjects();
  }, [projects, userId]);
  return { projects, setProjects };
};
