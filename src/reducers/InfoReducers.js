import { v4 as uuidv4 } from "uuid";

export const InfoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INFO":
      return [
        ...state,
        {
          name: action.info.name,
          layout: action.info.layout,
          capacity: action.info.capacity,
          status: action.info.status,
          image: action.info.image,

          id: uuidv4(),
        },
      ];
    case "REMOVE_INFO":
      return state.filter((result) => result.id !== action.id);

    case "EDIT_USER":
      const updateUser = action.payload;

      const updateUsers = state.map((user) => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      });
      return {
        ...state,
        users: updateUsers,
      };

    default:
      return state;
  }
};
