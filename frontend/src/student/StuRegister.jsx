import React, {Component} from 'react';


export default class StuRegister extends Component {
    render() {
        return (
            <div style={{textAlign:'left',marginTop:'5px'}}>
                <h4>Student Registration</h4>
                <div className="card border-info mb-3">
                    <form>
                        <div className="card-header">Student Info</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <label className="col-form-label" htmlFor="inputDefault">ID
                                            No <text style={{color:'red'}}>*</text></label>
                                        <input type="text" className="form-control " id="name" required="required" pattern="(IT|it|BM|bm)[1-9]{8}$" placeholder="Enter your DIT No "/>
                                    </div>
                                    <div className="form-group ">
                                        <label className="col-form-label " htmlFor="inputDefault">Full
                                            Name <text style={{color:'red'}}>*</text></label>
                                        <input type="text" className="form-control " id="name" required="required" placeholder="Enter your full name"/>
                                    </div>
                                    <div className="form-group ">
                                        <label className="col-form-label "
                                               htmlFor="inputDefault">Address <text style={{color:'red'}}>*</text></label>
                                        <input type="text" className="form-control " id="name" required="required"/>
                                    </div>
                                    <div className="form-group ">
                                        <label className="col-form-label" htmlFor="inputDefault">Mobile Phone <text style={{color:'red'}}>*</text></label>
                                        <input type="text" className="form-control " id="name" required="required" pattern="[0-9]{10}$" placeholder="Enter your mobile phone no"/>
                                    </div>
                                    <div className="form-group ">
                                        <label className="col-form-label " htmlFor="inputDefault">Home
                                            Phone</label>
                                        <input type="text" className="form-control " id="name" pattern="[0-9]{10}$" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <label className="col-form-label "
                                               htmlFor="inputDefault">E-Mail <text style={{color:'red'}}>*</text></label>
                                        <input type="text" className="form-control " id="name" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="johndoe@gmail.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label "
                                               htmlFor="inputDefault">Year <text style={{color:'red'}}>*</text></label>
                                        <select className="custom-select" required="required">
                                            <option value="0">select year</option>
                                            <option value="1">First</option>
                                            <option value="2">Second</option>
                                            <option value="3">Third</option>
                                            <option value="3">Forth</option>
                                        </select>
                                    </div>
                                    <div className="form-group ">
                                        <label className="col-form-label "
                                               htmlFor="inputDefault">Semester <text style={{color:'red'}}>*</text></label>
                                        <select className="custom-select" required="required">
                                            <option selected="">select semester</option>
                                            <option value="1">First</option>
                                            <option value="2">Second</option>
                                        </select></div>
                                    <div className="form-group ">
                                        <label className="col-form-label "
                                               htmlFor="inputDefault">CGPA <text style={{color:'red'}}>*</text></label>
                                        <input type="text" className="form-control " id="name" required="required" pattern="([0-3].[0-9]{2}|4.00)$" placeholder="4.00"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-header">Company Info</div>
                        <div className="card-body">
                            <div className="form-group ">
                                <label className="col-form-label" htmlFor="inputDefault">Name <text style={{color:'red'}}>*</text></label>
                                <input type="text" className="form-control " id="name" required="required"/>
                            </div>
                            <div className="form-group ">
                                <label className="col-form-label "
                                       htmlFor="inputDefault">Address <text style={{color:'red'}}>*</text></label>
                                <input type="text" className="form-control " id="name" required="required"/>
                            </div>
                            <div className="form-group ">
                                <label className="col-form-label "
                                       htmlFor="inputDefault">E-Mail <text style={{color:'red'}}>*</text></label>
                                <input type="text" className="form-control " id="name" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
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
