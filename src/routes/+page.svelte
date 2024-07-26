<script>
    import Greeting from '../components/Greeting.svelte';
    import Navbar from '../components/Navbar.svelte';
</script>


<div>
    <Navbar/>
    <div class="flex items-center justify-center h-16">
        <div class="p-4 ">
            <span class="absolute mx-auto py-4 flex border bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-white bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">Tyler Lui</span>
            <h1 class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-white bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">Tyler Lui</h1>
            <div class = " ml-44"><Greeting/></div>
        </div>
    </div>

</div>
