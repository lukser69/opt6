<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps<{
	type?: 'text' | 'password';
	value?: string;
	name: string;
	label: string;
	placeholder?: string;
}>();

const name = toRef(props, 'name');

// Vee Validate
const {
	value: inputValue,
	errorMessage,
	handleBlur,
	handleChange,
	meta,
} = useField(name, undefined, {
	initialValue: props.value,
});
</script>

<template>
	<div
		class="TextInput"
		:class="{ 'has-error': !!errorMessage, success: meta.valid }"
	>
		<label :for="name">{{ label }}</label>
		<input
			:name="name"
			:id="name"
			:type="type"
			:value="inputValue"
			:placeholder="placeholder"
			@input="handleChange"
			@blur="handleBlur"
		/>
	</div>
</template>

<style scoped lang="scss">
.TextInput {
	position: relative;
	margin-bottom: calc(1em * 1.5);
	width: 100%;

	& > label {
		display: block;
		margin-bottom: 5px;
		width: 100%;

		font-size: 12px;
		font-weight: 400;
		line-height: 120%;
	}

	& > input {
		border-radius: 5px;
		border: 1px solid rgb(var(--Border));
		padding: 9px 18px;
		outline: none;
		background-color: rgb(var(--White));
		width: 100%;
		transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
			background-color 0.3s ease-in-out;

		&:focus {
			border-color: rgb(var(--Primary));
		}
	}

	&.has-error {
		& > input {
			color: rgb(var(--Error));
			border-color: rgb(var(--Error));
		}
	}

	&.has-error &.success {
		& > input {
			color: rgb(var(--Success));
			border-color: rgb(var(--Success));
		}
	}

	&.success {
		& > input:focus {
			border-color: rgb(var(--Success));
		}
	}
}
</style>
