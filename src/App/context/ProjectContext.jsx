// import React, { createContext, useState, useEffect } from "react";
// import useAxios from "../hooks/useAxios";
// import { useParams } from "react-router";

// export const ProjectContext = createContext();

// export const ProjectContextProvider = ({ children }) => {
//   const request = useAxios();
//   const [projects, setProjects] = useState();
//   const { id } = useParams();
//   const [singleproject, setsingleproject] = useState();

//   useEffect(() => {
//     async function fetchSingleproject() {
//       const response = await request({
//         url: `projects/${id}`,
//         method: "GET",
//       });

//       setsingleproject(response);
//       console.log(response);
//     }

//     fetchSingleproject();
//   }, [id]);

//   useEffect(() => {
//     async function fetchProjects() {
//       const response = await request({
//         url: "projects",
//         method: "GET",
//       });
//       console.log(response);
//       setProjects(response);
//     }

//     fetchProjects();
//   }, []);

//   return (
//     <ProjectContext.Provider value={{ projects, setProjects }}>
//       {children}
//     </ProjectContext.Provider>
//   );
// };
