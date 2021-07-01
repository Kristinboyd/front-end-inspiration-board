import './CardsList.css';
import PropTypes from 'prop-types';
import Card from '.src/Card';

const CardsList = (props) => {
    const cardComponents = props.cards.map((card, index) => {
        return (
            <li key={index}>
                <Card
                    id={card.id}
                    text={card.cardTextData}
                    board={card.whoseBoardData}
                    cardName={card.nameData}
                    onClick={card.onCardSubmit} //we probably need to change onClick
                ></Card>
            </li>
        );
    });
//in return below I am thinking we should use the filter method in App? on board for whose board data?
    return (
        <section>
            <h2>Our List of Inspirations</h2> 
            <ul>
                {cardComponents}
            </ul>
        </section>
    );
};

CardsList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        cardTextData: PropTypes.string.isRequired,
        whoseBoardData: PropTypes.string.isRequired,
        nameData: PropTypes.string.isRequired
    })),
    onCardSubmit: PropTypes.func.isRequired
};

export default StudentList;