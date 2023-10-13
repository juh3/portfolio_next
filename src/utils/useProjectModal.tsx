import { create } from 'zustand'

interface CardInterface {
  title: string
  shortDescription: string
  link: string
  image: string
  subtitle_1: string
  subtitle_2: string
  subtitle_3: string
  figma?: string
  github?: string
}

interface ProjectModalStore {
  isOpen: boolean
  onOpen: (project: CardInterface) => void
  onClose: () => void
  selectedProject: CardInterface | null
}

const useProjectModal = create<ProjectModalStore>((set) => ({
  isOpen: false,
  selectedProject: null,
  onOpen: (project) => set({ isOpen: true, selectedProject: project }),
  onClose: () => set({ isOpen: false, selectedProject: null })
}))

export default useProjectModal
