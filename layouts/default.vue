<script setup lang="ts"></script>

<template>
	<section class="default-layout">
		<main>
			<slot />
		</main>
	</section>
</template>

<style scoped>
.default-layout {
	min-height: 100dvh;
}
</style>
