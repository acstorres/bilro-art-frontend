import * as React from 'react'

import { cn } from '@lib/utils'

function TypographyBase({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'text-base text-foreground leading-none font-normal',
        className,
      )}
      {...props}
    ></span>
  )
}

export { TypographyBase }
