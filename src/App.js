import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from "./components/LoginForm";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
            <ChatEngine
                height="100vh"
                projectID="fe45c050-3ca2-41d8-93da-3aa1fcd2aedb"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/> }
            />
       
    );
}
export default App;