export function wssocket() {
  const ws = new WebSocket('ws://127.0.0.1:10111/')
  return ws
}
