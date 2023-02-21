import { useSession } from 'next-auth/react';


const getInitialState = () => {

  const { data: session } = useSession();
  
  if(session){
    // get data from the database when user is logged in
    return 'session is active';
  }
  // otherwise get data from a localstorage
  const getLocalStorageProducts = typeof window !== 'undefined' && window.localStorage.getItem("state");
  const initialProducts = getLocalStorageProducts === undefined || getLocalStorageProducts === null ? [] : JSON.parse(getLocalStorageProducts);
  return initialProducts;
}

export default getInitialState;