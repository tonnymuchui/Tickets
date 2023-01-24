import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props) {
  return (
    <React.Fragment>
        {props.ticketList.map((ticket) => 
        <Ticket
        whenTicketClicked = {props.onTicketSelected}
        names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id}/>
        )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
}
export default TicketList;
