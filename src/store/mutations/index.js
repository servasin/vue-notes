export default {
  SET_NOTES_TO_STATE: (state, notes) => {
    state.notes = notes;
  },
  REMOVE_NOTE: (state, index) => {
    state.notes.splice(index, 1);
  },
  NOTE_DONE: (state, index) => {
    for (let i = 0; i < state.notes.length; i++) {
      if (i === index) {
        return (state.notes[i].check = !state.notes[i].check);
      }
    }
  },
  NEW_NOTE: (stete, newNote) => {
    stete.notes.unshift(newNote);
  }
}