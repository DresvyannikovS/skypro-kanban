import { Card } from "../Card";

export const Column = ({ title, tasks, theme }) => {
  
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {tasks.map((item) => (
          <Card id={item._id} theme={theme} key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};
