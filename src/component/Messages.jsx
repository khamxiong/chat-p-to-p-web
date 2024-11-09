import { useRef } from "react";
import useGetMessages from "../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "./skeletons/MessagesSkeleton";
import { useEffect } from "react";
const Messages = () => {
  const { loading, messages } = useGetMessages();
  const ref = useRef();
  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto h-[390px] max-h-[390px]">
      {loading ? (
        [...new Array(6)].map((_, index) => <MessageSkeleton key={index} />)
      ) : (
        <>
          {messages?.length > 0 ? (
            messages.map((message, index) => (
              <div ref={ref} key={index}>
                <Message key={index} message={message} />
              </div>
            ))
          ) : (
            <h1 className="text-center text-gray-500">No message found</h1>
          )}
        </>
      )}
    </div>
  );
};
export default Messages;
