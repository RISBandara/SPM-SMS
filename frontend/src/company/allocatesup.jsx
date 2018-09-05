import React from 'react';

export default class Allocatesup extends React.Component {
    render() {
        return (
            <div style={{textAlign:'left',marginTop:'5px'}}>
            <h4>Supervisor Allocation</h4>
            <div className="card border-info">
                <form>
                    <div className="card-header">Company Details</div>
                    <div className="card-body">
                        <div className="row"> 
                            <div className="col-md-6">
                                <div className="form-group ">
                                    <label className="col-form-label">Company Name  </label>
                                    <input type="text" className="form-control " id="companyname" required="required" placeholder="Enter company name "/>
                                </div>  
                            </div>
                            <div className="form-group ">
                            <label className="col-form-label "
                                   htmlFor="inputDefault">E-Mail <text style={{color:'red'}}>*</text></label>
                            <input type="text" className="form-control " id="email" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                        </div>
                            </div>
                        </div>
                   

                    <div className="card-header">Allocation details</div>
                    <div className="card-body">
                        <div className="form-group ">
                            <label className="col-form-label" htmlFor="inputDefault">Student Name <text style={{color:'red'}}>*</text></label>
                            <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="form-group ">
                            <label className="col-form-label "
                                   htmlFor="inputDefault">Supervisor <text style={{color:'red'}}>*</text></label>
                           <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        
                        <div className="form-group text-right">
                            <button type="submit" className="btn btn-info pull-right">Submit </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

