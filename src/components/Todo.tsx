import React from 'react'

interface ITodoProps {
    name: string;
}
interface ITodoState {
    isFinished: boolean;
}
export class Todo extends React.Component <ITodoProps> {
    constructor(props: ITodoProps) {
        super(props);
        this.state = {
            isFinished: false,
        }
    }
    render() {
        return (
<div>{this.props.name}</div>
        )
    }
}
