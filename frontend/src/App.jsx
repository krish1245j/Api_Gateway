import { useState } from "react";

function App() {
    const [data, setData] = useState(null);

    const getUser = async () => {
        const response = await fetch("http://localhost:3001/api/users");
        const result = await response.json();

        setData(result);
    };

    return (
        <div>
            <h1>API Gateway Demo</h1>

            <button onClick={getUser}>
                Get User
            </button>

            {data && (
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </div>
    );
}

export default App;