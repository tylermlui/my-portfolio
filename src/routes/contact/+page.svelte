



<script>
    import { goto } from '$app/navigation';


    function goToContact(){
        goto('/')
    }

</script>
<h1 class= "text-4xl flex justify-center m-10"> Projects</h1>
<button on:click={goToContact} class="m-10 text-xl"> Back</button>
<div class=" grid-cols-4 gap-80 m-10 flex justify-center text-2xl">
    <div>
        <a href="https://www.linkedin.com/in/tyler-lui-82779721b/">LinkedIn</a>

    </div>
    <div>
        <a href="https://github.com/tylermlui">Github</a>

    </div>

</div>

