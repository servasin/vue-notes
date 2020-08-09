<template>
  <div class="Home">
    <h1>Заметки</h1>
    <NotesList />
    <router-link to="/add">
      <button class="new-btn btn">
        <i class="fas fa-plus"></i>
      </button>
    </router-link>
  </div>
</template>

<script>
import NotesList from "@/components/NotesList";

export default {
  name: "Home",
  components: {
    NotesList
  }
};
</script>

<style>
.new-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  background-color: royalblue;
  color: #fff;
}
</style>
