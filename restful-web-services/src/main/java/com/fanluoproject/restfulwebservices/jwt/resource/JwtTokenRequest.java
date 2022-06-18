package com.fanluoproject.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
//    {
//    	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY1NTkzNDY2NSwiaWF0IjoxNjU1MzI5ODY1fQ.JYS7ZjzzKMG-3JtRaXSpA__y_JhgU9i-SF9bpBX5fhcnKCRTppJLjxfcOSyLC-EUueCkyk1Kn9KoO0qQ2-w2Rg"
//    }
    
    

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

