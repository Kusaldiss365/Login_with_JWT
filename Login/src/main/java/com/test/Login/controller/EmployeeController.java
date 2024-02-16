package com.test.Login.controller;

import com.test.Login.dto.EmployeeDTO;

import com.test.Login.dto.LoginDTO;
import com.test.Login.response.LoginResponse;
import com.test.Login.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/employee")

public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping(path = "/register")
    public String saveEmployee(@RequestBody EmployeeDTO employeeDTO){
        String id = employeeService.addEmployee(employeeDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse = employeeService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

}
