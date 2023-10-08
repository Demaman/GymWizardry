import { FilterContext } from "@/contexts/filter_context";
import { useContext } from "react";

export function useFilter(){
    return useContext(FilterContext)
}