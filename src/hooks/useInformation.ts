import { useContext, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import useSocket from './useSocket';
import { AuthContext } from '../contexts/AuthProvider';
import { getData } from '../api/fetching';

export default function useInformation(acceptedRoutes?: any) {
  const { pathname } = useLocation();


  const {receive,joinRoom} = useSocket()
  const { role, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<[]>([]);
  const [displayInfo,setDisplayInfo] = useState<[]>([]);
  const [isRefresh, setIsRefresh] = useState(0);

  const [page,setPage] = useState<any>(1)
  const [totalPages,setTotalPages]= useState(0)

 
  useEffect(() => {
    let url: string;
    const fetchData = async () => {
      setLoading(true);
      try {
      if(role === 'admin' || acceptedRoutes?.route === pathname) {
          url = `information?page=${page}`;
        }
        else {
          url = `information?id=${user?.id}&page=${page}`;
        }
        const data:any = await getData(url);
        setTotalPages(data.pages.totalPages);
        setInfo((data as any)?.data);
        setDisplayInfo((data as any)?.data?.filter((item:any) => "email" in item))
        setLoading(false);


      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [user,page, isRefresh,setPage,acceptedRoutes,pathname,role]);

  const userId = user?.id;
  useEffect(() => {
    const eventName =
     ( acceptedRoutes?.route === pathname || user?.role==='admin') ? 'conversion' : 'infoUpdate';
    
    if (!acceptedRoutes?.route) {
     joinRoom(userId);
    }
   
    receive(eventName, ({ data }: any) => {
     
      const objectIndex = info.findIndex(
        (obj) => {
         
          return (obj as any)?._id === data._id}
      );

      setInfo((state: any) => {

        if (objectIndex !== -1) {
          return state.map((obj: any, index: any) =>
            index === objectIndex ? data : obj,
          );
        } else {
          
            return [...state, data];
        }
      });
      setIsRefresh(Math.random())

    })


});
return {
  info,
  displayInfo,
  loading,
  setIsRefresh,
  role,
  setPage,
  setTotalPages,
  totalPages,
  page
}

}