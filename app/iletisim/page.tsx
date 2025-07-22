"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function IletisimPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/?section=iletisim")
  }, [router])

  return null
} 