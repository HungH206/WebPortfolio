import React, { PropsWithChildren } from "react"

interface CardProps extends PropsWithChildren {
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={`border border-gray-300 rounded-lg shadow-md bg-white ${className ?? ""}`}>
      {children}
    </div>
  )
}

export function CardContent({ children, className }: CardProps) {
  return <div className={`p-4 ${className ?? ""}`}>{children}</div>
}