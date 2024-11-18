<script>
import {applyReactInVue, applyPureReactInVue} from 'veaury'
import BasicReactComponent from './react_app/Basic.jsx'
import {ref} from 'vue'

export default {
  components: {
    Basic: applyReactInVue(BasicReactComponent),
    BasicPure: applyPureReactInVue(BasicReactComponent)
  },
  setup() {
    return {
      foo: ref('Hello!')
    }
  }
}
</script>

<template>
  <BasicPure :foo="foo">
    <div>
      the children
    </div>
  </BasicPure>
  <div>
    <h1>Top Level Product</h1>
    <p>This is a custom VueJS page. You can render anything you want</p>
  </div>
</template>
