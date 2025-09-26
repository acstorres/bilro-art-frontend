type BackgroundVideoProps = {
  src: string
  className?: string
}

export function BackgroundVideo({ src, className }: BackgroundVideoProps) {
  return (
    <video autoPlay loop muted playsInline className={className}>
      <source src={src} type="video/mp4" />
      Seu navegador não suporta a tag de vídeo.
    </video>
  )
}
