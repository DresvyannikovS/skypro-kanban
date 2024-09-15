import * as S from "./user.styled";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useThemeContext } from "../../context/ThemeContext";

export const PopUser = () => {
  
  const { user, updateUser } = useUserContext();
  const { theme, changeTheme } = useThemeContext();

  return (
    <>
      <S.Div $theme={theme}
        className="header__pop-user-set pop-user-set"
        id="user-set-target"
      >
        <S.P $theme={theme}>{user.name}</S.P>
        <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
        <div className="pop-user-set__theme">
          <S.P>Темная тема</S.P>
          <input
            onClick={changeTheme}
            type="checkbox"
            className="checkbox"
            name="checkbox"
          />
        </div>
        <button type="button" className="_hover03">
          <Link to="/exit">Выйти</Link>
        </button>
      </S.Div>
    </>
  );
};
