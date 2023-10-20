"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterBar } from "./filter_bar";
import { ExercisesList } from "./exercises_list";
import { FilterContextProvider } from "@/contexts/filter_context";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

interface DefaultProvidersProps{
    children: ReactNode ;
}

const theme = {
    DesktopBreakPoint: "768px"
}

export function DefaultProviders({children,}: DefaultProvidersProps){
    const client = new QueryClient();
  
    return(
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>        
        </QueryClientProvider>
    )
}