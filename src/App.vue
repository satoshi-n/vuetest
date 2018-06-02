<template>
  <div>
    <h1>すごいアプリ</h1>
    <MyComponent text="すごいテキスト" />
  </div>
</template>

<script>
import MyComponent from './components/MyComponent'
export default {
  components: {
    MyComponent
  }
}
</script>
