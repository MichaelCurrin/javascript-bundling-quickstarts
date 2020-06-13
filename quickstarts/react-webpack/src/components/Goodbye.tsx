import * as React from "react";

export interface GoodbyeProps { compiler: string; framework: string; }

// Class component

// 'GoodbyeProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Goodbye extends React.Component<GoodbyeProps, {}> {
    render() {
        return <h2>Goodbye from {this.props.compiler} and {this.props.framework}!</h2>;
    }
}