<script setup lang="ts"></script>

<template>
	<section class="documents-root">
		<h2 class="documents__title">Документы</h2>

		<DocumentsCarousel />
	</section>
</template>

<style scoped lang="scss">
.documents-root {
	& > .documents__title {
		margin: 0 0 27px;
		text-align: center;

		font-size: 34px;
		font-weight: 700;
		line-height: 120%;
	}
}
</style>
