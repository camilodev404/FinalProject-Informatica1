import axios from 'axios'

const VEHICULO_API_URL = "http://localhost:4000/vehiculo"

class VehiculoService{

    getVehiculos(){
        return axios.get(VEHICULO_API_URL+"s", {mode: 'no-cors'})
    }

    createVehiculo(vehiculo){
        return axios.post(VEHICULO_API_URL, vehiculo)
    }

    getVehiculoById(vehiculoId){
        return axios.get(VEHICULO_API_URL+"/"+vehiculoId)
    }

    updateVehiculo(vehiculoId, vehiculo){
        return axios.put(VEHICULO_API_URL+"/"+vehiculoId, vehiculo)
    }

    deletVehiculo(vehiculoId){
        return axios.delete(VEHICULO_API_URL+"/"+vehiculoId)
    }

    getFabricantes(){
        return axios.get(VEHICULO_API_URL+"/fabricantes", {mode: 'no-cors'})
    }

}

const vehiculoServiceInstance = new VehiculoService()
export default vehiculoServiceInstance