<script setup lang="ts">
import { MENU_DATA } from './menu.data';

const emit = defineEmits(['close']);

const route = useRoute();

const navbarPhoneMenuRef = ref<HTMLElement>();

const setTopMargin = () => {
	const navbar = document.querySelector('.navbar');

	if (navbar && navbarPhoneMenuRef.value) {
		navbarPhoneMenuRef.value.style.top = navbar.clientHeight + 'px';
	}
};

onMounted(setTopMargin);

watch(
	() => route.path,
	() => {
		emit('close');
	}
);
</script>

<template>
	<Teleport to="body">
		<div
			ref="navbarPhoneMenuRef"
			class="navbar-menu-phone-wrapper"
			@wheel.prevent
		>
			<ul class="navbar-menu-phone">
				<li
					v-for="item in MENU_DATA"
					:key="item.url"
					class="navbar-menu-phone__item"
				>
					<NuxtLink class="navbar-menu-phone__link" :to="item.url">
						{{ item.name }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</Teleport>
</template>

<style scoped lang="scss">
.navbar-menu-phone-wrapper {
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;

	background-color: rgb(45, 63, 85);

	& > .navbar-menu-phone {
		margin: 0;
		padding: 20px;
		list-style: none;

		display: grid;
		gap: 15px;

		& > .navbar-menu-phone__item {
			background-color: rgba(var(--Primary), 0.15);
			border-radius: 20px;

			& > .navbar-menu-phone__link {
				padding: 10px 16px;
				display: block;
				width: 100%;

				font-size: 18px;
				font-weight: 400;
				line-height: 23px;
				color: rgb(var(--White));
				text-decoration: none;

				transition: color 0.3s ease-in-out;

				&:hover {
					color: color-mix(in srgb, rgb(var(--White)), rgb(var(--Primary)) 50%);
				}
			}
		}
	}
}
</style>
