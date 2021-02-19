import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import rootReducer from '../reducers';
import '@testing-library/jest-dom';
import App from './App';

afterEach(cleanup);

const renderWithRedux = (component,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
  } = {}) => ({
  ...render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        {component}
      </MemoryRouter>
    </Provider>,
  ),
});

describe('App Component', () => {
  it('renders with redux and displays h1 text', () => {
    const { getByText } = renderWithRedux(<App />);
    expect(getByText('Jobs Loft')).toBeInTheDocument();
  });
});
