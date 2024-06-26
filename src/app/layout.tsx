import './styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

import { Inter } from 'next/font/google'

import Header from './components/header'
import Footer from './components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ReadMy.AI App',
  description: 'Created by Dev&Beyond LLC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
