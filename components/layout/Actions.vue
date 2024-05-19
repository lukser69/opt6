<script setup lang="ts">
const router = useRouter();

const goToAuth = async () => {
	await router.push('/login');
};

const goToRegistration = async () => {
	await router.push('/registration');
};
</script>

<template>
	<div class="navbar-actions-root">
		<a class="navbar-actions__phone" :href="`tel:+74951184422`">
			+7 495 118-44-22
		</a>
		<UiButton
			class="navbar-actions__btn-auth"
			variant="text"
			size="sm"
			@click="goToAuth"
		>
			Вход
		</UiButton>
		<UiButton
			class="navbar-actions__btn-reg"
			size="sm"
			@click="goToRegistration"
		>
			Регистрация
		</UiButton>
	</div>
</template>

<style scoped lang="scss">
.navbar-actions-root {
	display: flex;
	align-items: center;
	gap: 30px;

	& > .navbar-actions__phone {
		font-weight: 700;
		font-size: 18px;
		color: rgb(var(--White));
		text-decoration: none;

		transition: color 0.3s ease-in-out;

		&:hover {
			color: color-mix(in srgb, rgb(var(--White)), rgb(var(--Primary)) 50%);
		}
	}

	& > .navbar-actions__btn-auth {
		padding-right: 5px;
		padding-left: 5px;

		color: rgb(var(--White));

		&:hover {
			color: color-mix(in srgb, rgb(var(--White)), rgb(var(--Primary)) 50%);
		}

		&:active {
			color: color-mix(in srgb, rgb(var(--White)), rgb(var(--Primary)) 30%);
		}
	}
}
</style>
