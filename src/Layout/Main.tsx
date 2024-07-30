import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import NoticeModal from "../components/modal/NoticeModal";


export default function Main() {
  const [noticeOpen,setNoticeOpen] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="container-fluid position-relative d-flex p-0">
        <Sidebar isOpen={isOpen}/>
        <div className={`content ${isOpen ? 'open' : ''}`}>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="container-fluid pt-4 px-4">
    <NoticeModal 
    setNoticeOpen={setNoticeOpen}
    noticeOpen={noticeOpen}
    />
            <Outlet/>
            </div>
        </div>
    </div>
  )
}
