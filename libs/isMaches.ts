import { Message } from "discord.js";

export default function isMaches(msg: Message<boolean>, pattern: RegExp) {
  return msg.content.match(pattern);
}
