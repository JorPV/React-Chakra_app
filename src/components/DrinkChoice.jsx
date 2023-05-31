import { ChangeButton } from "./UI/Button";

export const DrinkChoice = ({ drink, clickFn }) => {
    return (
            <>
                <h2>You've got it, a {drink.name}</h2>
                <img src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
                <p>Your drink will be ready in a moment</p>
                <ChangeButton text={'Change selection'} clickFn={() => clickFn()} />
            </>
    );
};
