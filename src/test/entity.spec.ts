import { Entity } from "../app/Entity"

class EntityImplementationStub extends Entity { }

describe('Entity', () => {
    it('Should return id on call getter', () => {
        const sut = new EntityImplementationStub({ name: 'daniel' })
        expect(sut._id).toBeDefined()
    })
})