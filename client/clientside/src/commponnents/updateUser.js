
import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'urql'

const POST_MUTATION = gql`
  mutation updateUserInput($firstName: String!, $lastName: String!,$nickName: String!,$phoneNumbers: String!,$address: String!,$temp: String!,$userId:String!) {
    updateUser(updateUserInput: {firstName:$firstName, lastName: $lastName,nickName:$nickName,phoneNumbers:$phoneNumbers,address:$address,photo:$temp,userId:$userId}) {
    userId
    firstName
    lastName
    }
  }`
function lpad(value, padding) {
    var zeroes = new Array(padding + 1).join("0");
    return (zeroes + value).slice(-padding);
}
const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

const UpdateUser = ({ props }) => {
    let pr = { props }
    const [state, executeMutation] = useMutation(POST_MUTATION)
    const [firstName, setFirstName] = React.useState(props.firstName)
    const [lastName, setLastName] = React.useState(props.lastName)
    const [nickName, setNickName] = React.useState(props.nickName)
    const [phoneNumbers, setPhoneNumbers] = React.useState(props.phoneNumbers)
    const [address, setAddress] = React.useState(props.address)
    const [photo, setPhoto] = React.useState(props.photo)
    const [userId, setUserId] = React.useState(props.userId)
    const [grayscale, setGrayscale] = React.useState(photo.slice(-9, -6))
    const [blur, setBlur] = React.useState(photo.slice(-6, -3))
    const [saturate, setSaturate] = React.useState(photo.slice(-3))

    const submit = React.useCallback(() => {

        const temp = photo.slice(0,-9)+ grayscale + blur + saturate
        executeMutation({ firstName, lastName, nickName, phoneNumbers, address,temp, userId })
    },)





    return (



        <div>
            <h3>update contact</h3>

            <div >
                <input
                    value={firstName}
                    onChange={e => { setFirstName(e.target.value) }}
                    type="text"
                    placeholder={props.firstName ? props.firstName : "first name"}
                />

                <input
                    className="mb2"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    type="text"
                    placeholder={props.lastName ? props.lastName : "last name"}
                />
            </div>
            <div className="flex flex-column mt3">
                <input
                    className="mb2"
                    value={nickName}
                    onChange={e => setNickName(e.target.value)}
                    type="text"
                    placeholder={props.nickName ? props.nickName + "(nickname}" : "nickname"}
                />
                <input
                    className="mb2"
                    value={phoneNumbers}
                    onChange={e => setPhoneNumbers(e.target.value)}
                    type="text"
                    placeholder={props.phoneNumbers ? props.phoneNumbers + "(phone numbers)" : "phone numbers(seperted by ',')"}
                />
            </div>
            <div className="flex flex-column mt3">
                <input
                    className="mb2"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    type="text"
                    placeholder={props.address ? props.address + "(Address)" : "address"}
                />
               <input
                    className="mb2"
                    onChange={async e => {
                        const file = e.target.files[0];
                        const base64 = await convertBase64(file);
                        console.log(base64)
                        setPhoto(base64)
             

                  



                    }}
                    type="file"
                    placeholder="The URL for the link"
                />
                <div>add filter "grayscale"</div>
                <input type="range" min="0" max="100" step="1" value={grayscale} onChange={e => {
                    setGrayscale(lpad(e.target.value, 3))


                }} />
                <div>add filter "blur"</div>
                <input type="range" min="000" max="100" step="1" value={blur} onChange={e => {
                    setBlur(lpad(e.target.value, 3))



                }} />
                <div>add filter "saturate"</div>
                <input type="range" min="0" max="100" step="1" value={saturate} onChange={e => {
                    setSaturate(lpad(e.target.value, 3))


                }} />
            </div>

            <button onClick={submit}>
                Submit
            </button>
        </div>
    )
}

export default UpdateUser