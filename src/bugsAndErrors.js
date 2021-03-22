function reliableMultiply(a, b) {
    for (;;) {
      try {
        return primitiveMultiply(a, b);
      } catch (error) {
        if (!(error instanceof MultiplicatorUnitFailure))
          throw error;
      }
    }
  }

  const box = {
    locked: true,
    unlock() {
      this.locked = false;
    },
    lock() {
      this.locked = true;
    },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    var boxLocked = box.locked;
    if (!boxLocked) {
      return body();
    }
  
    box.unlock();
    try {
      return body();
    } finally {
      box.lock();
    }
  }
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised:", e);
  }
  
  console.log(box.locked);

  