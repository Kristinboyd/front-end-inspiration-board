import PropTypes from 'prop-types'
import "./CardList.css"
import NewCardForm from './NewCardForm';
import Card from './Card'
import { useState, useEffect }  from 'react';
import axios from 'axios';

//commenting below out for now. I'm not sure that these exaple cards are to be rendered or how and if we do that would we also be seeding the database? 
//need some guidance from team on this choice. 
// const exampleCards =  { 
//     "cards": [
//         {
//             "board_id": 2,
//             "card_id": 3,
//             "likes_count": 1,
//             "message": "hello"
//         }
//     ],
//     "owner": "summer",
//     "title": "summer's board"
// }

//speaking of the server, the card list is where I think we could be making calls to the server from referencing simon's example. 
//I guess I will go look at *our* code again and see where those calls/ logic are handled right now
//update: that logic not found elsewhere, let us do it here, team!

const CardList = (props) => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        axios.get(`https://wm-inspo-board.herokuapp.com/boards/${props.board.board_id}/cards`).then((response)=> {
          setCardData(response.data);
        }).catch((error) => {
          console.log('Error:', error);
          alert('Sorry, inspiration was not in the cards (we had an error).');
        });
      }, [props.board]); //not blank because only sometimes? do I have that backwards?
    
    //would like to handle below function differently but just trying to get working implementation for now, maybe team can check my understanding here:
    const deleteCardItem = (card) => {
        axios.delete(`https://wm-inspo-board.herokuapp.com/cards/${card.card_id}`).then((response) => {
          // assumes server was able to delete the card in the db no matter what the api response was (not ideal)
          const newCardData = cardData.filter((existingCard) => {
            return existingCard.card_id !== card.card_id;
          });
          setCardData(newCardData); // we made a copy of the cards, filtered the deleted one out, and now we have updated state to reflect the new set of cards
        }).catch((error) => {
          console.log('Error:', error);
          alert('deletion failed.');
        });
      };

    const incrementLikes = (targetCard) => {
        axios.put(`https://wm-inspo-board.herokuapp.com/cards/${targetCard.card_id}/like`).then((response) => { /*team: notice the snake case refering to the api, that's where those links at bottom (in slack) came from for wishlist refactor*/}
        const accumulateCardLikes = cardsData.map((card) => { // card used to be named existingCard
            return card.card_id !== targetCard.card_id ? card : {...cardToLike, likes_count: cardToLike.likes_count + 1} //oof, ternery operator, spread on object... if we want to re do this is a ok by me
          });
          setCardData(accumulateCardLikes);
        }).catch((error) => {
          console.log('Error:', error);
          alert('Thanks for the love but like button failed.');
        });
      };

    const cardComponents = props.Card.map((Card, index) => { /*since we are using state/making api calls here I think we need to instead map carddata from server*/ 
        return (
            <li key={index}>
                <Card
                    id='string' {/*question for team: Can card component tag actually be a self closing tag idk*/}
                {/*should be making function calls here? see comment below*/}
                /> 
            </li>
        );

    });
    // we're just passing those functions to the individual cards from our server call; examples: plusOneCardItem={incrementLikes} deleteCardItem={deleteCardItem}

  //const postNewCard = (inspoText) => {
      //********* need to implement still still possibly but am running out of gas and forgot if that logic is being handled elsewhere in these files 

    return (
        <section className='card-list__container'>
            <h3>Wise Words of {props.board.title}</h3>
            <ul>
                {cardComponents}
            </ul>
        
        <section className='card-form__container'> <NewCardForm postNewCard={postNewCard}></NewCardForm> </section>
        </section>
    );
};

// cardList.propTypes = {
//     cards: PropTypes.arrayOf(PropTypes.shape({  //i think I need to chew on the intention here for a bit... sorry for the initial confusion I may have contributed here... you da best kristin <3
        //whatever goes in here
    // })),
// };




export default CardList;