<script lang="ts">
  import { getState } from "./state";
  const state = getState();
</script>

<div>
  <button
    on:click={() => {
      $state.count += 1;
    }}
  >
    {$state.count}
  </button>
</div>

<style>
  /*Use normal css if you don't want to use Tailwindcss and/or DaisyUI */
  div {
    @apply h-full w-full flex justify-center items-center; /*Center the elements within the div using Tailwindcss https://tailwindcss.com */
  }
  button {
    @apply btn btn-primary; /* From DaisyUI https://daisyui.com */
  }
</style>
