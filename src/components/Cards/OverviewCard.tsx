
export default function OverviewCard({title,value}:any) {
  return (
    <>

    
         <div className="col-sm-6 col-xl-3">
    <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
      <i className="fa fa-chart-line fa-3x text-primary" />
      <div className="ms-3">
        <p className="mb-2">{title}</p>
        <h6 className="mb-0">{value}</h6>
      </div>
    </div>
  </div>
    </>
  )
}
