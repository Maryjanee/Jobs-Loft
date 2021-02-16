import {shallow} from 'enzyme';
import Header from '../components/Header';

const getShallowHeaderComponent = (props={}) =>{
    const component = shallow(<Header {...props}/>);
    return component
}

describe('Header Component', ()=>{
    let component;
    beforeEach(()=>{
        component = getShallowHeaderComponent();
    })
    it ('should render without errors', ()=>{
        const wrapper = component.find('nav');
        expect(wrapper.length).toBe(1);
    })

    it('should return a level 1 heading as Logo', ()=>{
        const component = shallow(<Header/>);
        const logo = component.find('h1');
        expect(logo.length).toBe(1);
} )
})