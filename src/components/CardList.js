// edited 

import PropTypes from 'prop-types'
//import Card from './components/Card'
import "./CardList.css"


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