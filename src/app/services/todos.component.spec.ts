import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, from } from 'rxjs';

describe('TodosComponent', () => {
    let component: TodosComponent;
    let service: TodoService;

    beforeEach(() => {
        service = new TodoService(null);
        component = new TodosComponent(service);
    });

    it('should set todos property with the items returned from the server', () => {
        const todos = [1, 2, 3];

        // Arrange
        spyOn(service, 'getTodos').and.callFake(() => {
            return from([todos]);
        });

        // Act
        component.ngOnInit();

        // Assert
        expect(component.todos).toBe(todos);
    });
});