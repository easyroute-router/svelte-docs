## Current route info
From every child component you can access current 
route state. 

In any component wrapped with `<EasyrouteProvider>`,
on any level of nesting, you can use `useCurrentRoute`
hook. It returns a svelte-compatible store that 
can be accessed via the `$` symbol, or subscribed 
as an observable:

```html
<script>
    // Component.svelte

    import useCurrentRoute from "@easyroute/svelte/useCurrentRoute"
    import { onDestroy } from "svelte"
    
    // Via "$" symbol
    const currentRoute = useCurrentRoute()
    console.log($currentRoute)
    
    // Subscribe-way: don't forget to unsubscribe!
    const unsubscribe = currentRoute.subscribe((route) => {
        console.log(route)
    })
    onDestroy(unsubscribe)
</script>
```
**Don't forget** to `unsibscribe` when leaving your component!
If you will not, it can cause memory leak.
