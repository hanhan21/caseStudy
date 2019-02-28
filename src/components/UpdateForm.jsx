import React, { Component } from 'react';
import axios from 'axios';

class UpdateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: [],
            updateEmployee: {
                empID: '',
                empFName: '',
                empLName: '',
                empAddress: '',
                empPosition: '',
                empSGrade: ''
            }
        }
    }

    componentDidMount() {
        //retrieve employee table GET() 
        console.log(this.props.selectedEmployee)
        axios.get("http://localhost:8080/CaseStudy/v1/employee/Employees")
          .then(res =>
            this.setState({
              employee: res.data
            })
          )
      }

    handleChange = e => {
        let update = this.props.selectedEmployee;
        const { name, value } = e.target;
        this.setState((prevState) => ({
            update: {
                ...prevState.update,
                [name]: value
            }
        }))
        console.log(update);
    }

    handleUpdate = () => {
        console.log('PREFILL');
        console.log(this.state.updateEmployee);

        let updateEmployee = this.state.updateEmployee;
        axios.put('http://localhost:8080/CaseStudy/v1/employee/update', updateEmployee,
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

        console.log('SELECTED EMPLOYEE IN UPDATE FORM');
        console.log(this.props.selectedEmployee);
        
        return (
            <div className="col-lg-5 center">
                <h2>Employee Details</h2>
                <br/>

                <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" name="empFName"
                         defaultValue = {this.props.selectedEmployee.empFName}
                         onChange={this.handleOnchange} />
                        {/* value={this.props.employee.empFName} */}
                    </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input name="empLName" className="form-control" name="empLName" 
                     defaultValue = {this.props.selectedEmployee.empLName}
                     onChange={this.handleOnchange} />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input name="empAddress" className="form-control" name="empAddress"
                    defaultValue = {this.props.selectedEmployee.empAddress}
                    onChange={this.handleOnchange} />
                </div>

                <div className="form-group">
                    <label>Position</label>
                    <input name="empPostion" className="form-control" name="empPosition"
                    defaultValue = {this.props.selectedEmployee.empPosition}
                    onChange={this.handleOnchange} />
                </div>

                <div className="form-group">
                    <label>Salary Grade</label>
                    <input name="empSGrade" className="form-control" name="empSGrade"
                    defaultValue = {this.props.selectedEmployee.empSGrade}
                    onChange={this.handleOnchange} />
                </div>

                <button className="btn btn-info" type="submit" onClick={this.handleUpdate}>Update</button>
            </div>
        )

    } 
}  
        

export default UpdateForm;
