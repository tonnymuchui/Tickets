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
      location: "2a",
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

  test("should successfully add new ticket data to mainticket", () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: "ADD_TICKET",
      names: names,
      location: location,
      issue: issue,
      id: id,
    };
    expect(ticketListReducer({}, action)).toEqual({
        [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
  }
});
  });
});
