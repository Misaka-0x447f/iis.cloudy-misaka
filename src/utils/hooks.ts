import { onBeforeMount, onBeforeUnmount, onBeforeUpdate } from '@vue/composition-api'
import { nop } from './lang'

export const useEffect = (cb: () => (() => void | undefined)) => {
  let cleanMethod = nop
  onBeforeMount(() => {
    cleanMethod = cb()
  })
  onBeforeUpdate(() => {
    cleanMethod?.()
    cleanMethod = cb()
  })
  onBeforeUnmount(() => {
    cleanMethod?.()
  })
}

export const useBeforeMount = (cb: () => (() => void | undefined)) => {
  let cleanMethod = nop
  onBeforeMount(() => {
    cleanMethod = cb()
  })
  onBeforeUnmount(() => {
    cleanMethod?.()
  })
}
