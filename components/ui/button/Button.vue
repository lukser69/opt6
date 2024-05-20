<script setup lang="ts">
import type { IButton } from './types';

defineProps<IButton>();
</script>

<template>
	<button
		class="button"
		:class="`button__${variant || 'primary'} button__${size || 'md'}`"
		:title="title"
		:type="type"
		:style="block ? 'display: block; width: 100%;' : ''"
	>
		<slot />
	</button>
</template>

<style scoped lang="scss">
.button {
	position: relative;
	border-radius: 7px;

	outline: none;
	cursor: pointer;

	user-select: none;

	transition: all 0.3s ease-in-out;

	font-size: 15px;
	font-weight: 400;
	line-height: 19px;

	&__sm {
		height: 37px;
		padding: 9px 18px;
	}

	&__md {
		height: 45px;
		padding: 12px 20px;
	}

	&__primary {
		background-color: rgb(var(--Primary));
		border: none;

		color: rgb(var(--White));

		&:hover {
			background-color: rgb(var(--Primary-Dark));
		}

		&:active {
			background-color: color-mix(in srgb, rgb(var(--Primary-Dark)), #fff 10%);
		}
	}

	&__outlined {
		background-color: transparent;
		border: 1px solid rgb(var(--Primary));

		color: rgb(var(--Primary));

		&:hover {
			background-color: rgb(var(--Primary));
			color: rgb(var(--White));
		}

		&:active {
			background-color: color-mix(in srgb, rgb(var(--Primary)), #fff 10%);
		}
	}

	&__text {
		background-color: transparent;
		border: none;
		color: rgb(var(--Primary));

		&:hover {
			color: rgb(var(--Primary-Dark));
		}

		&:active {
			color: color-mix(in srgb, rgb(var(--Primary-Dark)), #fff 10%);
		}
	}
}
</style>
