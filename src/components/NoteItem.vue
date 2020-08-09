<template>
  <div class="note-item">
    <h3 class="note-item__title">{{ note_item.title }}</h3>
    <p class="note-item__text">{{ note_item.text }}</p>
    <button class="note-item__delete btn" @click="deleteNote">
      <i class="fas fa-times"></i>
    </button>
    <button
      class="note-item__check btn"
      :class="{ check: note_item.check }"
      @click="checkNote"
    >
      <i class="fas fa-check"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "NoteItem",
  props: {
    note_item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    deleteNote() {
      this.$emit("deleteNote");
    },
    checkNote() {
      this.$emit("checkNote");
    }
  }
};
</script>

<style>
.note-item {
  width: 300px;
  margin: 1rem;
  border: 1px solid #cccccc;
  border-radius: 1rem;
  min-height: 200px;
  position: relative;
}
.note-item__title {
  background-color: #2c3e50;
  color: #ffffff;
  margin: 0;
  padding: 0.5rem 0;
  border: 1px solid #000;
  border-radius: 1rem 1rem 0 0;
}
.note-item__text {
  padding: 1rem;
  margin: 0;
}
.note-item__delete {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 20px;
  height: 20px;
  background-color: #fff;
  color: #2c3e50;
}
.note-item__check {
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background-color: #2c3e50;
  color: #fff;
  outline: none;
}
.check {
  background-color: #42b983;
}
</style>
