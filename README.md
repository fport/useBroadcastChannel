# 🎭 useBroadcastChannel 🎭
By creating a BroadcastChannel object, you can receive any messages that are posted to it. You don't have to maintain a reference to the frames or workers you wish to communicate with: they can "subscribe" to a particular channel by constructing their own BroadcastChannel with the same name, and have bi-directional communication between all of them.

![](https://user-images.githubusercontent.com/56169582/211097974-ac82984c-a88e-45c8-be9e-7e041249d7c0.mov)

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
