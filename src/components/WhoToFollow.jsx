import { Card, Container} from "react-bootstrap";
import PersonToFollow from "./PersonToFollow";

function WhoToFollow() {
    return (
      
        <Card className="bg-secondary">
            <Card.Body>
                <Card.Title>Who to follow</Card.Title>
            </Card.Body>
            <Container>                
                <PersonToFollow />  
            </Container>
        </Card>
    );
}

export default WhoToFollow;
