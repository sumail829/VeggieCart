import Image from "next/image"

export const Card= ({
    id,
    title,
    imgDescription,
    imgAlt,
    imgSrc
}:{
    id:number;
    title:string;
    imgDescription:string;
    imgAlt:string;
    imgSrc:string;
})=>{
    return(
        <div className="relative max-w-sm border-gray-100 border-2">
            <div>
                <Image
                src={imgSrc}
                alt={imgAlt}
                className="flex rounded-sm opacity-80 overflow-hidden shadow-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ..."
                width={400}
                height={200}>

                </Image>
            </div>
            <div className="px-4 py-6">
             <div className="font-bold text-xl mb-2">{title}</div>
              <div className="text-gray-700 text-base dark:text-white">
               {imgDescription}
              </div>
            </div>
        </div>
    )
}