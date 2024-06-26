
import React from 'react';
import { Inter } from "next/font/google";
import styles from './layout.module.css'
import Navigation from "@/components/Navigation/Navigation";
import Fotter from "@/components/Footer/Fotter";
import Image from 'next/image';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className= {styles.main}>
        <Image
          className={styles.logo}
          src="/ミライ.jpg"
          alt="MIRAI Logo"
          width={180}
          height={37}
          priority
        />
        
        <Navigation />

        

        {children}

        <Fotter />
        </main>
        
        
        </body>
    </html>
  );
}
