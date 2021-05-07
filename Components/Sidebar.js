import styled from 'styled-components';
import { Avatar, IconButton, Button } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator  from 'email-validator';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import Chat from './Chat';


function Sidebar() {
    const [user] = useAuthState(auth);
    const userChatsRef = db
      .collection("chats")
      .where("users", "array-contains", user.email);
    const [chatsSnapshot, loading] = useCollection(userChatsRef);


    const createChat = () => {
        const input = prompt("Por favor, introduce tu correo electrónico del usuario con quien quieras platicar");
        if (!input) return null;


        if (EmailValidator.validate(input) && !chatAlreadyExist(input) && input !== user.email ){
            //this is were we need to add the chat into the DB 'chats" collection
            db.collection('chats').add({
                users: [user.email, input]
            });
        }
    };

    const chatAlreadyExist = (recipientEmail) => 
        !!chatsSnapshot?.docs.find(
            (chat) =>
                chat.data().users.find((user) => user === recipientEmail)?.length > 0);

    return (
        <Container>
            <Header>
                <UserAvatar
                onClick={() => auth.signOut()}
                src={user.photoURL}
                />
                <IconsContainer>
                    <IconButton>
                       <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    
                </IconsContainer>
            </Header>
            <Search>
                <SearchIcon />
                <SearchInput placeholder="Buscar en chats..."/>
            </Search>
            <SidebarButton
                onClick={createChat}
            >Iniciar nuevo Chat</SidebarButton>
            {chatsSnapshot?.docs.map((chat) => (
                <Chat key={chat.id} id={chat.id} users={chat.data().users} />
            ))}
            
        </Container>
    );
}

export default Sidebar;


const Container = styled.div``;

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 10px;
`;

const SearchInput = styled.input`
    outline-width: 0;
    border: none;
    flex: 1;
`;

const SidebarButton = styled(Button)`
    width: 100%;
    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`;

const Header = styled.div`
    display: flex;
    position: sticky;
    top: sticky;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }

`;

const IconsContainer = styled.div``;