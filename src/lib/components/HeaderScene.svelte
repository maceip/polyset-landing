<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import { HTML } from '@threlte/extras';
	import { World } from '@threlte/rapier';
	import Scene from '$lib/components/Scene.svelte';
	export let isDarkMode: boolean;
</script>

<div class="relative flex h-full w-full dark:text-white select-none">

	{#if isDarkMode}
		<img
			class="absolute left-[40px] top-1/4 pointer-events-none w-[250px] sm:w-[300px] md:w-[500px]"
			src="/images/logo-fill.svg"
		/>
	{:else}
		<img
			class="absolute left-[40px] top-1/4 pointer-events-none w-[250px] sm:w-[300px] md:w-[500px]"
			src="/images/logo-black-fill.svg"
		/>
	{/if}

	<div class="absolute h-full w-full">
		<Canvas>
			<World gravity={[0, -1, 0]}>
				<!-- <Debug depthTest={false} depthWrite={false} /> -->
				<Scene />
				<HTML slot="fallback" transform>
					<p class="text-xs">
						It seems your browser<br />
						doesn't support WASM.<br />
						I'm sorry.
					</p>
				</HTML>
			</World>
		</Canvas>
	</div>
	{#if isDarkMode}
		<img
			class="absolute left-[45px] top-[calc(100vh*0.25+5px)] w-[250px] sm:w-[300px] md:w-[500px] pointer-events-none"
			src="/images/logo-stroke.svg"
		/>
	{:else}
		<img
			class="absolute left-[45px] top-[calc(100vh*0.25+5px)] w-[250px] sm:w-[300px] md:w-[500px] pointer-events-none"
			src="/images/logo-black-stroke.svg"
		/>
	{/if}
</div>

<style>
	p {
		line-height: 100%;
	}
</style>
