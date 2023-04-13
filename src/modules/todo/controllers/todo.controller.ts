import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from '../entities/todo.entity';

@Controller('rest/todo')
export class TodoController {
  @Get()
  getAllAction(): string {
    return 'Get All!';
  }

  @Post()
  createAction(@Body() todo: Todo): Todo {
    delete todo.id;
    console.log(todo);
    return todo;
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): string {
    return 'Delete! id:' + id;
  }

  @Put()
  updateAction(@Body() todo: Todo): Todo {
    console.log('Search by ID', todo.id);
    console.log(todo, 'saved');
    return todo;
  }
}
