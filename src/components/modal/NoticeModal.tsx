
export default function NoticeModal({noticeOpen,setNoticeOpen}:any) {
  return (
<div>

  <div className="modal" style={{
    display: noticeOpen ? 'block' : 'none',

  }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button onClick={()=>setNoticeOpen(false)} type="button" className="btn-close btn-primary" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-header">
            <h2 className="text-primary text-center">Importent Notice</h2>
        </div>
        <div className="modal-body">
        এই ড্যাশবোর্ড এর এডমিন সেল করা হবে যার লাগবে অথবা কারো যদি নতুন কোন ড্যাশবোর্ড প্লাস ১০০% সেন্ড হবে যে কোন নাম লিঙ্ক শর্টনার বা আপডেট কোন লিংক ড্যাশবোর্ড লাগে তাহলে যোগাযোগ করবেন অ্যাকাউন্ট ১০০% সেফ থাকবে গ্যারান্টি ✅✅ 📞 -- 01939036862
        </div>
        <div className="modal-footer">
          <button  type="button" onClick={()=>setNoticeOpen(false)} className="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
