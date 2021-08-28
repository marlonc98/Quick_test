import HostService from './HostService';

class PageService extends HostService {
    constructor() {
        super();
        this.hostUrl = "";
    }

    getWinners(){
        return this.get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json");
    }
}

const instance = new PageService();
export default instance;