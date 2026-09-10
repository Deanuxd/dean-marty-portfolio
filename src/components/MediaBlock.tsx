import { useEffect, useRef, useState } from 'react'
import type { MediaItem } from '../data/projects'

type Props = {
  item: MediaItem
  priority?: boolean
}

export function MediaBlock({ item, priority = false }: Props) {
  if (item.type === 'video') {
    return <LazyVideo item={item} />
  }

  return (
    <figure className="space-y-3">
      <div className="overflow-hidden bg-ink-soft">
        <img
          src={item.src}
          alt={item.alt}
          className="w-full object-cover"
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
      {item.caption ? (
        <figcaption className="text-sm text-muted">{item.caption}</figcaption>
      ) : null}
    </figure>
  )
}

function LazyVideo({ item }: { item: MediaItem }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <figure className="space-y-3">
      <div ref={ref} className="overflow-hidden bg-ink-soft">
        {shouldLoad ? (
          <video
            className="aspect-video w-full bg-ink object-contain"
            controls
            playsInline
            preload="metadata"
            aria-label={item.alt}
          >
            <source src={item.src} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="flex aspect-video items-center justify-center text-sm text-muted">
            Loading demo…
          </div>
        )}
      </div>
      {item.caption ? (
        <figcaption className="text-sm text-muted">{item.caption}</figcaption>
      ) : null}
    </figure>
  )
}
