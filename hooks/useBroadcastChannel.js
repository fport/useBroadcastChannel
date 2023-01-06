import React from "react";

export default function useBroadcastChannel(channelId, onmessage) {
    let channel = React.useRef(null)
    React.useEffect(() => {
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
