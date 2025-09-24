import * as React from 'react'

import { cn } from '@lib/utils'

function TypographyH1({ className, ...props }: React.ComponentProps<'h1'>) {
  return <h1 className={cn('leading-none', className)} {...props}></h1>
}

export { TypographyH1 }
