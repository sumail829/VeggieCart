import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

const card_attribute=[
  {
    id:1,
  title:"The Coldest Sunset",
  imgDescription:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  imgAlt:"the sunset",
  imgSrc:"/test.jpg",},

  {
    id:2,
    title:"The Coldest Sunset",
    imgDescription:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    imgAlt:"the sunset",
    imgSrc:"/test.jpg",},

    {
      id:3,
      title:"The Coldest Sunset",
      imgDescription:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      imgAlt:"the sunset",
      imgSrc:"/test.jpg",},

  
];

export default function Home() {
  return (
    <div>
     <Navbar></Navbar>
     <div>
      {card_attribute.map(({id, title,imgDescription,imgAlt,imgSrc})=>(
        <Card
        title={title}
        key={id}
        imgDescription={imgDescription}
        imgAlt={imgAlt}
        imgSrc={imgSrc}></Card>
      ))}
      </div>
    </div>
  )
}
