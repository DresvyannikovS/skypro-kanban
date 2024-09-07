import { Card } from "../Card";

export const Column = ({ title }) => {
 return (
    <div className="main__column column">
    <div class="column__title">
        <p>{title}</p>
    </div>
    <div class="cards">
        <Card name="Web Design" classColor="_orange" />

        <Card name="Research" classColor="_green" />

        <Card name="Web Design" classColor="_orange" />

        <Card name="Copywriting" classColor="_purple" />

        <Card name="Web Design" classColor="_orange" />
    </div>
</div>	
 );
}