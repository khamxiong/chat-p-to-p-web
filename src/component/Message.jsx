import { useAuthContext } from "../hooks/useAuthContext";
import useConversation from "../zustand/useConversation";
import PropTypes from "prop-types";
import { convertDate } from "../utils/helpers";
const Message = ({message}) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const isFromMe = authUser?._id === message?.senderId;
  const chatClassName = isFromMe ? "chat-end" : "chat-start";
  const profile = isFromMe ? authUser?.avatar : selectedConversation?.avatar;
  const chatBg = isFromMe ? "bg-blue-500" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={profile}
            alt="user avatar"
          />
        </div>
      </div>
      <div className={`chat-bubble ${chatBg}`}>{message?.message}</div>
      <div className="chat-footer opacity-50">{convertDate("HH:mm",message?.createdAt)}</div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.object,
};
export default Message;
