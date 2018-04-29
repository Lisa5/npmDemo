<template>
    <div>
      <p>{{name}}</p>
      <div id="app">
        <router-view></router-view>
      </div>
      
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'app.vue'
    }
  }
}
</script>

