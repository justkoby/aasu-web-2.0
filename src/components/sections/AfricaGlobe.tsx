import { useEffect, useRef, useState } from 'react'
import createGlobe from 'cobe'
import { useReducedMotion } from 'framer-motion'
import { AFRICA_REGIONS } from '@/data/homepage'
import type { AfricaRegionId } from '@/types'

interface AfricaGlobeProps {
  activeRegionId: AfricaRegionId
  onSelectRegion: (id: AfricaRegionId) => void
}

const ACCRA_HQ: [number, number] = [5.6037, -0.187]
const AASU_RED_RGB: [number, number, number] = [0.8, 0.21, 0.19]

// Convert geographic [lat, lng] in degrees to cobe's [phi, theta] radians
function latLngToAngles(lat: number, lng: number): [number, number] {
  return [
    Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
    (lat * Math.PI) / 180,
  ]
}

export default function AfricaGlobe({ activeRegionId }: AfricaGlobeProps) {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [webglFailed, setWebglFailed] = useState(false)

  const activeRegion =
    AFRICA_REGIONS.find((r) => r.id === activeRegionId) ?? AFRICA_REGIONS[1]

  const focusRef = useRef<[number, number]>(
    latLngToAngles(activeRegion.coordinates[0], activeRegion.coordinates[1]),
  )
  const currentAnglesRef = useRef<[number, number]>([...focusRef.current])
  const pointerDownRef = useRef<number | null>(null)
  const dragOffsetRef = useRef(0)
  const isVisibleRef = useRef(true)

  useEffect(() => {
    focusRef.current = latLngToAngles(
      activeRegion.coordinates[0],
      activeRegion.coordinates[1],
    )
    dragOffsetRef.current = 0
  }, [activeRegion])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let width = canvas.offsetWidth || 360
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth || 360
      }
    }
    window.addEventListener('resize', onResize)

    let globe: ReturnType<typeof createGlobe> | null = null
    let frameId = 0

    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: currentAnglesRef.current[0],
        theta: currentAnglesRef.current[1],
        dark: 1,
        diffuse: 1.35,
        mapSamples: 16000,
        mapBrightness: 5.5,
        baseColor: [0.16, 0.18, 0.22],
        markerColor: AASU_RED_RGB,
        glowColor: [0.18, 0.19, 0.23],
        arcColor: AASU_RED_RGB,
        arcWidth: 0.55,
        arcHeight: 0.22,
        markers: AFRICA_REGIONS.map((region) => ({
          location: region.coordinates,
          size: region.id === activeRegionId ? 0.095 : 0.055,
        })),
        arcs: AFRICA_REGIONS.filter((region) => region.id !== 'west').map(
          (region) => ({
            from: ACCRA_HQ,
            to: region.coordinates,
            color: AASU_RED_RGB,
          }),
        ),
      })

      const animate = () => {
        if (isVisibleRef.current && globe) {
          const [targetPhi, targetTheta] = focusRef.current
          const [curPhi, curTheta] = currentAnglesRef.current

          const drift =
            prefersReducedMotion || pointerDownRef.current !== null
              ? 0
              : 0.0011
          dragOffsetRef.current += drift

          const desiredPhi = targetPhi + dragOffsetRef.current
          const nextPhi = prefersReducedMotion
            ? desiredPhi
            : curPhi + (desiredPhi - curPhi) * 0.075
          const nextTheta = prefersReducedMotion
            ? targetTheta
            : curTheta + (targetTheta - curTheta) * 0.075

          currentAnglesRef.current = [nextPhi, nextTheta]
          globe.update({
            phi: nextPhi,
            theta: nextTheta,
            width: width * 2,
            height: width * 2,
          })
        }
        frameId = window.requestAnimationFrame(animate)
      }

      frameId = window.requestAnimationFrame(animate)
    } catch {
      setWebglFailed(true)
    }

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      globe?.destroy()
    }
  }, [activeRegionId, prefersReducedMotion])

  if (webglFailed) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#101114] p-8 text-center">
        <img
          src="/images/brand/africa-map.svg"
          alt="Map of Africa showing AASU regional presence"
          className="h-56 w-auto opacity-80"
        />
        <p className="mt-4 font-display text-sm font-semibold text-aasu-white">
          {activeRegion.name}
        </p>
        <p className="mt-1 text-xs text-[#B7BBC3]">{activeRegion.hubLabel}</p>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex w-full max-w-[400px] flex-col items-center"
    >
      <div className="relative aspect-square w-full">
        <canvas
          ref={canvasRef}
          aria-label={`Interactive 3D globe focused on ${activeRegion.name}`}
          onPointerDown={(e) => {
            pointerDownRef.current = e.clientX
          }}
          onPointerUp={() => {
            pointerDownRef.current = null
          }}
          onPointerOut={() => {
            pointerDownRef.current = null
          }}
          onPointerMove={(e) => {
            if (pointerDownRef.current !== null) {
              const delta = e.clientX - pointerDownRef.current
              pointerDownRef.current = e.clientX
              dragOffsetRef.current += delta * 0.008
            }
          }}
          className="h-full w-full cursor-grab active:cursor-grabbing"
          style={{ touchAction: 'pan-y' }}
        />
      </div>

      {/* Accurate Geographic Focus Label */}
      <div className="mt-2 flex items-center gap-2 rounded-full border border-white/15 bg-[#101114]/85 px-4 py-1.5 text-xs text-neutral-200">
        <span className="h-2 w-2 rounded-full bg-aasu-red" aria-hidden="true" />
        <span className="font-display font-semibold text-aasu-white">
          {activeRegion.name}
        </span>
        <span className="text-neutral-400">·</span>
        <span className="text-[#B7BBC3]">{activeRegion.hubLabel}</span>
      </div>
    </div>
  )
}
