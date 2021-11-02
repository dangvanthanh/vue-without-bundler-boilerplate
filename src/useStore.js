import { computed } from 'vue'
import { useStore } from 'vuex'

export function useMessage(props = {}) {
  const store = useStore()

  const message = computed(() => store.getters.message)
  const reverseMessage = () => store.dispatch('reverseMessage', props.message)

  return {
    ...props,
    message,
    reverseMessage,
  }
}
