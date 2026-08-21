import React from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
    return (
        <div className="login-page">
            <div className="login-wrapper">
                <form>
                    <h1>Login</h1>

                    <div className="login-input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            required
                        />
                        <FaUser className="login-icon" />
                    </div>

                    <div className="login-input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <FaLock className="login-icon" />
                    </div>

                    <div className="login-remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit" className="login-button">
                        Login
                    </button>

                    <div className="login-register-link">
                        <p>
                            Don't have an account? <a href="#">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;