import { getPetById } from './api'

describe('zodios/api', () => {
  test('get', async () => {
    const ret = await getPetById(11)

    expect(ret).toStrictEqual({
      id: 11,
      name: 'Toby',
      category: { id: 1, name: 'Dogs' },
      photoUrls: ['https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png'],
      tags: [{ id: 1, name: 'litlle' }],
      status: 'available',
    })
  })
})
