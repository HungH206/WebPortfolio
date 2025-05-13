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
// Add the new components below
export function CardHeader({ children, className }: CardProps) {
  return <div className={`p-4 border-b ${className ?? ""}`}>{children}</div>
}

export function CardTitle({ children, className }: CardProps) {
  return <h2 className={`text-lg font-bold ${className ?? ""}`}>{children}</h2>
}

export function CardDescription({ children, className }: CardProps) {
  return <p className={`text-sm text-gray-500 ${className ?? ""}`}>{children}</p>
}
export function CardFooter({ children, className }: CardProps) {
  return <div className={`p-4 border-t ${className ?? ""}`}>{children}</div>
}