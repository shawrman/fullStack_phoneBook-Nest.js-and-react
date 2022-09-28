
import Contact from "./contact";
import GetContact from "./getContacts";
import React from 'react'




function GetUsers() {
    const [Index, setIndex] = React.useState(0)
    const [search, setSearch] = React.useState("")

    const perPage = 5
    const contacts = GetContact()
    const next = (props) => {

        if (Index === props - perPage) {
            setIndex(0)

        }
        else if (Index + perPage + perPage > props) {
            if (props - perPage < 0) { setIndex(0) }
            else {
                setIndex(props - perPage)
                console.log(props)
            }

        }
        else {
            setIndex(Index + perPage)

        }

    }
    const back = (props) => {
        if (Index === 0) {
            setIndex(props - perPage)
        } else
            if (Index - perPage < 0) {
                setIndex(0)
            }
            else {
                setIndex(Index - perPage)


            }


    }
    return (

        <div>
            <div>
                <input type="text" value={search} placeholder="term to search" onChange={e => setSearch(e.target.value)} />
              

            </div>
            <div style={{  justifyContent:'center', alignItems:'center'}}>
                {contacts.users ? contacts.users.sort((a, b) =>
                    (a.nickName ? (a.nickName > (b.nickName ? b.nickName : b.firstName) ? -1 : 1) : (a.firstName > (b.nickName ? b.nickName : b.firstName) ? -1 : 1))).filter(contact => contact.firstName.includes(search) || contact.lastName.includes(search) || contact.nickName.includes(search)
                    )
                    .map((ContacT, index) =>
                    (
                        index < Index + perPage && index >= Index &&
                        <div key={index}>
                            <Contact contact={ContacT} />

                        </div>

                    )) : <div>empty</div>}
                <button onClick={() => back(contacts.users.filter(contact => contact.firstName.includes(search) || contact.lastName.includes(search) || contact.nickName.includes(search)).length)}>back</button>

                <button onClick={() => next(contacts.users.filter(contact => contact.firstName.includes(search) || contact.lastName.includes(search) || contact.nickName.includes(search)).length)}>next</button>


            </div>
        </div>

    )
}

export default GetUsers;