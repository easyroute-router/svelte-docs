## "Тихий" режим

У Svelte Easyroute есть третий режим - "silent". Вы можете
использовать его, если не хотите менять URL в строке 
браузера. 
```javascript
import silentMode from '@easyroute/core/silent-mode'

export var router = new Router({
    mode: silentMode,
    routes: [
        ...
    ]
})
```
У этого режима есть своя история маршрутов. Используйте 
эти два метода: 

```javascript
export let router

router.back() // перемещает на один маршрут назад
router.go(1) // перемещает на N маршрутов назад или вперёд
```
**Почему этот режим не использует History API?**
Потому что History API не поддерживается в некоторых старых
версиях браузеров. Однако, вы можете манипулировать историей 
в навигационных хуках :)
