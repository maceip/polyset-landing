<script lang="ts">
	import { T } from '@threlte/core';
	import { ContactShadows, Float, Grid, OrbitControls } from '@threlte/extras';
	import Emitter from './Emitter.svelte';
	import TestBed from './TestBed.svelte';
	import Wall from './Wall.svelte';
	import InitialParticles from './InitialParticles.svelte';
  import { useRapier } from '@threlte/rapier'
  const { world } = useRapier()
  
	let canvas_w = 1;
	let canvas_h = 1;
	let aspect = 1;
	let frustumSize = 3;

	$: {
		aspect = canvas_w / canvas_h;
	}

	// $: {
	//   frustumSize = 1;
	// }
</script>

<svelte:window bind:innerHeight={canvas_h} bind:innerWidth={canvas_w} />

<T.OrthographicCamera
	makeDefault
	manual
	args={[(frustumSize * aspect) / -2, (frustumSize * aspect) / 2, frustumSize, 0, 1, 1000]}
/>

<T.DirectionalLight castShadow position={[-8, 20, 3]} />

<T.AmbientLight intensity={0.2} />

<T.Group position.z={-5}>
	<InitialParticles position={[0, 5, 0]} />

	<Emitter />
	<TestBed />
	<Wall x_pos={0.35} x_rot={0.1} />
	<Wall x_pos={-0.35} x_rot={-0.1} />
</T.Group>

<T.PerspectiveCamera makeDefault position={[-10, 10, 10]} fov={15}>
	<OrbitControls autoRotate enableZoom={false} enableDamping autoRotateSpeed={0.5} target.y={1.5} />
</T.PerspectiveCamera>

<T.DirectionalLight intensity={0.8} position.x={5} position.y={10} />
<T.AmbientLight intensity={0.2} />

<Grid
	position.y={-0.001}
	cellColor="#ffffff"
	sectionColor="#ffffff"
	sectionThickness={0}
	fadeDistance={25}
	cellSize={2}
/>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />

<Float floatIntensity={1} floatingRange={[0, 1]}>
	<T.Mesh position.y={1.2} position.z={-0.75}>
		<T.BoxGeometry />
		<T.MeshStandardMaterial color="#0059BA" />
	</T.Mesh>
</Float>

<Float floatIntensity={1} floatingRange={[0, 1]}>
	<T.Mesh position={[1.2, 1.5, 0.75]} rotation.x={5} rotation.y={71}>
		<T.TorusKnotGeometry args={[0.5, 0.15, 100, 12, 2, 3]} />
		<T.MeshStandardMaterial color="#F85122" />
	</T.Mesh>
</Float>

<Float floatIntensity={1} floatingRange={[0, 1]}>
	<T.Mesh position={[-1.4, 1.5, 0.75]} rotation={[-5, 128, 10]}>
		<T.IcosahedronGeometry />
		<T.MeshStandardMaterial color="#F8EBCE" />
	</T.Mesh>
</Float>
