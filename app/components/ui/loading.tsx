import LogoLight from '@shared/assets/logo-light'

export type LoadingProps = {
  size?: string
  speed?: string
  label?: string
  className?: string
}

const Loading: React.FC<LoadingProps> = ({
  size = '200',
  speed = '1s',
  label = 'Carregando...',
  className,
}) => {
  return (
    <div
      role="status"
      aria-label={label}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style>{`
        @keyframes spinner-rotate { to { transform: rotate(360deg); } }
        .spinner__logo svg {
          animation: spinner-rotate var(--spinner-speed, 1s) linear infinite;
          transform-origin: 50% 50%;
          display: block;
        }
      `}</style>

      <div
        style={{ '--spinner-speed': speed } as React.CSSProperties}
        className="spinner__logo"
      >
        <LogoLight size={size} />
      </div>
    </div>
  )
}

export default Loading
