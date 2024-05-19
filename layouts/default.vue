<script setup lang="ts"></script>

<template>
	<section class="default-layout">
		<header>
			<LayoutNavbar />
		</header>

		<main class="main-container">
			<slot />
		</main>
	</section>
</template>

<style scoped lang="scss">
.default-layout {
	min-height: 100dvh;

	& > .main-container {
		width: var(--Max-Width-Container);
		margin: 0 auto;
	}
}
</style>
