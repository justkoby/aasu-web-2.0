import { useEffect } from 'react'

const DEFAULT_TITLE =
  "All-Africa Students Union (AASU) | The Continental Voice of Africa's Students"
const DEFAULT_DESCRIPTION =
  'The official website of the All-Africa Students Union (AASU). Representing the interests and aspirations of African students since 1972.'

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} | All-Africa Students Union (AASU)`

    const metaDesc = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    const previousDesc = metaDesc?.getAttribute('content') ?? DEFAULT_DESCRIPTION
    if (metaDesc) {
      metaDesc.setAttribute('content', description)
    }

    return () => {
      document.title = previousTitle || DEFAULT_TITLE
      if (metaDesc) {
        metaDesc.setAttribute('content', previousDesc)
      }
    }
  }, [title, description])
}
