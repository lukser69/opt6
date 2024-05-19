<script setup lang="ts"></script>

<template>
	<nav class="navbar">
		<div class="navbar-container">
			<NuxtLink to="/">
				<NuxtImg src="/logo.svg" width="118" height="23" />
			</NuxtLink>

			<LayoutMenu class="navbar__menu" />

			<LayoutActions />
		</div>
	</nav>
</template>

<style scoped lang="scss">
.navbar {
	background: linear-gradient(90deg, rgb(0, 0, 0) 30%, rgb(28, 39, 52) 73%);

	& > .navbar-container {
		padding: 12px 0 11px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		gap: 30px;

		width: var(--Max-Width-Container);

		& > .navbar__menu {
			flex-grow: 1;
		}
	}
}
</style>
