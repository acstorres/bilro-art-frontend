import * as React from 'react'

import { cn } from '@lib/utils'

function TypographyH2({ className, ...props }: React.ComponentProps<'h2'>) {
  return <h2 className={cn('leading-none', className)} {...props}></h2>
}

export { TypographyH2 }
