
import { Column } from "../Column";
import { Container } from "../General/General.styled";
import * as S from "../Main/main.styled";
import { useThemeContext } from "../../context/ThemeContext";

export const Main = ({ tasks }) => {
  const { theme } = useThemeContext();

  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <S.Main $theme={theme}>
      <Container>
        <div className="main__block container">
          <div className="main__content">
            {statusList.map((title) => (
              <Column
                key={title}
                title={title}
                tasks={tasks.filter((item) => item.status === title)}
              />
            ))}
          </div>
        </div>
      </Container>
    </S.Main>
  );
};
