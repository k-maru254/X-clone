import { Stack, Card, Button } from "react-bootstrap";
import ItemContainer from "./ItemContainer";
import ShowMore from "./ShowMore";
import Trend from "./Trend";

function Trends() {
    return (
        <>
                {/* Show each trend */ }
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />

            {/* Show more button */ }
            <ShowMore />
        </>
    );
}

export default Trends;
