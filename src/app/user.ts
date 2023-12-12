export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  profile_picture: Blob | null | any;
  role: string;
  // constructor(id: number, email: string, password: string) {
  //   this.id = id;
  //   this.email = email;
  //   this.password = password;
  // }
}

export interface login {
  userEmail: string;
  password: string;
}

export interface course {
  title: string;
  picture: string | any;
  archive: boolean;
  updatedAt: string;
  createdAt: string;
  description: string;
  livelink: string;
}

export interface editUser {
  email: string;
  name: string;
  img: Blob;
}

export interface userCourse {
  username: string;
  useremail: string;
  courseslist: clist[];
}

export interface clist {
  coursename: string;
  coursetrainer: string;
  coursecreatedate: string;
}
