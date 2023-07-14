import {makeApiCall} from '../makeAPICalls';

export const getAll = (reqPayload = {}, reqOpts) => {
  return makeApiCall(`/api/patient/all`, {
    body: reqPayload,
    ...reqOpts,
  });
};

export const getOne = (reqPayload = {}, reqOpts) => {
 
  return makeApiCall(`/api/patient/getOne/${reqOpts.id}`, {
    body: reqPayload,
    ...reqOpts,
  })
};

export const add = (reqPayload = {}, reqOpts) => {
  console.log("====REQ==",reqPayload)
  return makeApiCall(`/api/patient/add`, {
    method: 'POST',
    body: reqPayload,
    ...reqOpts,
  })
};

export const update = (reqPayload = {}, reqOpts) => {
  return makeApiCall(`/api/school/update/${reqOpts.id}`, {
    method: 'PUT',
    body: reqPayload,
    ...reqOpts,
  })
};

export const deleteOne = (reqPayload = {}, reqOpts) => {
  return makeApiCall(`/api/school/delete/${reqOpts.id}`, {
    method: 'PUT',
    body: reqPayload,
    ...reqOpts,
  })
};
