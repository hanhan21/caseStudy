import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class InputData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: []
        }
    }

    handleOnchange = e => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            employee: {
                ...prevState.employee,
                [name]: value
            }
        }));
    }

    handleAdd = () => {
        let employee = this.state.employee;
        console.log(employee);
        axios.post('http://localhost:8080/CaseStudy/v1/employee/add', employee,
            {
                headers: {
                    "content-type": "application/json",
                }
            })
            .then(res => {
                console.log(res.data)
            });
    }


    render() {
        return (
            <div className="form-panel">
                <h1>Add new Employee</h1>
                {/* <form> */}
                <div className="col-lg-5">
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" name="empFName" placeholder="Enter first name"
                            onChange={this.handleOnchange} />
                        {/* value={this.props.employee.empFName} */}
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="empLName" placeholder="Enter last name"
                            onChange={this.handleOnchange} />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" name="empAddress" placeholder="Enter address"
                            onChange={this.handleOnchange} />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" className="form-control" name="empAge" placeholder="Enter age"
                            onChange={this.handleOnchange} />
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="form-group">
                        <label>Gender</label>
                        <input type="text" className="form-control" name="empGender" placeholder="Enter gender"
                            onChange={this.handleOnchange} disabled="" />
                    </div>

                    <div className="form-group">

                        <label>Position</label>
                        <input type="text" className="form-control" name="empPosition" placeholder="Enter position"
                            onChange={this.handleOnchange} />
                    </div>

                    <div className="form-group">
                        <label>Salary Grade</label>
                        <input type="number" className="form-control" name="empSGrade" placeholder="Enter salary"
                            onChange={this.handleOnchange} />
                    </div>
                </div>


                {/* <div className="form-group">
                        <label>Salary</label>
                        <input type="number" className="form-control" name="empSalary" placeholder="Enter salary"
                            onChange={this.handleOnchange} />
                    </div> */}

                <button type="submit" className=" btn btn-success" onClick={this.handleAdd}>Add employee</button>
                {/* </form> */}

                <br />
            </div>

        );
    }
}

export default InputData;
