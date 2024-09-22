import dotenv from "dotenv";

dotenv.config();

export default {
  RABBITMQ_URL: `${process.env.RABBITMQ_PROTOCOL}://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`,
  UBER_QUEUE: "uber_queue",
  WHATSAPP_QUEUE: "whatsapp_queue",
  UBER_API: process.env.UBER_API,
};