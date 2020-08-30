import * as React from "react";
import { useState } from "react";
import { Container, Header, Menu, Item, List } from 'semantic-ui-react';
import { App } from "./app";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";


let Home = () => <div>Home</div>
let Users = () => <div>Users</div>
let About = () => <div>About</div>

const nav = [
	{ name: "people", path: "/people", title: "People Admin" }
]


export const Main = () => {
	return <Router>
		<div>
			<Menu>
				{nav.map(({ name, path, title }) => {
					return <Menu.Item
						name={name}
					>
						<Link to={path}>{title}</Link>
					</Menu.Item>
				})}
			</Menu>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/users">
					<Users />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div></Router>
}
