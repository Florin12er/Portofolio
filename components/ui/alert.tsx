import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva("relative w-full rounded-lg border p-4", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      destructive:
        "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      success:
        "border-green-500/50 text-green-700 dark:border-green-500 [&>svg]:text-green-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  ),
);

Alert.displayName = "Alert";
