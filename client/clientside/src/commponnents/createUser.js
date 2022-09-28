
import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'urql'


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
const POST_MUTATION = gql`
  mutation createUserInput($firstName: String!, $lastName: String!,$nickName: String!,$phoneNumbers: String!,$address: String!,$temp: String!) {
    createUser(createUserInput:{firstName:$firstName, lastName: $lastName,nickName:$nickName,phoneNumbers:$phoneNumbers,address:$address,photo:$temp}) {
    userId
    firstName
    lastName
    nickName
    phoneNumbers
    address
    photo
    }
  }`
function lpad(value, padding) {
    var zeroes = new Array(padding + 1).join("0");
    return (zeroes + value).slice(-padding);
}

const CreateUser = props => {
    const [state, executeMutation] = useMutation(POST_MUTATION)
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [nickName, setNickName] = React.useState('')
    const [phoneNumbers, setPhoneNumbers] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [photo, setPhoto] = React.useState('')
    const [grayscale, setGrayscale] = React.useState("000")
    const [blur, setBlur] = React.useState("000")
    const [saturate, setSaturate] = React.useState("050")


    const submit = React.useCallback(async () => {


        const temp = photo + grayscale + blur + saturate

        executeMutation({ firstName, lastName, nickName, phoneNumbers, address, temp })
    },)


    return (
        <div >

            <h3 style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>create contact</h3>
            <div>
                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

                    <input
                        className="mb2"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        type="text"
                        placeholder="first name"
                    />
                    <input
                        className="mb2"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        type="text"
                        placeholder="last name"
                    />

                </div>

                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <input
                        className="mb2"
                        value={nickName}
                        onChange={e => setNickName(e.target.value)}
                        type="text"
                        placeholder="nick-name"
                    />
                    <input
                        className="mb2"
                        value={phoneNumbers}
                        onChange={e => setPhoneNumbers(e.target.value)}
                        type="text"
                        placeholder="phone numbers(seperted by ',')"
                    />
                </div>
                <div style={{ paddingLeft: '75px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

                    <input
                        className="mb2"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        type="text"
                        placeholder="address"
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
                </div>
                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

                <div style={{ justifyContent: 'center', alignItems: 'center'}}>     
                <div> "grayscale"</div>
                <input type="range" min="0" max="100" step="1" value={grayscale} onChange={e => {
                    setGrayscale(lpad(e.target.value, 3))


                }} />
                </div>  
                <div>
                <div style={{ paddingLeft: '5px'}}>  "blur"</div>
                <input type="range" min="000" max="100" step="1" value={blur} onChange={e => {
                    setBlur(lpad(e.target.value, 3))



                }} />
                </div>
                <div>
                <div>"saturate"</div>
                <input type="range" min="0" max="100" step="1" value={saturate} onChange={e => {
                    setSaturate(lpad(e.target.value, 3))


                }} />
            </div>

                <button onClick={submit}>
                    Submit
                </button>
                </div>

            </div>
        </div >

    )
}

export default CreateUser