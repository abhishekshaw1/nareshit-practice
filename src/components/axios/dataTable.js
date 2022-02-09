import React, { useState } from "react"
import Pagination from "./Pagination"

const DataTable = (props) => {
    const [postsPerpage, setPostsPerpage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [activePage, setActivePage] = useState(1);

    const { posts } = props;
    const totalPosts = posts.length;

    const indexOfLastPost = currentPage * postsPerpage;
    const indexOfFirstPost = indexOfLastPost - postsPerpage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (e) => {
        setCurrentPage(Number(e.target.id));
        setActivePage(Number(e.target.id))
    }



    return (
        <>
                    <table border="1px" >
                        <thead>
                            <tr>
                                <th>
                                    UserID
                                </th>
                                <th>
                                    Id
                                </th>
                                <th>
                                    title
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentPosts.map((element, index) => {
                                    return <tr key={index}>
                                        <td>{element.userId}</td>
                                        <td>{element.id}</td>
                                        <td>{element.title}</td>
                                    </tr>
                                }
                                )
                            }
                        </tbody>
                    </table>
                    <Pagination totalPosts={totalPosts} postsPerpage={postsPerpage} handlePageChange={handlePageChange} Active={activePage} />
        </>
    );
}

export default DataTable;