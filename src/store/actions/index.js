import axios from "axios";

export default {
  async GET_NOTES_FROM_API({ commit }) {
    try {
      const notes = await axios("http://localhost:3000/notes", {
        method: "GET"
      });
      commit("SET_NOTES_TO_STATE", notes.data);
      return notes;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  DELETE_NOTE({ commit }, id) {
    commit("REMOVE_NOTE", id);
  },
  CHECK_NOTE({ commit }, id) {
    commit("NOTE_DONE", id);
  },
  ADD_NOTE({ commit }, newNote) {
    commit("NEW_NOTE", newNote);
  }
}