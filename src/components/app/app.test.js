import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router';
import {Provider} from 'react-redux';
import initialState from '../../store/initial-state';
import MainPage from '../main-page/main-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Offer from '../offer/offer.jsx';
import Favorites from '../favorites/favorites.jsx';
import App from './app';

configure({adapter: new Adapter()});

describe(`App works correctly`, () => {
  const store = {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => initialState,
  };

  it(`"/" path should render Main page`, () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[`/`]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>
    );
    expect(wrapper.find(MainPage)).toHaveLength(1);
    expect(wrapper.find(SignIn)).toHaveLength(0);
    expect(wrapper.find(Offer)).toHaveLength(0);
    expect(wrapper.find(Favorites)).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });

  it(`"/login" path should render SignIn`, () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[`/login`]}>
          <Provider store={store}>
            <SignIn />
          </Provider>
        </MemoryRouter>
    );
    expect(wrapper.find(MainPage)).toHaveLength(0);
    expect(wrapper.find(SignIn)).toHaveLength(1);
    expect(wrapper.find(Offer)).toHaveLength(0);
    expect(wrapper.find(Favorites)).toHaveLength(0);
  });

  it(`"/Offer/id" path should render Offer`, () => {
    const match = {
      params: {
        id: `1`
      },
    };

    const wrapper = mount(
        <MemoryRouter initialEntries={[`/offer/1`]}>
          <Provider store={store}>
            <Offer match={match} />
          </Provider>
        </MemoryRouter>
    );
    expect(wrapper.find(MainPage)).toHaveLength(0);
    expect(wrapper.find(SignIn)).toHaveLength(0);
    expect(wrapper.find(Offer)).toHaveLength(1);
    expect(wrapper.find(Favorites)).toHaveLength(0);
  });

  it(`"favorites" path should render favorites`, () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[`/favorites`]}>
          <Provider store={store}>
            <Favorites />
          </Provider>
        </MemoryRouter>
    );
    expect(wrapper.find(MainPage)).toHaveLength(0);
    expect(wrapper.find(SignIn)).toHaveLength(0);
    expect(wrapper.find(Offer)).toHaveLength(0);
    expect(wrapper.find(Favorites)).toHaveLength(1);
  });
});
