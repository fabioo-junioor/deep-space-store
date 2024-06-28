import { verifyCpf } from "../handlers.js";

describe('verifyCpf', () => {
  it('verifyCpf', () => {
    expect(verifyCpf('00000000000'))
  })
})


/*
describe('verifyCpf', () => {
    test('asa', () => {
        expect(verifyCpf('00000000000')).toBe(false)
    })
})
*/