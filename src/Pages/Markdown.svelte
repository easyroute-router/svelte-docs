<script>
    import useCurrentRoute from '@easyroute/svelte/useCurrentRoute'
    import { delay } from '@easyroute/core/utils/delay'
    import MarkdownIt from 'markdown-it'
    import { langStore } from '../Store'
    import { fetchSlugMarkdown } from '../Router/utils'

    const md = new MarkdownIt()
    const currentRoute = useCurrentRoute()
    let pageText = $currentRoute.meta.pageText

    langStore.subscribe(async (lang) => {
        if (lang !== 'en' && lang !== 'ru') return
        const { slug } = $currentRoute.params
        slug && fetchText(slug, 0)
    })

    async function fetchText(slug, delayMs = 210) {
        if (!slug) return
        await delay(delayMs)
        pageText = await fetchSlugMarkdown(slug)
    }

    $: renderedContent = md.render(pageText || '')
    $: fetchText($currentRoute.params.slug)
</script>

<div class="page-content">
    <article>
        {@html renderedContent}
    </article>
</div>
