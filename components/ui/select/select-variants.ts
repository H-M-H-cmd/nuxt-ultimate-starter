import { cva } from 'class-variance-authority'

export const selectTriggerVariants = cva(
  'flex w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start',
  {
    variants: {
      variant: {
        default: 'bg-background focus:ring-primary',
        outline: 'border border-input',
        ghost: 'border-none shadow-none',
        secondary: 'bg-secondary border-secondary',
        error: 'border-destructive focus:ring-destructive',
        success: 'border-primary focus:ring-primary',
      },
      size: {
        default: 'h-9 px-3 py-2',
        sm: 'h-8 px-2.5 py-1.5 text-xs',
        lg: 'h-10 px-4 py-2 text-base',
        xl: 'h-12 px-5 py-2.5 text-lg',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: true,
    },
  }
)

