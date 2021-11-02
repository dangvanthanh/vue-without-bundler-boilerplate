import { useMessage } from '../useStore'

export default {
  name: 'Home',
  setup() {
    const { message, reverseMesasge } = useMessage()

    return {
      message,
      reverseMesasge,
    }
  },
  template: `
    <h1>{{ message}}</h1>
    <button @click="reverseMesasge()">Reverse</button>
  `,
}
