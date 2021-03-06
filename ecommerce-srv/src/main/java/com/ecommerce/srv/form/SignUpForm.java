package com.ecommerce.srv.form;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class SignUpForm {
	@NotBlank
	@Size(min = 3, max = 50)
	private String firstName;

	@NotBlank
	@Size(min = 3, max = 50)
	private String lastName;

	@NotBlank
	@Size(max = 60)
	@Email
	private String email;

	@NotBlank
	@Size(max = 60)
	@Email
	private String username;

	@NotBlank
	@Size(min = 6, max = 40)
	private String password;

}