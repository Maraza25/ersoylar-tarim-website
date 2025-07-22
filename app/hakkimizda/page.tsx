"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HakkimizdaPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/?section=hakkimizda")
  }, [router])

  return null
} 