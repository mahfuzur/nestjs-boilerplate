import { SubscribeMessage, WebSocketGateway, WsResponse } from '@nestjs/websockets';
import { Client, Server } from 'socket.io';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@WebSocketGateway()
export class EventsGateway {
  @SubscribeMessage('events')
  findAll(client: Client, data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity(client: Client, data: number): Promise<number> {
    return data;
  }
}
