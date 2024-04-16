
import { FaFacebookMessenger, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
export default function Support() {
  return (
    <div>
        <h2 className="text-3xl font-bold text-center text-primary my-5">Support Center</h2>
        <p className="text-center text-xl ">যেকোন ধরনের সাপোর্ট ও প্রিমিয়াম সেবা পেতে যোগাযোগ করুন</p>
        <div className="text-center  mt-10">
    <a className="text-white me-5" href="https://www.facebook.com/rk6862" target="_blank">
    <FaFacebookSquare size={60}/>
    </a>
    <a className="text-white" href="https://wa.me/8801939036862" target="_blank">
    <FaWhatsapp size={60}/>
    </a>
        </div>
    </div>
  )
}
