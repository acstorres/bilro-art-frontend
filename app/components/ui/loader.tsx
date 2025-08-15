import React from 'react'

export type LoaderProps = {
  size?: string
  speed?: string
  label?: string
  className?: string
  isFullScreen?: boolean
}

const Loader: React.FC<LoaderProps> = ({
  size = '160',
  speed = '1s',
  label = 'Carregando...',
  className = '',
  isFullScreen = false,
}) => {
  return (
    <div
      role="status"
      aria-label={label}
      className={`${
        isFullScreen
          ? 'fixed inset-0 flex items-center justify-center bg-background z-[9999]'
          : 'inline-flex items-center justify-center bg-background'
      } ${className}`}
    >
      <style>{`
        @keyframes spin-loader {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .spinner__img {
          animation: spin-loader var(--spinner-speed, 1s) infinite;
          transform-origin: center;
          display: block;
        }
      `}</style>

      <img
        src="app/shared/assets/logo.png"
        alt={label}
        width={size}
        height={size}
        style={{ '--spinner-speed': speed } as React.CSSProperties}
        className="spinner__img"
      />
    </div>
  )
}

export default Loader
