<template>
  <div>
    <button @click="aa">aaaaaa</button>
    <div id="contextmenu">
      <div data-status="node-selected" class="menu">
        <button data-command="delete" class="command">删除</button>
        <button data-command="append" class="command">添加同级节点</button>
        <button data-command="appendChild" class="command">添加子级节点</button>
        <button data-command="collapseExpand" class="command">展开/收起</button>
      </div>
      <div data-status="canvas-selected" class="menu">
        <button data-command="undo" class="command">插销</button>
        <button data-command="redo" class="command disable">重做</button>
      </div>
    </div>
    <div id="mountNode"></div>
    <div id="minimap"></div>
  </div>
</template>

<script>
import G6Editor from '@antv/g6-editor'

import data from '../assets/data.json'

export default {
  mounted () {
    const height = window.innerHeight - 38;
    const editor = new G6Editor();
    const mind = new G6Editor.Mind({
      defaultData: data,
      graph: {
        container: 'mountNode',
        height
      }
    });
    const contextmenu = new G6Editor.Contextmenu({
      container: 'contextmenu',
    });


    editor.add(mind);
    editor.add(contextmenu);
    this.mind = mind



    this.editor = editor
  },

  methods: {
    aa () {
      console.log(this.mind.get('defaultData'))
    }
  }
}
</script>


<style lang="scss" scoped>
ul {
  overflow: hidden;
}
li {
  float: left;
  list-style: none;
  margin-left: 20px;
  border-radius: 10px;
  background-color: #ccc;
}

#contextmenu{
  margin: 0px;
  width: 100px;
  background: white;
  box-shadow: 0px 1px 4px rgba(0,0,0,0.25);
  color: #000;
  font-size: 12px;
  display: none;
}

#contextmenu .disable {
  color: rgba(0,0,0,0.25);
}

#contextmenu .command {
  width: 100%;
  border: 0;
  outline: none;
  padding: 4px 0;
}

#contextmenu .command:hover{
  cursor: pointer;
  background: #E6F7FF;
}

#contextmenu .command.disable:hover{
  cursor: default;
  background: none;
}

</style>
