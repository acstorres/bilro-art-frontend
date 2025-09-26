import * as React from 'react'

import { cn } from '@shared/lib/utils'

function TypographySmall({
  className,
  ...props
}: React.ComponentProps<'small'>) {
  return (
    <small
      className={cn('text-sm leading-none font-medium', className)}
      {...props}
    ></small>
  )
}

export { TypographySmall }
