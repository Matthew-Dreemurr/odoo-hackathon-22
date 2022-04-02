<script>
export default
{
  props: {
    icon_src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: "Default Title"
    },
    tags_array: {
      type: Array,
      default: [],
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
      <img class="module-icon" src="{{ icon_src }}" alt="Module Icon">
      <h1 class="title">{{ title }}</h1>
    </div>
    <p>Description</p>
    <div class="tags-div">
      <li class="tag">tag</li>
      <li class="tag">tag</li>
      <li class="tag">tag</li>
    </div>
  </div>
</template>

<style scoped>

h1 {
  font-size: large;
}

card-div {
  display: flex;
}



</style>
