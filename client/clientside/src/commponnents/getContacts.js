import { useQuery } from 'urql';
const GET_USERS = `
query{
  users{
    userId
    firstName
    lastName
    nickName
    phoneNumbers
    address
    photo
  }
}
`;

const GetContact = () => {
  const [result, reexecuteQuery] = useQuery({query: GET_USERS,});
  
  const { data, fetching, error } = result;
  if (fetching) return[];
  if (error) return [];
  return (data)
  ;

}

export default GetContact