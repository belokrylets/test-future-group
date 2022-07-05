interface CardBookProps {
    image: string;
    cardCategories: string;
    title: string;
    author: string;
}
const CardBook = ({image, cardCategories, title, author}: CardBookProps) => {
  return (
    <div className='cardBook'>
        <div className="image">
            <img src={image} alt="" />
        </div>
        <div className="cardCategories">{cardCategories}</div>
        <div className="title">{title}</div>
        <div className="author">{author}</div>
    </div>
  )
}

export default CardBook;