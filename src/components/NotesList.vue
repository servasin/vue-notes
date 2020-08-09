<template>
  <div class="notes-list">
    <NoteItem
      v-for="(note, index) in NOTES"
      :key="note.id"
      :note_item="note"
      @deleteNote="deleteNote(index)"
      @checkNote="checkNote(index)"
    />
  </div>
</template>

<script>
import NoteItem from "@/components/NoteItem";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NotesList",
  components: {
    NoteItem
  },
  computed: {
    ...mapGetters(["NOTES"])
  },
  methods: {
    ...mapActions([
      "GET_NOTES_FROM_API",
      "DELETE_NOTE",
      "CHECK_NOTE"
    ]),
    deleteNote(index) {
      this.DELETE_NOTE(index);
    },
    checkNote(index) {
      this.CHECK_NOTE(index);
    }
  },
  mounted() {
    this.GET_NOTES_FROM_API();
  }
}
</script>

<style>
.notes-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
}
</style>