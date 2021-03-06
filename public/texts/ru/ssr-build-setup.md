## Настройка сборки

Первым делом нужно настроить сборку вашего приложения для 
SSR. Компилятор Svelte умеет создавать такой код, поэтому 
всё, что вам нужно - создать дополнительную конфигурацию 
в rollup или webpack, в которой будут два основных отличия:

* В качестве входного файла нужно указать компонент верхнего
уровня, настроенный для сборки в SSR (к примеру, "App.ssr.svelte");
* в настройках плагина Svelte нужно добавить: `generate: 'ssr'`.

### Модификации главного компонента

"App.ssr.svelte" - это копия "главного" компонента 
в вашем приложении. В нём очень важно сделать следущее: 
в блоке `<script context="module">` импортировать 
созданный экземпляр роутера (или создать прямо в нём), а 
затем вызвать специальный метод регистрации:

```html
<script context = "module">
import router from './Router/index.ssr'
import registerRouterSSR from '@easyroute/svelte/ssr/registerRouterSSR'

registerRouterSSR (router)
</script>
```

### Дальнейшие шаги

После этого вам нужно собрать приложения и для клиента, и для 
сервера. Опционально - во входном js-файле клиентского приложения,
в создании экземпляра класса компонента верхнего уровня 
добавьте `hydrate: true`:

```javascript
new App({
  target: document.getElementById('app'),
  hydrate: true,
  props: {}
})
```

Так приложение будет использовать уже отрендеренный HTML 
для работы, и не будет дублировать вёрстку. 
