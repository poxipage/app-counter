<script lang="ts">
  import { getState } from "./state";
  const state = getState();

  function add() {
    $state.count += 1;
  }
</script>

<div class="h-full w-full flex justify-center items-center">
  <button class="btn btn-primary" on:click={add}>
    {$state.count}
  </button>
</div>
