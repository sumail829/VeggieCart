"use client"
import { Card } from "@/components/Card";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { card_attribute } from "@/lib/data";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
  const[isLoading,setIsLoading]=useState(true);
  const[data,setData]=useState([]);

  const fetchfakedata=async()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(res.data);
    setData(res.data);
  }

  useEffect(()=>{
    fetchfakedata();
  },[])

  return (
    <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <div className="flex flex-row justify-between items-center container mx-auto">
      {card_attribute.map(({id, title,imgDescription,imgAlt,imgSrc})=>(
        <Card
        title={title}
        key={id}
        id={id}
        imgDescription={imgDescription}
        imgAlt={imgAlt}
        imgSrc={imgSrc}></Card>
      ))}
      </div>
    </div>
  )
}
