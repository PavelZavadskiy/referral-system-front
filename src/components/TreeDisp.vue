<script>
  import NodeTree from './NodeTree.vue';

  export default {
    props: {
      treeData: Object
    },
    components: {
      NodeTree
    }
  };
</script>

<template>
  <div class="tree">
    <ul class="tree-list">
      <node-tree :node="treeData"></node-tree>
    </ul>
  </div>
</template>

<style>
  .tree-list ul {
    
    padding-left: 32px;
    
  }



  .tree{
    margin: 8px 0; 
  }
</style>