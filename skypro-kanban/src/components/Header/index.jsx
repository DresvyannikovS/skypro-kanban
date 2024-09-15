import { useState } from "react";
import { PopUser } from "../PopUser";
import * as S from "./header.styled";
import { Container } from "../General/General.styled";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

let i = 7;

export const Header = ({ changeTheme, isDarkTheme }) => {
  const { user, updateUser } = useUserContext();

  const [isOpenUser, setIsOpenUser] = useState(false);
  
  const handleClickOpenUser = () => {
    setIsOpenUser(!isOpenUser);
  };

  return (
    <S.Header theme={isDarkTheme}>
      <Container>
        <S.Block>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="public/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="public/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.Nav>
            <S.ButtonMain
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              <Link to="/newTask">Создать новую задачу</Link>
            </S.ButtonMain>
            <S.User
              theme={isDarkTheme}
              href="#"
              className="header__user _hover02"
              onClick={handleClickOpenUser}
            >
              {user.name}
            </S.User>
            {isOpenUser && <PopUser theme={isDarkTheme} changeTheme={changeTheme} />}
          </S.Nav>
        </S.Block>
      </Container>
    </S.Header>
  );
};
