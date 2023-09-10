import { Prop, Schema as SchemaDecorator, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema, Types } from 'mongoose';

export type UserDocument = User & Document;

@SchemaDecorator({ toJSON: { virtuals: true, getters: true } })
export class User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @Prop({ type: Schema.Types.String, unique: true })
  name: string;

  @ApiProperty({ type: String })
  @Prop({ type: Schema.Types.ObjectId, ref: 'img', nullable: true, default: null })
  picture: Types.ObjectId | null;

  @ApiProperty()
  @Prop({ type: Schema.Types.String, unique: true, sparse: true, select: false })
  email: string;

  @Prop({ type: Schema.Types.String, select: false })
  hash?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
