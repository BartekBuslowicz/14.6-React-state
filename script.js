var Counter = React.createClass({
 getDefaultProps: function() {
        console.log('getDefaultProps - Ustawianie domyślnych propsów');
    },
    getInitialState: function() {
        console.log('getInitialState - Ustawianie domyślnych stanów');
        return {
            counter: 0,
            counter2: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function(){
        this.setState({
            counter: this.state.counter - 1
        });
    },


    increment2: function() {
        this.setState({
            counter2: this.state.counter2 + 1
        });
    },
    decrement2: function(){
        this.setState({
            counter2: this.state.counter2 - 1
        });
    },
      componentWillMount: function() {
        console.log('componentWillMount - komponent jest gotowy do renderowania');
    },
    render: function() {
        return React.createElement('div', {},
            React.createElement('h1', {}, 'LICZNIK 1'),
            React.createElement('button', {onClick: this.increment}, '++ '),
            React.createElement('button', {onClick: this.decrement}, '- - '),
            React.createElement('h1', {}, this.state.counter),
            React.createElement('h1', {}, 'LICZNIK 2'),
            React.createElement('button', {onClick: this.increment2}, '++ '),
            React.createElement('button', {onClick: this.decrement2}, '- - '),
            React.createElement('h1', {}, this.state.counter2)
        );
    },
     componentDidMount: function() {
        console.log('componentDidMount - komponent został wyrenderowany');
    },
    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps - wywołanie po zmianie propsów');
    },

    shouldComponentUpdate: function() {
        console.log('shouldComponentUpdate - sprawdzanie potrzeby ponownego renderowania');
        return true;
    },

    componentWillUpdate: function() {
        console.log('componentWillUpdate - przygotowanie do ponownego renderowania (shouldComponentUpdate musi zwrócić true). Po tej funkcji następuje ponowny rendering');
    },

    componentDidUpdate : function() {
        console.log('componentDidUpdate - komponent został ponownie wyrenderowany');
    },

    componentWillUnmount: function() {
        console.log('componentWillUnmount - wywołujemy PRZED usunięciem komponentu z DOM. Można pousuwać zbędne rzeczy');
    }
});



var element = React.createElement(Counter, );
ReactDOM.render(element, document.getElementById('app'));
