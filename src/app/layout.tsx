// layout.tsx
import React, { ReactNode } from 'react';
import { Saira } from 'next/font/google';
import './globals.css';
import { Header } from '../components/header';
import { FilterContextProvider } from '@/contexts/filter_context';

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by Perionix',
};

const bodyStyle = {
  backgroundColor: '#b8bac7', // Corrected property name
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='en'>
        <body className={saira.className} style={bodyStyle}>
          <FilterContextProvider>
            <Header />
            {children}
          </FilterContextProvider>
      </body>
    </html>
  );
}
