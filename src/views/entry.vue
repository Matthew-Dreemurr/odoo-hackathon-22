<template>
<h2>What are your interests ?</h2>
<div>
	<Multiselect
      v-model="value"
	  mode="multiple"
      :options="options"
    />
</div>
</template>

<script>
 import Multiselect from '@vueform/multiselect'
export default {
	components: {
      Multiselect,
	},
	data() {
      return {
        value: null,
        options: [
          'Batman',
          'Robin',
          'Joker',
        ]
      }
	}
}
</script>

<style></style>