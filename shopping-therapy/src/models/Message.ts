export interface ISendMessageDto {
  receiverUserName: string;
  subject: string;
  details: string;
}

export interface IMessageDto extends ISendMessageDto {
  id: number;
  senderUserName: string;
  createdAt: string;
}
