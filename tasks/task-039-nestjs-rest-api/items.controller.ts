import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { Item } from "./items.entity";
import { ItemsService } from "./items.service";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Item {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() item: Item): Item {
    return this.itemsService.create(item);
  }

  @Put(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updatedItem: Partial<Item>,
  ): Item {
    return this.itemsService.update(id, updatedItem);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number): void {
    return this.itemsService.remove(id);
  }
}
