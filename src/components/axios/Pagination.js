import React from "react"
import "../../styles/getdata.css"
const Pagination = (props) => {
    const {totalPosts , postsPerpage,handlePageChange ,Active} = props ;
    const pageNumbers = [] ;
    for(let i= 1; i <= Math.ceil(totalPosts / postsPerpage); i++){
        pageNumbers.push(i);
    }
    return(
        <ul className="pagination-ul">
            {pageNumbers.map((number) => {
                
                  return  <li className={`pgn-lists ${Active === number ? "active-page" : ""}`} id={number} key={number} onClick={handlePageChange}>{number}</li>

            })}
            </ul>
    );
}

export default Pagination ;