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
<!---div class="container mx-auto max-w-7xl"-->
<div class=" flex justify-between space-x-1 m-16 max-w-7xl min-w-6xl mx-auto text-xl text-white" > 
    
    <button on:click={goToContact}> Contact</button>
    <button on:click={goToProjects}> Projects </button>
</div>


