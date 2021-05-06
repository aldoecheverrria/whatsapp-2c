const getRecipientEmail = (users, userLoggedin) => 
    users?.filter(userToFilter => userTofilter != userLoggedin?.email)[0];


export default getRecipientEmail;