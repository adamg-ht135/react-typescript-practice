import { useState } from "react"
import '../index.css'
function App2() {
    const [{count, count2}, setCount] = useState({count: 0, count2: 10})
    return (
        <div className="App">
            <h1>Count1: {count}</h1>
            <h1>Count2: {count2} </h1>
            {/* Re-reference spread type upon incrementing count to avoid overwriting count2 */}
            <button onClick={() => setCount(curr => ({
                ...curr,
                count: curr.count + 1}))}>Increment count 1</button>
        </div>
    )
}
export default App2
