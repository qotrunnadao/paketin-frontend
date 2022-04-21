import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import reportWebVitals from "./reportWebVitals";
// import page
import AdminPage from "./pages/admin/AdminPage";
// import redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import thunk from "redux-thunk";

// create store redux
const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AdminPage></AdminPage>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
