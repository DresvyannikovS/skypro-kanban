import { Calendar } from "../components/Calendar";
import { useNavigate, useParams } from "react-router-dom";
import { cardList } from "../data";
import { GetTaskByID } from "../api";
import { useState } from "react";
import { useEffect } from "react";


export const TaskProfile = () => {
  let { id } = useParams();
  const [itemCard, setItemCard] = useState({});
  const [isLoadItem, setIsLoadItem] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setIsLoadItem(true);
    GetTaskByID(id)
      .then((answer) => {
        setItemCard(answer.task);
      })
      .then(() => {
        setIsLoadItem(false);
      });
  }, []);

  const handleClose = () => {
    navigate('/')
  }

  return (
    <>
      {isLoadItem && <p>Идет загрузка</p>}

      {!isLoadItem && (
        <div className="pop-browse" id="popBrowse">
          <div className="pop-browse__container">
            <div className="pop-browse__block">
              <div className="pop-browse__content">
                <div className="pop-browse__top-block">
                  <h3 className="pop-browse__ttl">{itemCard.title}</h3>
                  <div className="categories__theme theme-top _orange _active-category">
                    <p className="_orange">Web Design</p>
                  </div>
                </div>
                <div className="pop-browse__status status">
                  <p className="status__p subttl">Статус</p>
                  <div className="status__themes">
                    <div className="status__theme _gray">
                      <p className="_gray">{itemCard.status}</p>
                    </div>
                  </div>
                </div>
                <div className="pop-browse__wrap">
                  <form
                    onSubmit={handleSubmit}
                    className="pop-browse__form form-browse"
                    id="formBrowseCard"
                    action="#"
                  >
                    <div className="form-browse__block">
                      <label htmlFor="textArea01" className="subttl">
                        Описание задачи
                      </label>
                      <textarea
                        className="form-browse__area"
                        name="text"
                        id="textArea01"
                        readOnly
                        placeholder="Введите описание задачи..."
                      ></textarea>
                    </div>
                  </form>
            
                  <MyDatePicker />

                </div>
                <div className="theme-down__categories theme-down">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">Web Design</p>
                  </div>
                </div>
                <div className="pop-browse__btn-browse ">
                  <div className="btn-group">
                    <button className="btn-browse__edit _btn-bor _hover03">
                      <a href="#">Редактировать задачу</a>
                    </button>
                    <button className="btn-browse__delete _btn-bor _hover03">
                      <a href="#">Удалить задачу</a>
                    </button>
                  </div>
                  <button onClick={handleClose} className="btn-browse__close _btn-bg _hover01">
                    <a href="#">Закрыть</a>
                  </button>
                </div>
                <div className="pop-browse__btn-edit _hide">
                  <div className="btn-group">
                    <button className="btn-edit__edit _btn-bg _hover01">
                      <a href="#">Сохранить</a>
                    </button>
                    <button className="btn-edit__edit _btn-bor _hover03">
                      <a href="#">Отменить</a>
                    </button>
                    <button
                      className="btn-edit__delete _btn-bor _hover03"
                      id="btnDelete"
                    >
                      <a href="#">Удалить задачу</a>
                    </button>
                  </div>
                  <button className="btn-edit__close _btn-bg _hover01">
                    <a href="#">Закрыть</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
