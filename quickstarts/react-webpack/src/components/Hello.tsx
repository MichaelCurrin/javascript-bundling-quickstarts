import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// Functional component

export const Hello = (props: HelloProps) => <h2>Hello from {props.compiler} and {props.framework}!</h2>;
