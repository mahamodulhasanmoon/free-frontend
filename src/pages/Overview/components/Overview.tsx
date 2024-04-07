
import OverviewCard from "../../../components/Cards/OverviewCard";
import useInformation from "../../../hooks/useInformation";


export default function Overview() {
  const {analytics} = useInformation()


  return (
    <div className="row g-4">

 <OverviewCard title='total Hits' value={analytics?.totalHits}/>
 <OverviewCard title='Today Data' value={analytics?.todayData}/>
 <OverviewCard title='Yesterday Data' value={analytics?.yesterdayData}/>
 <OverviewCard title='total Data' value={analytics?.totalData} />

</div>

  )
}
