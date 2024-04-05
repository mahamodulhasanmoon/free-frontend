import Information from "./components/Information";
import Overview from "./components/Overview";

export default function DashboardOverview() {
  return (
    <div>
      <Overview/>
      {/* <Spinner/> */}
      <Information/>
    </div>
  )
}
