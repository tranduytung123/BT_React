import React from "react";
import TasksList from "../../components";
import Pagination from "../../components/Pagination";

function Home() {
  return (
    <div>
      <TasksList />
      <Pagination />
    </div>
  );
}

export default Home;