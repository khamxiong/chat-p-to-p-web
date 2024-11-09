// STARTER CODE SNIPPET

import typprops from "prop-types";
import useConversation from "../zustand/useConversation";
const Conversation = ({conversation,emoji,lastIds}) => {
	const {selectedConversation, setSelectedConversation}= useConversation();
	// console.log(conversation)
	const isSelected = selectedConversation?._id === conversation._id;
	return (
		<>
			<div className={`${isSelected ? "bg-sky-500" : ""} flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}
			onClick={() => setSelectedConversation(conversation)}>
				<div className='avatar online'>
					<div className='w-12 rounded-full'>
						{conversation?.avatar ?<img src={conversation?.avatar} alt='user avatar' />
						:<img
						src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
						alt='user avatar'
					/>}
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation?.userName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{lastIds ? null :<div className='divider my-0 py-0 h-1' />}
		</>
	);
};

Conversation.propTypes = {
	conversation: typprops.object,
	emoji: typprops.string,
	lastIds: typprops.bool,
};





export default Conversation;