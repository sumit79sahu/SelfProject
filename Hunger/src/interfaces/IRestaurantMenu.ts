export type MenuInfo={
    id:string,
    category:string,
    name:string,
    price:number,
    defaultPrice:number,
    description:number,
    imageId:string,
    isVeg?:number
}
export interface IRestaurantMenu{

    title:string,
    categories?:{title:string,menu:MenuInfo[]}[],
    menu?: MenuInfo[]
}
