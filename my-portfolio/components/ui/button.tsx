import * as React from "react"
//import { cn } from "@/lib/utils" // optional: if you're using a `cn` utility for class merging

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ asChild, children, className, variant = "default", ...props }) => {
  const base = "px-4 py-2 rounded font-medium transition-colors"
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  }
  const classes = `${base} ${variants[variant]} ${className ?? ""}`

  if (asChild && React.isValidElement<{ className?: string }>(children)) {
    return React.cloneElement(children, {
      className: `${classes} ${children.props.className ?? ""}`,
    })
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}
