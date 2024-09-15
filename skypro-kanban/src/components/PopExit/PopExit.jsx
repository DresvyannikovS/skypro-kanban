import { replace } from "react-router-dom";
import { clearUserToken } from "../../storage";
import { useUserContext } from "../../context/UserContext";


export const PopExit = () => {
  const { user, updateUser } = useUserContext();

  const handleLogOut = () => {
    clearUserToken().then(()=>{
      updateUser(null);
      replace("/")
    })

  }

  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button onClick={handleLogOut} className="pop-exit__exit-yes _hover01" id="exitYes">
                <a>Да, выйти</a>
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
