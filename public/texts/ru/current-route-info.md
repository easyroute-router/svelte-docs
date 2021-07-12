## Информация о текущем маршруте
Из каждого дочернего для представления компонента вы 
можете получить доступ к текущему маршруту.

В каждом компоненте, обёрнутом в `<EasyrouteProvider>`,
на любом уровне вложенности, вы можете использовать хук
`useCurrentRoute`. Он возвращает svelte-совместимое 
хранилище, к которому можно обращаться через символ 
`$`, или же подписаться как на observable:

```html
<script>
    // Component.svelte

    import useCurrentRoute from "@easyroute/svelte/useCurrentRoute"
    import { onDestroy } from "svelte"

    // Через символ "$"
    const currentRoute = useCurrentRoute()
    console.log($currentRoute)

    // Через метод "subscribe": не забудьте отписаться!
    const unsubscribe = currentRoute.subscribe((route) => {
        console.log(route)
    })
    onDestroy(unsubscribe)
</script>
```

**Не забудьте** отписаться (`unsubscribe`), когда покидаете
компонент! Если этого не сделать, возможны утечки памяти.

