<template>
  <div class="container">
    <h1>{{header ? header : "I love Vue"}}</h1>
    <!-- <div>{{responseData}}</div> -->
    <div class="mb-3">
      <button class="btn btn-sm btn-danger" v-if="editing" @click="doEdit(false)">Cancel</button>
      <button class="btn btn-sm btn-primary" v-else @click="doEdit(true)">Add Item</button>
    </div>
    <div v-if="editing">
      <div class="input-group mb-3">
        <input @keyup.enter="saveItem" type="text" class="form-control" v-model="newItem" placeholder="Add an Item"> 
        <span class="input-group-text">{{characterCount}}/20</span>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" v-model="newItemHighPriority">
        <label class="form-check-label" for="flexCheckDefault"> High Priority</label>
      </div>
      <div class="mt-3">
        <button type="button" class="btn btn-sm btn-primary"
          v-bind:disabled="newItem.length < 5" 
          @click="saveItem">Save Item
        </button>
      </div>
    </div>
    <p v-if="responseData.length === 0">Nice job! you're done</p>
    <div class="mt-3">
      <h3>Items added</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"
          v-for="item in responseData"
          :key="item.id"
          :class="[
            item.purchased ? 'text-decoration-line-through text-muted' : 'text-decoration-underline',
            item.highPriority ? 'text-danger' : '',
            ]"
          @click="togglePurchased(item, item.id)"
        >{{item.id}} - {{item.label}}
          <button class="btn btn-sm btn-danger"
            @click="removeItem(item.id)"
          >Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      header: 'Shopping list',
      responseData: {},
      newItem: '',
      newItemHighPriority: false,
      editing: false
    }
  },
  methods: {
    async fetchApi() {
      await axios.get('http://localhost:3000/items')
      .then((response) => {
        this.responseData = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    },
    async saveItem() {
      const newItem = {
          id: this.responseData.length + 1, 
          label: this.newItem,
          purchased: false,
          highPriority: this.newItemHighPriority
      }
      await axios.post('http://localhost:3000/items', newItem)
        .then((response) => {
          this.id = response.data.id
        })
        .catch((error) => {
          console.log(error)
        })
      this.newItem = ''
      this.newItemHighPriority = false
      this.fetchApi()
    },
    doEdit(editing) {
      this.editing = editing
      this.newItem = '',
      this.newItemHighPriority = false
    },
    async togglePurchased(item, index) {
      const updateItem = {
          id: index,
          label: item.label,
          purchased: !item.purchased,
          highPriority: item.highPriority
      }
      await axios.put('http://localhost:3000/items/'+index, updateItem)
      .then((response) => {
        this.id = response.data.id
      })
      .catch((error) => {
        console.log(error)
      })
      item.purchased = !item.purchased
    },
    async removeItem(index) {
      // console.log(index)
      await axios.delete('http://localhost:3000/items/'+index)
      .then((response) => {
        this.id = response.data.id
      })
      .catch((error) => {
        console.log(error)
      })
      this.fetchApi()
    }
  },
  computed: {
    characterCount() {
      return this.newItem.length
    },
  },
  mounted() {
    this.fetchApi()
  }
}
</script>

<style>
li {
  cursor: pointer;
}
</style>
