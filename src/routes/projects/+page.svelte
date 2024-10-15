<script>
    import { goto } from '$app/navigation';

    function goToBase(){
        goto('https://my-portfolio-blue-alpha-16.vercel.app/')
    }
</script>
<div 
    class={`flex items-center justify-center min-h-screen transition-all duration-300 ease-in-out bg-cover bg-center`} 
    style="background-image: url('https://www.chieftain.com/gcdn/authoring/2017/06/01/NTPC/ghows-CO-b6a1d186-bfcf-42ba-9c6d-525dc212aed7-33899952.jpeg?width=1500&height=1000&fit=crop&format=pjpg&auto=webp')">
    <div class="h-auto w-3/4 md:w-5/6 p-5 backdrop-blur-sm bg-white/30 rounded gap-2">
        <h1 class="text-white text-3xl font-bold ">Projects</h1> 
        <div class="grid grid-cols-2 gap-2 pt-5">
            <a class="box-border border-white w-auto h-auto backdrop-blur-xl bg/black/30 p-4 rounded hover:backdrop-blur-3xl" >
                <div class="flex justify-center items-center">
                    <img class="rounded-sm" src="/tuffparking.png" alt="Tuff Parking">
                </div>
                <p class="my-auto text-white col-span-4 text-2xl font-bold pt-2" >Tuff Parking</p>
                <p class="my-auto text-white col-span-4 text-lg font-thin" >Streamlined version of CSUF's parking website.</p>
                <a class="my-auto text-sky-400 col-span-4 text-lg" href="https://tuffparking.up.railway.app/">tuffparking.up.railway.app</a>
            </a>
            <a class="box-border border-white w-auto h-auto backdrop-blur-xl bg/black/30 p-4 rounded hover:backdrop-blur-3xl" >
                <div class="flex justify-center items-center">
                    <img class="rounded-sm " src="/ClearCosmetics.png" alt="Clear Cosmetics">
                </div>
                <p class="my-auto text-white col-span-4 text-2xl font-bold pt-2" >Clear Cosmetics</p>
                <p class="my-auto text-white col-span-4 text-lg font-thin" >Web app that will allow users to check if their products have potentially harmful ingredients in them.</p>
                <a class="my-auto text-sky-400 col-span-4 text-lg" href="https://github.com/tylermlui/Clear-Cosmetics">Github Repo</a></a>
        </div>
        <div class="flex justify-center items-center mt-5">
            <button class="px-5 py-2 bg-blue-500 text-white rounded" on:click={goToBase}>Close</button>
        </div>
    </div>
</div>

