import React from 'react'

const UsersComp = ({users = []}) => {

    return (
        <>
        <div className="listHeader">
            <strong>id</strong>
            <strong>Name</strong>
            <strong>Username</strong>
            <strong>Email</strong>
            <strong>action</strong>

        </div>
        {users.map((item,  index) =>(
             <div className='list' key={index}>
             <span>{item.id}</span>
             <span>{item.name}</span>
             <span>{item.username}</span>
             <span>{item.email}</span>
             <span>
                <button>Delete</button>
                <button>Edit</button>
             </span>
         </div>
            
        ))}
        {/* <div className="list">
            <span>id</span>
            <span>name</span>
            <span>username</span>
            <span>email</span>
        </div>
        <div className='list'>
            <span>{id}</span>
            <span>{name}</span>
            <span>{username}</span>
            <span>{email}</span>
        </div> */}
            {/* <table className='table w-50'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre completo</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{id}</th>
                        <td>{name}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                    </tr>
                </tbody>
            </table> */}

        </>

    )
}


export default UsersComp
