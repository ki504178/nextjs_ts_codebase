import { api } from './petstore'

export const getPetById = async (petId: number) => await api.getPetById({ params: { petId: petId } })
