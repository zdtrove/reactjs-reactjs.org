function FunctionWelcome (props) {
    return <h1>Hello, {props.name}</h1>;
}

function FunctionManyWelcome (props) {
    return (
        <div>
          <FunctionWelcome name="Sara" />
          <FunctionWelcome name="Cahal" />
          <FunctionWelcome name="Edite" />
        </div>
      );
}

ReactDOM.render(
    <FunctionManyWelcome />, 
    document.getElementById('root-function')
);

class ClassWelcome extends React.Component {
    render () {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

class ClassManyWelcome extends React.Component {
    render () {
        return (
            <div>
                <ClassWelcome name="x" />
                <ClassWelcome name="y" />
                <ClassWelcome name="z" />
            </div>
        );
    }
}

ReactDOM.render(
    <ClassManyWelcome />, 
    document.getElementById('root-class')
);