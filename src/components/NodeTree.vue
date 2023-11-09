<template>
  <li class="node-tree">
    <div>
      <p><span>id:</span> {{ node.id }}</p>
      <p><span>external_user_id:</span> {{ node.external_user_id }}</p>
      <p><span>project_Id:</span> {{ node.project_Id }}</p>
      <p><span>referrer_id</span> {{ node.referrer_id }}</p> 
      <div
          :class="{bold: isFolder}"
          @click="toggle"> 
        <p v-if="isFolder" class="bold-text">[{{ isOpen ? '-' : '+' }}]</p>
      </div>
    </div>

    <ul v-if="isFolder" v-show="isOpen">
      <node-multy v-for="child in node.children" :node="child" :key="child.id"></node-multy>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'node-multy',
    props: {
      node: Object
    },
    data: function() {
      return {
        isOpen: false
      };
    },
    computed: {
      isFolder: function() {
        return this.node.children && this.node.children?.length;
      }
    },
    methods: {
      toggle: function() {
        if (this.isFolder) {
          this.isOpen = !this.isOpen;
        }
      },
    }
  };
</script>

<style>
  li {
    list-style-type: none;
    padding: 8px;
    border-left: 1px solid lightgray;
    /* border-bottom: 1px solid lightgray; */
    margin: 8px 0;
    /* box-shadow: 1px 1px 1px lightgray; */
  }
  span{
    font-style: italic;
  }

  .bold-text{
    font-weight: bold;
  }
</style>