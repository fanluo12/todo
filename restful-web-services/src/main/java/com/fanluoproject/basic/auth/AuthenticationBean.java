package com.fanluoproject.basic.auth;

public class AuthenticationBean {
	private String message;
	
	public AuthenticationBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return String.format("HelloWorldBean [message=%s]", message);
	}
	
	
	
}
