<template>
  <form class="add-form" @submit.prevent="addNote">
    <input
      class="add-form__title"
      placeholder="Заголовок"
      v-model="title"
    />
    <hr />
    <textarea
      class="add-form__text"
      placeholder="Текст..."
      v-model="text"
    ></textarea>
    <button class="add-form__add" type="submit">Добавить</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddForm",
  data() {
    return {
      title: "",
      text: ""
    };
  },
  methods: {
    ...mapActions(["ADD_NOTE"]),
    addNote() {
      const newNote = {
        title: this.title,
        text: this.text,
        id: Date.now(),
        check: false
      };

      if (newNote.title && newNote.text) {
        this.ADD_NOTE(newNote);
      } else {
        console.log(newNote);
      }

      this.title = this.text = "";
    }
  }
};
</script>

<style>
.add-form {
  width: 300px;
  margin: 1rem auto;
  border: 1px solid #cccccc;
  border-radius: 1rem;
  min-height: 200px;
  padding: 1rem 1rem 0.5rem;
}
.add-form__title {
  height: 34px;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  border: 1px solid #000;
}
.add-form__text {
  height: 100px;
  width: 100%;
  resize: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #000;
  font-size: 1rem;
  outline: none;
}
.add-form__add {
  width: 100%;
  height: 32px;
  margin: 0.5rem 0;
  border: none;
  border-radius: 0.25rem;
  background-color: royalblue;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
}
</style>
