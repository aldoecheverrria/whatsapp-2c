import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import { Avatar, IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useCollection } from 'react-firebase-hooks/firestore';


function ChatScreen({chat, Message}) {
const [user] = useAuthState(auth);
const router = useRouter();
const [messagesSnapshot] = useCollection();



    return (
        <Container>
            <Header>
            <Avatar/>
            <HeaderInformation>
                <h3>Rec Email</h3>
                <p>Last seen ...</p>
            </HeaderInformation>
            <HeaderIcons>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </HeaderIcons>
            </Header>
            <MessageContainer>
                {/* shot messages*/}
                <EndOfMessages />
            </MessageContainer>
        </Container>
    )
}

export default ChatScreen;

const Container = styled.div``;

const Header = styled.div`
display: flex;
position: sticky;
background-color: white;
z-index: 100;
top: 0;
padding: 11px;
height: 80px;
align-items: center;
border-bottom: 1px solid whitesmoke;
`;
    
const HeaderInformation = styled.div`
margin-left: 15px   ;
flex: 1;

> h3 {
    margin-bottom: 3px;
}

> p {
    font-size: 14px;
    color: gray;
}

`;

const HeaderIcons = styled.div``;

const MessageContainer = styled.div``;

const EndOfMessages = styled.div``;