<script>
export default
{
  props: {
    icon: {
      type: String,
      required: true,
      default: "https://picsum.photos/128",
    },
    title: {
      type: String,
      default: "Title lorem ipsum"
    },
    description: {
      type: String,
      default:
      `
      Description, lorem ipsum dolor sit amet brown fox jumped over the lazy dog. <br>
      <br>This <b>should</b> be on a new line <br>
      <br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet arcu augue, eget consectetur urna bibendum ac. Sed ac augue at est tincidunt sagittis sed id est. Nam feugiat arcu sem, vitae congue lacus lacinia eget. Vestibulum sit amet tempor turpis. Proin non posuere diam. Suspendisse facilisis tempor sodales. Aliquam erat volutpat. Suspendisse vehicula arcu mauris, nec mollis arcu vulputate sit amet. Mauris vitae nisi a velit fermentum interdum ac vel massa. Morbi ante risus, blandit non odio at, suscipit ornare libero. Suspendisse potenti. Vestibulum eget nibh augue. Aliquam erat volutpat.
`,
    },
    tags_array: {
      type: Array,
      default: [
        	{
            text: "this is a tag #1",
           style: "background-color: #0088FF;"},
        	{
            text: "this is another tag #2",
           style: "background-color:#00DD44;"},
        	{
            text: "and another one #3",
           style: "background-color: #FF4400;"},
        	{
            text: "and a very long tag : lorem ipsum dolor sit amet #4",
           style: "background-color: #FF0000;"},
      ],
    }
  },
  data(){
    return {

    }
  }
}
</script>

<template>
  <div class="card-div">
    <div class="title-div">
      <img class="module-icon" :src="icon" alt="Module Icon">
      <h1 class="title">{{ title }}</h1>
    </div>
    <p class="description"><span v-html="description"></span></p>
    <li class="tags-div" >
      <ul class="tag" v-for="tag in tags_array" :key="tag.text" :style="tag.style">{{ tag.text }}</ul>
    </li>
  </div>
</template>

<style scoped>

  *- {
    border: blue 0.2px dotted;
  }

.card-div {
  margin: 2em;
  padding: 1em;
  border-radius: 1em;
  border: black solid 1px;
  background-color: white;

  box-shadow: 0 0 1em 0.1em #000000;

  display: flex;
  flex-direction: column;

  transition: transform 0.2s;
}

  .title-div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }

  .description {
    padding: 1em;
  	box-shadow: 0 0 0.5em 0.01em #000000;
    border-radius: 1em;
  }

img {
  display: inline-block;
  margin: 1em;
  border-radius: 1em;
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

.tags-div, .tag{
  list-style-type: none;
}

  .tag {
    display: inline-block;
  	margin: 0.2em;
    padding: 0.2em 0.8em;
    text-transform: uppercase;
    font-size: small;
    font-weight: bold;
    text-align: center;
    color: white;
    border-radius: 0.8em;
  }



</style>
