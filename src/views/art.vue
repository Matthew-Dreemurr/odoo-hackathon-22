<template>
  <div>
    <h1>Here you can suggest modifications using Github Pull Requests</h1>
    <a href="https://github.com/Matthew-Dreemurr/cursus/edit/master/test.tex"
      >propose changes</a
    >
  </div>
</template>

<script>
import { getInnerRange } from "@vue/compiler-core";

export default {};
</script>

<style scoped>
div {
  padding: 10%;
  display: grid;
  place-items: center;
}

h1 {
  font-size: 2em;
  text-align: center;
  font-weight: bold;
}

a {
  font-size: large;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 0.4em 2em;
  margin: 1em;
  color: #dddddd;
  border-radius: 1em;
  background: #222222;

  transition: 0.8s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.8s background-color cubic-bezier(0.155, 1.105, 0.295, 1.12);
}

a:hover {
  background-color: hsl(120, 80%, 50%);
  color: #222222;
  transform: scale(105%) translateY(-0.4vh);
}
</style>
