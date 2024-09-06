import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

const card_attribute={
  title:"The Coldest Sunset",
  imgDescription:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  imgAlt:"the sunset",
  imgSrc:"/test.jpg"


}

export default function Home() {
  return (
    <div>
     <Navbar></Navbar>
     <Card 
     title={card_attribute.title}
     imgDescription={card_attribute.imgDescription}
     imgAlt={card_attribute.imgAlt}
     imgSrc={card_attribute.imgSrc}></Card>
    </div>
  )
}
