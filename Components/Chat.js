import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import getRecipientEmail from '../utils/getRecipientEmail';


function Chat({id, users}) {

    const recipientEmail = getRecipientEmail(users, user);

    return (
        <Container>
            <UserAvatar />
            <p>Recipient Email</p>
        </Container>
    );
}

export default Chat;

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    word-break: break-word;

    :hover {
        background-color: #e9eaeb;
    }
`;

const UserAvatar = styled(Avatar)``;