<script setup lang="ts">
import type { IDocument } from './types';

defineProps<{
	item: IDocument;
}>();
</script>

<template>
	<div class="carousel-card-root">
		<div class="carousel-card__content">
			<div class="carousel-card__title">{{ item.title }}</div>
			<div class="carousel-card__description">{{ item.description }}</div>
		</div>

		<NuxtLink class="carousel-card__btn-more" :to="'/documents/' + item.url">
			<UiButton block>Перейти</UiButton>
		</NuxtLink>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/breakpoints.scss';

.carousel-card-root {
	padding: 25px;
	min-width: calc(100% / 3 - 35px / 2 - 35px / 6);
	max-width: calc(100% / 3 - 35px / 2 - 35px / 6);

	border: 1px solid rgb(238, 239, 241);
	border-radius: 10px;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
	background: rgb(var(--White));

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& > .carousel-card__content {
		margin-bottom: 15px;

		& > .carousel-card__title {
			margin-bottom: 15px;

			font-size: 31px;
			font-weight: 700;
			line-height: 120%;
			color: rgb(var(--Primary-Dark));
		}

		& > .carousel-card__description {
			font-size: 18px;
			font-weight: 400;
			line-height: 120%;
		}
	}
}

@media (max-width: $display-xl) and (min-width: $display-md) {
	.carousel-card-root {
		min-width: calc(100% / 2 - 35px / 2);
		max-width: calc(100% / 2 - 35px / 2);
	}
}

@media (max-width: $display-md) {
	.carousel-card-root {
		min-width: 100%;
		max-width: 100%;
	}
}
</style>
