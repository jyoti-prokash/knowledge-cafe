import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookmarks}) => {
    const {cover,author,author_img,posted_date,reading_time,title,hashtags} = blog;
    return (
        <div className="space-y-4 my-5">
            <img className="rounded-xl w-full" src={cover} alt="cover image"/>  
            <div className="space-y-5 flex justify-between">
                <div className="flex gap-8">
                    <div><img className="w-14" src={author_img} alt="" /></div>
                    <div>
                        <p className="font-bold text-xl">{author}</p>
                        <p className="text-gray-500">{posted_date}</p>
                    </div>
                </div>
                <div>
                        {reading_time} min read <button onClick={()=>handleBookmarks(blog)} className="ml-4 text-xl"><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-lg text-gray-500">
            {
                hashtags.map(hash => <span><a href="#">#{hash}</a></span>)
            }
            </p>
            <button className="text-blue-700 text-2xl font-semibold">Mark as read</button>
        </div>
    );
};

export default Blog;