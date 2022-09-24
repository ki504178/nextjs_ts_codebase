import { getPetById } from './api'

describe('zodios/api', () => {
  test('get', async () => {
    const ret = await getPetById(10)

    expect(ret).toStrictEqual({
      id: 10,
      category: { id: 1, name: 'Dogs' },
      name: 'doggie',
      photoUrls: ['string'],
      tags: [{ id: 0, name: 'string' }],
      status: 'available',
    })
  })
})
