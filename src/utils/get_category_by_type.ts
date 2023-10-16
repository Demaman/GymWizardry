import { FilterType } from "@/constants/filter_types";

export function GetCategoryByType(category: FilterType){
    if(category == FilterType.ALL) return 'ALL'
    if(category == FilterType.CHEST) return 'chest'
    if(category == FilterType.ARMS) return 'arms'
    if(category == FilterType.SHOULDERS) return 'shoulders'
    if(category == FilterType.LEGS) return 'legs'
    if(category == FilterType.BACKS) return 'backs'
    return ""
}
