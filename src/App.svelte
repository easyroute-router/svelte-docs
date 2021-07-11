<script>
    import {RouterOutlet, EasyrouteProvider} from '@easyroute/svelte'
    import router from './Router'
</script>

<EasyrouteProvider {router}>
    <RouterOutlet />
</EasyrouteProvider>
