import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import VideoHero from "@/components/videohero"
import { SiteFooter } from "@/components/site-footer"
import About from "@/components/about"
// import { seedSanityData } from "@/lib/seed"



export default async function Page() {



  return (
    <div>
      <VideoHero />
      <About />




    </div>
  )
}
