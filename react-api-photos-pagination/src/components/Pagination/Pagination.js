import React from "react";
import Card from "react-bootstrap/Card";
import "../Pagination/Pagination.css";
const Pagination = ({
  photoPerPage,
  totalPhotos,
  currentPage,
  setCurrentPage
}) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalPhotos / photoPerPage); i++) {
    pageNum.push(i);
  }
  return (
    <div className="pagination">
      {pageNum.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}>
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Pagination;
