import useBroadcastChannel from '../hooks/useBroadcastChannel'
import * as React from "react"
export default function Home() {
    const [count, setCount] = React.useState(0)
    const [post] = useBroadcastChannel("counter", ev => setCount(ev.data))

    const handler = () => {
        post(count + 1)
        setCount(count => count + 1)
    }

    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh"}}>
            <button onClick={handler}>{count}</button>
        </div>
    )
}
