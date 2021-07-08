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
            
            {/*<select className='card-items-sort__selectfrm'>
                <option value="alphabetically">Sort Alphabetically</option>
                <option value="likes">See Most Liked first</option>
                <option value="ID">Sort by ID</option>
            </select>*/}
            <div className='card-items__container'>
                {cardComponents}
            </div>
        </section>
    );
};

cardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        //whatever goes in here
    })),
};




export default cardList;