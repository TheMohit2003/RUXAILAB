import api from '@/api/index'

export default {
  actions: {
    async createObject(_, payload) {
      try {
        var docRef = await api.database.createObject(payload)
        console.log("Document sucessfully created with ID: ", docRef)
        return docRef
      } catch (err) {
        console.error("Error", err)
      }
    },
    async getAllObjects(_, payload) {
      try {
        var snapshot
        snapshot = await api.database.getAllObjects(payload)
        var objects = []
        snapshot.forEach(doc => {
          objects.push(Object.assign({ id: doc.id }, doc.data()))
        })
        return objects
      } catch (err) {
        console.error("Error getting document: ", err)
      }
    },
    async deleteObject(_,payload){
      try {
        console.log(payload)
        await api.database.deleteObject(payload)
        console.log("Document successfully deleted!")
      } catch (err) {
        console.error("Error removing document: ", err)
      }
    },
    async getObject(_,payload){
      try {
        var doc = await api.database.getObject(payload)
        const object = Object.assign({id:doc.id}, doc.data()) 
        return object
      } catch (err) {
        console.error("Error getting document: ", err)
      }
    },
    async updateObject(_,payload){
      try {
        var docRef = await api.database.updateObject(payload)
        console.log("Document successfully updated: ", docRef)
        return docRef
      } catch (err) {
        console.error("Error",err)
      }
    },
    async pushObject(_,payload){
      try {
        var docRef = await api.database.pushArray(payload)
        console.log("Document successfully inserted: ", docRef)
        return docRef
      } catch (err) {
        console.error("Error",err)
      }
    },
    async removeObject(_,payload){
      try {
        var docRef = await api.database.removeArray(payload)
        console.log("Document successfully removed: ", docRef)
        return docRef
      } catch (err) {
        console.error("Error",err)
      }
    },
    async callFunction(_,payload){
      let response
      try {
        response = await api.functions.call(payload)
        console.log("Response",response)
      } catch (err) {
        console.error('Error calling the function:  ',err)
      }

    }
  }
}
