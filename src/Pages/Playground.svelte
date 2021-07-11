<script>
    import { langStore } from '../Store'
    import useCurrentRoute from '@easyroute/svelte/useCurrentRoute'
    import {onDestroy} from "svelte";

    let currentRoute = {}

    const unsubscribe = useCurrentRoute(async (data) => {
        currentRoute = data
    })

    onDestroy(unsubscribe)

    $: param1 = currentRoute.params.param1
    $: param2 = currentRoute.params.param2
</script>

{#if $langStore === 'en'}
<article>
    <h2>Playground</h2>
    <p>
        This is <code>{param1}</code> page that shows you how <code>{param2}</code> are working.
    </p>
    <p>Try edit parts of url on this page in your address bar.</p>
    <div uk-grid>
        <div>
            Path params
            <pre>
            { JSON.stringify(currentRoute.params, null, 2) }
        </pre>
        </div>
        <div>
            Query
            <pre>
            { JSON.stringify(currentRoute.query, null, 2) }
        </pre>
        </div>
    </div>
</article>
{:else if $langStore === 'ru'}
    <article>
        <h2>Поиграться</h2>
        <p>
            Это <code>{param1}</code> страница, которая показывает, как работают <code>{param2}</code>.
        </p>
        <p>Попробуйте изменять параметры пути в адресной строке.</p>
        <div uk-grid>
            <div>
                Параметры пути
                <pre>
            { JSON.stringify(currentRoute.params, null, 2) }
        </pre>
            </div>
            <div>
                Query-параметры
                <pre>
            { JSON.stringify(currentRoute.query, null, 2) }
        </pre>
            </div>
        </div>
    </article>
{/if}
