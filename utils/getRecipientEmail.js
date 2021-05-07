const getRecipientEmail = (users, userLoggedIn) =>
  users?.filter((userToFilter) => userToFilter !== userLoggedIn?.email)[0];

export default getRecipientEmail;



/*

const getRecipientEmail = (users, userLoggedin) => 
    users?.filter((userToFilter) => userTofilter !== userLoggedin?.email)[0];


export default getRecipientEmail;

*/
