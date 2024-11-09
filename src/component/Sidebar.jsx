
import SearchInput from './SearchInput'
import LogoutButton from './LogoutButton'
import Conversations from './Conversations'

// import useGetConversation from '../hooks/useGetConversation'
const Sidebar = () => {

  // const {conversations,loading} = useGetConversation()
  return (
    <>
      <div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			{/* <Conversations userList = {conversations} loading = {loading}/> */}
			<Conversations/>
			<LogoutButton /> 
		</div>
    </>
  )
}

export default Sidebar
