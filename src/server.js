// import { createServer, Model, hasMany, hasOne } from "miragejs";

// createServer({
//   models: {
//     staffs: Model.extend({
//       departments: hasMany(),
//     }),
//     department: Model.extend({
//       staffs: hasMany(),
//     }),
//   },
//   seeds(server) {
//     const name1 = server.create("department", { nameDepartment: "HR" });
//     const name2 = server.create("department", { nameDepartment: "IT" });
//     const name3 = server.create("department", { nameDepartment: "Marketing" });
//     const name4 = server.create("department", { nameDepartment: "Sales" });
//     const name5 = server.create("department", { nameDepartment: "Legal" });
//     const name6 = server.create("department", { nameDepartment: "Audit" });

//     server.create("staffs", {
//       name: "Edward",
//       age: 20,
//       departments: [name1],
//     });

//     server.create("staffs", {
//       name: "Edward-1",
//       age: 20,
//       departments: [name2],
//     });

//     server.create("staffs", {
//       name: "Edward-2",
//       age: 20,
//       departments: [name3],
//     });

//     server.create("staffs", {
//       name: "Edward-3",
//       age: 20,
//       departments: [name4],
//     });

//     server.create("staffs", {
//       name: "Edward-4",
//       age: 20,
//       departments: [name5],
//     });
//     server.create("staffs", {
//       name: "Edward-5",
//       age: 20,
//       departments: [name6],
//     });
//     server.create("staffs", {
//       name: "Edward-6",
//       age: 20,
//       departments: [name1],
//     });

//     server.create("staffs", {
//       name: "Edward-7",
//       age: 20,
//       departments: [name2],
//     });

//     server.create("staffs", {
//       name: "Edward-8",
//       age: 20,
//       departments: [name2],
//     });

//     server.create("staffs", {
//       name: "Edward-9",
//       age: 20,
//       departments: [name2],
//     });

//     server.create("staffs", {
//       name: "Edward-10",
//       age: 20,
//       departments: [name2],
//     });
//   },
//   routes() {
//     this.namespace = "api";

//     this.post("/staffs", (schema, request) => {
//       let attrs = JSON.parse(request.requestBody);
//       return schema.staffs.create(attrs);
//     });

//     this.patch("/staffs/:id", (schema, request) => {
//       let newAttrs = JSON.parse(request.requestBody);
//       let id = request.params.id;
//       let staff = schema.staffs.find(id);
//       return staff.update(newAttrs);
//     });

//     this.get("/staffs");
//     this.get("/staffs/:id");
//     this.del("/staffs/:id");

//     this.get("staffs/:id/departments", (schema, request) => {
//       let staff = schema.staffs.find(request.params.id);
//       return staff.departments;
//     });
//   },
// });

import { createServer, Model, hasMany, belongsTo } from "miragejs";

createServer({
  models: {
    movie: Model.extend({
      actors: hasMany(),
    }),
    actor: Model.extend({
      movie: belongsTo(),
    }),
  },
  seeds(server) {
    const matt = server.create("actor", { name: "Matthew McConaughey" });
    const anne = server.create("actor", { name: "Anne Hathaway" });
    const leo = server.create("actor", { name: "Leonardo Dicarpio" });
    const tom = server.create("actor", { name: "Tom Hardy" });
    const cillian = server.create("actor", { name: "Cillian Muphry" });

    server.create("movie", {
      name: "Inception",
      year: 2010,
      actors: [leo, tom],
    });
    server.create("movie", {
      name: "Interstellar",
      year: 2014,
      actors: [matt, anne],
    });
    server.create("movie", {
      name: "Dunkirk",
      year: 2017,
      actors: [cillian, tom],
    });
  },
  routes() {
    this.namespace = "api";

    this.post("/movies", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.movies.create(attrs);
    });

    this.patch("/movies/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let movie = schema.movies.find(id);

      return movie.update(newAttrs);
    });

    this.get("/movies");
    this.get("/movies/:id");
    this.del("/movies/:id");

    this.get("/movies/:id/actors", (schema, request) => {
      let movie = schema.movies.find(request.params.id);

      return movie.actors;
    });
  },
});
