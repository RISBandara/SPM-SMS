import React from 'react';

export default class Formithree extends React.Component {
    render() {

        const container_display = {
            marginTop : 10,
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
        const select_option = {
            width : 500,
        };

        const table ={
            borderspacing: 0,
            width: 100,
            // border:black,
        };

        return (
            <div>
                <h3 style={title_display}>Industrial Training Management - INTERNSHIP ACCEPTANCE FORM I-3</h3> <br/>

                <form>
                    <div className="container" style={container_display}>

                        <h5> Internship Information </h5><br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Internship Title</label>
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" id="studenthpnum"/>
                            </div>
                            <div className="col-md-3">
                                <label>Specialisation</label>
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" id="studenthpnum"/>
                            </div>
                        </div><br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Overall Internship period from</label>
                            </div>
                            <div className="col-md-3">
                                <input type="datetime-local" className="form-control" id="studenthpnum"/>
                            </div>
                            <div className="col-md-3">
                                <label>Period To</label>
                            </div>
                            <div className="col-md-3">
                                <input type="datetime-local" className="form-control" id="studenthpnum"/>
                            </div>
                        </div><br/>

                        <br/>

                        <hr />
                        <h5> Internal Training Information </h5>
                        <table className="table">
                            <tr>
                                <th>Training Party</th>
                                <th>Training Description</th>
                                <th>From</th>
                                <th>To</th>
                            </tr>
                            <tr>
                                <td>ex.cambio</td>
                                <td>ex.Installation</td>
                                <td>ex.01/12/201</td>
                                <td>ex.10/12/2018</td>
                            </tr>
                            <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                            </tr>


                        </table>

                        <hr />
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>SELECT MONTH :</label>
                                </div>
                                <div className="col-md-6">
                                <select id="month" >
                                    <option value="jan">January</option>
                                    <option value="feb">February</option>
                                    <option value="mar">March</option>
                                    <option value="apr">April</option>
                                    <option value="may">May</option>
                                    <option value="jun">June</option>
                                    <option value="jul">July</option>
                                    <option value="aug">August</option>
                                    <option value="sept">September</option>
                                    <option value="oct">October</option>
                                    <option value="nov">November</option>
                                    <option value="dec">December</option>
                                </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <label>SUMMARY OF KEY TASKS COMPLETED FOR THE MONTH OF :</label>
                                </div>
                                <div className="col-md-6">
                                    <textarea className="form-control" id="" rows="10"/>
                                </div>
                            </div><br/>

                            <div className="row">
                                <div className="col-md-6">
                                    <label>DETAILS AND NOTES OF WORK CARRIED OUT, PROBLEMS ENCOUNTERES AND HOW SOLVED ETC, SKETCHES AND DIMENSIONS TO BE GIVEN WHEREVER POSSIBLE :</label>
                                </div>
                                <div className="col-md-6">
                                    <textarea className="form-control" id="" rows="10"/>
                                </div>
                            </div><br/>

                            <div className="row">
                                <div className="col-md-6">
                                </div>
                                <div className="col-md-6">
                                    <button>Submit form</button>
                                </div>
                            </div>

                        </div>




                    </div>
                </form>
            </div>
        );
    }
}