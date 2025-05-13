// TODO: 백엔드에서 매핑한 emoji 데이터로 대체 - 우선 가상 데이터로 대체

export const emojiList = Array.from({ length: 10 }, (_, i) => `/emojis/emoji${i + 1}.png`);
