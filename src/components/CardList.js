import PropTypes from 'prop-types'
import "./CardList.css"


const exampleCards =  {
    "cards": [
        {
            "board_id": 2,
            "card_id": 3,
            "likes_count": 1,
            "message": "hello"
        }
    ],
    "owner": "summer",
    "title": "summer's board"
}

const cardList = (props) => {
    const cardComponents = props.Card.map((Card, index) => {
        return (
            <li key={index}>
                <Card
                    id='string'>
                </Card>
            </li>
        );

    });

    return (
        <section>
            <h3>Card List</h3>
            <ul>
                {cardComponents}
            </ul>
        </section>
    );
};

cardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        //whatever goes in here
    })),
};




export default cardList;