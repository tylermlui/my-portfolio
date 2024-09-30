<script>
    import { goto } from '$app/navigation';

    function goToProjects(){
        goto('/projects')
    }
    function goToContact(){
        goto('/contact')
    }
    function goToResume(){
        goto('/resume')
    }
</script>
<div class="min-h-screen flex text-lg text-black">
    <button on:click={goToContact} class="bg-local text-white font-bold text-2xl flex-1 hover:flex-[3] transition-all duration-300 ease-in-out flex justify-center items-center max-w-full h-auto bg-[url('https://images.pexels.com/photos/1624506/pexels-photo-1624506.jpeg?auto=compress&cs=tinysrgb&w=470')]">
        Contact
    </button>
    <button on:click={goToProjects} class="flex-1 text-white font-bold text-2xl hover:flex-[3] transition-all duration-300 ease-in-out flex justify-center items-center bg-black max-w-full h-auto bg-[url('https://images.pexels.com/photos/3684415/pexels-photo-3684415.jpeg?auto=compress&cs=tinysrgb&w=480')]">
        Projects
    </button>
    <button
    on:click={goToResume}
    class="group flex-1 flex flex-col justify-center items-center text-white font-bold text-2xl transition-all duration-300 ease-in-out max-w-full h-auto bg-[url('https://images.pexels.com/photos/12303622/pexels-photo-12303622.jpeg?auto=compress&cs=tinysrgb&w=480')] hover:flex-[3] relative"
>
    <span>Resume</span>
    <p class="text-slate-500 group-hover:block text-sm mt-2 hidden">Open here</p></button>
</div>



