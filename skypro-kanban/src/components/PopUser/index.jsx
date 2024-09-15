import * as S from "./user.styled";
import { getUserData } from "../../storage";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { PopExit } from "../PopExit/PopExit";
import { useUserContext } from "../../context/UserContext";

export const PopUser = ({ theme, changeTheme }) => {
  
  const { user, updateUser } = useUserContext();
  const [showModalExit, setShowModalExit] = useState(false);

  const handleOpenModal = () => {
    setShowModalExit(true);
  };

  return (
    <>
      <S.Div
        theme={theme}
        className="header__pop-user-set pop-user-set"
        id="user-set-target"
      >
        <S.P>{user.name}</S.P>
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
        <button onClick={handleOpenModal} type="button" className="_hover03">
          <a>Выйти</a>
        </button>
      </S.Div>
      {showModalExit && <PopExit />}
    </>
  );
};
