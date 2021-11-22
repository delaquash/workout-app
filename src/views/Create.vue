<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    <!-- status message -->
    <div class="mb-10 p-4 bg-light-grey rounded-md">
      <p class="text-at-light-green">
        {{ statusMsg}}
      </p>
      <p class="text-red-500">
        {{ errorMsg }}
      </p>
    </div>

    <!-- create  -->
    <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg">
      <!-- form -->
      <form class="flex flex-col gap-y-5 w-full">
        <h1 class="text-2xl text-at-light-green">
          Record Workout
        </h1>
        <div class="flex flex-col">
          <label for="workout-name" class="mb-1 text-sm text-at-light-screen">
            Workout Name
          </label>
          <input
            type="text"
            class="p-2 text-gray-500 focus:outline-none"
            id="workout-name"
            v-model="workoutName"
            required
          >

          <!-- workout Type -->
          <div class="flex flex-col">
            <label for="workout-type" class="mb-1 text-sm text-at light-green">
              Workout Type
            </label>
            <select
              id="workout-type"
              class="p-2 text-gray-500 focus:outline-none"
              required
              v-model="workoutType"
            >
            <option value="select-workout">Select Workout</option>
            <option value="strength">Strength Training</option>
            <option value="cardio">Cardio</option>
            </select>
          </div>
        </div>

        <!-- Strength training inputs -->
        
      </form>
    </div>
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
