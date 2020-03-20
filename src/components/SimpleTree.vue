<template>
  <ul class="simple-tree-wrapper" v-if="node.length>0">
    <li v-for="treeNode in node" :key="treeNode.id">
      <p class="simple-tree-title">{{treeNode.name}}</p>
      <tree :node="treeNode.children"></tree>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'Tree',
  props: {
    node: {
      default() {
        return [];
      },
    },
  },
}
</script>
