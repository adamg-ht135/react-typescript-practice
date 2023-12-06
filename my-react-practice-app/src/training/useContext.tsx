import { useContext, createContext } from "react"
import '../index.css'

const user = {
    name: 'John',
    age: 32
}

const UserContext = createContext(user)
function App5() {
    return (
        <UserContext.Provider value={user}>
            <div className="App">
                <Component3/>
            </div>
        </UserContext.Provider>
    )
}

// function Component1({title}:{title: string}){
//     return(
//         <Component2 title={title} />
//     )
// }

// function Component2({title}:{title: string}){
//     return(
//         <Component3 title={title} />
//     )
// }

function Component3(){
    // This avoid passing props through deeply nested components by using context (via useContext)
    const user = useContext(UserContext)
    return(
        <h1>{user.name}</h1>
    )
}

export default App5
