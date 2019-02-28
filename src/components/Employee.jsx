import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class EmployeeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: [],
            empList: {
                empID: ''
            },
            selectedEmployee: {}
        }
    }

    deleteUser = (employee) => {
        //rowIndex.preventDefault();
        //let employee = this.state.employee;
        console.log("employee");
        console.log(employee);
        axios.post('http://localhost:8080/CaseStudy/v1/employee/delete', employee,
            {
                headers: {
                    "content-type": "application/json",
                }
            })
            .then(res => 
                console.log(res.data));
    }

    getUser = (rowIndex) => {

    //     let empList = this.state.empList;
    //     axios.get("http://localhost:8080/CaseStudy/v1/employee/Employees", empList)
    //   .then(res =>
    //     this.setState({
    //       employee: res.data
    //     })
    //   )
    
        console.log('SELECTED EMPLOYEE');
        console.log(this.props.employeeList[rowIndex]);
        //this.setState({selectedEmployee : this.props.employeeList[rowIndex]});
        this.props.getSelectedEmployee(this.props.employeeList[rowIndex]);
}



    render() {

        console.log('SELECTED EMPLOYEE');
        console.log(this.state.selectedEmployee);

        return (
            <Fragment>
                <table className='table table-hover'>
                    <thead>

                    </thead>

                    <tbody>
                        <tr className="table-primary">
                            <th className='employee-table-cell'>Employee ID</th>
                            <th className='employee-table-cell'>First Name</th>
                            <th className='employee-table-cell'>Last Name</th>
                            <th className='employee-table-cell'>Address</th>
                            <th className='employee-table-cell'>Age</th>
                            <th className='employee-table-cell'>Gender</th>
                            <th className='employee-table-cell'>Position</th>   
                            <th className='employee-table-cell'>Salary Grade</th>
                            <th className='employee-table-cell'>Date Added</th>
                            <th className='employee-table-cell'>Salary</th>
                            {/* <th className='employee-table-cell'>Hired Date</th> */}
                            <th className='employee-table-cell'><center>Actions</center></th>
                            
                        </tr>
                        {
                            this.props.employeeList.map((employee, index) => {
                                return (
                                    <tr className='employee-table-row'>
                                        <td className='employee-table-cell'><p>{employee.empID}</p></td>
                                        <td className='employee-table-cell'><p>{employee.empFName}</p></td>
                                        <td className='employee-table-cell'><p>{employee.empLName}</p></td>
                                        <td className='employee-table-cell'><p>{employee.empAddress}</p></td>
                                        <td className='employee-table-cell'><p>{employee.empAge}</p></td>
                                        <td className='employee-table-cell'><p>{employee.empGender}</p></td>
                                        <td className='employee-table-cell'><p>{employee.empPosition}</p></td>
                                        <td className='employee-table-cell'><p>{employee.empSGrade}</p></td>
                                        <td className='employee-table-cell'><p>{employee.empHiredDate}</p></td>
                                        <td className='employee-table-cell'><p>{employee.empSalary}</p></td>
                                        {/*<td className='employee-table-cell'><p>{employee.empHiredDate}</p></td>  */}
                                        <td className='user-table-cell'>
                                            <button type='button' className="btn btn-danger" onClick={() => this.deleteUser(employee)}>
                                                Delete
                                            </button>
                                            <button type='button' className="btn btn-info" onClick={() => this.getUser(index)}>
                                            Update
                                            </button>
                                        </td>
                        
                                    </tr>
                    )
                })
            }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}



export {
    EmployeeTable
}