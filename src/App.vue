<template>
  <pre>{{ $data }}</pre>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f1f1f1;
  background: #030303;
  min-height: 100dvh;
  display: grid;
  place-items: center;
}

pre {
  background: rgba(255, 255, 255, .15);
  padding: 1rem;
  border-radius: 4px;
}
</style>
