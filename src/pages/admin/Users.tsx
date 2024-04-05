
import moment from 'moment'
import {  useEffect, useState } from 'react'

import { deleteData, getData } from '../../api/fetching';
import toast from 'react-hot-toast';

export default function Information() {
    const [refresh,setRefresh]= useState<any>(0)
    const [users,setUsers] = useState<[]>([])


    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getData(`auth/users`);
          setUsers((data as any)?.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [refresh]);

    const deleteUserHandler = async (id:string,email:any) => {
        const deletedMail = prompt('Are you sure you want to delete this user? Enter Email to confirm:');
        if (deletedMail===email ) {
          toast.promise(
             deleteData(`auth/user/${id}`),
         
       
            {
              loading: 'Deleteing...',
              success: <b>Successfully User Deleted</b>,
              error: <b>Plase Try Again</b>,
            }
          ).then(()=>  setRefresh(Math.random()))
         
         
         
        } else {
          toast.error("please enter email which user you Want to delete")
        }
      };

  return (
<div>
  <div className="bg-secondary text-center rounded p-4 mt-4">
    <div className="d-flex align-items-center justify-content-between mb-4">
      <h6 className="mb-0">All Users</h6>
    </div>
    <div className="table-responsive">
      <table className="table text-start align-middle table-bordered table-hover mb-0">
        <thead>
          <tr className="text-white">
            <th scope="col">SL</th>
            <th scope="col"> Name</th>
            <th scope="col">Email</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
           users?.map(({createdAt,name,email,_id},i) =>(
              <tr key={i}>
              <td>{i}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{moment(createdAt).fromNow()}</td>
              <td ><button type="button"
                
                className="btn btn-sm btn-primary" onClick={()=>deleteUserHandler(_id,email)} >Delete</button></td>
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
