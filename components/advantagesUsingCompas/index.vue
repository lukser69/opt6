<script setup lang="ts">
import { ADVANTAGES_USING_COMPAS_ITEMS } from './advantagesUsingCompas.data';
</script>

<template>
	<section class="advantages-using-compas-root">
		<h2 class="advantages-using-compas__title">
			Плюсы использования сервиса «Компас» для анализа штрафов
		</h2>

		<div class="advantages-using-compas__items">
			<AdvantagesUsingCompasCardItem
				v-for="item in ADVANTAGES_USING_COMPAS_ITEMS"
				:key="item.title"
				:item="item"
			/>
		</div>
	</section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/breakpoints.scss';

.advantages-using-compas-root {
	& > .advantages-using-compas__title {
		margin: 0 0 33px;
		text-align: center;

		font-size: 34px;
		font-weight: 700;
		line-height: 120%;
	}

	& > .advantages-using-compas__items {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 35px;
	}
}

@media (max-width: $display-xl) and (min-width: $display-md) {
	.advantages-using-compas-root {
		& > .advantages-using-compas__items {
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
		}
	}
}

@media (max-width: $display-md) {
	.advantages-using-compas-root {
		& > .advantages-using-compas__items {
			grid-template-columns: 1fr;
			gap: 20px;
		}
	}
}
</style>
