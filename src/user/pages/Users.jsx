import React from 'react'
import UsersList from '../components/UsersList'

function Users() {
  const USERS = [
      {
        id: 'u1',
        name: 'Federico Piazzolla',
        image: 'https://images.pexels.com/photos/14996824/pexels-photo-14996824/free-photo-of-uomo-notte-in-piedi-skateboard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        places: '3'
    }
  ];
  return <UsersList items={USERS}/>
}

export default Users