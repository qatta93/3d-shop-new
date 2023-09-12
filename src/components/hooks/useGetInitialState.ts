import { useSession } from 'next-auth/react';


const useGetInitialState = () => {

  // const { data: session } = useSession();
  
  // if(session){
  //   // get data from the database when user is logged in
  //   return 'session is active';
  // }
  // otherwise get data from a localstorage
  const getLocalStorageProducts = typeof window !== 'undefined' && window.localStorage.getItem("state");
  const initialState = getLocalStorageProducts === undefined || getLocalStorageProducts === null ? [] : JSON.parse(getLocalStorageProducts);
  return [initialState];
}

export default useGetInitialState;