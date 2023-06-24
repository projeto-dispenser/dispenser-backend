export type ApplicationError = {
  name: string;
  message: string;
};

export type InformationUser = {
  email: string;
  password: string;
};

export type UserId = number;

export type InformationDash = {
  userId: number;
  schedule1: string;
  schedule2: string;
  schedule3: string;
  schedule4: string;
};

export type InformationArd = {
  temperatura: number;
}
