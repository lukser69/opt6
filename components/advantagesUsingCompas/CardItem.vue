<script setup lang="ts">
import type { IAdvantagesUsingCompasItem } from './types';
defineProps<{
	item: IAdvantagesUsingCompasItem;
}>();
</script>

<template>
	<div class="card-root">
		<div class="card__icon-wrapper">
			<NuxtImg class="card__icon" :src="'/assets/icons/' + item.icon" />
		</div>
		<div class="card__content">
			<div class="card__title">{{ item.title }}</div>
			<div class="card__description">{{ item.description }}</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.card-root {
	padding: 20px;
	border: 1px solid rgb(238, 239, 241);
	border-radius: 10px;
	background: rgb(251, 252, 253);
	height: 100%;

	display: grid;
	grid-template-columns: 59px 1fr;
	gap: 15px;

	& > .card__icon-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;

		& > .card__icon {
			max-height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	& > .card__content {
		display: flex;
		flex-direction: column;
		justify-content: center;

		& > .card__title {
			margin-bottom: 12px;

			font-size: 18px;
			font-weight: 700;
			line-height: 120%;
			color: rgb(var(--Primary-Dark));
		}

		& > .card__description {
			font-size: 15px;
			font-weight: 400;
			line-height: 120%;
		}
	}
}
</style>
