import ticketListReducer from "../../reducers/ticket-list-reducer";

describe("ticketListReducer", () => {
  let action;

  const currentState = {
    1: {
      names: "Ryan & Aimen",
      location: "4b",
      issue: "Redux action is not working correctly.",
      id: 1,
    },
    2: {
      names: "Jasmine and Justine",
      location: "2b",
      issue: "Reducer has side effects.",
      id: 2,
    },
  };
  const ticketData = {
    names: "Ryan & Aimen",
    location: "4b",
    issue: "Redux action is not working correctly.",
    id: 1,
  };

  test("should successfully add new ticket to mainticket", () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: "ADD_TICKET",
      names: names,
      location: location,
      issue: issue,
      id: id,
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id,
      },
    });
  });
  test("Should successfully delete a ticket", () => {
    action = {
      type: "DELETE_TICKET",
      id: 1,
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: "Jasmine and Justine",
        location: "2b",
        issue: "Reducer has side effects.",
        id: 2,
      },
    });
  });
});
