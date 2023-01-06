# 🎭 useBroadcastChannel 🎭
By creating a BroadcastChannel object, you can receive any messages that are posted to it. You don't have to maintain a reference to the frames or workers you wish to communicate with: they can "subscribe" to a particular channel by constructing their own BroadcastChannel with the same name, and have bi-directional communication between all of them.

![useBroadcastChannel](https://user-images.githubusercontent.com/56169582/211099616-fe67c576-c1f9-48b0-af46-6e7072533743.gif)

## How to use useBroadcastChannel ?
```
 const [count, setCount] = React.useState(0)
 const [post] = useBroadcastChannel("counter", ev => setCount(ev.data))
```

```
const handler = () => {
    post(count + 1)
    setCount(count => count + 1)
}
```

## Logic
![Screenshot 2023-01-06 at 23 02 54](https://user-images.githubusercontent.com/56169582/211098706-16bd914d-802a-4bee-a679-29596d139740.png)


## useBroadcastChannel Code
```
import {useRef, useEffect} from "react";

export default function useBroadcastChannel(channelId, onmessage) {
    let channel = useRef(null)
    useEffect(() => {
        channel.current = new window.BroadcastChannel(channelId)
        if (onmessage) channel.current.onmessage = onmessage
        channel.current.onmessageerror = ev => {
            throw new Error(
                "BroadcastChannel Error while deserializing: " + ev.origin
            )
        }
        return () => channel.current && channel.current.close()
    }, [])

    let post = message => channel.current.postMessage(message)
    return [post]
}
```
