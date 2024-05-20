<script setup lang="ts">
import { DOCUMENTS_DATA } from './documents.data';

const cardsList = ref<HTMLElement>();
const activeViewSlide = ref<number>(1);

const countViewCardsOnSlide = ref(0);

const setCountViewCardsOnSlide = () => {
	if (!cardsList.value) {
		countViewCardsOnSlide.value = 0;
		return;
	}

	const cardWidth = cardsList.value.children[0].getBoundingClientRect().width;
	const carouselWidth = cardsList.value.getBoundingClientRect().width;

	countViewCardsOnSlide.value = Math.floor(carouselWidth / cardWidth);
};

onMounted(() => {
	setCountViewCardsOnSlide();

	window.addEventListener('resize', setCountViewCardsOnSlide);
});

let position: number = 0;

const onNextSlide = () => {
	if (!cardsList.value) return;

	const cardsListGap = parseInt(getComputedStyle(cardsList.value).gap);

	const cardWidth = cardsList.value.children[0].getBoundingClientRect().width;

	const cardsListWidth =
		cardWidth * cardsList.value.children.length +
		cardsListGap * (cardsList.value.children.length - 1);

	const carouselWidth = cardsList.value.getBoundingClientRect().width;

	const rightCarousel =
		cardsList.value?.parentElement?.getBoundingClientRect().right;

	const rightLastCard =
		cardsList.value?.children[
			cardsList.value?.children.length - 1
		].getBoundingClientRect().right;

	position -= (cardWidth + cardsListGap) * countViewCardsOnSlide.value;
	activeViewSlide.value++;

	if (cardsListWidth < -position + carouselWidth) {
		if (rightCarousel && rightCarousel - 29 === rightLastCard) {
			position = 0;
			activeViewSlide.value = 1;
		} else {
			position = carouselWidth - cardsListWidth;
		}
	}

	cardsList.value.style.transform = `translateX(${position}px)`;
};

const onPrevSlide = () => {
	if (!cardsList.value) return;

	const cardsListGap = parseInt(getComputedStyle(cardsList.value).gap);

	const cardWidth = cardsList.value.children[0].getBoundingClientRect().width;

	const cardsListWidth =
		cardWidth * cardsList.value.children.length +
		cardsListGap * (cardsList.value.children.length - 1);

	const carouselWidth = cardsList.value.getBoundingClientRect().width;

	const leftCarousel =
		cardsList.value?.parentElement?.getBoundingClientRect().left;

	const leftFirstCard =
		cardsList.value?.children[0].getBoundingClientRect().left;

	position += (cardWidth + cardsListGap) * countViewCardsOnSlide.value;
	activeViewSlide.value--;

	if (position > 0) {
		if (leftCarousel && leftCarousel + 29 === leftFirstCard) {
			position = carouselWidth - cardsListWidth;
			activeViewSlide.value =
				DOCUMENTS_DATA.length / countViewCardsOnSlide.value;
		} else {
			position = 0;
			activeViewSlide.value = 1;
		}
	}

	cardsList.value.style.transform = `translateX(${position}px)`;
};
</script>

<template>
	<div class="documents-carousel-root">
		<div ref="cardsList" class="documents-carousel__cards">
			<DocumentsCarouselCard
				v-for="item in DOCUMENTS_DATA"
				:key="item.title"
				:item="item"
			/>
		</div>

		<div v-if="countViewCardsOnSlide" class="documents-carousel__toggler">
			<div
				v-for="viewSlide in DOCUMENTS_DATA.length / countViewCardsOnSlide"
				:key="viewSlide"
				class="point"
				:class="{ active: viewSlide === activeViewSlide }"
			></div>
		</div>

		<button class="btn-prev" @click="onPrevSlide">
			<NuxtImg src="/assets/icons/btnPrev.svg" width="40" height="80" />
		</button>
		<button class="btn-next" @click="onNextSlide">
			<NuxtImg src="/assets/icons/btnNext.svg" width="40" height="80" />
		</button>
	</div>
</template>

<style scoped lang="scss">
.documents-carousel-root {
	position: relative;
	padding: 13px 29px;
	overflow: hidden;

	.documents-carousel__cards {
		display: flex;
		gap: 35px;
		min-height: 450px;

		margin-bottom: 15px;

		transition: transform 0.5s ease;
	}

	& > .documents-carousel__toggler {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
		& > .point {
			min-width: 7px;
			max-width: 7px;
			height: 7px;
			border-radius: 50%;
			background-color: rgb(var(--Gray));

			&.active {
				min-width: 10px;
				max-width: 10px;
				height: 10px;
				background-color: rgb(var(--Primary));
			}
		}
	}

	& > .btn-prev,
	& > .btn-next {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);

		background-color: transparent;
		border: none;
		padding: 0;

		&:hover {
			cursor: pointer;
		}
	}

	& > .btn-prev {
		left: 0;
	}

	& > .btn-next {
		right: 0;
	}
}
</style>
