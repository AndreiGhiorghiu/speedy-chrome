const events = new Map();

function emit(event, data) {
  const handlers = events.get(event);

  if (handlers) {
    setTimeout(() => {
      for (const handler of handlers) {
        try {
          handler(data);
        } catch (error) {
          emit('ERROR', error);
        }
      }
    }, 0);
  }
}

function on(event, handler) {
  let handlers = events.get(event);

  if (!handlers) {
    handlers = new Set();
    events.set(event, handlers);
  }

  handlers.add(handler);

  return () => off(event, handler);
}

function off(event, handler) {
  if (handler) {
    events.get(event)?.delete(handler);
  } else {
    events.set(event, new Set());
  }
}

export { emit, on, off };
