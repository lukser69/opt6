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
@import '@/assets/styles/breakpoints.scss';

.default-layout {
	min-height: 100dvh;
	min-width: $display-sm;

	& > .main-container {
		max-width: var(--Max-Width-Container);
		margin: 0 auto;
	}
}

@media (max-width: $display-xl) and (min-width: $display-md) {
	.default-layout {
		& > .main-container {
			padding: 0 20px;
		}
	}
}

@media (max-width: $display-md) {
	.default-layout {
		& > .main-container {
			padding: 0 10px;
		}
	}
}
</style>
