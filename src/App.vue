<template>
  <div id="app">
      <FullInput labelText="Name:" message="Un mensaje"  messageType="error" inputType = "text"/>
      <FullInput labelText="Name:" message="Un mensaje"  messageType="success" inputType = "text" inputValue="pepe" :disabled="true" />
  </div>
</template>

<script>
import FullInput from './components/FullInput/index.vue'

export default {
  name: 'app',
  components: {
    FullInput
  }
}
</script>

<style lang="scss">

body{
  width:100%;
  padding: 0px;
  margin: 0px;
  font-family: Arial;
}
</style>
