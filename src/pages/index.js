import * as React from "react"
import HeroSection from "../components/heroSection"
import NavBar from "../components/Navbar"
import CoffeeShop from "../components/Coffeeshop"
import CoffenerShop from "../components/CoffenerShop"
import CoffeeMenu from "../components/Menu"
import ExclusiveCoffee from "../components/ExclusiveMenu"
import Masterchef from "../components/masterchef"

const IndexPage = () => {
  return (
    <main>
       <HeroSection/>
       <CoffeeShop/>
       {/* <NavBar/> */}
       <CoffenerShop/>
       <CoffeeMenu/>
       <ExclusiveCoffee/>
       <Masterchef/>
    </main>
  )
}

export default IndexPage
export const Head = () => <title>Coffee Website</title>