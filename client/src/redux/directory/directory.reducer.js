const INITIAL_STATE = {
  sections: [
    {
      title: "kitchen",
      imageUrl:
        "https://images.unsplash.com/photo-1556594472-e9b933db923c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",

      id: 1,
      linkUrl: "shop/kitchen"
    },
    {
      title: "appliances",
      imageUrl:
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
      linkUrl: "shop/appliances",
      id: 2
    },
    {
      title: "furniture",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      linkUrl: "shop/furniture",
      id: 3
    },
    {
      title: "lights",
      imageUrl:
        "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
      size: "large",
      linkUrl: "shop/lights",
      id: 4
    },

    {
      title: "beds",
      imageUrl:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      linkUrl: "shop/beds",
      size: "large",
      id: 5
    }
  ]
};
const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
