<script lang="ts">
	import { T } from '@threlte/core';
	import { Vector3, type Color } from 'three';
	import { useRigidBody } from '@threlte/rapier';

	export let active_color: Color;

	const rigidBody = useRigidBody();
</script>

<T.Mesh
	on:pointerenter={() => {
		rigidBody?.applyImpulse(
			new Vector3((Math.random() - 0.5) * 0.06, Math.random() * 0.06, (Math.random() - 0.5) * 0.06),
			true
		);
	}}
>
	<T.BoxGeometry args={[0.25, 0.25, 0.25]} />
	<T.MeshPhongMaterial color={active_color} transparent={true} opacity={0} />
</T.Mesh>
