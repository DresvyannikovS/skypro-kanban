import { useEffect, useState } from "react";
import * as S from "./NewCard.styled";
import { Calendar, MyDatePicker } from "../Calendar";
import { addTask } from "../../api";
import { useTaskContext } from "../../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import { categories } from "../../data";

export const PopNewCard = () => {

  let navigate = useNavigate();

  const { updateTasks } = useTaskContext();
  const { theme } = useThemeContext();

  const formFields = {
    title: "",
    topic: "Web design",
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

  //изменение категорий


  const [activeCategory, setActiveCategory] = useState("Web Design");

  const handleSetActiveCategory = (e) => {
    setActiveCategory(e.target.dataset.topic);
    setFormData({
      ...formData,
      ["topic"]: e.target.dataset.topic,
    });
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <S.NewCardContaner $theme={theme}>
        <S.NewCardBlock $theme={theme}>
          <div className="pop-new-card__content">
            <S.Title $theme={theme}>Создание задачи</S.Title>
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
                  <S.Subttl $theme={theme}>Название задачи</S.Subttl>
                  <S.Input
                    $theme={theme}
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
                  <S.Subttl $theme={theme}>Описание задачи</S.Subttl>
                  <S.Textarea
                    $theme={theme}
                    onChange={handleInputChange}
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.Textarea>
                </div>
              </form>

              <MyDatePicker selected={selected} setSelected={setSelected} />
            </div>
            <div className="pop-new-card__categories categories">
              <S.Subttl $theme={theme} className="categories__p">
                Категория
              </S.Subttl>
              <div className="categories__themes">
                {categories.map((cat) => (
                  <div
                    onClick={handleSetActiveCategory}
                    key={cat.topic}
                    className={
                      activeCategory === cat.topic
                        ? `categories__theme ${cat.class} _active-category`
                        : `categories__theme ${cat.class}`
                    }
                  >
                    <p data-topic={cat.topic} className={cat.class}>
                      {cat.topic}
                    </p>
                  </div>
                ))}
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
        </S.NewCardBlock>
      </S.NewCardContaner>
    </div>
  );
};
