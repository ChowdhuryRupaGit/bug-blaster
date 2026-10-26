import "./App.css";
import "./styles.css";
import {useReducer} from "react";
import ticketReducer from "./reducers/ticketReducer";

import TicketFrom from "./Component/TicketFrom";
import TicketList from "./Component/TicketList";

function App() {
  const initialState = { tickets: [], editingTicket: null };
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
       <h1>Bug Blaster</h1>
       <TicketFrom dispatch={dispatch}  editingTicket={state.editingTicket} />
            {state.tickets.length > 0 && (
              <div className="results">
              <h2>All tickets:</h2>
          
          <TicketList tickets={state.tickets} dispatch={dispatch} />
          </div>
          ) }
      </div>
    </div>
  );
}

export default App;
