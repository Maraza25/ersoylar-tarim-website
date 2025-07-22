"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function UrunlerPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/?section=urunler")
  }, [router])

  return null
} 