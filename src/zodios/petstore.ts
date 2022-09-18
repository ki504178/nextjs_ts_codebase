import { asApi, Zodios } from '@zodios/core'
import { z } from 'zod'

const vR1x0k5qaLk = z.object({ id: z.number(), name: z.string() }).partial()
const v8JbFEq2fUl = z.object({
  id: z.number().optional(),
  name: z.string(),
  category: vR1x0k5qaLk.optional(),
  photoUrls: z.array(z.string()),
  tags: z.array(vR1x0k5qaLk).optional(),
  status: z.enum(['available', 'pending', 'sold']).optional(),
})
const vlh4E1pXYTG = z.enum(['available', 'pending', 'sold']).optional()
const vh4fxCvnN1b = z.array(v8JbFEq2fUl)
const vGqL1kemtHF = z.array(z.string()).optional()
const vBaxCoPHbgy = z.object({ code: z.number(), type: z.string(), message: z.string() }).partial()
const vLBYC40hXo1 = z
  .object({
    id: z.number(),
    petId: z.number(),
    quantity: z.number(),
    shipDate: z.string(),
    status: z.enum(['placed', 'approved', 'delivered']),
    complete: z.boolean(),
  })
  .partial()
const veNKKR5W6KW = z
  .object({
    id: z.number(),
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string(),
    userStatus: z.number(),
  })
  .partial()
const vVrSPZVa6q7 = z.array(veNKKR5W6KW)

const variables = {
  ApiResponse: vBaxCoPHbgy,
  Order: vLBYC40hXo1,
  Pet: v8JbFEq2fUl,
  User: veNKKR5W6KW,
  addPet: v8JbFEq2fUl,
  addPet_Body: v8JbFEq2fUl,
  createUser: veNKKR5W6KW,
  createUser_Body: veNKKR5W6KW,
  createUsersWithListInput: veNKKR5W6KW,
  createUsersWithListInput_Body: vVrSPZVa6q7,
  findPetsByStatus: vh4fxCvnN1b,
  findPetsByTags: vh4fxCvnN1b,
  getOrderById: vLBYC40hXo1,
  getPetById: v8JbFEq2fUl,
  getUserByName: veNKKR5W6KW,
  placeOrder: vLBYC40hXo1,
  placeOrder_Body: vLBYC40hXo1,
  status: vlh4E1pXYTG,
  tags: vGqL1kemtHF,
  updatePet: v8JbFEq2fUl,
  updatePet_Body: v8JbFEq2fUl,
  updateUser_Body: veNKKR5W6KW,
  uploadFile: vBaxCoPHbgy,
}

const endpoints = asApi([
  {
    method: 'put',
    path: '/pet',
    alias: 'updatePet',
    description: `Update an existing pet by Id`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Update an existent pet in the store`,
        type: 'Body',
        schema: variables['updatePet_Body'],
      },
    ],
    response: variables['Pet'],
  },
  {
    method: 'post',
    path: '/pet',
    alias: 'addPet',
    description: `Add a new pet to the store`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Create a new pet in the store`,
        type: 'Body',
        schema: variables['addPet_Body'],
      },
    ],
    response: variables['Pet'],
  },
  {
    method: 'get',
    path: '/pet/:petId',
    alias: 'getPetById',
    description: `Returns a single pet`,
    requestFormat: 'json',
    response: variables['Pet'],
  },
  {
    method: 'post',
    path: '/pet/:petId/uploadImage',
    alias: 'uploadFile',
    requestFormat: 'json',
    parameters: [
      {
        name: 'additionalMetadata',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: variables['ApiResponse'],
  },
  {
    method: 'get',
    path: '/pet/findByStatus',
    alias: 'findPetsByStatus',
    description: `Multiple status values can be provided with comma separated strings`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'status',
        type: 'Query',
        schema: variables['status'],
      },
    ],
    response: z.array(variables['getPetById']),
  },
  {
    method: 'get',
    path: '/pet/findByTags',
    alias: 'findPetsByTags',
    description: `Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'tags',
        type: 'Query',
        schema: variables['tags'],
      },
    ],
    response: z.array(variables['getPetById']),
  },
  {
    method: 'get',
    path: '/store/inventory',
    alias: 'getInventory',
    description: `Returns a map of status codes to quantities`,
    requestFormat: 'json',
    response: z.record(z.number()),
  },
  {
    method: 'post',
    path: '/store/order',
    alias: 'placeOrder',
    description: `Place a new order in the store`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: variables['placeOrder_Body'],
      },
    ],
    response: variables['Order'],
  },
  {
    method: 'get',
    path: '/store/order/:orderId',
    alias: 'getOrderById',
    description: `For valid response try integer IDs with value &lt;&#x3D; 5 or &gt; 10. Other values will generate exceptions.`,
    requestFormat: 'json',
    response: variables['Order'],
  },
  {
    method: 'post',
    path: '/user',
    alias: 'createUser',
    description: `This can only be done by the logged in user.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Created user object`,
        type: 'Body',
        schema: variables['createUser_Body'],
      },
    ],
    response: variables['User'],
  },
  {
    method: 'get',
    path: '/user/:username',
    alias: 'getUserByName',
    requestFormat: 'json',
    response: variables['User'],
  },
  {
    method: 'post',
    path: '/user/createWithList',
    alias: 'createUsersWithListInput',
    description: `Creates list of users with given input array`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: variables['createUsersWithListInput_Body'],
      },
    ],
    response: variables['User'],
  },
  {
    method: 'get',
    path: '/user/login',
    alias: 'loginUser',
    requestFormat: 'json',
    parameters: [
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'password',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.string(),
  },
])

export const api = new Zodios('https://petstore3.swagger.io/api/v3', endpoints)
