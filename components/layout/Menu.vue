<script setup lang="ts">
import { MENU_DATA } from './menu.data';
</script>

<template>
	<ul
		class="navbar-menu"
	>
		<li v-for="item in MENU_DATA" :key="item.url" class="navbar-menu__item">
			<NuxtLink class="navbar-menu__link" :to="item.url">{{
				item.name
			}}</NuxtLink>
		</li>
	</ul>
</template>

<style scoped lang="scss">
.navbar-menu {
	margin: 0;
	padding: 0;
	list-style: none;

	display: flex;
	align-items: center;
	gap: 30px;

	&__item {
		& > .navbar-menu__link {
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
</style>
