import { state, type State } from "poxi";
type Schema = { count: number };
export const getState = () => state<Schema>();

//Initialize the counter variable with value 0
export function onCreate(state: State<Schema>) {
  state.set({ count: 0 });
}
