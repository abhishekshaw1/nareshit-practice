import React,{useState , useEffect} from "react"
import axios from 'axios'
import DataTable from "./dataTable"

const UserTable = () => {
    const [data ,setData] = useState();
    const [loading, setLoading] = useState(true);

    function getData () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            setData(response.data);
            setLoading(false);
        }).catch((error) => {
            alert(error);
        })
    }

    useEffect(() => {
        getData();
    },[])
    return (
        <div>
            userTableData
            {loading ? <h1> Loading data ...</h1> :
            <DataTable  posts={data} />
            }
             
        </div>
    );
}

export default UserTable ;