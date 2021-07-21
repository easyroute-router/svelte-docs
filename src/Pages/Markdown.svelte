<script>
    import useCurrentRoute from '@easyroute/svelte/useCurrentRoute'
    import MarkdownIt from 'markdown-it'

    export let router;

    const currentRoute = useCurrentRoute()
    const md = new MarkdownIt()
    let content = ''
    let timerDelay = 0

    function renderText(meta) {
        if (!meta.pageText) return
        setTimeout(() => {
            content = md.render(meta.pageText)
            timerDelay = 200
        }, timerDelay)
    }

    $: renderText($currentRoute.meta)
</script>

<div class="page-content">
    <article>
        {@html content}
    </article>
</div>
