## Programmatic navigation

If you have access to route object in your component,
you can use its `push` method to navigate to another
page. 

**Important:** in version 2.0.0 only string literal
is supported

```javascript
// SomeComponent.svelte
<script>
    import { router } from './router.js';
    router.push('/home');
</script>
```

If you are using `history` mode, then you can replace
the current record in history using the `replace` method:

```javascript
// SomeComponent.svelte
<script>
    import { router } from './router.js';
    router.replace('/home');
</script>
```