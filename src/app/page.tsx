"use client"
import React from 'react';
import { FilterBar } from '../components/filter_bar';
import styles from './page.module.css' 
import { ExercisesList } from '@/components/exercises_list';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


export default function Page() {
  const client = new QueryClient;

  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar/>
        <ExercisesList/>
      </main>
    </QueryClientProvider>
  )
}
