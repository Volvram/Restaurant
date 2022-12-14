import { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    componentDidMount(){
        // Метод, вызываемый после рендеринга DOM
        console.log('Main component mounted');
    }

    componentDidUpdate(){
        // Метод, вызываемый после обновления компонента
        console.log('Main component updated');
    }

    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    }

    render() {
        return (
            <div>
                <Header />
                <Menu dishes = {this.state.dishes}
                    onClick = {(dishId) => this.onDishSelect(dishId)}/>
                <DishDetail 
                    dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
                <Footer />
            </div>
        );
    }
};

export default Main;