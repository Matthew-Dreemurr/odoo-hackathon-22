<script>
export default
{
	props: {
		icon_src: String,
		title: String,
	}
}
</script>

<template>
	<div class="card-div">
		<div class="title-div">
			<img src="{{ icon_src }}" alt="Module Icon">
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



</style>
