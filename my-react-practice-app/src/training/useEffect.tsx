import { useState, useEffect } from "react"
import '../index.css'

const fetchArticles = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
}

function App3() {
    const [data, setData] = useState(0)
    const [data2, setData2] = useState(100)

    // useEffect(() => {
    //     const getArticles = async () => {
    //         const articlesFromServer = await fetchArticles()
    //         setData(articlesFromServer)
    //     } 
    //     getArticles()
    // }, [])

    return (
        <div className="App">
            <form action="">
                {/* This is useful for checking password lengths (password validation) */}
                <input type="text" onChange={(e) => setData2(parseInt(e.target.value))} />
            </form>
            <h1>Data: {data}</h1>
            <h1>Data2: {data2}</h1>
            <button onClick={() => setData2(data2 + 10)}>Increment data 2</button>
        </div>
    )
}
export default App3
