import React from 'react'
import {PlaceholdersAndVanishInputDemo} from "@/components/placehlder"
import { InfiniteMovingCardsDemo } from '@/components/movingcards'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer2'
    
const page = () => {
  return (
   <>
   <Header></Header>
   <PlaceholdersAndVanishInputDemo></PlaceholdersAndVanishInputDemo>
   <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
   <Footer></Footer>
   </>
  )
}

export default page