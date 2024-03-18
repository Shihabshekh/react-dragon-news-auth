import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const {title,details,image_url,_id} = news;
    return (
        <div className="border ">
            <h4 className="text-2xl mb-5">
                {title}
            </h4>
            <img className="mb-7" src={image_url} alt="" />
            {
                    details.length > 200 
                    ? <p>{details.slice(0,200)}.. <Link to={`/news/${_id}`} className="text-blue-500">Read More</Link></p>
                    : <p>{details}</p>
            }
            
        </div>
    );
};

export default NewsCard;