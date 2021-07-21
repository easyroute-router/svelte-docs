<script>
    import useCurrentRoute from '@easyroute/svelte/useCurrentRoute'
    import MarkdownIt from 'markdown-it'
    import { isBrowser } from '@easyroute/core/utils/isBrowser'

    export let router;

    const currentRoute = useCurrentRoute()
    const md = new MarkdownIt()
    const SSR = !isBrowser()
    let content = ''
    let timerDelay = 0

    function renderText(meta) {
        if (!meta.pageText) return
        if (SSR) {
            content = md.render(meta.pageText)
        } else {
            setTimeout(() => {
                content = md.render(meta.pageText)
                timerDelay = 200
            }, timerDelay)
        }
    }

    $: renderText($currentRoute.meta)
</script>

<div class="page-content">
    <article>
        {@html content}
    </article>
</div>
