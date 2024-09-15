import { useState } from "react";
import { cardList } from "../../data";
import { Column } from "../Column";
import { Container } from "../General/General.styled";
import * as S from "../Main/main.styled";

export const Main = ({ tasks, isDarkTheme }) => {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <S.Main theme={isDarkTheme === "light" ? "light" : "dark"}>
      <Container>
        <div className="main__block container">
          <div className="main__content">
            {statusList.map((title) => (
              <Column
                key={title}
                title={title}
                theme={isDarkTheme === "light" ? "light" : "dark"}
                tasks={tasks.filter((item) => item.status === title)}
              />
            ))}
          </div>
        </div>
      </Container>
    </S.Main>
  );
};
