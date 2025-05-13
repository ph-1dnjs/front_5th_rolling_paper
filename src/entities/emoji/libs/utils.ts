export function insertEmojiToSelection(src: string) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const img = document.createElement('img');
  img.src = src;
  img.style.display = 'inline-block';
  img.style.width = '1em';
  img.style.verticalAlign = 'middle';

  // 커서 위치에 삽입
  range.insertNode(img);

  // 커서 바로 뒤로 이동
  range.setStartAfter(img);
  selection.removeAllRanges();
  selection.addRange(range);
}
