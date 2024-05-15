import Link from "next/link"
import Image from 'next/image'

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function MainNav() {
  return (
    <div className=" items-right order-2 md:order-1">
      <Link href="/" className="flex md:font-thin ">
        <p
        >GENTLEMANS GARAGE
        </p>
      </Link>
    </div>
  )
}
