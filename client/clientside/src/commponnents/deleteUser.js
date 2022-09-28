
import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'urql'

const POST_MUTATION = gql`
  mutation removeUser($props:String!){
    removeUser(userId:$props){
        userId
    }
  }
  
  `

const RemoveUser = (props) => {
    const [state, executeMutation] = useMutation(POST_MUTATION)
    {console.log(props)}

    const submit = React.useCallback(() => {
        executeMutation(props)
    }, [executeMutation, props])


    return (
        <div>

            <button onClick={submit}>
                
                delete contact
            </button>
        </div>
    )
}

export default RemoveUser