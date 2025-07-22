"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function GaleriPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/?section=galeri")
  }, [router])

  return null
} 