import { Column } from "../Column";

export const Main = () => {
    return (
        <main class="main">
        <div class="container">
            
            <div class="main__block">
                <div class="main__content">

                    < Column title="Без статуса" />

                    < Column title="Нужно сделать" />
                    < Column title="В работе" />
                    < Column title="Тестирование" />
                    < Column title="Готово" />
                                        
                </div>            
            </div>
        </div>
    </main>
    );
}