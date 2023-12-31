import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const inter = Inter({
   subsets: ['latin'],
   variable: "--font-inter"
  
  })

export const metadata = {
  title: 'Epic Store',
  description: 'Generated by create next app',
  
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
    
      <body className={`${inter.variable} font-sans 	flex flex-col`}>
      
         <Header/>
        {children}
       <Footer/>
       
        
       </body>
    </html>
  )
}
