<script setup lang="ts">
defineEmits(['closeModal']);
</script>

<template>
	<div class="modal-root">
		<Teleport to="body">
			<div class="overlay" @click="$emit('closeModal')" @wheel.prevent>
				<slot />
			</div>
		</Teleport>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/breakpoints.scss';

.overlay {
	z-index: 1000;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: rgba(23, 24, 26, 0.2);
}
</style>
