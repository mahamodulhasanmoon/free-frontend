
export default function AddLink() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                        <div className="bg-secondary rounded  p-sm-5  mx-3">
                            <div className="d-flex align-items-center justify-content-center mb-3">

                                <h3>
                                    Add New Website Link
                                </h3>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Ex:(Mega , PD , Tryst)" />
                                <label htmlFor="floatingInput">Site URL</label>
                            </div>
                            <div className="form-floating mb-4">
                                <select className="form-select  form-select-lg mb-3" aria-label=".form-select-lg example" >
                                    <option disabled selected> Select Site</option>
                                    <option value="1">Mega</option>
                                    <option value="2">PD</option>
                                    <option value="3">EROS</option>
                                </select>

                          

                            </div>

                            <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Add New Link</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
