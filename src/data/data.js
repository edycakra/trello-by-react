const data = {
    cards: {
      "card01": { 
        id: "card01", 
        number: 1, 
        description: "Learn React", 
        tags: ["react"] 
      },
      "card02": { 
        id: "card02", 
        number: 2, 
        description: "Learn Components", 
        tags: ["react"] 
      },
      "card03": { 
        id: "card03", 
        number: 3, 
        description: "Drag & Drop", 
        tags: ["react"]
      },
      "card04": { 
        id: "card04", 
        number: 4,
        description: "Learn Vue", 
        tags: ["vue"] 
      },
      "card05": { 
        id: "card05", 
        number: 5, 
        description: "Create Trello", 
        tags: ["trello"] 
      },
      "card06": { 
        id: "card06", 
        number: 6, 
        description: "Client Side Trello", 
        tags: ["trello", "react"] 
      }
    },
    lists: {
      "list1": { 
        id: "list1",
        title: "BACKLOG",
        cardIds: ["card01", "card02", "card03"]
      },
      "list2": {
        id: "list2",
        title: "WORK IN PROGRESS",
        cardIds: ["card04", "card05"]
      },
      "list3": {
        id: "list3",
        title: "DONE",
        cardIds: ["card06"]
      }
    },
    listOrder: ["list1", "list2", "list3"]
  };
  
  export default data;
  