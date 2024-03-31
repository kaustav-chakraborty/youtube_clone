import { Card } from "./Cards"

const VIDEOS=[{
    title:"How to learn coding in 30n days | 30 days plan", 
    image:"image.jpg",
    thumbImage:"thumbnail.jpg",
    author:"Kaustav",
    views:"40MN",
    timestamp:"2 Days ago",
},{
    title:"How to Jump coding in 30n days | 30 days plan", 
    image:"image.jpg",
    thumbImage:"thumbnail.jpg",
    author:"Kaustav",
    views:"40MN",
    timestamp:"2 Days ago",

},{
    title:"How to Jump coding in 30n days | 30 days plan", 
    image:"image.jpg",
    thumbImage:"thumbnail.jpg",
    author:"Kaustav",
    views:"40MN",
    timestamp:"2 Days ago",

},{
    title:"How to Jump coding in 30n days | 30 days plan", 
    image:"image.jpg",
    thumbImage:"thumbnail.jpg",
    author:"Kaustav",
    views:"40MN",
    timestamp:"2 Days ago",

},{
    title:"How to Jump coding in 30n days | 30 days plan", 
    image:"image.jpg",
    thumbImage:"image.jpg",
    author:"Kaustav",
    views:"40MN",
    timestamp:"2 Days ago",
},{
    title:"How to Jump coding in 30n days | 30 days plan", 
    image:"image.jpg",
    thumbImage:"image.jpg",
    author:"Kaustav",
    views:"40MN",
    timestamp:"2 Days ago",
},{
    title:"How to Jump coding in 30n days | 30 days plan", 
    image:"image.jpg",
    thumbImage:"image.jpg",
    author:"Kaustav",
    views:"40MN",
    timestamp:"2 Days ago",
},{
    title:"How to Jump coding in 30n days | 30 days plan", 
    image:"image.jpg",
    thumbImage:"image.jpg",
    author:"Kaustav",
    views:"40MN",
    timestamp:"2 Days ago",
}]



export const VideoCard=()=>{
    return <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video =>(<div>
            <Card title={video.title} 
    image={video.image}
    thumbImage={video.thumbImage}
    author={video.author}
    views={video.views}
    timestamp={video.timestamp}>

            </Card>
        </div>))}

    </div>
}