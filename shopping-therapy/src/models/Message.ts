export interface ISendMessageDto {
  receiver: string;
  subject: string;
  details: string;
}

export interface IMessageDto extends ISendMessageDto {
  messageId: number;
  sender: string;
  createdAt: string;
}
