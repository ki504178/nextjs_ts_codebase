import { api } from './petstore'

export const getPetById = async (petId: number) => {
  const ret = await api.getPetById({ params: { petId: petId } }).catch((e) => console.log(e))
  return ret
}
