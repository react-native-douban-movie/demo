import { observable, action, computed } from 'mobx';
class DashboardStore {
  @observable isLoading = 'false'
}
let dashboardStore = new DashboardStore();
export default dashboardStore;