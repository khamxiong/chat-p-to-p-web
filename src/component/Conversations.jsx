import Conversation from "./Conversation";
import typprops from "prop-types";
import useGetConversation from "../hooks/useGetConversation";
import { getRandomEmoji } from "../utils/emojis";


const Conversations = () => {
  const { conversations, loading } = useGetConversation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
      <div>Loading...</div>
      ) : (
        conversations?.map((conversation, index) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIds={index === conversations.length - 1}
          />
        ))
      )}
      {/* <Conversation /> */}
    </div>
  );
};

Conversations.propTypes = {
  userList: typprops.array,
  loading: typprops.bool,
};

export default Conversations;
