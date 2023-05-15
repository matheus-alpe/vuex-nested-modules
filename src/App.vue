<template>
  <div>
    <pre>{{ $store.state }}</pre>
    <pre class="msg">rootMessage: {{ message }}</pre>
    <pre class="msg">outerMessage: {{ message1 }}</pre>
    <pre class="msg">innerModuleState: {{ innerModuleState }}</pre>
    <button @click="innerAction">trigger innerAction (view logs)</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',

  computed: {
    ...mapState({
      message: (state) => state.rootMessage,
      message1: (state) => state.outerModule.outerMessage,
      message2: (state) => state.anotherModule.anotherMessage,
    }),
    ...mapState('innerModule', {
      innerModuleState: (state) => state,
    }),
  },

  methods: {
    ...mapActions('innerModule', ['innerAction']),
  },
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
  margin: 2rem 0;
}

.msg {
  color: cyan;
}
</style>
