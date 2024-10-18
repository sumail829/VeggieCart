import Image from "next/image"

export const Card= ({
    title,
    imgDescription,
    imgAlt,
    imgSrc
}:{
    title:string;
    imgDescription:string;
    imgAlt:string;
    imgSrc:string;
})=>{
    return(
        <div className="relative max-w-sm border-gray-100 border-2">
            <div>
                <Image
                src={"/test.jpg"}
                alt="sunset"
                className="flex rounded-sm opacity-80 overflow-hidden shadow-lg"
                width={400}
                height={200}>

                </Image>
            </div>
            <div className="px-4 py-6">
             <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <div className="text-gray-700 text-base dark:text-white">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </div>
            </div>
        </div>
    )
}