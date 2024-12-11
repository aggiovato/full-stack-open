// This file stores all the functions that interact with the server json-server

import axios from "axios";

const BASE_URL = "/api/persons";
// Temporary deployed server on Cloudflare for testing purposes
/**
 * To use this service you need to install (on windows):
 *
 * winget install -e --id Cloudflare.cloudflared
 *
 * and then run:
 *
 * cloudflared tunnel --url <YOUR_SERVER_URL>
 *
 */
const BASE_URL_CLOUDFLARED =
  "https://protocols-alexandria-operational-holes.trycloudflare.com/contacts";

/************************************************************************ */

// HTTP GET methode: /api/persons
export const getAllContacts = () => {
  return axios.get(BASE_URL).then((res) => res.data);
};

// HTTP POST methode: /api/persons
export const addContact = (contact) => {
  return axios.post(BASE_URL, contact).then((res) => res.data);
};

// HTTP PUT methode: /api/persons/:id
export const updateContact = (contact, id) => {
  return axios.put(`${BASE_URL}/${id}`, contact).then((res) => res.data);
};

// HTTP DELETE methode: /api/persons/:id
export const deleteContact = (id) => {
  return axios.delete(`${BASE_URL}/${id}`).then((res) => res.data);
};
