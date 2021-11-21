<template>
  <div>
    <h1>Welcome Emmanuel</h1>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "create",
  setup() {
    // Create data
      const workoutName = ref("");
      const workoutType = ref('select-workout');
      const exercises = ref([]);
      const statusMsg = ref(null);
      const errorMsg = ref(null);
    // Add exercise

    // Delete exercise

    // Listens for chaging of workout type input

    // Create workout

    return { workoutName, workoutType, errorMsg, exercises, statusMsg };
  },
};
</script>
