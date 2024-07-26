
<script>
    import { goto } from '$app/navigation';


    function goToContact(){
        goto('/')
    }

</script>
<h1 class= "text-4xl flex justify-center m-10"> Projects</h1>
<button on:click={goToContact} class="m-10 text-xl"> Back</button>
<div class="grid grid-cols-4 gap-4 m-10 flex justify-center">
    <div>
        <div class= "text-xl"> Movie Rec Website</div>
        <img src="..\movie_rec.png" alt="Italian Trulli" height="300px" width="600px">
    </div>
    <div>
        <div class= "text-xl"> Parking Monitor</div>
        <img src="..\tuffpark.png" alt="Italian Trulli" height="300px" width="600px">
    </div>

</div>



