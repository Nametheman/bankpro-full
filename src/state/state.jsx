import { proxy } from "valtio";

const state = proxy({ mobileNavOpened: false });

export default state;
