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
      if (this.success) {
        return Promise.resolve(undoList);
      } else {
        return Promise.reject(new Error("404"));
      }
    }
    return Promise.reject(new Error("404"));
  },
};
