<script setup lang="ts">
useHead({
	title: 'Compas',
});
</script>

<template>
	<div class="main-page-root">
		<CheckingFines class="main-page__checking-fines" />

		<AdvantagesUsingCompas class="main-page__advantages-using-compas" />

		<Documents class="main-page__documents" />
	</div>
</template>

<style scoped lang="scss">
.main-page-root {
	margin-bottom: 473px;
	& > .main-page__checking-fines {
		margin: 79px 0 98px;
	}
	& > .main-page__advantages-using-compas {
		margin-bottom: 85px;
	}
}
</style>
