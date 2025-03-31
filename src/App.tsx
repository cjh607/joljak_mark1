import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [depart, setDepart] = useState([]);
    let name : string[] = ["hhihi","nynyyn"];

    useEffect(() => {
        axios
            .get('http://localhost:8080/api')
            .then((response) => {
                console.log(response.data);
                setDepart(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>Departments</h1>
            <ul>
                {depart.department.map(dept => (
                    <li key={dept.id}>{dept.id} {dept.departmentName}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
