<template>
  <div class="add-note">
    <h1>Добавить новую</h1>
    <keep-alive>
    <AddForm />
    </keep-alive>
    <router-link :to="'/'">
      <button class="back-btn btn">
        <i class="fas fa-angle-left"></i>
      </button>
    </router-link>
  </div>
</template>

<script>
import AddForm from "@/components/AddForm";

export default {
  name: "AddNote",
  components: {
    AddForm
  }
};
</script>

<style>
.back-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  background-color: #212529;
  color: #fff;
}
</style>
