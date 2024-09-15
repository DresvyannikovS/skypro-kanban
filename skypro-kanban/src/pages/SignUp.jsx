import { useState } from "react";
import { Link } from "react-router-dom";
import { regAPI } from "../api";
import { setUserToken, setUserData } from "../storage";
import { useUserContext } from "../context/UserContext";

export const SignUp = ({ setIsAuth }) => {
  const { user, updateUser } = useUserContext();

  const regFormFields = {
    name: "",
    login: "",
    password: "",
  };

  const [regFormData, setRegFormData] = useState(regFormFields);

  const handleInputChange = (e) => {
    if (e.target.name !== "firstName") {
    const { name, value } = e.target; // Извлекаем имя поля и его значение
    setRegFormData({
      ...regFormData, 
      [name]: value, 
    });
    } else  {
      setRegFormData({
        ...regFormData, 
        ["name"]: e.target.value, 
      });
    }

  };

  async function SendReg(event) {
    event.preventDefault();
    try {
      await regAPI(regFormData)
        .then((answer) => {
          setUserToken(answer.user.token);
          updateUser(answer.user);
        })
        .then(() => {
          setIsAuth(true);
        });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="container-signup">
      <div className="modal">
        <div className="modal__block">
          <div className="modal__ttl">
            <h2>Регистрация</h2>
          </div>
          <form
            onSubmit={SendReg}
            className="modal__form-login"
            id="formLogUp"
            action="#"
          >
            <input
              onChange={handleInputChange}
              className="modal__input firstName"
              type="text"
              name="firstName"
              id="firstNSame"
              placeholder="Имя"
            />
            <input
              onChange={handleInputChange}
              className="modal__input login"
              type="text"
              name="login"
              id="loginReg"
              placeholder="Эл. почта"
            />
            <input
              onChange={handleInputChange}
              className="modal__input password-first"
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            />
            <button className="modal__btn-signup-ent _hover01" id="SignUpEnter">
              Зарегистрироваться
            </button>
            <div className="modal__form-group">
              <p>
                Уже есть аккаунт? <Link to="/signin">Войдите здесь</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
