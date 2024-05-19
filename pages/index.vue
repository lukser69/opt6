<script setup lang="ts">
useHead({
	title: 'Compas',
});
</script>

<template>
	<div class="main-page-root">
		<CheckingFines class="main-page__checking-fines" />
	</div>
</template>

<style scoped lang="scss">
.main-page-root {
	& > .main-page__checking-fines {
		margin: 79px 0 33px;
	}
}
</style>
