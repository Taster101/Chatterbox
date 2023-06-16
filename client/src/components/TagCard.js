import Card from "./Card";

export default function TagCard() {
    return(
        <div>
            <h1 className="text-6xl mb-4 text-gray-300"> Tags </h1>
            <Card>
            <ul> 

            <li><a href="">Music</a> </li>  
            <li><a href="">News </a></li> 
            <li><a href="">Sports </a></li> 
            <li><a href="">Entertainmen </a></li> 
            </ul>
            
            </Card>
        </div>
    )
}