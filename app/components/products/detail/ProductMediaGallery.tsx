"use client";

import { useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  thumbnail: string;
  slug: string;
}

interface ProductMediaGalleryProps {
  product: Product;
}

// Sample gallery images - update with your product images
const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9xLb9Mq_icpN5y012MwCATMEzGbnrLJufFmmfN5ADVCmF_DOo2oPNqSJIQGoP0l0Ik5yF89S8CFoNpx8dmsSgCaIVtpGxudOhFSh6FGIEP5UNa7eLeFzMDvzDLu88e6A7UoNkFgAVVQLIICUOpa7J449o03cw3af4Y8ijY6n09uiT0WNdRVjbWC96WTgj0L6r1xXlUEBCmMgvFQlzWDNSWY5TUA5bdaSkcb1zezukrJ06J8WDoyicZyMKgxBDaNVI9rS4nU6wyA8",
    alt: "Screenshot of code interface for the AI extractor",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAutxfaCH4FB3ozuBXN_b7vDRqlZAICqzbePY7xjXV1Uep5UX5oNfKcjkFdjn557hvzho1Wu7Q_BNor4HcMMtYPL9RQyg5Mz9QYDg-jZ656NctB5uulNOmVpJ-rrYDHzy0TCeoBts-ta422YAgU8NK1Tr7Y0g2i9HUr3cJH4IQcRYJllNSXrrshZsJC1fkafioR9FXQxSuW3dhEen2S7xh5b8gbklvh0QOo0rPtG9lTni5wv_BBRT8Q5IbcKi6MrODmmvWVpM1heYc",
    alt: "Screenshot of product analytics dashboard",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbQLFYDEF1ARFeOK-IWyYGn6JI3NhR-3NtxGx2_71mrKE4-aDjJ1FkJkb3FwLjuYw-v1euC7eQoOC0HRyjs9TkmXudRt4HTl8C3YroH1Ak_V_vJzJU2FEtWzLhcl37cTzDGVMG5HFeLop5qiRJnpa3hQD60PxnQP9cmTcGJTvTOrudGTCg3D1BGdqPMezBGDHqPPBJtYwmaxgGdOp_45wQKwZkj2LD2b_oqwthGtJSP4kNOmURTxdi-mVblHnKuQ0ym6v81DCnqBQ",
    alt: "Close-up of a developer's screen with data",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQetuxlkYU0-KpflTLdNOGKLHVsVPPf-Ngg1kIQHOaRZDE3peTwFjuKVKHhovITbYUSC9opWbNn3DDJXKiz-xDmNfjIYl_T2ae8kdIInHQlkImNrbINK81nFr5nBS84KS7LFCfJr7WqhBRwb80hXcmLj3t88cniBSq8kELB3HskjzTkYLNsw7wmyM08xoAHGJkOD_lg0s_lba-0DEeiIYiCzNsGZRkQ1l8x70gaL_WV9rI2gxGMQChHuJmM5pzldE8eVKMnDAl7Wk",
    alt: "Team collaborating on a project with the product",
  },
];

export default function ProductMediaGallery({
  product,
}: ProductMediaGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [videoProgress, setVideoProgress] = useState(37);

  return (
    <div className="lg:col-span-3 lg:sticky lg:top-28 self-start">
      {/* Main Video/Image Player */}
      <div className="mb-4">
        <div className="relative flex items-center justify-center bg-gray-900 bg-cover bg-center aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            fill
            className="object-cover"
            priority
          />
          <button className="absolute flex shrink-0 items-center justify-center rounded-full size-16 bg-black/50 text-white hover:bg-black/70 transition-colors z-10">
            <span
              className="material-symbols-outlined text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              play_arrow
            </span>
          </button>

          {/* Progress Bar */}
          <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex h-4 items-center justify-center">
              <div
                className="h-1 rounded-l-full bg-white"
                style={{ width: `${videoProgress}%` }}
              ></div>
              <div className="relative">
                <div className="absolute -translate-x-1/2 -top-1.5 size-3 rounded-full bg-white ring-2 ring-black/30"></div>
              </div>
              <div
                className="h-1 rounded-r-full bg-white/40"
                style={{ width: `${100 - videoProgress}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between mt-1">
              <p className="text-white text-xs font-medium leading-normal tracking-[0.015em]">
                0:37
              </p>
              <p className="text-white text-xs font-medium leading-normal tracking-[0.015em]">
                2:23
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative rounded-lg aspect-video overflow-hidden cursor-pointer transition-all group ${
              selectedImage === index
                ? "border-2 border-primary ring-2 ring-primary/30"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </button>
        ))}
      </div>
    </div>
  );
}