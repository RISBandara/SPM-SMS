import React from 'react';

export default class Formione extends React.Component {
    render() {

        const container_display = {
            marginTop : 60,
        };
        const title_display = {
            marginTop : 45,
        };
        const button_css ={
            width: 200,
            height: 40,
            fontSize: 16,
            marginLeft: 300,
        };
        const margin_1 ={
            marginLeft: 250,
        };

        return (
            <div>
                <h3 style={title_display}>Industrial Training Management - INTERNSHIP ACCEPTANCE FORM I-1</h3> <br/>
                <center><h5>(Enter Student ID and Check Details**)</h5>
                </center>

                <form>
                    <div className="container" style={container_display}>

                        <div className="row" style={margin_1}>
                            <div className="col-md-2">
                                <label>Student ID</label>
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" id="studentid"/>
                                <button type="submit" style={button_css}>Search Student Details</button>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Student's Name</label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="studentname"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Address</label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="studentaddress"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Home phone</label>
                            </div>
                            <div className="col-md-6">
                                <input type="number" className="form-control" id="studentnum"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Mobile Number</label>
                            </div>
                            <div className="col-md-6">
                                <input type="number" className="form-control" id="studenthpnum"/>
                            </div>
                        </div>
                        <br/>


                        <div className="row">
                            <div className="col-md-3">
                                <label>E-mail Address</label>
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" id="studentemail"/>
                                <h6>** Use comma to seperate multiple email addresses</h6>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-2">
                                <label>Semester</label>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" id="studentsemester"/>
                            </div>
                            <div className="col-md-2">
                                <label>Year</label>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" id="studentyr"/>
                            </div>
                            <div className="col-md-2">
                                <label>CGPA</label>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" id="studentcgpa"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <button type="submit" style={button_css}>Submit Form</button>
                            </div>
                            <div className="col-md-3">
                                <button type="reset" style={button_css}>Cancel</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}