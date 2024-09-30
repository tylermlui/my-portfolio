<script>
    import { goto } from '$app/navigation';

    function goToBase(){
        goto('/')
    }
</script>
<div 
    class={`flex items-center justify-center min-h-screen transition-all duration-300 ease-in-out bg-cover bg-center`} 
    style="background-image: url('https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1500')">

    <div class="box-border h-auto w-auto p-5 backdrop-blur-sm bg-white/30 rounded gap-2">

        <h1 class="text-white text-3xl font-bold pb-3 ">Resume</h1> 
                <!-- svelte-ignore a11y-missing-attribute -->
                <object class="pdf rounded " 
                data=
                "static/Tyler_s_Resume-3.pdf"
                        width="350"
                        height="450">
                </object>
                
                <div class="flex justify-center items-center mt-5">
                    <button class="px-5 py-2 bg-blue-500 text-white rounded" on:click={goToBase}>Close</button>
                </div>

    </div>
</div>

