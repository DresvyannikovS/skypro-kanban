import { useEffect, useState } from "react";
import { Calendar, MyDatePicker } from "../Calendar";
import { addTask } from "../../api";
import { tr } from "date-fns/locale";
import { useTaskContext } from "../../context/TaskContext";
import { useNavigate } from "react-router-dom";

export const PopNewCard = () => {
    let navigate = useNavigate();

    const { updateTasks } = useTaskContext()

  const formFields = {
    title: "",
    topic: "Research",
    status: "В работе",
    description: "",
    date: "",
  };

  const [formData, setFormData] = useState(formFields);

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setFormData({
      ...formData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });

    console.log(formData);
  };

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected !== null) {
      formData.date = selected.toISOString();

      console.log(formData.date);
    }
  }, [selected]);

  const handleClose = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    try {
      addTask(formData).then((answer) => {
        updateTasks(answer.tasks);
        navigate("/");
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a onClick={handleClose} className="pop-new-card__close">
              &#10006;
            </a>
            <div className="pop-new-card__wrap">
              <form
                // onSubmit={handleSubmit}
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label for="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    onChange={handleInputChange}
                    className="form-new__input"
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label for="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    onChange={handleInputChange}
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>

              <MyDatePicker selected={selected} setSelected={setSelected} />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
