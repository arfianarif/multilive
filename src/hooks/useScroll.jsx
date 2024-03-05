import { create } from 'zustand'

const useScroll = create((set) => ({
  scroll: '',
  setScroll: (value) => set({ scroll: value }),
}))

export default useScroll
