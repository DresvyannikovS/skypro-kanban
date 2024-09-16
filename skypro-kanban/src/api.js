import { getUserToken } from "./storage";

export async function GetTasks() {
  const token = getUserToken();

  return await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: { Authorization: `Bearer ${token}` },
  }).then(async (response) => {
    const responseToJson = await response.json();

    if (response.status === 200) {
      return responseToJson;
    } else {
      throw new error("server's error");
    }
  });
}

export async function GetTaskByID(id) {
  const token = getUserToken();

  return await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(async (response) => {
    const responseToJson = await response.json();

    if (response.status === 200) {
      return responseToJson;
    } else {
      throw new error("server's error");
    }
  });
}

export async function addTask(body) {
  const token = getUserToken();

  return await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: { Authorization: `Bearer ${token}` },
    method: "POST",
    body: JSON.stringify(body),
  }).then(async (response) => {
    const responseToJson = await response.json();
    if (response.status === 201) {
      return responseToJson;
    } else {
      alert(error.message);
      throw new error("server's error");
    }
  });
}

export async function editTask(body) {
  const token = getUserToken();

  return await fetch(`https://wedev-api.sky.pro/api/kanban/${body._id}`, {
    headers: { Authorization: `Bearer ${token}` },
    method: "PUT",
    body: JSON.stringify(body),
  }).then(async (response) => {
    const responseToJson = await response.json();
    if (response.status === 201) {
      return responseToJson;
    } else {
      alert(error.message);
      throw new error("server's error");
    }
  });
}

export async function deleteTask(id) {
  const token = getUserToken();

  return await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
    method: "DELETE",
  }).then(async (response) => {
    const responseToJson = await response.json();
    if (response.status === 201) {
      return responseToJson;
    } else {
      alert(error.message);
      throw new error("server's error");
    }
  });
}

export async function loginAPI(body) {
  return await fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify(body),
  }).then(async (response) => {
    const responseToJson = await response.json();
    if (response.status === 201) {
      return responseToJson;
    } else {
      alert(error.message);
      throw new error("server's error");
    }
  });
}

export async function regAPI(body) {
  return await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify(body),
  }).then(async (response) => {
    const responseToJson = await response.json();
    if (response.status === 201) {
      return responseToJson;
    } else {
      throw new error("server's error");
    }
  });
}
