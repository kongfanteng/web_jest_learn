const undoList = {
  success: true,
  data: [
    {
      status: "div",
      value: "吃饭",
    },
    {
      status: "div",
      value: "睡觉",
    },
    {
      status: "div",
      value: "打豆豆",
    },
  ],
};
export default {
  get(url) {
    if (url === "/getUndoList.json") {
      return Promise.resolve(undoList);
    }
    return Promise.reject(new Error("404"));
  },
};
