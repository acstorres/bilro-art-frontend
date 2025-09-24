import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@lib/utils'

function Switch({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return children ? (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'hover:cursor-pointer hover:border-primary dark:hover:border-primary peer bg-secondary/30 dark:bg-foreground/10 inline-flex h-[1.35rem] w-10 shrink-0 items-center rounded-full border border-secondary/30 dark:border-foreground/30 shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'pointer-events-none size-5 text-foreground/70 dark:text-foreground/90 rounded-full ring-0 transition-transform flex items-center justify-center text-xs bg-background dark:bg-black data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0',
        )}
      >
        {children}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  ) : (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'hover:cursor-pointer peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-foreground/40 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'hover:cursor-pointer bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0',
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
