import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export const getTodos = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
};

export const createTodo = async (todo: string) => {
  const newTodo = await prisma.todo.create({
    data: {
      title: todo,
      completed: false,
    },
  });

  return newTodo;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const todos = await getTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    try {
      const newTodo = await createTodo(req.body.title);
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default handler;
