/* eslint-disable prettier/prettier */
export class CreateDto {
  name: string;
  description: string;
  isCompleted?: boolean;
}

export class UpdateDto {
  name: string;
  description: string;
  isCompleted?: boolean;
}
