import { users, contacts, type User, type InsertUser, type Contact, type InsertContact } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  insertContact(contact: InsertContact & { createdAt: string }): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  currentUserId: number;
  currentContactId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async insertContact(contactData: InsertContact & { createdAt: string }): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { ...contactData, id };
    this.contacts.set(id, contact);
    console.log("Contact saved:", contact);
    return contact;
  }
}

export const storage = new MemStorage();
