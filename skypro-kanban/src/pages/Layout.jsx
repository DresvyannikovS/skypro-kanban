import { useEffect, useState } from "react";

import { GlobalStyle, Wrapper } from "../components/General/general.styled"
import { Outlet } from "react-router-dom";

export const Layout = () => {

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000); // 2 секунды задержки
  }, []);

  return (
    <>
      {isLoaded && <p>Идет загрузка</p>}

      {!isLoaded && (
        <>
        <GlobalStyle />

        <Wrapper>
          <Outlet />
        </Wrapper>
        </>
      )}
    </>
  );
};
