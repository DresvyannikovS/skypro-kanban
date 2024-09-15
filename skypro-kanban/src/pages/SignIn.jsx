import { Link } from "react-router-dom";
import { loginAPI } from "..//api";
import { useState } from "react";
import { setUserToken} from "../storage";
import { useUserContext } from "../context/UserContext";


export const SignIn = ({ setIsAuth }) => {
  const { user, updateUser } = useUserContext();

  const formFields = {
    login: "",
    password: "",
  };

  const [formData, setFormData] = useState(formFields);

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setFormData({
      ...formData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  async function SendlogIn(event) {
    event.preventDefault();
    try {
      await loginAPI(formData)
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
    <div className="container-signin">
      <div className="modal">
        <div className="modal__block">
          <div className="modal__ttl">
            <h2>Вход</h2>
          </div>
          <form
            onSubmit={SendlogIn}
            className="modal__form-login"
            id="formLogIn"
            action="#"
          >
            <input
              onChange={handleInputChange}
              className="modal__input"
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
            />
            <input
              onChange={handleInputChange}
              className="modal__input"
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <button className="modal__btn-enter _hover01" id="btnEnter">
              <a>Войти</a>
            </button>
            <div className="modal__form-group">
              <p>Нужно зарегистрироваться?</p>
              <Link
                to="/signup"
              >
                Регистрируйтесь здесь
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
