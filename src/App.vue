<template>
	<div style="font-family: 'Montserrat', sans-serif;" class="relative">
		<TheNavbar/>
		<TheSidebar/>
		<router-view class="bg-gray-800 min-h-screen"/>
		<TheFooter />
	</div>
</template>

<script>
import TheNavbar from '@/components/Layout/TheNavbar'
import TheSidebar from '@/components/Layout/TheSidebar'
import TheFooter from '@/components/Layout/TheFooter'

export default {
	components: {
		TheNavbar,
		TheSidebar,
		TheFooter
	},
	computed: {
		isOpen() {
			return this.$store.state.sidebar.isOpen;
		}
	}
}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;1,700&display=swap');
</style>