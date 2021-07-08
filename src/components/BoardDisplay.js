const BoardDisplay = (props) => {
    return (<div onClick={() => props.onClickBoard(props.board)}>{props.board.title}</div>);
};

export default BoardDisplay;