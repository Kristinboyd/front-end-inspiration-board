import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';
import NewCardForm from './NewCardForm';

const CardsList = (props) => {

  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.board_id}/cards`).then((response)=> {
      setCardsData(response.data);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t get cards for this board.');
    });
  }, [props.board]);

  const deleteCardItem = (card) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}`).then((response) => {
      // assumes server was able to delete the card in the db no matter what the api response was (not ideal)
      const newCardsData = cardsData.filter((existingCard) => {
        return existingCard.card_id !== card.card_id;
      });
      setCardsData(newCardsData); // we made a copy of the cards, filtered the deleted one out, and now we are updated state to reflect the new set of cards
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t delete the card.');
    });
  };

  // see below - this function could be named incrementLikes
  const plusOneCardItem = (targetCard) => {
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${targetCard.card_id}/like`).then((response) => { /*notice the snake case refering to the api, since I don't know what the server variable will be, loop over the object and rename keys to camel case before: maybe a helper function for any response to be mutated? Maybe use decoratos for every axios call*/ 
      const newCardsCollection = cardsData.map((card) => { // card used to be named existingCard
        return card.card_id !== targetCard.card_id ? card : {...cardToLike, likes_count: cardToLike.likes_count + 1} // 
      });
      setCardsData(newCardsCollection);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t +1 the card.');
    });
  };

  const cardElements = cardsData.map((card) => {
    return (<Card
        card={card}
        plusOneCardItem={plusOneCardItem}
        deleteCardItem={deleteCardItem}></Card>)
  }); // we're just passing those functions to the individual cards; we could name the functions we're passing anything we want. example: plusOneCardItem={incrementLikes}

  const postNewCard = (message) => {
    axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.board_id}/cards`,
        {message}
    ).then((response) => {
      const cards = [...cardsData];
      cards.push(response.data.card);
      setCardsData(cards);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t create a new card.');
    });
  };

  return (<section className='cards__container'>
      <section>
        <h2>Cards for {props.board.title}</h2>
        <div className='card-items__container'>
          {cardElements}
        </div>
      </section>
      <NewCardForm postNewCard={postNewCard}></NewCardForm>
    </section>)
};

export default CardsList;