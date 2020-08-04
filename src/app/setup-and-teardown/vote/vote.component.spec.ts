import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  // Arrange
  let component: VoteComponent;

  beforeEach(() => {
    // Set up
    component = new VoteComponent();
  });

  it('ahould increment totalVotes when upvoted', () => {

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);

  });

  it('should decrement totalVotes wjen downvoted', () => {

    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1);

  });
});
