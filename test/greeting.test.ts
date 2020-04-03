import { getGreeting, isTrue } from '../src/lib/greeting'

test('Get greeting: Howdy Stranger!, without name', () => {
    expect(
        getGreeting(undefined)
    ).toBe('Howdy stranger!')
})

test('Is true: true, true', () => {
    expect(
        isTrue(true)
    ).toBeTruthy()
})