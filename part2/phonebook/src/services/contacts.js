// This file stores all the functions that interact with the server json-server

import axios from "axios";

const BASE_URL = "http://localhost:3001/contacts";
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
  "https://shed-xbox-prince-dose.trycloudflare.com/contacts";

// HTTP GET methode
export const getAllContacts = () => {
  return axios.get(BASE_URL).then((res) => res.data);
};

// HTTP POST methode
export const addContact = (contact) => {
  return axios.post(BASE_URL, contact).then((res) => res.data);
};

// HTTP PUT methode
export const updateContact = (contact, id) => {
  return axios.put(`${BASE_URL}/${id}`, contact).then((res) => res.data);
};

// HTTP DELETE methode
export const deleteContact = (id) => {
  return axios.delete(`${BASE_URL}/${id}`).then((res) => res.data);
};
