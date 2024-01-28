import React from "react";

const Projects = () => {
  return (
    <div className="h-screen w-screen flex  flex-col ">
      <hr />
      <br />
      <div className="justify-center items-center text-center flex">
       <button className="px-8 py-2 border "> Add Project +</button>
      </div>
      <br />
      <hr />

      <div className="flex w-full h-full gap-7 container mt-2">
        <div className="w-72 p-8 flex flex-col">
            <div className="flex justify-center items-center">
            <button className="px-6 py-2 border bg-dark/20">Projects</button>
            </div>
            <br />
            <br />
          <button className="px-6 py-2">Projects 1</button>
          <button className="px-6 py-2">Projects 2</button>
          <button className="px-6 py-2">Projects 3</button>
          <button className="px-6 py-2">Projects 4</button>
        </div>{" "}
        <div className="w-full flex flex-col justify-center items-center bg-dark/20">
          <h3>Projects Page</h3>
        </div>{" "}
      </div>
    </div>
  );
};

export default Projects;
