<script context="module">
    import router from './Router/index.ssr'
    import {RouterOutlet, EasyrouteProvider} from '@easyroute/svelte'
    import registerRouterSSR from '@easyroute/svelte/ssr/registerRouterSSR'

    registerRouterSSR(router)
</script>

<EasyrouteProvider {router}>
    <RouterOutlet />
</EasyrouteProvider>
