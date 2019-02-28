import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import axios from 'axios';
import { EmployeeTable } from './components/Employee';
import InputData from './components/Forms';
import UpdateForm from './components/UpdateForm';
// import UpdateForm from './components/UpdateForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // employeeList:
      //   [{
      //     empID: '',
      //     empFName: '',
      //     empLName: '',
      //     empAddress: '',
      //     empAge: '',
      //     empGender: '',
      //     empPosition: '',
      //     empSalary: '',
      //     empSGrade: '',
      //     empHiredDate: ''
      //   }],
      employee: [],
      selectedEmployee: {}
    }
  }

  componentDidMount() {
    //retrieve employee table GET()
    axios.get("http://localhost:8080/CaseStudy/v1/employee/Employees")
      .then(res =>
        this.setState({
          employee: res.data
        })
      )
  }

  getSelectedEmployee = (emp) => {
    this.setState({ selectedEmployee: emp });

  }

  // deleteUser = rowIndex => {
  //   // let employee = [...this.state.employee];
  //   // employee.splice(rowIndex, 1);

  //   // this.setState({ employee: employee });

  //   rowIndex.preventDefault();
  //   axios.delete('http://localhost:8080/CaseStudy/v1/employee/delete{this.state.empID}')
  //   .then(res => console.log(res.data));
  // }

  render() {
    return (
      <div className="App">

        <div className="col-lg-12">
          <center>
            <InputData
              employee={this.state.employee}
              handleAdd={this.handleAdd}
            />

          </center>

          <hr />

          <center><h2>Employee Table</h2></center>
          <div className='table-panel'>
            <EmployeeTable employeeList={this.state.employee}
              deleteUser={this.deleteUser}
              getSelectedEmployee={this.getSelectedEmployee} />
            <center>
              <br />
              <hr />
              <UpdateForm
                updateEmployee={this.state.updateEmployee}
                handleUpdate={this.handleUpdate}
                selectedEmployee={this.state.selectedEmployee} />
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default App;