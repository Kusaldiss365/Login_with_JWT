package com.test.Login.service;

import com.test.Login.dto.EmployeeDTO;
import com.test.Login.dto.LoginDTO;
import com.test.Login.entity.Employee;
import com.test.Login.repository.EmployeeRepository;
import com.test.Login.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.net.PasswordAuthentication;
import java.util.Optional;

@Service
public class EmployeeSerivceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addEmployee(EmployeeDTO employeeDTO) {

        Employee employee = new Employee(

                employeeDTO.getEmployeeid(),
                employeeDTO.getPassword(),
                employeeDTO.getEmail(),

                this.passwordEncoder.encode(employeeDTO.getPassword())
        );

        employeeRepository.save(employee);

        return  employee.getName();
    }

    @Override
    public LoginResponse loginEmployee(LoginDTO loginDTO) {
        String msg = "";
        Employee employee1 = employeeRepository.findByEmail(loginDTO.getEmail());
        if (employee1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = employee1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Employee> employee = employeeRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exist", false);
        }

    }
}
