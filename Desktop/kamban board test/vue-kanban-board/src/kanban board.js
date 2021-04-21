import draggable from "vuedraggable";
import Vue from 'vue'
import App from './App.vue'

import{ BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
components:{
  draggable
}
data(){
  return{
    newTask:"",
  arrBacklog:[
    {name: "Code Sign Up Page"},
    {name: "Test Dashboard"},
    {name: "Style Registration"},
    {name: "Help with Designs"}
  ] ,
  arrInProgress:[],
  arrTested:[],
  arrDone:[]
 };
}
methods:{
  add:fuunction(){
    if(this.newTask){
      this.arrBacklog.push({name: this.newTask});
      this.newTask = "";
    }
  }
}
<div class="row">
  <div class="col form-inline">
    <b-form-input
    v-model="newTask"
    placeholder="Enter Task"
    @keyup.enter="add"
    >
      </b-form-input>
      <b-button @click="add" variant="primary" class="ml-3">
        add
        </b-button>
  </div>
</div>

<div class="row mt-5">
  <div class="col-3">
    <div class="p-2 alert alert-secondary">
      <h3>Back Log</h3>
      <draggable
      class="list-group kanban-column"
      :list="arrBackLog"
      group="tasks"
      >
        <div class="list-group-item"
        v-for="element in arrBackLog"
        :key="element.name"
        >
          {{element.name}}

    </div>
    </draggable>
  </div>
</div>

<div class="col-3">
  <div class="p-2 alert alert-primary">
    <h3>In Progress</h3>
    <draggable
    class="list-group kanban-column"
    :list="arrInProgress"
    group="tasks"
    >
      <div
      class="list-group-item"
      v-for="element in arrInProgress"
      :key="element.name"
      >
        {{element.name}}

  </div>
  </draggable>
</div>
</div>
<div class="col-3">
    <div class="p-2 alert alert-warning">
      <h3>Testing</h3>
        <draggable
         class="list-group kanban-column"
         :list="arrTested"
         group="tasks"
         >
           <div
            class="list-group-item"
            v-for="element in arrTested"
            :key="element.name"
            >
              {{ element.name }}
            </div>
        </draggable>
    </div>
  </div>
  <div class="col-3">
    <div class="p-2 alert alert-success">
      <h3>Done</h3>
      <draggable
         class="list-group kanban-column"
         :list="arrDone"
         group="tasks"
        >
         <div
          class="list-group-item"
          v-for="element in arrDone"
          :key="element.name"
          >
          {{ element.name }}
        </div>
      </draggable>
    </div>
  </div>
  </div>

