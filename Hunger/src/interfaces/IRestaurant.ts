export interface IRestaurant{
    id:string,
    name:string,
    cuisines:string[],
    areaName:string,
    avgRating:number,
    locality?:string,
    feeDetails?:{icon:string,message:string,totalFee:number}
    cloudinaryImageId:string,
    costForTwoMessage?:string,
    sla:{
        deliveryTime:number,
        slaString: string,
        }
        aggregatedDiscountInfoV3?:{header:string,subHeader:string}
        aggregatedDiscountInfoV2?:{}
}