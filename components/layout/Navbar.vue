<script setup lang="ts">
const showPhoneMenu = ref<boolean>(false);

const togglePhoneMenu = () => {
	showPhoneMenu.value = !showPhoneMenu.value;
};
</script>

<template>
	<nav class="navbar">
		<div class="navbar-container">
			<div class="navbar__toggler-phone-menu">
				<UiButton size="sm" @click="togglePhoneMenu">
					<NuxtImg src="/assets/icons/burgerMenu.svg" width="20" />

					<LayoutMenuPhone
						v-if="showPhoneMenu"
						@close="showPhoneMenu = false"
					/>
				</UiButton>
			</div>

			<div class="navbar__logo">
				<NuxtLink to="/">
					<NuxtImg src="/logo.svg" width="118" height="23" />
				</NuxtLink>
			</div>

			<LayoutMenu class="navbar__menu" />

			<LayoutActions />
		</div>
	</nav>
</template>

<style scoped lang="scss">
@import '@/assets/styles/breakpoints.scss';

.navbar {
	background: linear-gradient(90deg, rgb(0, 0, 0) 30%, rgb(28, 39, 52) 73%);

	& > .navbar-container {
		padding: 12px 0 11px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		gap: 30px;

		max-width: var(--Max-Width-Container);

		.navbar__toggler-phone-menu {
			display: none;
		}

		& > .navbar__menu {
			flex-grow: 1;
		}
	}
}

@media (max-width: $display-xl) and (min-width: $display-md) {
	.navbar {
		& > .navbar-container {
			padding: 12px 20px 11px;
		}
	}
}

@media (max-width: $display-md) {
	.navbar {
		& > .navbar-container {
			padding: 12px 10px 11px;
			justify-content: space-between;

			.navbar__toggler-phone-menu {
				display: block;
			}
			.navbar__menu {
				display: none;
			}
		}
	}
}
</style>
