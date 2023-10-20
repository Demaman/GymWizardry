"use client"
import React from 'react';
import { FilterBar } from '../components/filter_bar';
import styles from './page.module.css' 
import { ExercisesList } from '@/components/exercises_list';


export default function Page() {

  return (
      <main className={styles.main}>
        <FilterBar/>
        <ExercisesList/>
      </main>
  )
}
