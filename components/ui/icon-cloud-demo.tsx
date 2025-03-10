"use client"
import { IconCloud } from "./interactive-icon-cloud"
import { Suspense } from "react"

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent px-4 py-8 md:px-20 md:pb-20 md:pt-8">
      <Suspense fallback={<div className="h-[300px] w-full flex items-center justify-center">Loading icons...</div>}>
        <IconCloud iconSlugs={slugs} />
      </Suspense>
    </div>
  )
}

