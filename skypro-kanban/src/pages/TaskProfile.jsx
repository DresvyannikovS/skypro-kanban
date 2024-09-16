import { Calendar, MyDatePicker } from "../components/Calendar";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../components/PopNewCard/NewCard.styled";
import { deleteTask, editTask, GetTaskByID } from "../api";
import { useState } from "react";
import { useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { useTaskContext } from "../context/TaskContext";

export const TaskProfile = () => {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  let { id } = useParams();
  const { updateTasks } = useTaskContext();
  const { theme } = useThemeContext();
  const [itemCard, setItemCard] = useState({});
  const [isLoadItem, setIsLoadItem] = useState(false);
  let navigate = useNavigate();

  const [selected, setSelected] = useState(null);

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
    navigate("/");
  };

  // Блок управления редактированием задачи
  const [isEdit, setIsEdit] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(itemCard.status);

  const handleSelectStatus = (e) => {
    setSelectedStatus(e.target.dataset.status);
    setItemCard({
      ...itemCard, // Копируем текущие данные из состояния
      ["status"]: e.target.dataset.status, // Обновляем нужное поле
    });
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    setSelectedStatus(itemCard.status);
  }, [itemCard.status]);

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setItemCard({
      ...itemCard, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  useEffect(() => {
    if (selected !== null) {
      setItemCard({
        ...itemCard, // Копируем текущие данные из состояния
        ["date"]: selected.toISOString(), // Обновляем нужное поле
      });
    }
  }, [selected]);

  //Отправка редактированной задачи

  const handleSubmit = () => {
    editTask(itemCard)
      .then((answer) => {
        updateTasks(answer.tasks);
      })
      .then(() => {
        navigate("/");
      });
  };

  const handleDelete = () => {
    deleteTask(itemCard._id)
      .then((answer) => {
        updateTasks(answer.tasks);
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      {isLoadItem && <p>Идет загрузка</p>}

      {!isLoadItem && (
        <div className="pop-browse" id="popBrowse">
          <S.NewCardContaner $theme={theme}>
            <S.CardContainer $theme={theme}>
              <div className="pop-browse__content">
                <div className="pop-browse__top-block">
                  <S.Title $theme={theme}>{itemCard.title}</S.Title>
                  <div className="categories__theme theme-top _orange _active-category">
                    <p className="_orange">Web Design</p>
                  </div>
                </div>
                <div className="pop-browse__status status">
                  <S.Subttl $theme={theme} className="status__p">
                    Статус
                  </S.Subttl>
                  <div className="status__themes">
                    {!isEdit ? (
                      <div className="status__theme _gray">
                        <p className="_gray">{itemCard.status}</p>
                      </div>
                    ) : (
                      statusList.map((status) => (
                        <div
                          onClick={handleSelectStatus}
                          key={status}
                          className={
                            selectedStatus === status
                              ? "status__theme _gray"
                              : "status__theme"
                          }
                        >
                          <p
                            data-status={status}
                            className={selectedStatus === status ? "_gray" : ""}
                          >
                            {" "}
                            {status}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                <div className="pop-browse__wrap">
                  <form
                    className="pop-browse__form form-browse"
                    id="formBrowseCard"
                    action="#"
                  >
                    <div className="form-browse__block">
                      <S.Subttl $theme={theme} htmlFor="textArea01">
                        Описание задачи
                      </S.Subttl>

                      {isEdit ? (
                        <S.Textarea
                          onChange={handleInputChange}
                          $theme={theme}
                          className="form-browse__area"
                          name="description"
                          id="textArea01"
                          value={itemCard.description}
                          placeholder=""
                        ></S.Textarea>
                      ) : (
                        <S.Textarea
                          readOnly
                          $theme={theme}
                          className="form-browse__area"
                          name="description"
                          id="textArea01"
                          value={itemCard.description}
                          placeholder=""
                        ></S.Textarea>
                      )}
                    </div>
                  </form>

                  <MyDatePicker selected={selected} setSelected={setSelected} />
                </div>
                <div className="theme-down__categories theme-down">
                  <S.Subttl $theme={theme} className="categories__p">
                    Категория
                  </S.Subttl>
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">Web Design</p>
                  </div>
                </div>

                {!isEdit ? (
                  <div className="pop-browse__btn-browse ">
                    <div className="btn-group">
                      <button
                        onClick={handleEdit}
                        className="btn-browse__edit _btn-bor _hover03"
                      >
                        <a href="#">Редактировать задачу</a>
                      </button>
                      <button
                        onClick={handleDelete}
                        className="btn-browse__delete _btn-bor _hover03"
                      >
                        <a href="#">Удалить задачу</a>
                      </button>
                    </div>
                    <button
                      onClick={handleClose}
                      className="btn-browse__close _btn-bg _hover01"
                    >
                      <a href="#">Закрыть</a>
                    </button>
                  </div>
                ) : (
                  <div className="pop-browse__btn-edit">
                    <div className="btn-group">
                      <button
                        onClick={handleSubmit}
                        className="btn-edit__edit _btn-bg _hover01"
                      >
                        <a href="#">Сохранить</a>
                      </button>
                      <button
                        onClick={handleEdit}
                        className="btn-edit__edit _btn-bor _hover03"
                      >
                        <a href="#">Отменить</a>
                      </button>
                      <button
                        className="btn-edit__delete _btn-bor _hover03"
                        id="btnDelete"
                      >
                        <a href="#">Удалить задачу</a>
                      </button>
                    </div>
                    <button
                      onClick={handleClose}
                      className="btn-edit__close _btn-bg _hover01"
                    >
                      <a href="#">Закрыть</a>
                    </button>
                  </div>
                )}
              </div>
            </S.CardContainer>
          </S.NewCardContaner>
        </div>
      )}
    </>
  );
};
