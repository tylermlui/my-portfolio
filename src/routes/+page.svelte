<script lang="ts">
    import Greeting from '../components/Greeting.svelte';
    import Navbar from '../components/Navbar.svelte';
    import { goto } from '$app/navigation';

    let links: { [key: string]: string } = {
        'Resume': 'https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1500',
        'Projects': 'https://www.chieftain.com/gcdn/authoring/2017/06/01/NTPC/ghows-CO-b6a1d186-bfcf-42ba-9c6d-525dc212aed7-33899952.jpeg?width=2500&height=2000&fit=crop&format=pjpg&auto=webp',
        'Contact': 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-331625-933054.jpg&fm=jpg'
    };

    let isFullScreen = false;
    let pick: string | null = null;

    function fullScreen() {
        isFullScreen = !isFullScreen;
    }

    function toggleFullScreen(option: string) {
        isFullScreen = !isFullScreen;
        pick = option;
        console.log(links[pick]);
    }

    function goToProjects() {
        toggleFullScreen('Projects');
    }

    function goToContact() {
        toggleFullScreen('Contact');
    }

    function goToResume() {
        toggleFullScreen('Resume');
    }
</script>

<div class="min-h-screen">
    {#if isFullScreen && pick != null}
        <div 
            class={`flex items-center justify-center min-h-screen transition-all duration-300 ease-in-out bg-cover bg-center`} 
            style="background-image: url('{links[pick]}')">
            <div class="box-border grid grid-rows-5 h-80 w-64 p-5 backdrop-blur-sm bg-white/30 rounded gap-2">
                <h1 class="text-white text-3xl font-bold">{pick}</h1> 
                <a class="grid grid-cols-5 box-border border-white  w-auto h-auto backdrop-blur-xl bg/black/30 p-2 rounded hover:backdrop-blur-3xl" href="https://www.linkedin.com/in/tyler-lui-82779721b/">
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
                <button class="mt-auto p-2 bg-blue-500 text-white rounded" on:click={fullScreen}>Close</button>

            </div>
        </div>
    {:else}
        <div class="grid grid-cols-2 min-h-screen transition-all duration-500 ease-in-out opacity-100">
            <div class="min-h-screen flex text-lg text-black">
                <button
                on:click={goToContact}
                class="bg-local text-white font-bold text-2xl flex-1 hover:flex-[3] transition-all duration-300 ease-in-out flex justify-center items-center max-w-full h-auto bg-cover hover:scale-105 bg-[url('https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-331625-933054.jpg&fm=jpg')] "
            >
                Contact
            </button>
                <button
                    on:click={goToProjects}
                    class="flex-1 hover:flex-[3] justify-center items-center bg-cover text-white bg-center font-bold text-2xl transition-all duration-300 ease-in-out flex justify-center items-center bg-black max-w-full h-auto bg-[url('https://www.chieftain.com/gcdn/authoring/2017/06/01/NTPC/ghows-CO-b6a1d186-bfcf-42ba-9c6d-525dc212aed7-33899952.jpeg?width=600&height=1290&fit=crop&format=pjpg&auto=webp')]"
                >
                    Projects
                </button>
                <button
                    on:click={goToResume}
                    class="bg-local text-white font-bold text-2xl flex-1 hover:flex-[3] transition-all duration-300 ease-in-out flex justify-center items-center max-w-full h-auto bg-cover hover:scale-105 bg-[url('https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1200')]"
                >
                    <span>Resume</span>
                </button>
            </div>
            <div class="flex flex-col justify-center items-center min-h-screen transition-opacity duration-500 opacity-100">
                <div class="text-black font-bold text-5xl">Tyler Lui</div>
                <div class="ml-20 text-black font-thin text-lg">CS @ CSUF</div>
            </div>
        </div>
    {/if}
</div>
