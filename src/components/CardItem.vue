<script>
export default {
  props: {
    icon: {
      type: String,
      default: "https://img.icons8.com/color/344/courses.png",
    },
    title: {
      type: String,
      default: "Title lorem ipsum",
    },
    description: {
      type: String,
      default: `
Description, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. <br>
<br>This <b>should</b> be on a new line <br>
<br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
    return {
      checked: false,
    };
  },
  methods: {
    getContributeUrl: (title) => {
      return "https://github.com/Matthew-Dreemurr/cursus/edit/master/tex/test.tex";
    },
    getCourseUrl: (title) => {
      return "course/dummy";
    },
  },
};
</script>

<template>
  <a :href="getCourseUrl(title)" class="card-div">
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
      <a class="contribute" :href="getContributeUrl(title)"
        >contribute to this course</a
      >
  </a>
</template>

<style scoped>
/* * {
  border: green solid 1px;
} */

.card-div {
  color: #dddddd;
  margin: 0.4em;
  padding: 1em;
  width: fit-content;
  /* max-width: 20vw; */

  font-size: normal;
  /* word-break: break-all; */
  border-radius: 1em;
  border-style: solid;
  border-width: 0.1em;
  border-color: #222222;

  background-color: #222222;

  box-shadow: 0 0.2em 2em 0.01em #00000044;

  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  transition: 0.3s all cubic-bezier(0.155, 1.105, 0.295, 1.12);
  transform: scale(0.99);

  cursor: pointer;
}

.title-div {
  width: 100%;
  margin: 0.1em;
  padding: 0.1em;
  text-decoration: none;
  /* width: 100%; */
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: flex-start;
}

.title {
  font-size: 100%;
}
.description {
  width: 100%;
  height: fit-content;
  margin: 0.4em 0;
  padding: 0.1em 1em;
  text-decoration: none;
  box-shadow: 0 0 0.5em 0.01em #00000066;
  border-radius: 0.4em;

  word-break: break-word;
}

img {
  display: inline-block;
  /* filter: brightness(0) invert(1); */
  margin: 0 0.4em;
  border-radius: 1em;
  height: 5em;
}

h1 {
  display: inline-block;
  font-size: extra-large;
  font-weight: bold;
  text-transform: uppercase;
}

.tags-div {
  width: fit-content;
  padding: 0.1em;
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
  word-break: break-all;
  font-size: 0.8em;
  font-weight: bold;
  text-align: center;
  border-radius: 0.4em;

  transition: 0.8s all cubic-bezier(0.155, 1.105, 0.295, 1.12);
}

.tag:hover,
.tag:focus,
.card-div:hover,
.card-div:focus {
  transform: scale(1.04) translateY(-0.4vh);
  z-index: 1;
}

.card-div:hover {
  border-color: #dddddd;
}

.contribute {
  font-size: small;
  width: 100%;
  text-align: center;
}

a .contribute{
  text-decoration: underline;
  transition: 0.6s all cubic-bezier(0.155, 1.105, 0.295, 1.12);
}

a:hover,
a:focus {
  color: white;
  background: none;
}
</style>
