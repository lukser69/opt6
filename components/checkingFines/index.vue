<script setup lang="ts"></script>

<template>
	<section class="checking-fines">
		<CheckingFinesContent />

		<div class="preview-application">
			<NuxtImg
				class="preview-application__image"
				src="/assets/imgs/previewApplication.png"
			/>
		</div>
	</section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/breakpoints.scss';

.checking-fines {
	display: grid;
	grid-template-columns: 1fr 1fr;

	.preview-application {
		padding: 0 20px;

		display: flex;
		justify-content: center;
		align-items: center;

		&__image {
			max-width: 100%;
			max-height: 100%;
			object-fit: cover;
		}
	}
}

@media (max-width: $display-md) {
	.checking-fines {
		grid-template-columns: 1fr;

		.preview-application {
			display: none;
		}
	}
}
</style>
