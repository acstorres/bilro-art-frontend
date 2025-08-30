export type Screens =
  | 'small-mobile'
  | 'mobile'
  | 'small-tablet'
  | 'tablet'
  | 'small-desktop'
  | 'desktop'

export interface Props {
  children: React.ReactNode
  bellow?: Screens
  above?: Screens
}

const Hidden = ({ children, above, bellow }: Props) => {
  return (
    <div
      data-testid="hidden"
      data-hidden-bellow-mobile={bellow === 'mobile' ? 'true' : undefined}
      data-hidden-bellow-small-tablet={
        bellow === 'small-tablet' ? 'true' : undefined
      }
      data-hidden-bellow-tablet={bellow === 'tablet' ? 'true' : undefined}
      data-hidden-bellow-small-desktop={
        bellow === 'small-desktop' ? 'true' : undefined
      }
      data-hidden-bellow-desktop={bellow === 'desktop' ? 'true' : undefined}
      data-hidden-above-small-mobile={
        above === 'small-mobile' ? 'true' : undefined
      }
      data-hidden-above-mobile={above === 'mobile' ? 'true' : undefined}
      data-hidden-above-small-tablet={
        above === 'small-tablet' ? 'true' : undefined
      }
      data-hidden-above-tablet={above === 'tablet' ? 'true' : undefined}
      data-hidden-above-small-desktop={
        above === 'small-desktop' ? 'true' : undefined
      }
    >
      {children}
    </div>
  )
}

export default Hidden
