## Router links

To add link to the another route you can use `RouterLink` component.

```javascript
import { RouterLink } from '@easyroute/svelte';
</script>

<RouterLink to={'/route'} />
```
"to" prop is an url where you want to navigate. You can use query parameters here, like:

The optional `replace` property is a declarative notation for
replace the current record in history in `history` mode:

```javascript
import { RouterLink } from '@easyroute/svelte'
</script>

<RouterLink to={'/route'} replace={true} />
```