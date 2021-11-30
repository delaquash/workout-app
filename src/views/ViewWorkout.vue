<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!-- App Msg -->
    <div v-if="statusMsg || errorMsg" class="mb-10 p-4 rounded-md shadow-md bg-light-grey">
      <p class="text-at-light-green">
        {{ statusMsg }}
      </p>
      <p class="text-red-500">
        {{ errorMsg }}
      </p>
    </div>

    <!-- general workout info -->
    <div v-if="dataLoaded">
      <div class="flex flex-col items-center p-8 rounded-md shadow-md bg-light-grey relative">
        <div v-if="user" class="flex absolute left-2 top-2 gap-x-2">
            <div
              class="h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-light-green shadow-lg"
              @click="editMode"
            >
              <img src="@/assets/images/pencil-light.png"
                alt=""
                class="h-3.5 w-auto" />
            </div>
            <div
              class="h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-light-green shadow-lg"
            >
              <img src="@/assets/images/trash-light.png"
                alt=""
                class="h-3.5 w-auto" />
            </div>
        </div>
        <img
          v-if="data.workoutType === 'cardio'"
          src="@/assets/images/running-light-green.png"
          alt=""
          class="w-auto h-24"
        />
        <img
          v-else
          src="@/assets/images/dumbbell-light-green.png"
          alt=""
          class="w-auto h-24"
        >

          <span class="mt-6 py-1 5 text-xs text-white bg-at-light-green rounded-lg shadow-md">
            {{ data.workoutType }}
          </span>

          <div class="w-4 mt-6">
            <input
              v-if="edit"
              class="p-2
              w-full
              text-gray-500
              focus:outline-none"
              v-model="data.workoutName"
            />
              <h1 v-else class="text-at-light-green text-2xl text-center">
                {{ data.workoutName}}
              </h1>
          </div>
      </div>

      <!-- Exercise -->
      <div class="mt-10 p-8 rounded-md flex flex-col items-center gb-light-grey shadow-md">
        <!-- Strength Training -->
        <div v-if="data.workoutType === 'strength'" class="flex flex-col gap-y-4 w-full">
          <div
            class="flex flex-col gap-x-6 gap-y-6 relative sm:flex-row"
            v-for="(item, index) in data.exercises"
            :key="index"
            >
            <!-- Exercise -->
              <div class="flex flex-2 flex-col md:w-1/3">
                <label for="exercise-name" class="mb-1 text-sm text-at-light-green">
                  Exercise
                </label>
                <input
                  v-if="edit"
                  id="exercise-name"
                  type="text"
                  v-model="item.exercise"
                  class="p-2 w-full text-gray-500 focus:outline-none" />
                  <p v-else>{{ item.exercise }}</p>
              </div>
            <!-- sets -->
              <div class="flex flex-1 flex-col">
                <label for="sets" class="mb-1 text-sm text-at-light-green">
                  Set
                </label>
                <input
                  id="sets"
                  v-if="edit"
                  type="text"
                  v-model="item.sets"
                  class="p-2 w-full text-gray-500 focus:outline-none"
                />
                  <p v-else>{{ item.sets }}</p>
              </div>
            <!-- Reps -->
              <div class="flex flex-1 flex-col">
                <label for="reps" class="mb-1 text-sm text-at-light-green">
                  Reps
                </label>
                <input
                  id="reps"
                  v-if="edit"
                  type="text"
                  v-model="item.reps"
                  class="p-2 w-full text-gray-500 focus:outline-none"
                />
                  <p v-else>{{ item.reps }}</p>
              </div>
            <!-- Weight -->
              <div class="flex flex-1 flex-col">
                <label for="weights" class="mb-1 text-sm text-at-light-green">
                  Weight (LB's)
                </label>
                <input
                  id="weights"
                  v-if="edit"
                  type="text"
                  v-model="item.weights"
                  class="p-2 w-full text-gray-500 focus:outline-none"
                />
                  <p v-else>{{ item.weights }}</p>
              </div>
              <img
                src="@/assets/images/trash-light-green.png"
                alt="" class="absolute h-4 w-auto -left-5 cursor-pointer">
          </div>
          <button
            v-if="edit"
            type="button"
            class="mt-6 py-2 px-6 rounded-sm self-start text-sm
                  text-white bg-at-light-green duration-200 border-solid
                  border-2 border-transparent hover:border-at-light-green
                  hover:bg-white hover:text-at-light-green"
          >
            Add Exercise
          </button>
        </div>

        <!-- Cardio Training -->
         <div v-else class="flex flex-col gap-y-4 w-full">
          <div
            class="flex flex-col gap-x-6 gap-y-6 relative sm:flex-row"
            v-for="(item, index) in data.exercises"
            :key="index"
            >
            <!-- Type -->
              <div class="flex flex-2 flex-col md:w-1/3">
                <label for="cardioType" class="mb-1 text-sm text-at-light-green">
                  Type
                </label>
                <select
                  v-if="edit"
                  id="cardioType"
                  type="text"
                  v-model="item.cardioType"
                  class="p-2 w-full text-gray-500 focus:outline-none">
                    <option value="#">Select Type</option>
                    <option value="run">Runs</option>
                    <option value="walk">Walk</option>
                </select>
                  <p v-else>{{ cardioType }}</p>
              </div>
            <!-- Distance -->
              <div class="flex flex-1 flex-col">
                <label for="distance" class="mb-1 text-sm text-at-light-green">
                  Distance
                </label>
                <input
                  id="distance"
                  v-if="edit"
                  type="text"
                  v-model="item.distance"
                  class="p-2 w-full text-gray-500 focus:outline-none"
                />
                  <p v-else>{{ item.distance }}</p>
              </div>
            <!-- Reps -->
              <div class="flex flex-1 flex-col">
                <label for="duration" class="mb-1 text-sm text-at-light-green">
                  Duration
                </label>
                <input
                  id="duration"
                  v-if="edit"
                  type="text"
                  v-model="item.duration"
                  class="p-2 w-full text-gray-500 focus:outline-none"
                />
                  <p v-else>{{ item.duration }}</p>
              </div>
            <!-- Pace-->
              <div class="flex flex-1 flex-col">
                <label for="pace" class="mb-1 text-sm text-at-light-green">
                  Pace
                </label>
                <input
                  id="pace"
                  v-if="edit"
                  type="text"
                  v-model="item.pace"
                  class="p-2 w-full text-gray-500 focus:outline-none"
                />
                  <p v-else>{{ item.pace }}</p>
              </div>
              <img
                src="@/assets/images/trash-light-green.png"
                alt="" class="absolute h-4 w-auto -left-5 cursor-pointer">
          </div>
          <button
            type="button"
            class="mt-6 py-2 px-6 rounded-sm self-start text-sm
                  text-white bg-at-light-green duration-200 border-solid
                  border-2 border-transparent hover:border-at-light-green
                  hover:bg-white hover:text-at-light-green"
          >
            Add Exercise
          </button>
        </div>
      </div>
      <!-- Update  -->
      <button
            v-if="edit"
            type="submit"
            class="mt-10 py-2 px-6 rounded-sm self-start text-sm
                  text-white bg-at-light-green duration-200 border-solid
                  border-2 border-transparent hover:border-at-light-green
                  hover:bg-white hover:text-at-light-green"
          >
            Update Workout
          </button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { supabase } from '../supabase/init';
import { useRoute } from 'vue-router';
import store from '../store/index';

export default {
  name: "view-workout",
  setup() {
    // Create data / vars
    const data = ref(null);
    const dataLoaded = ref(null);
    const errorMsg = ref(null);
    const statusMsg = ref(null);
    const route = useRoute();
    const user = computed(() => store.state.user)

    // Get current Id of route
    const currentId = route.params.workoutId

    const getData = async () => {
      try {
        const { data: workout, error } = await supabase.from('workout')
          .select('*')
          .eq("id", currentId);
          if(error) throw error;
          data.value = workout[0];
          dataLoaded.value = true;
      } catch (error) {
        errorMsg.value = error.message;
        setTimeout(() => {
          errorMsg.value = false
        }, 5000);
      }
    }

    getData();
    // Get workout data

    // Delete workout

    // Edit mode
    const edit = ref(null);

    const editMode = () => {
      edit.value = !edit.value;
    }

    // Add exercise

    // Delete exercise

    // Update Workout

    return { statusMsg, data, dataLoaded, errorMsg, user, edit, editMode };
  },
};
</script>
