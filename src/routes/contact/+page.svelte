<script>
    import { goto } from '$app/navigation';

    function goToBase(){
        goto('/')
    }
</script>
<div 
    class={`flex items-center justify-center min-h-screen transition-all duration-300 ease-in-out bg-cover bg-center`} 
    style="background-image: url('https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-331625-933054.jpg&fm=jpg')">
    <div class="box-border grid grid-rows-5 h-80 w-64 p-5 backdrop-blur-sm bg-white/30 rounded gap-2">
        <h1 class="text-white text-3xl font-bold">Contact</h1> 
        <a class="grid grid-cols-5 box-border border-white  w-auto h-auto backdrop-blur-xl bg/black/30 p-2 rounded hover:backdrop-blur-3xl" href="https://www.linkedin.com/in/tyler-lui-82779721b/" >
            <img class=" h-6 w-6 flex items-center justify-center my-auto" src="/linkedin-app-white-icon.webp" alt="LinkedIn">
            <p class="my-auto text-white col-span-4" >Tyler Lui</p>
        </a>
        <a class="grid grid-cols-5 box-border border-white  w-auto h-auto backdrop-blur-xl bg/black/30 p-2 rounded hover:backdrop-blur-3xl" href="https://github.com/tylermlui">
            <img class="h-6 w-6 my-auto" src="/github-mark-white.svg" alt="LinkedIn">
            <p class=" my-auto text-white col-span-4" >tylermlui</p>
        </a>
        <a class="grid grid-cols-5 box-border border-white w-auto h-auto backdrop-blur-xl bg/black/30 p-2 rounded hover:backdrop-blur-3xl" href="mailto:tylerlui@gmail.com">
            <img class="h-6 w-6 my-auto" src="/email-icon-white-png-10-transparent.webp" alt="LinkedIn">
            <p class="my-auto text-white col-span-4" >tylerlui@gmail.com</p>
        </a>
        <button class="mt-auto p-2 bg-blue-500 text-white rounded" on:click={goToBase}>Close</button>

    </div>
</div>

