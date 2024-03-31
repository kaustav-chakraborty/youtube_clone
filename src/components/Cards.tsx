
export function Card(props:any){
    return(
        <div className="p-3 cursor-pointer">
            <img className="rounded-xl" src={props.image}></img>
            <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className="rounded-full w-12 h-12" src={props.thumbImage}/>
            </div>
            <div className="col-span-11 pl-2">
                <div>
                    {props.title}
                </div>
                <div className="col-span-11  text-base text-gray-100">
                  {props.author}
                </div>
                <div className="col-span-11 text-gray-600 text-base" >
                  {props.views} | {props.timestamp}
              </div>
                
            </div>
           


            </div>
            
        </div>
    )
}