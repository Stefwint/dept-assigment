import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { cases, clients, contact, menus } from './mockdata';

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

      // Let unmatched requests through
      .onAny()
      .passThrough();
  }
}
