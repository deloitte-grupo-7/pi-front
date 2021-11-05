export class Post {
    id?:string;
    title?: string;
    description?: string;
    imgUrl?: string;
    rating?:number;
    constructor(title?: string, description?:string, imgUrl?: string){
        
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}