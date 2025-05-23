"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * VisuallyHidden component
 * Renders content that is visually hidden but still accessible to screen readers
 */
const VisuallyHidden = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
        className
      )}
      style={{
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
      }}
      {...props}
    />
  )
}

VisuallyHidden.displayName = "VisuallyHidden"

export { VisuallyHidden }
