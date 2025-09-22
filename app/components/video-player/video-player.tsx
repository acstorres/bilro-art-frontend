// src/components/VideoPlayer.tsx
export function VideoPlayer() {
  return (
    <div className="w-full flex justify-center items-center">
      <video width="800" controls autoPlay loop muted>
        <source
          src="app/shared/assets/videos/lace-making.mp4"
          type="video/mp4"
        />
        Seu navegador não suporta vídeo em HTML5.
      </video>
    </div>
  )
}
