import { useState, useEffect, useRef } from "react"
import '../index.css'
function App4() {
    const [name, setName] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const ref = useRef(0)

    // Keep track of number of renders
    useEffect(() => {
        ref.current = ref.current + 1
    })

    // You may want to focus the input on a certain element
    // Remember, if you do change the ref to change the value, it does not get updated in the state (of input element)
    const focusElement = () => {
        if (inputRef.current != null){
            inputRef.current.focus()
            //inputRef.current.value = "Hello"
        }
    }

    return (
        <div className="App">
            <input 
                ref={inputRef} 
                type="text" onChange={e => setName(e.target.value)}></input>
            <h1>Ref: {ref.current}</h1>
            <button onClick={() => focusElement()}>Focus the input!</button>
        </div>
    )
}
export default App4
