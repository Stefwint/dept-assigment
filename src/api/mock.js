import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { cases, clients, contact, menus, countries, formResp } from './mockdata';

export default function mock(useMock) {
  if (useMock) {
    // This sets the mock adapter on the default instance
    const mock = new MockAdapter(axios);

    mock
      // Mock GET requests
      .onGet('cases/')
      .reply(200, cases)

      .onGet('clients/')
      .reply(200, clients)

      .onGet('contact/')
      .reply(200, contact)

      .onGet('menus/')
      .reply(200, menus)

      .onGet('countries/')
      .reply(200, countries)

      // Mock POST requests
      .onPost('form/')
      .reply(200, formResp)

      // Let unmatched requests through
      .onAny()
      .passThrough();
  }
}
