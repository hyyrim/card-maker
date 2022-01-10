import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ authService }) {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Login authService={authService} />
					</Route>
					<Route exact path="/maker">
						<Maker authService={authService} />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
