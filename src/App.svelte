<script lang="ts">
  import { getState } from "./state";
  const state = getState();

  // Increments the value of the count variable in the state.
  function add() {
    $state.count += 1;
  }
</script>

<div class="h-full w-full flex justify-center items-center">
  <button class="btn btn-primary" on:click={add}>
    <!-- Displays the current value stored in the state -->
    {$state.count}
  </button>
</div>
