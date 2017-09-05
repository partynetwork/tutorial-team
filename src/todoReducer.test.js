import todoReducer from './todoReducer';

describe('Test Todo Reducers', () => {

    test('Can be Add todo', () => {

        expect(todoReducer([], {type: 'ADD_TODO', name: 'Foo'})).toEqual([{name: 'Foo'}])

        expect(todoReducer([{name: 'Bar'}], {type: 'ADD_TODO', name: 'Foo'})).toEqual([{name: 'Bar'}, {name: 'Foo'}])

    });
    test('Can be Remove', () => {

        expect(todoReducer([{name: 'Bar'}], {type: 'REMOVE_TODO', index: 0})).toEqual([])

    })
});