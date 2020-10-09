import Vue from 'vue'
import Vuex from 'vuex'
import {getVehicles} from "../assets/api/request.js"

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      vechicals : [],
      prevVechicals : [],
      currentVechical : {},
      filters : [],
      id : 0,
      error : false,
      editMode : false
    },

    actions : {
        async fetchVechicals(context){
            const vechicals =  getVehicles()
            .then(res => {context.commit("updateVechicals",res)})
            .catch(err => context.commit("setError",true))
            
        },

        async fetchOneVechical(context , id){
         await context.commit("setCurrentVechical",id)
      },

      chooseFilter(context,type){
          context.commit("setFilter",type)
      },

      async getAllFilters(context){
        const vechForFIlters  = await getVehicles();
        context.commit("getFilters",vechForFIlters)
      },

       getAllFiltersSync(context){
        context.commit("getFiltersSync")
      },

      setEditMode(context){
        context.commit("setEditMode")
      },

      addNewVechical(context,data){
        context.commit("addNewVechical",data)
      }

    },

    mutations: {
      updateVechicals(state,vechicals){
          state.vechicals = [...vechicals]
          state.prevVechicals = [...vechicals]
      },

      setCurrentVechical(state,id){
          state.currentVechical = state.vechicals.filter(elem => elem.id === id)[0];
          state.currentVechical.rent = state.currentVechical.rent.toString();
      },

      setError(state,status){
        state.error = status;
      },

      setFilter(state,filter){
        if (filter == ""){
          return state.vechicals = state.prevVechicals
        }
        state.vechicals = state.prevVechicals.filter(elem => elem.type === filter)

      },

      getFilters(state,vechForFIlters){
        const filters = [];
        vechForFIlters.forEach(vech => {
          if (filters.find(elem => elem === vech.type)){
            // nothing
          } else {
          filters.push(vech.type);
          }
        })

        state.filters = filters;
      },

      getFiltersSync(state){
        const filters = [];
        state.prevVechicals.forEach(vech => {
          if (filters.find(elem => elem === vech.type)){
            // nothing
          } else {
          filters.push(vech.type);
          }
        })
        state.filters = filters;
      },

      setEditMode(state){
        state.editMode = !state.editMode;
      },

      addNewVechical(state,data){
        state.prevVechicals.push(data);
      }

    },
    
    getters: {
        getAllVechicals(state){
            return state.vechicals
        },
        getOneVechical(state){
          return state.currentVechical
        },
        getErrorState(state){
          return state.error
        },
        getAllFilter(state){
          return state.filters
        },
        getEditMode(state){
          return state.editMode
        }
    }
  })

export default store