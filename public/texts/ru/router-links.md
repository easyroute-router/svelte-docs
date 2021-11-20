## Ссылки

Чтобы добавить ссылку на другой маршрут, используйте
компонент `RouterLink`.

```javascript
import { RouterLink } from '@easyroute/svelte'
</script>

<RouterLink to={'/route'} />
```

Свойство "to" - это URL, на который вы хотите перейти. 
Вы можете использовать query-параметры, если это необходимо.

Опциональное свойство `replace` - декларативная запись для 
замены текущей записи в истории в режиме `history`:

```javascript
import { RouterLink } from '@easyroute/svelte'
</script>

<RouterLink to={'/route'} replace={true} />
```
