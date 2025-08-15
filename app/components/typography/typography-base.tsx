import * as React from 'react'

import { cn } from '~/lib/utils'

function TypographyBase({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-base leading-none font-medium', className)}
      {...props}
    ></span>
  )
}

export { TypographyBase }
