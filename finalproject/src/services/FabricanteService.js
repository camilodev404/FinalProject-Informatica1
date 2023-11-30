import axios from 'axios';

const FABRICANTE_API_URL = "http://localhost:4001/fabricante";

class FabricanteService {

    getFabricantes() {
        return axios.get(FABRICANTE_API_URL + "s");
    }

    createFabricante(fabricante) {
        return axios.post(FABRICANTE_API_URL, fabricante);
    }

    getFabricanteById(fabricanteId) {
        return axios.get(FABRICANTE_API_URL + "/" + fabricanteId);
    }

    updateFabricante(fabricanteId, fabricante) {
        return axios.put(FABRICANTE_API_URL + "/" + fabricanteId, fabricante);
    }

    deleteFabricante(fabricanteId) {
        return axios.delete(FABRICANTE_API_URL + "/" + fabricanteId);
    }

}

const fabricanteServiceInstance = new FabricanteService();

export default fabricanteServiceInstance;