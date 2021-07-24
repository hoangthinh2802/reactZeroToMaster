import React, {useState, useEffect} from "react"

 function Clicker() {
    const [count,setCount] = useState(0)
    useEffect(() => {
        document.title = `You Clicked ${count} times`
    })
    return <button onClick={() => setCount(count + 1)}>CLick Me {count}</button>
}
export default Clicker