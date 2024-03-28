import { FC } from "react";
// IMAGE
import { gallery1, gallery2, gallery3, gallery4 } from "@/public/img";
// COMPONENT
import { Section, BigHeading } from "@/components";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type GalleryItemsType = {
   alt: string;
   href: string;
   title: string;
   src: StaticImageData;
   parentClassName: string;
};

const galleryItems: GalleryItemsType[] = [
   { src: gallery1, title: "Casual", parentClassName: "col-span-1", alt: "Casual", href: "/" },
   { src: gallery2, title: "Formal", parentClassName: "col-span-2", alt: "Formal", href: "/" },
   { src: gallery3, title: "Party", parentClassName: "col-span-2", alt: "Party", href: "/" },
   { src: gallery4, title: "Gym", parentClassName: "col-span-1", alt: "Gym", href: "/" },
];

const Gallery: FC = (): JSX.Element => {
   return (
      <Section>
         <div className="flex flex-col items-center gap-9 rounded-2xl bg-grey-100 px-4 py-6 xl:gap-20 xl:rounded-[2.5rem] xl:p-20">
            <BigHeading tag="h3" title="BROWSE BY DRESS STYLE" />

            <div className="grid w-full grid-cols-1 gap-4 *:h-full *:w-full *:overflow-hidden *:rounded-[1.25rem] xl:grid-cols-3">
               {/* Items */}
               {galleryItems.map((item: GalleryItemsType) => (
                  <Link
                     key={item.title}
                     href={item.href}
                     className={`${item.parentClassName} relative z-20 max-xl:col-span-1 max-xl:aspect-video`}
                  >
                     <h3 className="absolute left-5 top-5 z-30 text-2xl font-bold capitalize xl:left-9 xl:top-7 xl:text-4xl">
                        {item.title}
                     </h3>
                     <Image
                        src={item.src}
                        width={500}
                        height={500}
                        alt={item.alt}
                        draggable={false}
                        className="size-full object-cover transition-transform hover:scale-110"
                     />
                  </Link>
               ))}
            </div>
         </div>
      </Section>
   );
};

export default Gallery;
