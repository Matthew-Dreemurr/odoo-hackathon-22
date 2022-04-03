<script>
export default {
  props: {
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
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Maecenas ultricies mi eget mauris pharetra. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Fringilla urna porttitor rhoncus dolor purus. Id consectetur purus ut faucibus pulvinar. Justo donec enim diam vulputate ut.
Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Tellus pellentesque eu tincidunt tortor aliquam. Pellentesque habitant morbi tristique senectus et. Nulla posuere sollicitudin aliquam ultrices sagittis. Consectetur a erat nam at lectus urna. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Pretium lectus quam id leo in vitae turpis. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Odio morbi quis commodo odio. Amet consectetur adipiscing elit duis. Dignissim cras tincidunt lobortis feugiat vivamus. Enim nulla aliquet porttitor lacus luctus accumsan. Auctor augue mauris augue neque. Purus semper eget duis at.
Sed blandit libero volutpat sed cras ornare. Lorem ipsum dolor sit amet consectetur adipiscing. Eu augue ut lectus arcu. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Proin libero nunc consequat interdum varius. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Ornare massa eget egestas purus viverra. In hac habitasse platea dictumst vestibulum rhoncus. Et tortor consequat id porta nibh. Viverra maecenas accumsan lacus vel facilisis volutpat. Vitae suscipit tellus mauris a diam maecenas. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Amet risus nullam eget felis eget. Dis parturient montes nascetur ridiculus mus mauris vitae. Neque ornare aenean euismod elementum nisi. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Maecenas volutpat blandit aliquam etiam. Amet nulla facilisi morbi tempus iaculis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Ultrices neque ornare aenean euismod elementum.
Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Interdum consectetur libero id faucibus nisl. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Adipiscing elit ut aliquam purus sit amet luctus. Vel pretium lectus quam id. Pharetra pharetra massa massa ultricies mi. Tincidunt eget nullam non nisi est sit amet. Interdum consectetur libero id faucibus nisl tincidunt. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Amet purus gravida quis blandit. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Id consectetur purus ut faucibus pulvinar elementum. Ac turpis egestas integer eget aliquet nibh praesent. Suspendisse sed nisi lacus sed viverra tellus. Scelerisque in dictum non consectetur a erat. Pellentesque dignissim enim sit amet venenatis urna cursus. Sit amet mattis vulputate enim nulla.
Mi tempus imperdiet nulla malesuada. Id eu nisl nunc mi ipsum faucibus vitae. Morbi non arcu risus quis varius quam quisque id diam. Quam pellentesque nec nam aliquam sem et tortor consequat id. Et tortor at risus viverra adipiscing at in tellus integer. Nec nam aliquam sem et tortor consequat id. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Diam maecenas ultricies mi eget mauris pharetra et. Orci a scelerisque purus semper eget duis. Eget egestas purus viverra accumsan in nisl nisi scelerisque. In arcu cursus euismod quis viverra nibh cras pulvinar. Enim sit amet venenatis urna cursus eget nunc.
`,
    },
  },
};
</script>

<template>
  <div class="course-div">
    <h1>{{ title }}</h1>
    <p class="description"><span v-html="description"></span></p>
  </div>
</template>

<style scoped>

.course-div {
  padding: 1em;
  margin: 2em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

h1 {
  font-size: 4em;
}

.description {
  padding: 1em;

  border-radius: 1em;
  box-shadow: 0 0 1em 0.2em #00000044;

}

</style>
