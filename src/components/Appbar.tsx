import { Searchbar } from "./Searchbar"

export const Appbar=()=>{
    return <div className="flex justify-between pt-1">
        <div className="tex-md inline-flex item-center pb-2 ">
            Logo
        </div>
        <div>
            <Searchbar></Searchbar>
        </div>
        <div>
            sign in
        </div>

    </div>
}