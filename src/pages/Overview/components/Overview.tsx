
import { useEffect, useState } from "react";
import OverviewCard from "../../../components/Cards/OverviewCard";
import { getData } from "../../../api/fetching";


export default function Overview() {
const [analytics,setAnalytics] = useState<any>(null)

useEffect(()=>{

  const fetchData = async()=>{

    const data = await getData('/analytics')
    setAnalytics(data)
  }
fetchData()
},[])


  return (
    <div className="row g-4">

 <OverviewCard title='total Hits' value={analytics?.totalHits}/>
 <OverviewCard title='Today Data' value={analytics?.todayData}/>
 <OverviewCard title='Yesterday Data' value={analytics?.yesterdayData}/>
 <OverviewCard title='total Data' value={analytics?.totalData} />

</div>

  )
}
