import { Stack, Card, Button } from "react-bootstrap";
import Trend from "./Trend";

function Trends() {
    return (
        <div>
            <Stack>
                <Card className="bg-secondary rounded-4">
                    <Card.Body className="bg-secondary rounded-4">
                        <Card.Title>Trends for you</Card.Title>
                    </Card.Body>
                    <Trend />
                    <Trend />
                    <Trend />                    
                    {/* Show more */ }
                    <Button>Show more</Button>
                </Card>
            </Stack>
        </div>
    );
}

export default Trends;
