<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: "https://www.pikpng.com/pngl/m/105-1052172_png-file-svg-transparent-background-education-icon-clipart.png",
    },
    title: {
      type: String,
      default: "Title lorem ipsum",
    },
    description: {
      type: String,
      default: `
      Description, lorem ipsum dolor sit amet brown fox jumped over the lazy dog. <br>
      <br>This <b>should</b> be on a new line <br>
      <br>
      Lorem ipsum dolor sit ametpat.
`,
    },
    tags_array: {
      type: Array,
      default: [
        {
          text: "this is a tag #1",
          style: "background-color: #0088FF;",
        },
        {
          text: "this is another tag #2",
          style: "background-color:#00DD44;",
        },
        {
          text: "and another one #3",
          style: "background-color: #FF4400;",
        },
        {
          text: "and a very long tag : lorem ipsum dolor sit amet #4",
          style: "background-color: #FF0000;",
        },
      ],
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="card-div">
    <div class="title-div">
      <img class="module-icon" :src="icon" alt="Module Icon" />
      <h1 class="title">{{ title }}</h1>
    </div>
    <p class="description"><span v-html="description"></span></p>
    <li class="tags-div">
      <ul
        class="tag"
        v-for="tag in tags_array"
        :key="tag.text"
        :style="tag.style"
      >
        {{
          tag.text
        }}
      </ul>
    </li>
  </div>
</template>

<style scoped>
.card-div {
  color: #dddddd;
  margin: 1em;
  padding: 1em;
  width: 100%;
  min-width: 25vw;
  max-width: vw;

  font-size: small;

  border-radius: 1em;

  background-color: #222222;

  box-shadow: 0 0.2em 2em 0.01em #00000044;

  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12);
  transform: scale(0.99);

  cursor: pointer;
}

.title-div {
  padding: 1em;
  padding-left: 0;
  width: 100%;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: flex-start;
}

.description {
  padding: 1em;
  box-shadow: 0 0 0.5em 0.01em #00000066;
  border-radius: 1em;
}

img {
  display: inline-block;
  filter: brightness(100%);
  margin: 1em;
  border-radius: 0.2em;
  width: 3em;
}

h1 {
  display: inline-block;
  font-size: extra-large;
  font-weight: bold;
  text-transform: uppercase;
}

.tags-div {
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
}

.tags-div,
.tag {
  list-style-type: none;
}

.tag {
  display: inline-block;
  margin: 0.2em;
  padding: 0.2em 0.8em;
  text-transform: uppercase;
  font-size: 0.6em;
  font-weight: bold;
  text-align: center;
  border-radius: 0.4em;

  transition: .8s transform cubic-bezier(.155,1.105,.295,1.12);
}

.tag:hover,
.card-div:hover {
  transform: scale(105%) translateY(-0.4vh);
  z-index: 1;
}
</style>
