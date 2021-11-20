## Программная навигация

Если у вас есть доступ к объекту роутера, вы можете 
использовать его метод `push`, чтобы перейти на другой
маршрут.

```javascript
// SomeComponent.svelte
<script>
    import { router } from './router.js';
    router.push('/home');
</script>
```

Если вы используете режим `history`, то вы можете заменить 
текущую запись в истории при помощи метода `replace`:

```javascript
// SomeComponent.svelte
<script>
    import { router } from './router.js';
    router.replace('/home');
</script>
```
