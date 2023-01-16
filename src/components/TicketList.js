import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props) {
  return (
    <React.Fragment>
        {props.ticketList.map((ticket, index) => 
        <Ticket names={ticket.names}
        location={index}
        issue={ticket.issue}
        key={index} />
        )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
}
export default TicketList;
