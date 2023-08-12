


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '../../components/Navbar/signup/FormInput';

import './login.css';

const LoginPage = () => {
  const methods = useForm();
  const { handleSubmit, formState } = methods;
  const { errors } = formState;

  const [loginMessage, setLoginMessage] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [language, setLanguage] = useState('en');
  const keepLoginEng = " Keep me Logged in";

  const navigate = useNavigate();

  const handleKeepLoggedInChange = () => {
    setKeepLoggedIn(!keepLoggedIn);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const onSubmit = (data) => {
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h1> {language === 'en' ? 'Login to Jira' : 'Connexion à Jira'}</h1>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            name="username"
            label={language === 'en' ? 'Username:' : 'Nom d\'utilisateur :'}
            validation={{
              required: "Username is required",
            }}
          />

          <FormInput
            name="email"
            label={language === 'en' ? 'Email:' : 'Email :'}
            validation={{
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
          />

          <FormInput
            name="password"
            label={language === 'en' ? 'Password:' : 'Mot de passe :'}
            validation={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, and one digit",
              },
            }}
          />

          <div className="input-container">
            <div className="keep-logged-in">
              <input
                className="keep-logged-in-checkbox"
                type="checkbox"
                id="keepLoggedIn"
                checked={keepLoggedIn}
                onChange={handleKeepLoggedInChange}
              />
              <label htmlFor="keepLoggedIn">
                &nbsp;
                {language === 'en' ? keepLoginEng : ' Rester connecté '}
              </label>
            </div>
          </div>

          <div className="login-button-container">
            <button className="login-button" type="submit">
              {language === 'en' ? 'Login' : 'Se connecter'}
            </button>
          </div>
          <div className='login-button-container'>
            <p className="login-message">{loginMessage}</p>
          </div>
        </form>
      </FormProvider>

      <div className="links-container">
        <a href="/forgot-password">
          {language === 'en' ? 'Forgot Password?' : 'Mot de passe oublié ?'}
        </a>
      </div>

      <div className="sign-txt">
        <a onClick={() => { navigate("/signup") }}>
          {language === 'en' ? 'Not yet a member? Signup now' : 'Pas encore membre ? Inscrivez-vous maintenant'}
        </a>
      </div>

      <p>
        {language === 'en'
          ? 'By logging in, you agree to the '
          : 'En vous , vous acceptez la '}
        <strong>{language === 'en' ? 'Privacy Policy' : 'Polque confidentialité'}</strong>
        <br />
        <br />
      </p>

      <button className="lng-button" onClick={toggleLanguage}>
        {language === 'en' ? 'Switch to Frencho' : 'Passer en anglais'}
      </button>
      {/* Rest of your code */}
    </div>
  );
};

export default LoginPage;
