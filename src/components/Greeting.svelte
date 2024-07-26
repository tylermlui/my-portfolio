<script>
	import { onMount, onDestroy } from 'svelte';
	import { slide } from 'svelte/transition';
	
	let greetings = ["Node.js", "Python", "Postgres", "C++"];
	let index = 0;
	let roller;	
	onMount(() => {
		roller = setInterval(() => {
			if (index === greetings.length - 1) index = 0;
			else index++;
		}, 1250);
	});
	
	onDestroy(() => {
		clearInterval(roller);
	});
</script>


{#key index}
	<h2 class= "text-xl text-white" transition:slide={{ delay: 250, duration: 250, axis: 'y' }}>{greetings[index]}</h2>
{/key}