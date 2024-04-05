import { useContext, useEffect, useState } from "react";
import { getData } from "../../api/fetching";
import { handleCopyClick } from "../../utils/copyToClipBoard";
import { AuthContext } from "../../contexts/AuthProvider";

export default function Websites() {
  const {user} = useContext(AuthContext)
  const [links,setLinks] = useState<[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(`sites`);
        setLinks((data as any)?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <div className="bg-secondary text-center rounded p-4 mt-4">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h6 className="mb-0">WebSites</h6>
      </div>
      <div className="table-responsive">
        <table className="table text-start align-middle table-bordered table-hover mb-0">
          <thead>
            <tr className="text-white">
              <th scope="col">SL</th>
              <th scope="col">Site Name</th>
              <th scope="col" colSpan={6}>Site URL</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              links?.map(({siteUrl,category,sites}, i)=>(
                <tr key={i}>
                <td>{++i }</td>
               
                <td>{sites}/{category}</td>
               
               <td colSpan={6}>{`${siteUrl}?id=${user?.id}`}</td>
                <td><button onClick={()=> handleCopyClick(`${siteUrl}?id=${user?.id}`)} className="btn btn-sm btn-primary" >copy</button></td>
              </tr>

              ))
            }
         
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}