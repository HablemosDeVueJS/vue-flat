# Guia de estilos

## 1. Estructura de archivos de cada componente
```md
📦components
     ┣━━📂[nameComponent]
     ┃   ┣━━📜index.vue
     ┃   ┣━━📜[nameComponent].html
     ┃   ┣━━📜[nameComponent]Style.scss
     ┃   ┣━━📜[nameComponent]Script.js
     ┃   ┣━━📜[nameComponent]Test.spec.js
     ┃   ┗━━📜[nameComponent]Document.js
```

> Para evitar nombres largos en este documento en lugar de usar `[nameComponent]`, emplearemos como nomenclatura `[nC]`

Tomaremos como ejemplo una un componente que genere una lista de enlaces

```md
📦components
     ┣━━📂listComponent
     ┃   ┣━━📜index.vue
     ┃   ┣━━📜listComponent.html
     ┃   ┣━━📜listComponentStyle.scss
     ┃   ┣━━📜listComponentScript.js
     ┃   ┣━━📜listComponentTest.spec.js
     ┃   ┗━━📜listComponentDocument.js
```
&nbsp;
___

## 2. index.vue
```html
  <template src="./[nC].html"></template>
  <script src="./[nC]Script.js" />
  <style src="./[nC]Style.scss" scoped lang="scss">
  </style>
```
### Ejemplo:
```html
  <!-- index.vue -->
  <template src="./listComponent.html"></template>
  <script src="./listComponentScript.js" />
  <style src="./listComponentStyle.scss" scoped lang="scss">
  </style>
```

&nbsp;
___

## 3. [nC].html
```html
    <div class="[nC]__wrapper">
    <div class="[nC]__wrapper_section">
      <!-- Content section -->
    </div>
    <!-- More sections -->
  </div>
```

### *Ejemplo:*

```html
  <!-- listComponent.html -->
  
  <div class="listComponent__wrapper">
    <ul class="listComponent__wrapper_items">
      <li 
        :class="['listComponent__wrapper_items--item']" 
        v-for="(lC, lCindex, lCkey)"
        :key="lCkety"
      >
        <a 
          :class="['listComponent__wrapper_items--item-link']" 
          :href="lC.label"
        >
          {{lC.label}}
        </a>
      </li>
    </ul>
  </div>
```

&nbsp;
___

## 4. [nC]Style.scss
> Se empleara BEM para mejorar la estructura del codigo
```scss
  .[nC] {
    &__wrapper {
      &_section {
        &--items {
          &-item {
            &.[modificador] {
              // Styles
            }
          }
        }
      }
    }
  }
```
### *Ejemplo:*
```scss
  // listComponentStyle.scss 

  .listComponent {
    &__wrapper {
      // Styles
      &_section {
        // Styles
        &--items {
          // Styles
          &-item {
            // Styles
            &.active {
              // Styles
            }
          }
        }
      }
    }
  }
```

&nbsp;
___

## 5. [nC]Script.js
```js
const propsComponent = {
  propItem : {
    type: typeProperty,
    default: defaultValueProperty
  },
  // more properties
}

export default {
  name: 'vf-[nC]',
  props: propsComponent,
  data () {
    return { }
  },
  computed: { },
  created () {},
  methods: { },
  mounted () {},
  watch () {}

}
```

### Ejemplo:
```js
// listComponentScript.js

const propsComponent = {
  arrayItems : {
    type: Object,
    default: {}
  },
  // more properties
}

const itemsListComponent = [
  {
    label: 'Link 1',
    url: 'http://link1.com'
  },
  {
    label: 'Link 2',
    url: 'http://link2.com'
  }
]

export default {
  name: 'vf-[nC]',
  props: propsComponent,
  data () {
    return { 
      items: itemsListComponent
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  },
  mounted () { 
  },
  watch () { 
  }
}
```