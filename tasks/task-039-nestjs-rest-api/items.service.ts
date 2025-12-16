import { Injectable, NotFoundException } from "@nestjs/common";
import { Item } from "./items.entity";

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    const item = this.items.find((entry) => entry.id === id);

    if (!item) {
      throw new NotFoundException(`Item ${id} not found`);
    }

    return item;
  }

  create(item: Omit<Item, "id"> & Partial<Pick<Item, "id">>): Item {
    const newItem: Item = {
      id: item.id ?? this.nextId(),
      name: item.name,
      description: item.description,
    };

    this.items.push(newItem);
    return newItem;
  }

  update(id: number, updatedItem: Partial<Item>): Item {
    const index = this.items.findIndex((entry) => entry.id === id);

    if (index === -1) {
      throw new NotFoundException(`Item ${id} not found`);
    }

    const merged: Item = { ...this.items[index], ...updatedItem, id };
    this.items[index] = merged;
    return merged;
  }

  remove(id: number): void {
    const index = this.items.findIndex((entry) => entry.id === id);

    if (index === -1) {
      throw new NotFoundException(`Item ${id} not found`);
    }

    this.items.splice(index, 1);
  }

  private nextId(): number {
    if (this.items.length === 0) {
      return 1;
    }

    const maxId = Math.max(...this.items.map((item) => item.id));
    return maxId + 1;
  }
}
