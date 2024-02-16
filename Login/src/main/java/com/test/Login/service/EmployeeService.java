package com.test.Login.service;

import com.test.Login.dto.EmployeeDTO;
import com.test.Login.dto.LoginDTO;
import com.test.Login.response.LoginResponse;

public interface EmployeeService{
    String addEmployee(EmployeeDTO employeeDTO);

    LoginResponse loginEmployee(LoginDTO loginDTO);
}
