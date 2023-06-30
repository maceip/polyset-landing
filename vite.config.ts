import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three']
	},
	define: {
		'process.env': process.env
	  }, 
	  resolve: {
		preserveSymlinks: true,
	  }
});
