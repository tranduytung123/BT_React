import React from "react";
import "./styles.scss";

function Pagination() {
  return (
    <div className="pagination">
      <div className="pagination__page">{"<"}</div>
      <div className="pagination__page">1</div>
      <div className="pagination__page">2</div>
      <div className="pagination__page">3</div>
      <div className="pagination__page">{">"}</div>
    </div>
  );
}

export default Pagination;