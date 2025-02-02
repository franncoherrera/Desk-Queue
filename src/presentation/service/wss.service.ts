import { Server } from "http";
import { WebSocket, WebSocketServer } from "ws";

interface Options {
  server: Server;
  path?: string;
}

export class WssService {
  public static instance: WssService;
  private wss: WebSocketServer;

  private constructor(options: Options) {
    const { server, path = "/ws" } = options;
    this.wss = new WebSocketServer({ server, path });
    this.start();
  }

  static initWss(options: Options) {
    if (!WssService.instance) {
      WssService.instance = new WssService(options);
    }
  }

  static getInstance() {
    if (!WssService.instance) {
      throw new Error("WssService not initialized. Call initWss() first.");
    }
    return WssService.instance;
  }

  public sendMessage(type: string, payload: Object) {
    this.wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type, payload }));
      }
    });
  }

  public start() {
    this.wss.on("connection", (ws: WebSocket) => {
      console.log("Client connected");

      ws.on("close", () => {
        console.log("Client disconnected");
      });
    });
  }
}
